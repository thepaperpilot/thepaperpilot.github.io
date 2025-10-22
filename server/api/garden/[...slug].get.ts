import matter from "gray-matter";
import { readFile } from "node:fs/promises";
import getManifest from "../../utils/manifest";

export default defineEventHandler(async (event) => {
  const path = getRouterParams(event).slug;
  if (path in (await getManifest()).pages) {
    return matter(
      await readFile(`./garden_export/${path}.md`, { encoding: "utf8" })
    );
  }
  return createError({ status: 404 });
});
