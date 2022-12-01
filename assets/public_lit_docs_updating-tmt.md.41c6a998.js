import{_ as t,c as e,o,d as a}from"./app.f001dff6.js";const m=JSON.parse('{"title":"Updating The Modding Tree","description":"","frontmatter":{},"headers":[],"relativePath":"public/lit/docs/updating-tmt.md","lastUpdated":null}'),i={name:"public/lit/docs/updating-tmt.md"},n=a('<h1 id="updating-the-modding-tree" tabindex="-1">Updating The Modding Tree <a class="header-anchor" href="#updating-the-modding-tree" aria-hidden="true">#</a></h1><p>This tutorial assumes that you have used <a href="./getting-started">the Getting Started Tutorial</a>, and are using Github Desktop and VSCode for your mod.</p><p>Here&#39;s what you have to do when there&#39;s a TMT update:</p><ol><li><p>Look at the changelog. It will warn you if the update will break anything or require any changes. Decide if you want to try to update.</p></li><li><p>Open Github Desktop, and at the top middle, click &quot;fetch origin&quot;. This will make Github Desktop get information about the update.</p></li><li><p>Click where it says &quot;current branch: master&quot; at the top middle, and at the bottom of the thing that appears, click &quot;choose a branch to merge into master&quot;.</p></li><li><p>Select upstream/master. It will likely say there are conflicts, but you have tools to resolve them. Click &quot;Merge upstream/master into master&quot;.</p></li><li><p>A conflict happens when the things you&#39;re trying to merge have both made changes in the same place. Click &quot;open in Visual Studio Code&quot; next to the first file.</p></li><li><p>Scroll down through the file, and look for the parts highlighted in red and green. One of these is your code, and the other is some code that will be modified by the update. Do your best to try to edit things to keep the updated changes, but keep your content.</p></li><li><p>Continue to do this for all remaining changes.</p></li><li><p>Do any other changes required by the update, run the game, fix issues, etc.</p></li></ol>',4),r=[n];function h(d,s,l,p,u,c){return o(),e("div",null,r)}const _=t(i,[["render",h]]);export{m as __pageData,_ as default};