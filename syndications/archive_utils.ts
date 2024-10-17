export async function getArchiveUrl(url: string, timestamp?: number) {
    const trimmedUrl = encodeURIComponent(url.replace(/^https?:\/\/(www\.)?/, ''));
    const archiveInfoUrl =
        `http://archive.org/wayback/available?url=${trimmedUrl}&timestamp=${timestamp}`;
    const archiveResponse = await fetch(archiveInfoUrl).then(r => r.text());
    let archiveJson;
    try {
        archiveJson = JSON.parse(archiveResponse);
    } catch (err) {
        console.error("Unexpected response from wayback machine:", archiveInfoUrl, archiveResponse,
            err);
        process.exit(0);
    }
    return archiveJson.archived_snapshots?.closest?.timestamp as string | undefined;
}
