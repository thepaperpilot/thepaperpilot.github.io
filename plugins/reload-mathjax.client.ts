import { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
  // Watch for route changes
  nuxtApp.hook("page:finish", async () => {
    await nextTick();
    try {
      if (window.MathJax && window.MathJax.typesetPromise) {
        await window.MathJax.typesetPromise();
      }
    } catch (err) {
      console.error("MathJax re-render failed:", err);
    }
  });
});
