import { serverQueryContent } from '#content/server';
import type { ParsedContent } from '@nuxt/content';

export default defineCachedEventHandler(async (event) =>
    (await serverQueryContent(event)
        .sort({ published: -1, $numeric: true })
        .where({ _partial: false, kind: { $exists: false } })
        .find() as ParsedContent[])
        .map(post => ({ loc: post._path }))
);
