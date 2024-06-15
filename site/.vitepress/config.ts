import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from "vitepress";
import wordCounting from "word-counting";

const fs = require("fs");
const path = require("path");

const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

const filePath = path.resolve("./Garden/logseq/config.edn");
const data = fs.readFileSync(filePath).toString();
let favorites = [];
for (const match of data.matchAll(/:favorites \["([^\]]+)"\]/g)) {
  favorites = match[1].split("\" \"").map(page => ({ title: page, link: `/garden/${page.toLowerCase().replaceAll(' ', '-')}` }));
}

module.exports = {
  lang: "en-US",
  title: 'The Paper Pilot',
  description: 'The Paper Pilot\'s Digital Garden',
  vite: {
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-highlight-targeted-heading'
      ]
    }
  },
  sitemap: {
    hostname: 'https://thepaperpilot.org'
  },
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto+Mono:ital,wght@0,400;0,600;1,400&display=swap' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['link', { rel: 'alternate', type: "text/mf2+html", href: '/changelog' }],
    ['link', { rel: 'alternate', type: "application/rss+xml", title: 'Changelog', href: '/changelog/rss' }],
    ['link', { rel: 'alternate', type: "application/atom+xml", title: 'Changelog', href: '/changelog/atom' }],
    ['link', { rel: 'alternate', type: "application/json+xml", title: 'Changelog', href: '/changelog/json' }],
    ['meta', { name: 'og:description', content: 'The Paper Pilot\'s Digital Garden' }]
  ],
  lastUpdated: false,
  cleanUrls: 'with-subfolders',
  async transformHtml(code, id, context) {
    if (context.page.startsWith("garden") && fs.existsSync("site/" + context.page)) {
      const wc = wordCounting(code, { isHtml: true }).wordsCount;
      const pageStart = code.indexOf("</h1>");
      const firstCommit = (await exec(`git log -n 1 --diff-filter=A --format="<a href='https://code.incremental.social/thepaperpilot/pages/commit/%H' title='%ad'><time class='dt-published' datetime='%ad'>%ar</time></a>" site/${context.page}`)).stdout;
      const lastCommit = (await exec(`git log -n 1 --diff-filter=M --format="<a href='https://code.incremental.social/thepaperpilot/pages/commit/%H' title='%ad'><time class='dt-updated' datetime='%ad'>%ar</time></a>" site/${context.page}`)).stdout;
      const header = code.slice(0, pageStart < 0 ? 0 : pageStart - 5).replace('<h1 ', '<h1 class="p-name" ');
      return `<article class="h-entry">${header + `<p>${wc} words, ~${Math.round(wc / 183)} minute read. Planted ${firstCommit}.${lastCommit ? ` Last tended to ${lastCommit}.` : ''}</p><hr/><div class="e-content">` + code.slice(pageStart + 5)}</div></article>`;
    }
    return code;
  },
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        _render(src, env, md) {
          const html = md.render(src, env);
          if (env.frontmatter?.search === false) return '';
          if (env.relativePath.startsWith('public')) return '';
          if (env.relativePath.startsWith('guide-to-incrementals')) return '';
          return html;
        }
      }
    },
    outline: 'deep',
    nav: [
      { text: "Profectus", link: "https://moddingtree.com" },
      { text: "Incremental Social", link: "https://incremental.social" }
    ],
    socialLinks: [
      { icon: { svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Forgejo</title><path d="M16.7773 0c1.6018 0 2.9004 1.2986 2.9004 2.9005s-1.2986 2.9004-2.9004 2.9004c-1.0854 0-2.0315-.596-2.5288-1.4787H12.91c-2.3322 0-4.2272 1.8718-4.2649 4.195l-.0007 2.1175a7.0759 7.0759 0 0 1 4.148-1.4205l.1176-.001 1.3385.0002c.4973-.8827 1.4434-1.4788 2.5288-1.4788 1.6018 0 2.9004 1.2986 2.9004 2.9005s-1.2986 2.9004-2.9004 2.9004c-1.0854 0-2.0315-.596-2.5288-1.4787H12.91c-2.3322 0-4.2272 1.8718-4.2649 4.195l-.0007 2.319c.8827.4973 1.4788 1.4434 1.4788 2.5287 0 1.602-1.2986 2.9005-2.9005 2.9005-1.6018 0-2.9004-1.2986-2.9004-2.9005 0-1.0853.596-2.0314 1.4788-2.5287l-.0002-9.9831c0-3.887 3.1195-7.0453 6.9915-7.108l.1176-.001h1.3385C14.7458.5962 15.692 0 16.7773 0ZM7.2227 19.9052c-.6596 0-1.1943.5347-1.1943 1.1943s.5347 1.1943 1.1943 1.1943 1.1944-.5347 1.1944-1.1943-.5348-1.1943-1.1944-1.1943Zm9.5546-10.4644c-.6596 0-1.1944.5347-1.1944 1.1943s.5348 1.1943 1.1944 1.1943c.6596 0 1.1943-.5347 1.1943-1.1943s-.5347-1.1943-1.1943-1.1943Zm0-7.7346c-.6596 0-1.1944.5347-1.1944 1.1943s.5348 1.1943 1.1944 1.1943c.6596 0 1.1943-.5347 1.1943-1.1943s-.5347-1.1943-1.1943-1.1943Z"/></svg>` }, link: "https://code.incremental.social/thepaperpilot" },
      { icon: { svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Matrix</title><path d="M.632.55v22.9H2.28V24H0V0h2.28v.55zm7.043 7.26v1.157h.033c.309-.443.683-.784 1.117-1.024.433-.245.936-.365 1.5-.365.54 0 1.033.107 1.481.314.448.208.785.582 1.02 1.108.254-.374.6-.706 1.034-.992.434-.287.95-.43 1.546-.43.453 0 .872.056 1.26.167.388.11.716.286.993.53.276.245.489.559.646.951.152.392.23.863.23 1.417v5.728h-2.349V11.52c0-.286-.01-.559-.032-.812a1.755 1.755 0 0 0-.18-.66 1.106 1.106 0 0 0-.438-.448c-.194-.11-.457-.166-.785-.166-.332 0-.6.064-.803.189a1.38 1.38 0 0 0-.48.499 1.946 1.946 0 0 0-.231.696 5.56 5.56 0 0 0-.06.785v4.768h-2.35v-4.8c0-.254-.004-.503-.018-.752a2.074 2.074 0 0 0-.143-.688 1.052 1.052 0 0 0-.415-.503c-.194-.125-.476-.19-.854-.19-.111 0-.259.024-.439.074-.18.051-.36.143-.53.282-.171.138-.319.337-.439.595-.12.259-.18.6-.18 1.02v4.966H5.46V7.81zm15.693 15.64V.55H21.72V0H24v24h-2.28v-.55z"/></svg>` }, link: "https://matrix.to/#/@thepaperpilot:incremental.social" },
      { icon: { svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Fediverse</title><path d="M4.589 7.91a2.295 2.295 0 01-2.416 2.166A2.295 2.295 0 01.005 7.66a2.295 2.295 0 012.418-2.167A2.295 2.295 0 014.589 7.91zm1.876 11.995a2.295 2.295 0 01-2.417 2.167 2.295 2.295 0 01-2.166-2.417 2.295 2.295 0 012.416-2.166 2.295 2.295 0 012.167 2.416zm11.993 1.925a2.295 2.295 0 01-2.416 2.167 2.295 2.295 0 01-2.168-2.418 2.295 2.295 0 012.417-2.167 2.295 2.295 0 012.167 2.418zm5.537-10.807a2.295 2.295 0 01-2.417 2.168 2.295 2.295 0 01-2.168-2.418 2.295 2.295 0 012.418-2.165 2.295 2.295 0 012.167 2.415zm-8.57-8.603a2.295 2.295 0 01-2.419 2.168A2.295 2.295 0 0110.84 2.17 2.295 2.295 0 0113.256.003a2.295 2.295 0 012.168 2.418zM4.79 7.407a2.525 2.525 0 01.028.516 2.525 2.525 0 01-.263.99l3.716.595.731-1.425zm6.368 1.022l-.73 1.425 8.777 1.41a2.525 2.525 0 01-.025-.502 2.525 2.525 0 01.27-1.002zm3.118-3.887a2.525 2.525 0 01-1.283.274 2.525 2.525 0 01-.22-.023l.58 3.712 1.58.254zm-.588 6.12l1.37 8.775a2.525 2.525 0 011.245-.254 2.525 2.525 0 01.264.03l-1.296-8.297zm-3.046-7.96L4.098 6.02a2.525 2.525 0 01.688 1.36l6.545-3.317a2.525 2.525 0 01-.688-1.358zm4.725.76a2.525 2.525 0 01-1.08 1.074l5.177 5.197a2.525 2.525 0 011.08-1.075zm4.56 9.23l-3.343 6.524a2.525 2.525 0 011.355.695l3.344-6.525a2.525 2.525 0 01-1.357-.695zm-13.26 6.716a2.525 2.525 0 01.025.51 2.525 2.525 0 01-.266.995l7.243 1.163a2.525 2.525 0 01-.027-.508 2.525 2.525 0 01.267-.997zm-3.245-9.366a2.525 2.525 0 01-1.26.264 2.525 2.525 0 01-.245-.026l1.132 7.244a2.525 2.525 0 011.262-.264 2.525 2.525 0 01.243.025zm7.935-5.954l-3.83 7.474 1.13 1.135 4.055-7.914a2.525 2.525 0 01-1.355-.695zm-4.826 9.418l-1.94 3.786a2.525 2.525 0 011.356.696l1.715-3.348zm12.682-2.2l-3.355 1.7.247 1.583 3.797-1.925a2.525 2.525 0 01-.689-1.36zm-5.305 2.687l-7.935 4.02a2.525 2.525 0 01.69 1.36l7.494-3.797zM4.534 8.95a2.525 2.525 0 01-1.08 1.075l5.93 5.95 1.43-.724zm7.821 7.85l-1.43.724 3.004 3.014a2.525 2.525 0 011.08-1.075z"/></svg>` }, link: "https://incremental.social/u/thepaperpilot" }
    ],
    sidebar: [
      {
        text: "Recommended Pages",
        items: favorites
      },
      { text: "Changelog", link: "/changelog" }
    ]
  }
}
