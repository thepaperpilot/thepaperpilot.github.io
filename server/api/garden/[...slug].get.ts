import matter from "gray-matter";
import { readFile } from "node:fs/promises";
import getManifest from "../../utils/manifest";

export default defineEventHandler(async (event) => {
  const path = getRouterParams(event).slug;
  if (path in (await getManifest()).pages) {
    const file = matter(
      await readFile(`./garden_export/${path}.md`, { encoding: "utf8" })
    );
    const content = await parseMarkdown(file.content);
    return { doc: file.data, content };
  }
  return createError({ status: 404 });
});
