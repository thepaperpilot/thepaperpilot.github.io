import { defineNitroPlugin } from "nitropack/runtime";

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("request", async (event) => {
    const url = new URL(event.path, "http://localhost");
    const path = url.pathname;

    const dirs = [
      "advent",
      "dream",
      "gamedevtree",
      "kronos",
      "lit",
      "ludwig",
      "planar",
      "skilltreetest",
      "the_ascension_tree",
    ];

    for (const dir of dirs) {
      if (path === `/${dir}`) {
        return event.respondWith(
          new Response(null, {
            status: 308,
            headers: { Location: `/${dir}/` },
          })
        );
      }
    }
  });
});
