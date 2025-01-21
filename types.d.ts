import type { ParsedContent } from "@nuxt/content";

export type PostType = "reply" | "bookmark" | "favorite" | "article" | "repost";

export interface Post extends ParsedContent {
    kind: PostType;
    description?: string;
    url?: string;
    published: number;
    author?: Partial<Author>;
    image?: string;
    imageAlt?: string;
    tags: string[];
    syndications: string[];
    parent?: Partial<Post>;
    replies?: Reply[];
}

export interface Author {
    name: string;
    url: string;
    image?: string;
}

export interface Reply {
    body: string;
    author: Author;
    published: number;
    syndication: string;
}
