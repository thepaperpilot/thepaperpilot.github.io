import fs from "fs";
import UserAgent from "user-agents";
import snoowrap from "snoowrap";

const { clientId, clientSecret, username, password } =
    JSON.parse(fs.readFileSync("./syndications/reddit_credentials.json").toString());

// The snoowrap typings are bad/inaccurate
interface Comment {
    body_html: string;
    permalink: string;
    created: number;
    subreddit?: string | { display_name: string };
    subreddit_name_prefixed: string;
    author: string | { name: string };
    link_id: string;
    replies?: {
        created: number;
        body_html: string;
        author: string;
        permalink: string;
    }[];
    // and a bunch more we're not using
}

interface Submission {
    selftext_html: string;
    permalink: string;
    title: string;
    created: number;
    subreddit: string | { display_name: string };
    subreddit_name_prefixed: string;
    author: string | { name: string };
    url: string;
    preview?: {
        images?: {
            source?: {
                url?: string;
            }
        }[]
    };
    replies?: {
        created: number;
        body_html: string;
        author: string;
        permalink: string;
    }[];
    // and a bunch more we're not using
}

let r: snoowrap;
function setupReddit() {
    try {
        r = new snoowrap({
            userAgent: new UserAgent().toString(),
            clientId, clientSecret, username, password
        });
        return true;
    } catch (error) {
        console.error("Failed to setup reddit:", error);
        process.exit(0);
    }
}
setupReddit();

let ignoredSubreddits = new Set<string>();
const IGNORED_SUBREDDITS_PATH = "./syndications/ignored_subreddits.txt";
if (fs.existsSync(IGNORED_SUBREDDITS_PATH)) {
    ignoredSubreddits = new Set(fs.readFileSync(IGNORED_SUBREDDITS_PATH).toString().split("\n"));
}

let subredditTags: Record<string, string> = {};
const SUBREDDIT_TAGS_PATH = "./syndications/subreddit_tags.json";
if (fs.existsSync(SUBREDDIT_TAGS_PATH)) {
    subredditTags = JSON.parse(fs.readFileSync(SUBREDDIT_TAGS_PATH).toString());
}

// https://stackoverflow.com/a/52171480/4376101
const cyrb53 = (str: string, seed = 0) => {
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for(let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1  = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
    h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2  = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
    h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};

export function getAvatar(user: string) {
    const index = cyrb53(user) % 8;
    return `https://www.redditstatic.com/avatars/defaults/v2/avatar_default_${index}.png`;
}

export function extractUsername(user: Comment["author"]) {
    return typeof user === "string" ? user : user.name;
}

export function extractSubreddit(comment: Comment | Submission) {
    if (typeof comment.subreddit === "string") {
        return comment.subreddit;
    } else if (comment.subreddit != null) {
        return comment.subreddit.display_name;
    }
    return comment.subreddit_name_prefixed.slice(2);
}

// I believe we've been permanently rate-limited, so we just read comments and posts from cache
export function getComment(id: string) {
    let comment: Comment | undefined;
    const commentCachePath = `./syndications/cache/${id}.json`;
    if (fs.existsSync(commentCachePath)) {
        comment = JSON.parse(fs.readFileSync(commentCachePath).toString());
    } 
    if (comment == undefined) {
        return undefined;
    }
    if (extractUsername(comment.author) === "[deleted]") {
        return undefined;
    }
    if (Object.keys(comment).length === 0) {
        return undefined;
    }
    if (ignoredSubreddits.has(extractSubreddit(comment))) {
        return undefined;
    }
    comment.subreddit = subredditTags[(extractSubreddit(comment)).toLowerCase()];
    comment.permalink = "https://www.reddit.com" + comment.permalink;
    return comment;
}

export function getSubmission(id: string) {
    let submission: Submission | undefined;
    const submissionCachePath = `./syndications/cache/${id}.json`;
    if (fs.existsSync(submissionCachePath)) {
        submission = JSON.parse(fs.readFileSync(submissionCachePath).toString());
    } 
    if (submission == undefined) {
        return undefined;
    }
    if (extractUsername(submission.author) === "[deleted]") {
        return undefined;
    }
    if (Object.keys(submission).length === 0) {
        return undefined;
    }
    if (ignoredSubreddits.has(extractSubreddit(submission))) {
        return undefined;
    }
    submission.subreddit = subredditTags[(extractSubreddit(submission)).toLowerCase()];
    submission.permalink = "https://www.reddit.com" + submission.permalink;
    return submission;
}

export function getPostPreview(submission: Submission) {
    return submission.preview?.images?.[0]?.source?.url;
}

export function getAuthorObj(author: string) {
    return {
        name: author,
        url: `https://www.reddit.com/u/${author}`,
        image: getAvatar(author)
    };
}
