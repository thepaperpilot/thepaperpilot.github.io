export const POST_TYPES = {
    reply: {
        id: 'reply',
        plural: 'replies',
        verb: 'replied to',
        subject: ' a post',
        icon: 'material-symbols:reply'
    },
    bookmark: {
        id: 'bookmark',
        plural: 'bookmarks',
        verb: 'bookmarked',
        subject: ' a link',
        icon: 'material-symbols:bookmark'
    },
    favorite: {
        id: 'favorite',
        plural: 'favorites',
        verb: 'favorited',
        subject: ' a post',
        icon: 'material-symbols:favorite'
    },
    article: {
        id: 'article',
        plural: 'articles',
        verb: 'wrote',
        subject: ' an article',
        icon: 'material-symbols:article-outline'
    },
    repost: {
        id: 'repost',
        plural: 'reposts',
        verb: 'shared',
        subject: ' a post',
        icon: 'zondicons:repost'
    },
    edit: {
        id: 'edit',
        plural: 'edits',
        verb: 'suggested changes to',
        subject: ' a repo',
        icon: 'material-symbols:ink-pen'
    }
 } as const;
