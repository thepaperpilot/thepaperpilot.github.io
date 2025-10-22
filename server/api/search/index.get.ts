import matter from "gray-matter";
import MiniSearch from "minisearch";
import { readFile } from "node:fs/promises";
import getManifest from "../../utils/manifest";

export default defineEventHandler(async (event) => {
  const pages = await Promise.all(
    Object.keys((await getManifest()).pages).map(async (path) => {
      const { content, data } = matter(
        await readFile(`./garden_export/${path}.md`, { encoding: "utf8" })
      );
      return {
        path,
        content,
        ...data
      };
    })
  );

  let miniSearch = new MiniSearch({
    fields: ["content", "name", "tags"],
    searchOptions: { boost: { name: 2, tags: 2 }, fuzzy: true },
    storeFields: ["name", "wordcount", "modified", "created", "tags"],
    idField: "path"
  });
  miniSearch.addAll(pages);

  setHeader(event, "Content-Type", "application/json");
  setHeader(event, "Cache-Control", `public, max-age=${15 * 60}`);
  return JSON.stringify(miniSearch);
});
