import fs from "fs";
import { parse } from "csv-parse";
import { addArticle, addBookmark, addFavorite, addReply, addRepost } from "./indiekit";
import {
    extractSubreddit,
    extractUsername,
    getAuthorObj,
    getComment,
    getPostPreview,
    getSubmission
} from "./reddit_utils";

// I don't use reddit anymore, so I just use the takeout data I exported
async function run() {
    await updateCommentVotes();
    await updateComments();
    await updateSubmissionVotes();
    await updateSubmissions();
    await updateSavedComments();
    await updateSavedSubmissions();
}
run();

async function updateCommentVotes() {
    const comment_votes = fs
        .createReadStream("./syndications/reddit-export/comment_votes.csv")
        .pipe(parse({ columns: true }));
    for await (const { id, permalink, direction } of comment_votes) {
        if (direction !== "up") {
            continue;
        }

        const comment = getComment(id);
        if (comment == null) {
            continue;
        }

        const author = extractUsername(comment.author);
        const subreddit = extractSubreddit(comment);
        console.log(JSON.stringify({
            
            "repost-of": permalink,
            content: comment.body_html,
            published: new Date(comment.created * 1000),
            category: [subreddit],
            author: getAuthorObj(author)
        }))

        await addRepost({
            "repost-of": permalink,
            content: comment.body_html,
            published: new Date(comment.created * 1000),
            category: [subreddit],
            author: getAuthorObj(author)
        });
        return;
    }
}

async function updateComments() {
    const comments = fs
        .createReadStream("./reddit-export/comments.csv")
        .pipe(parse({ columns: true }));
    for await (const { id, permalink, parent } of comments) {
        const comment = getComment(id);
        if (comment == null) {
            continue;
        }

        const subreddit = extractSubreddit(comment);
        const parentComment = parent == null ? undefined : getComment(parent);
        const submission = parent == null ?
            getSubmission(comment.link_id.replace(/t._/, '')) : undefined;
        const parentObj = (parent == null ? submission : parentComment)!;
        const author = extractUsername(parentObj.author);

        await addReply({
            "in-reply-to": parent == null ?
                (submission!.selftext_html ? submission!.permalink : submission!.url) :
                parentComment!.permalink,
            category: [subreddit],
            content: comment.body_html,
            parent: {
                kind: parent == null ? "article" : "reply",
                title: parent == null ? submission!.title : undefined,
                description: parent == null ?
                    (submission!.selftext_html ?? undefined) :
                    parentComment!.body_html,
                url: parent == null ?
                    (submission!.selftext_html ? undefined : submission!.url) : undefined,
                published: new Date(parentObj.created * 1000).getTime(),
                author: getAuthorObj(author),
                image: parent == null ? getPostPreview(submission!) : undefined,
                tags: [subreddit],
                syndications: [parentObj.permalink]
            },
            originalUrl: permalink,
            published: new Date(comment.created * 1000),
            replies: submission?.replies?.map(reply => ({
                author: getAuthorObj(reply.author),
                published: new Date(reply.created * 1000).getTime(),
                body: reply.body_html,
                syndication: reply.permalink
            }))
        });
        return;
    }
}

async function updateSubmissionVotes() {
    const comments = fs
        .createReadStream("./reddit-export/post_votes.csv")
        .pipe(parse({ columns: true }));
    for await (const { id, permalink, direction } of comments) {
        if (direction !== "up") {
            continue;
        }

        const submission = getSubmission(id);
        if (submission == null) {
            continue;
        }

        const subreddit = extractSubreddit(submission);

        if (submission.selftext_html) {
            await addRepost({
                "repost-of": permalink,
                category: [subreddit],
                content: submission.selftext_html,
                name: submission.title,
                published: new Date(submission.created * 1000),
                author: getAuthorObj(extractUsername(submission.author))
            });
        } else {
            await addBookmark({
                "bookmark-of": submission.url,
                category: [subreddit],
                published: new Date(submission.created * 1000)
            });
            return;
        }
    }
}

async function updateSubmissions() {
    const posts = fs
        .createReadStream("./syndications/reddit-export/posts.csv")
        .pipe(parse({ columns: true }));
    for await (const { id, permalink, date, subreddit, title, url, body } of posts) {
        if (title === "[deleted by user]") {
            continue;
        }

        if (body) {
            const submission = getSubmission(id);
            if (submission == null) {
                continue;
            }

            await addArticle({
                name: title,
                category: [subreddit],
                content: body,
                originalUrl: permalink,
                published: new Date(date),
                replies: submission?.replies?.map(reply => ({
                    author: getAuthorObj(reply.author),
                    published: new Date(reply.created * 1000).getTime(),
                    body: reply.body_html,
                    syndication: reply.permalink
                }))
            });
        } else {
            // TODO some of these should probably be replaced with article posts from the linked url
            await addBookmark({
                "bookmark-of": url,
                category: [subreddit],
                published: new Date(date)
            });
            return;
        }
    }
}

async function updateSavedComments() {
    const posts = fs
        .createReadStream("./syndications/reddit-export/saved_comments.csv")
        .pipe(parse({ columns: true }));
    for await (const { id, permalink } of posts) {
        const comment = getComment(id);
        if (comment == null) {
            continue;
        }

        await addFavorite({
            "like-of": permalink,
            category: [extractSubreddit(comment)],
            content: comment.body_html,
            published: new Date(comment.created * 1000)
        });
        return;
    }
}

async function updateSavedSubmissions() {
    const posts = fs
        .createReadStream("./syndications/reddit-export/saved_posts.csv")
        .pipe(parse({ columns: true }));
    for await (const { id, permalink } of posts) {
        const submission = getSubmission(id);
        if (submission == null) {
            continue;
        }

        const subreddit = extractSubreddit(submission);

        if (submission.selftext_html) {
            await addFavorite({
                "like-of": permalink,
                name: submission.title,
                category: [subreddit],
                content: submission.selftext_html,
                published: new Date(submission.created * 1000)
            });
        } else {
            await addFavorite({
                "like-of": permalink,
                category: [subreddit],
                published: new Date(submission.created * 1000)
            });
            return;
        }
    }
}
