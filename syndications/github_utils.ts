import fs from "fs";

const GITHUB_API_TOKEN = fs.readFileSync("./syndications/github_token.txt").toString();

const github = require('octokat')({ token: GITHUB_API_TOKEN });

export interface User {
    login: string;                  // Username
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;                    // API URL
    html_url: string;               // Profile URL
    // The following _url properties are all also API URLs:
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: "User";
    site_admin: boolean;
}

export interface Issue {
    uel: string;
    repository_url: string;
    labels_url: string;
    comments_url: string;
    events_url: string;
    html_url: string;
    id: number;
    node_id: string;
    number: number;
    title: string;
    user: User;
    labels: [
        {
            id: number;
            node_id: string;
            url: string;
            name: string;
            color: string;
            default: boolean;
            description: string;
        }
    ],
    state: string;
    locked: boolean;
    assignee: User;
    assignees: User[];
    milestone: null;
    comments: number;
    created_at: string;
    updated_at: string;
    closed_at: string;
    author_association: string;
    active_lock_reason: null;
    body: string;
    reactions: Reactions;
    timeline_url: string;
    performed_via_github_app: null;
    state_reason: string;
}

export interface Reactions {
    url: string;
    total_count: number;
    "+1": number;
    "-1": number;
    laugh: number;
    hooray: number;
    confused: number;
    heart: number;
    rocket: number;
    eyes: number;
}

export interface Commit {
    url: string;
    sha: string;
    node_id: string;
    html_url: string;
    comments_url: string;
    commit: {
        url: string;
        author: {
            date: string;
            name: string;
            email: string;
        },
        committer: {
            date: string;
            name: string;
            email: string;
        },
        message: string;
        tree: {
            url: string;
            sha: string;
        },
        comment_count: number;
    },
    author: User;
    committer: User;
    parents: {
        url: string;
        html_url: string;
        sha: string;
    }[],
    repository: Repository;
}

export interface Repository {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: boolean;
    owner: User;
    html_url: string;
    description: null,
    fork: boolean;
    url: string;
    forks_url: string;
    keys_url: string;
    collaborators_url: string;
    teams_url: string;
    hooks_url: string;
    issue_events_url: string;
    events_url: string;
    assignees_url: string;
    branches_url: string;
    tags_url: string;
    blobs_url: string;
    git_tags_url: string;
    git_refs_url: string;
    trees_url: string;
    statuses_url: string;
    languages_url: string;
    stargazers_url: string;
    contributors_url: string;
    subscribers_url: string;
    subscription_url: string;
    commits_url: string;
    git_commits_url: string;
    comments_url: string;
    issue_comment_url: string;
    contents_url: string;
    compare_url: string;
    merges_url: string;
    archive_url: string;
    downloads_url: string;
    issues_url: string;
    pulls_url: string;
    milestones_url: string;
    notifications_url: string;
    labels_url: string;
    releases_url: string;
    deployments_url: string;
}

export interface IssueEvent {    
    id: number;
    node_id: string;
    url: string;
    actor: User;
    event: string;
    commit_id: null;
    commit_url: null;
    created_at: string;
    performed_via_github_app: null;
}

export interface LabeledIssueEvent extends IssueEvent {
    event: "labeled";
    label: {
        name: string;
        color: string;
    };
}

export interface AssignedIssueEvent extends IssueEvent {
    event: "assigned";
    assignee: User;
}

export interface CommentedIssueEvent extends IssueEvent {
    event: "commented";
    html_url: string;
    issue_url: string;
    user: User;
    updated_at: string;
    author_association: "COLLABORATOR" | "NONE";
    body: string;
    reactions: Reactions;
}

export interface MentionedIssueEvent extends IssueEvent {
    event: "mentioned";
}

export interface SubscribedIssueEvent extends IssueEvent {
    event: "subscribed";
}

export interface ClosedIssueEvent extends IssueEvent {
    event: "closed";
    state_reason: string | null;
}

// Caps at 1000 items
export function search(type: "commits", query: string): AsyncGenerator<Commit>;
export function search(type: "issues", query: string): AsyncGenerator<Issue>;
export async function* search(type: string, query: string) {
    let baseQuery = `https://api.github.com/search/${type}`;
    baseQuery += `?q=${encodeURIComponent(query)}`;
    baseQuery += "&per_page=100";
    let totalItems = Infinity;
    for (let page = 1; (page - 1) * 100 < totalItems; page++) {
        const { items, total_count } = (await fetch(`${baseQuery}&page=${page}`, {
            headers: {
                Authorization: `Bearer ${GITHUB_API_TOKEN}`
            }
        }).then(r => r.json()));
        if (page === 1) {
            totalItems = total_count;
        }
        for (let item of items) {
            yield item;
        }
    }
    return;
}

export async function getDiff(user: string, repo: string, sha: string) {
    return fetch(`https://api.github.com/repos/${user}/${repo}/commits/${sha}`, {
        headers: {
            Authorization: `Bearer ${GITHUB_API_TOKEN}`,
            Accept: "application/vnd.github.diff"
        }
    }).then(r => r.text());
}

export async function getRepository(url: string): Promise<Repository> {
    return fetch(url, {
        headers: {
            Authorization: `Bearer ${GITHUB_API_TOKEN}`
        }
    }).then(r => r.json());
}

export async function getIssueTimeline(url: string): Promise<IssueEvent[]> {
    return fetch(url, {
        headers: {
            Authorization: `Bearer ${GITHUB_API_TOKEN}`
        }
    }).then(r => r.json());
}

export function isLabeledIssueEvent(event: IssueEvent): event is LabeledIssueEvent {
    return event.event === "labeled";
}

export function isAssignedIssueEvent(event: IssueEvent): event is AssignedIssueEvent {
    return event.event === "assigned";
}

export function isCommentedIssueEvent(event: IssueEvent): event is CommentedIssueEvent {
    return event.event === "commented";
}

export function isMentionedIssueEvent(event: IssueEvent): event is MentionedIssueEvent {
    return event.event === "mentioned";
}

export function isSubscribedIssueEvent(event: IssueEvent): event is SubscribedIssueEvent {
    return event.event === "subscribed";
}

export function isClosedIssueEvent(event: IssueEvent): event is ClosedIssueEvent {
    return event.event === "closed";
}
