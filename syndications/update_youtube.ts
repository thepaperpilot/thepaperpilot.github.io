import fs from "fs";
import type { OAuth2Client } from 'google-auth-library';
import { addBookmark, addFavorite } from "./indiekit";
import { authorize, getBestThumbnail, getVideos, VIDEO_CATEGORIES } from "./youtube_utils";

let published = Date.now();

authorize().then(async auth => {
    await updateLikes(auth);
    await updateSongs(auth);
    await updateFavorites(auth);
});

const LIKED_VIDEOS_PATH = "./syndications/liked_videos.json";
async function updateLikes(auth: OAuth2Client) {
    const videosArr = fs.existsSync(LIKED_VIDEOS_PATH) ?
        JSON.parse(fs.readFileSync(LIKED_VIDEOS_PATH).toString()) as string[] : [];
    const allVideos = new Set(videosArr);

    console.log("Checking for new liked videos on YouTube...");
    // TODO switch newVideos back after initial backlog uploaded
    const newVideos = Array.from(allVideos);
        // Object.keys(await findNewFromPlaylist(auth, "LL", allVideos));
    if (newVideos.length > 0) {
        for await (const video of (await getVideos(newVideos, auth)) ?? []) {
            const url = `https://www.youtube.com/watch?v=${video.id}`;
            await addBookmark({
                "bookmark-of": url,
                category: VIDEO_CATEGORIES[parseInt(video.snippet.categoryId ?? "1")],
                // TODO switch published date after initial backlog uploaded
                // published: new Date(published++),
                published: new Date(video.snippet.publishedAt ?? ""),
                name: video.snippet.title ?? undefined,
                content: video.snippet.description ?? undefined,
                photo: getBestThumbnail(video.snippet.thumbnails),
                author: {
                    name: video.snippet.channelTitle ?? "",
                    url: video.channel.customUrl ?
                        `https://www.youtube.com/${video.channel.customUrl}` :
                        `https://www.youtube.com/channel/${video.snippet.channelId}`,
                    image: getBestThumbnail(video.channel.thumbnails)
                }
            }).then(() => console.log("Added bookmark for", url))
              .catch(() => console.log("Failed to bookmark", url));
              process.exit();
        }
    }

    await fs.promises.writeFile(LIKED_VIDEOS_PATH, JSON.stringify(Array.from(allVideos)));
}

const LIKED_SONGS_PATH = "./syndications/liked_songs.json";
async function updateSongs(auth: OAuth2Client) {
    const videosArr = fs.existsSync(LIKED_SONGS_PATH) ?
        JSON.parse(fs.readFileSync(LIKED_SONGS_PATH).toString()) as string[] : [];
    const allVideos = new Set(videosArr);

    console.log("Checking for new liked songs on YouTube...");
    // TODO switch newVideos back after initial backlog uploaded
    const newVideos = Array.from(allVideos);
        // Object.keys(await findNewFromPlaylist(auth, "LM", allVideos));
    if (newVideos.length > 0) {
        for await (const video of (await getVideos(newVideos, auth)) ?? []) {
            const url = `https://www.youtube.com/watch?v=${video.id}`;
            await addBookmark({
                "bookmark-of": url,
                category: "music",
                // TODO switch published date after initial backlog uploaded
                // published: new Date(published++),
                published: new Date(video.snippet.publishedAt ?? ""),
                name: "♫ " + video.snippet.title ?? undefined,
                content: video.snippet.description ?? undefined,
                photo: getBestThumbnail(video.snippet.thumbnails),
                author: {
                    name: video.snippet.channelTitle ?? "",
                    url: video.channel.customUrl ?
                        `https://www.youtube.com/${video.channel.customUrl}` :
                        `https://www.youtube.com/channel/${video.snippet.channelId}`,
                    image: getBestThumbnail(video.channel.thumbnails)
                }
            }).then(() => console.log("Added bookmark for", url))
              .catch(() => console.log("Failed to bookmark", url));
        }
    }

    await fs.promises.writeFile(LIKED_SONGS_PATH, JSON.stringify(Array.from(allVideos)));
}

const FAVORITE_VIDEOS_PATH = "./syndications/favorite_videos.json";
async function updateFavorites(auth: OAuth2Client) {
    const videosArr = fs.existsSync(FAVORITE_VIDEOS_PATH) ?
        JSON.parse(fs.readFileSync(FAVORITE_VIDEOS_PATH).toString()) as string[] : [];
    const allVideos = new Set(videosArr);

    console.log("Checking for new favorites on YouTube...");
    // TODO switch newVideos back after initial backlog uploaded
    const newVideos = Array.from(allVideos);
        // Object.keys(await findNewFromPlaylist(auth, "FLg1YH1wAWH7JF2-64XYio0A", allVideos));
    if (newVideos.length > 0) {
        for await (const video of (await getVideos(newVideos, auth)) ?? []) {
            const url = `https://www.youtube.com/watch?v=${video.id}`;
            await addFavorite({
                "like-of": url,
                category: VIDEO_CATEGORIES[parseInt(video.snippet.categoryId ?? "1")],
                // TODO switch published date after initial backlog uploaded
                // published: new Date(published++),
                published: new Date(video.snippet.publishedAt ?? ""),
                name: video.snippet.title ?? undefined,
                content: video.snippet.description ?? undefined,
                photo: getBestThumbnail(video.snippet.thumbnails),
                author: {
                    name: video.snippet.channelTitle ?? "",
                    url: video.channel.customUrl ?
                        `https://www.youtube.com/${video.channel.customUrl}` :
                        `https://www.youtube.com/channel/${video.snippet.channelId}`,
                    image: getBestThumbnail(video.channel.thumbnails)
                }
            }).then(() => console.log("Added favorite for", url))
              .catch(() => console.log("Failed to favorite", url));
        }
    }

    await fs.promises.writeFile(FAVORITE_VIDEOS_PATH, JSON.stringify(Array.from(allVideos)));
}
