import fs from "fs";
import { addEdit, addReply, updatePost, uploadMedia } from "./indiekit";
import { getDiff, getIssueTimeline, getRepository, isCommentedIssueEvent, search, type CommentedIssueEvent } from "./github_utils";
import markdownIt from "markdown-it";
import type { Post, Reply } from "~/types";

const CACHE_DIR = "./syndications/cache";

const REPOS = [
    "profectus-engine/Profectus"
];

const md = markdownIt();

async function run() {
    // await updateIssues();
    await updateCommits();
}
run();

async function mapCommentToReply(event: CommentedIssueEvent) {
    return {
        body: event.body,
        author: {
            name: event.user.login,
            url: event.user.html_url,
            image: await uploadMedia(event.user.avatar_url)
        },
        published: new Date(event.created_at).getTime(),
        syndication: event.html_url
    } satisfies Reply;
}

async function updateIssues() {
    const lastIssueUpdatePath = CACHE_DIR + "/last_issue.txt";
    let lastIssueUpdate;
    if (fs.existsSync(lastIssueUpdatePath)) {
        lastIssueUpdate = new Date(fs.readFileSync(lastIssueUpdatePath).toString());
    }

    const issueMappingPath = CACHE_DIR + "/issue_mapping.json";
    let issueMap: Record<string, string> = {};
    if (fs.existsSync(issueMappingPath)) {
        issueMap =
            JSON.parse(fs.readFileSync(issueMappingPath).toString()) as Record<string, string>;
    }

    let newestIssueUpdate;
    for await (let issue of search("issues", "involves:thepaperpilot sort:updated")) {
        if (lastIssueUpdate != null &&
            new Date(issue.updated_at).getTime() <= lastIssueUpdate.getTime()) {
            break;
        }
        newestIssueUpdate ??= issue.updated_at;

        const timeline = await getIssueTimeline(issue.timeline_url);
        const repository = await getRepository(issue.repository_url);

        let replyTo: string;
        let published: Date | undefined;
        let originalUrl: string | undefined;
        let content: string;
        let parent: Partial<Post> = {
            url: repository.html_url,
            description: `Issues · ${repository.full_name}`,
            author: {
                name: repository.owner.login,
                url: repository.owner.html_url,
                image: await uploadMedia(repository.owner.avatar_url)
            }
        };
        let replies: Reply[];
        if (issue.user.login === "thepaperpilot") {
            // Our own issue, which is a reply to the issues page
            replyTo = parent.url!;
            published = new Date(issue.created_at);
            originalUrl = issue.html_url;
            content = md.render(issue.body);
            replies = await Promise.all(
                timeline.filter(event => isCommentedIssueEvent(event)).map(mapCommentToReply));
        } else {
            // Not our issue, so we're replying to the issue page itself
            replyTo = issue.html_url;
            const comments = timeline.filter(event => isCommentedIssueEvent(event));
            const firstComment = comments.find(event => event.user.login === "thepaperpilot");
            if (firstComment == null) {
                console.warn("Couldn't find comment on issue", issue);
                continue;
            }
            const firstCommentIndex = comments.indexOf(firstComment);
            published = new Date(firstComment.created_at);
            originalUrl = firstComment.url;
            content = md.render(firstComment.body);
            replies = await Promise.all(
                comments.slice(firstCommentIndex + 1).map(mapCommentToReply));
            parent = await comments.slice(0, firstCommentIndex).reduce<Promise<Partial<Post>>>(
                async (acc, curr) => ({
                    url: curr.html_url,
                    kind: "reply",
                    description: curr.body,
                    published: new Date(curr.created_at).getTime(),
                    author: {
                        name: curr.user.login,
                        url: curr.user.html_url,
                        image: await uploadMedia(curr.user.avatar_url)
                    },
                    parent: await acc
                }), Promise.resolve(parent));
        }
        if (issue.html_url in issueMap) {
            await updatePost(issueMap[issue.html_url], {
                content: [content],
                parent: [parent],
                replies
            });
        } else {
            await addReply({
                "in-reply-to": replyTo,
                category: "programming",
                published,
                originalUrl,
                content,
                parent,
                replies,
                name: issue.title
            });
        }
        break;
    }

    if (newestIssueUpdate) {
        // fs.writeFileSync(lastIssueUpdatePath, newestIssueUpdate);
    }
}

async function updateCommits() {
    await Promise.all(REPOS.map(async repo => {
        const lastCommitPath = CACHE_DIR + "/" + repo + "_last_commit.txt";
        let lastCommitSha;
        if (fs.existsSync(lastCommitPath)) {
            lastCommitSha = fs.readFileSync(lastCommitPath).toString();
        }

        let newestCommitSha;
        for await (let commit of
            search("commits", `author:thepaperpilot repo:${repo} sort:committer-date`)) {

            if (commit.sha === lastCommitSha) {
                break;
            }
            newestCommitSha ??= commit.sha;
            const diff = await
                getDiff(commit.repository.owner.login, commit.repository.name, commit.sha);
            await addEdit({
                "edit-of": commit.repository.html_url,
                originalUrl: commit.html_url,
                published: new Date(commit.commit.committer.date),
                title: "Committed changes to " + commit.repository.name,
                content: commit.commit.message + "\n```git-commit\n" +
                    (diff.match(/^---\n(.*)\n\n/ms)?.[1] as string) + "\n```",
                patch: diff,
                category: "programming",
                sha: commit.sha
            });
        }

        if (newestCommitSha) {
            // fs.writeFileSync(lastCommitPath, newestCommitSha);
        }
    }));
}
