import { serverQueryContent } from '#content/server';
import type { Post } from '../../../types';

export default defineCachedEventHandler(async (event) =>
    (await serverQueryContent(event)
        .sort({ published: -1, $numeric: true })
        .where({ _partial: false, kind: "article" })
        .find() as Post[]).map(post => ({ loc: post._path }))
);
