import getManifest from "../../utils/manifest";

export default defineEventHandler(async (event) => {
  return await getManifest();
});
