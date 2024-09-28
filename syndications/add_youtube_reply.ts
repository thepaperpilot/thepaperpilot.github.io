import { addReply } from "./indiekit";
import { authorize, getBestThumbnail, getComment, getVideos, VIDEO_CATEGORIES } from "./youtube_utils";

let commentId: string, videoId: string;

async function run() {
    console.log("Enter the reply to add here:");
    for await (const url of console as unknown as AsyncIterable<string>) {
        const [_, video, comment] = url.match(
            /https?:\/\/(?:www\.)?youtube.com\/watch\?v=([0-9a-zA-Z_\.-]+)&lc=([0-9a-zA-Z_\.-]+)/
        ) as string[];
        
        if (!video || !comment) {
            console.error("Could not parse video and comment id from url", url);
        } else {
            commentId = comment;
            videoId = video;
            break;
        }
    }
}

run()
.then(authorize)
.then(async auth => {
    const url = `https://www.youtube.com/watch?v=${videoId}&lc=${commentId}`;
    const comment = (await getComment(commentId, auth))?.[0];
    const video = (await getVideos(videoId, auth))?.[0];
    if (!comment || !video) {
        console.log("Couldn't retrieve either the comment or video", comment, video);
        return;
    }
    
    const parentComment = comment.parentId == null ? undefined :
        (await getComment(comment.parentId, auth))?.[0];

    const category = VIDEO_CATEGORIES[parseInt(video.snippet.categoryId ?? "1")];
    await addReply({
        "in-reply-to": parentComment ?
            `https://www.youtube.com/watch?v=${videoId}&lc=${comment.parentId!}` :
            `https://www.youtube.com/watch?v=${videoId}`,
        content: comment.textDisplay ?? "",
        published: comment.publishedAt == null ? undefined : new Date(comment.publishedAt),
        category,
        originalUrl: url,
        parent: parentComment ? {
            kind: "reply",
            description: parentComment.textDisplay ?? "",
            syndications: [
                `https://www.youtube.com/watch?v=${videoId}&lc=${comment.parentId!}`
            ],
            tags: [category],
            published: parentComment.publishedAt == null ? undefined :
                new Date(parentComment.publishedAt).getTime(),
            author: {
                name: parentComment.authorDisplayName ?? undefined,
                url: parentComment.authorChannelUrl ?? undefined,
                image: parentComment.authorProfileImageUrl ?? undefined
            }
        } : {
            kind: "article",
            description: video.snippet.description ?? undefined,
            url: `https://www.youtube.com/watch?v=${videoId}`,
            published: video.snippet.publishedAt == null ? undefined :
                new Date(video.snippet.publishedAt).getTime(),
            author: {
                name: video.channel.title ?? undefined,
                url: video.channel.customUrl ?
                    `https://www.youtube.com/${video.channel.customUrl}` : 
                    `https://www.youtube.com/channel/${video.snippet.channelId}`,
                image: getBestThumbnail(video.channel.thumbnails)
            },
            image: getBestThumbnail(video.snippet.thumbnails),
            tags: [category],

        }
    }).then(() => console.log("Added reply for", url))
      .catch((err) => console.log("Failed to reply", url, err));
});
