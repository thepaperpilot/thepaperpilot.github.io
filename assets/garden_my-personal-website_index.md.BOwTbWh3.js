import{d as r}from"./chunks/git.data.DAUl9IQF.js";import{u as s,c as l,j as e,a as i,k as a,ag as o,o as n}from"./chunks/framework.VBE0TPts.js";const d=e("h1",{class:"p-name"},"My Personal Website",-1),h=["innerHTML"],p=o('<hr><details><summary>Referenced by:</summary><a href="/garden/the-small-web/index.md">The Small Web</a></details><p>A <a href="/garden/the-small-web/">Personal Websites</a> for myself, available at <a href="https://thepaperpilot.org" target="_blank" rel="noreferrer">https://thepaperpilot.org</a></p><h2 id="tech-stack" tabindex="-1">Tech Stack <a class="header-anchor" href="#tech-stack" aria-label="Permalink to &quot;Tech Stack&quot;">​</a></h2><p>I use <a href="/garden/logseq/">Logseq</a> to journal and collect my thoughts on various topics that interest me</p><ul><li>Seafile syncs my logseq files between my devices</li><li>Git syncs my logseq files to a private repo on <a href="/garden/incremental-social/">Incremental Social</a> for purposes of version control and using as a submodule</li><li>The seafile files and all repos on <a href="/garden/incremental-social/">Incremental Social</a> are independently backed up daily to backblaze</li></ul><p>My logseq files are synced to a private git repo which is added as a submodule to <a href="https://code.incremental.social/thepaperpilot/pages" target="_blank" rel="noreferrer">my website repo</a></p><p>A <a href="https://code.incremental.social/thepaperpilot/pages/src/branch/master/build_garden.js" target="_blank" rel="noreferrer">Node.js script</a> pre-processes my logseq files into markdown files in the <code>/garden</code> path of the website</p><ul><li>Converts all links and block references</li><li>Adds lists of tags and references to pages</li><li>Adds <code>&lt;h1 /&gt;</code> titles, word counts, update commits, etc. to each page</li><li>Moves the /now page to <a href="https://thepaperpilot.org/now" target="_blank" rel="noreferrer">/now</a> instead of /garden/now</li><li>Copies some of the <a href="/garden/guide-to-incrementals/">Guide to Incrementals</a> pages to <a href="https://thepaperpilot.org/guide-to-incrementals/" target="_blank" rel="noreferrer">/guide-to-incrementals</a> so as to not break links made before the current site iteration</li><li>Generates <a href="https://www.thepaperpilot.org/changelog/" target="_blank" rel="noreferrer">/changelog</a> and its RSS, Atom, and JSON feeds <ul><li>The outputs of the generation are NOT .gitignore&#39;d, as I use the git log to determine which pages updated when <span id="66757760-16ab-4777-976e-8bcbac053923"> - Commit information about when a file was last updated is added via a <a href="https://vitepress.dev/guide/data-loading" target="_blank" rel="noreferrer">data loader</a> because if it was added to the file directly, rebuilding the site would count as having updated every page, by updating each commit to the changes introduced last build</span></li></ul></li></ul><p><a href="/garden/vitepress/">Vitepress</a> builds a static site from the markdown files</p><ul><li>Includes a custom theme that makes the whole site paper-themed</li><li>Includes some pages like the <a href="https://thepaperpilot.org" target="_blank" rel="noreferrer">homepage</a> and the <a href="https://thepaperpilot.org/about" target="_blank" rel="noreferrer">about me page</a> that require markup, thus don&#39;t make sense to maintain inside logseq</li><li>The sidebar is generated from my favorited pages within Logseq</li><li>Includes various static files, like copies of several of my games and a <a href="https://www.thepaperpilot.org/robots.txt" target="_blank" rel="noreferrer">robots.txt</a> (borrowed from <a href="https://tracydurnell.com/" target="_blank" rel="noreferrer">Tracy Durnell</a>&#39;s <a href="https://tracydurnell.com/robots.txt" target="_blank" rel="noreferrer">robots.txt</a>) that blocks several crawlers specifically used for training AI models</li></ul><p>Three.js is used to create the effect in the background</p><ul><li>Simplex noise gets used to adjust the opacity of a repeating SVG pattern</li><li>Initially tried to use just SVG, which supports creating noise and using it as a mask, but it only does 2d noise and I need 2d slices of 3d noise</li></ul><p>Microformats are used to markup the site for <a href="/garden/the-small-web/">The IndieWeb</a></p><ul><li>The footer contains a minimal <a href="https://microformats.org/wiki/h-card" target="_blank" rel="noreferrer">h-card</a> with a link to my full profile</li><li>Each garden page is an <a href="https://indieweb.org/h-entry" target="_blank" rel="noreferrer">h-entry</a>, and the changelog an <a href="https://indieweb.org/h-feed" target="_blank" rel="noreferrer">h-feed</a></li><li>All my socials are added as <a href="https://indieweb.org/rel-me" target="_blank" rel="noreferrer">rel-me</a> links, and the profiles then link back to me (as rel-me links, if allowed by the platform) <ul><li>Together this can verify the owner of this website and those socials are the same person</li></ul></li></ul>',15),k=JSON.parse('{"title":"My Personal Website","description":"","frontmatter":{"public":"true","slug":"my-personal-website","title":"My Personal Website","prev":false,"next":false},"headers":[],"relativePath":"garden/my-personal-website/index.md","filePath":"garden/my-personal-website/index.md"}'),c={name:"garden/my-personal-website/index.md"},_=Object.assign(c,{setup(f){const t=s();return(g,m)=>(n(),l("div",null,[d,e("p",null,[i("422 words, ~2 minute read. "),e("span",{innerHTML:a(r)[`site/${a(t).page.value.relativePath}`]},null,8,h)]),p]))}});export{k as __pageData,_ as default};
