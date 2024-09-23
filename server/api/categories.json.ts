import { serverQueryContent } from '#content/server';
import type { Post } from '../../types';

export default defineEventHandler(async (event) => {
    const allTags = new Set<string>();
    // Ahhhh that's expensive!
    (await serverQueryContent(event)
        // Adding $type here doesn't seem to work? (tried both 4 and "array")
        .where({ _partial: false, tags: { "$exists": true } })
        .only("tags")
        .find() as Post[])
        .filter(doc => Array.isArray(doc.tags))
        .forEach(({ tags }) =>
            (tags.forEach((tag: string) => allTags.add(tag))));
    event.res.setHeader('content-type', 'text/json');
    return Array.from(allTags);
});
