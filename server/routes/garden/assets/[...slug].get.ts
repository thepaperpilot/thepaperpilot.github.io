import fs from "node:fs/promises";
import getManifest from "../../../utils/manifest";
import { join } from "node:path";

export default defineEventHandler(async (event) => {
  const path = getRouterParams(event).slug;
  if ((await getManifest()).assets.includes(path)) {
    // Detect content type by extension
    const ext = path.split(".").pop()!;
    const mime =
      {
        png: "image/png",
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        gif: "image/gif",
        svg: "image/svg+xml",
        webp: "image/webp",
        mp4: "video/mp4",
        mp3: "audio/mpeg",
        pdf: "application/pdf",
      }[ext] || "application/octet-stream";

    setHeader(event, "Content-Type", mime);
    setHeader(event, "Cache-Control", `public, max-age=${15 * 60}`);
    const assetPath = join(process.cwd(), `garden_export/assets/${path}`);
    const buffer = await fs.readFile(assetPath);
    return buffer;
  }
  return createError({ statusCode: 404, message: "1" });
});
