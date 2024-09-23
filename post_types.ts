export const POST_TYPES = {
    reply: {
        id: 'reply',
        plural: 'replies',
        verb: 'replied to',
        icon: 'material-symbols:reply'
    },
    bookmark: {
        id: 'bookmark',
        plural: 'bookmarks',
        verb: 'bookmarked',
        icon: 'material-symbols:bookmark'
    },
    favorite: {
        id: 'favorite',
        plural: 'favorites',
        verb: 'favorited',
        icon: 'material-symbols:favorite'
    },
    article: {
        id: 'article',
        plural: 'articles',
        verb: 'wrote',
        icon: 'material-symbols:article-outline'
    },
    repost: {
        id: 'repost',
        plural: 'reposts',
        verb: 'shared',
        icon: 'zondicons:repost'
    }
 } as const;
