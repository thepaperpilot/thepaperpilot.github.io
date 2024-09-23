import { serverQueryContent } from '#content/server';
import { Feed } from 'feed';
import { POST_TYPES } from '../../../post_types';
import { Post, PostType } from '../../../types';

const feed = new Feed({
    title: "The Paper Pilot's Posts",
    description: "A feed of The Paper Pilot's online interactions!",
    id: "https://www.thepaperpilot.org/",
    link: "https://www.thepaperpilot.org/",
    language: "en", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
    image: "https://thepaperpilot.org/paperpilot.png",
    favicon: "https://thepaperpilot.org/favicon.ico",
    copyright: `All rights reserved ${new Date().getFullYear()}, The Paper Pilot`,
    // updated: new Date(2013, 6, 14), // optional, default = today
    // generator: "awesome", // optional, default = 'Feed for Node.js'
    feedLinks: {
        rss: "https://www.thepaperpilot.org/posts/rss",
        json: "https://www.thepaperpilot.org/posts/json",
        atom: "https://www.thepaperpilot.org/posts/atom"
    },
    author: {
        name: "The Paper Pilot",
        email: "thepaperpilot@incremental.social",
        link: "https://www.thepaperpilot.org/about"
    }
});

export default defineCachedEventHandler(async (event) => {
    const docs = await serverQueryContent(event)
        .sort({ published: -1, $numeric: true })
        .where({ _partial: false, kind: { "$exists": true } })
        .find() as Post[];
    
    for (const doc of docs) {
        const link = `https://thepaperpilot.org/${doc.kind}/${doc.published}`;
        const { verb } = POST_TYPES[doc.kind as PostType];
        let subject;
        if (doc.title) {
            subject = ': ' + doc.title;
        } else if (doc.author?.name) {
            subject = ' ' + doc.author.name;
        } else if (doc.url) {
            subject = ' a link';
        } else {
            subject = ' a post';
        }
        const title = `The Paper Pilot ${verb}${subject}`;
        feed.addItem({
            title,
            id: link,
            link,
            date: new Date(doc.published),
            description: doc.description,
            category: [
                { domain: `https://thepaperpilot.org/${doc.kind}`, name: doc.kind },
                ...doc.tags?.map(tag => ({ name: tag })) ?? []
            ]
        });
    }
    
    const feedString = feed.atom1();
    event.res.setHeader('content-type', 'text/xml');
    event.res.end(feedString);
});
