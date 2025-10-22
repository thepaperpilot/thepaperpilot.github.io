import { readFile } from "node:fs/promises";

export default async function getManifest() {
  const fileContents = await readFile("../../garden_export/manifest.json", "utf-8");
  return JSON.parse(fileContents) as {
    pages: Record<string, string>;
    assets: string[];
    favorites: string[];
    tagEdges: { source: string; target: string; }[];
    referenceEdges: { source: string; target: string; }[];
  };
}
