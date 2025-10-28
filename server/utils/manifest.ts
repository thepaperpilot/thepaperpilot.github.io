import { readFile } from "node:fs/promises";
import { join } from "node:path";

export default async function getManifest() {
  const manifestPath = join(process.cwd(), "garden_export/manifest.json");
  const fileContents = await readFile(manifestPath, "utf-8");
  return JSON.parse(fileContents) as {
    pages: Record<string, string>;
    assets: string[];
    favorites: string[];
    tagEdges: { source: string; target: string; }[];
    referenceEdges: { source: string; target: string; }[];
  };
}
