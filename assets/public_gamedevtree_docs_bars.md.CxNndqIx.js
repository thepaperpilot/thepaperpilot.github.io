import{_ as s,c as t,o as a,a5 as e}from"./chunks/framework.CK8QU5WH.js";const k=JSON.parse('{"title":"Bars","description":"","frontmatter":{},"headers":[],"relativePath":"public/gamedevtree/docs/bars.md","filePath":"public/gamedevtree/docs/bars.md"}'),i={name:"public/gamedevtree/docs/bars.md"},n=e(`<h1 id="bars" tabindex="-1">Bars <a class="header-anchor" href="#bars" aria-label="Permalink to &quot;Bars&quot;">​</a></h1><p>Bars let you display information in a more direct way. It can be a progress bar, health bar, capacity gague, or anything else.</p><p>Bars are defined like other Big Features:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    bars</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        bigBar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Blah&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            etc</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        etc</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span></code></pre></div><p>Features:</p><ul><li><p>direction: UP, DOWN, LEFT, or RIGHT (not Strings). Determines the direction that the bar is filled as it progresses. RIGHT means from left to right.</p></li><li><p>width, height: The size in pixels of the bar, but as Numbers (no &quot;px&quot; at the end)</p></li><li><p>progress(): A function that returns the portion of the bar that is filled, from &quot;empty&quot; at 0 to &quot;full&quot; at 1. (Nothing bad happens if the value goes out of these bounds, and it can be a number or Decimal).</p></li><li><p>display(): <strong>optional</strong>, A function that returns text to be displayed on top of the bar, can use HTML.</p></li><li><p>unlocked(): <strong>optional</strong>, A function returning a bool to determine if the bar is visible or not. Default is unlocked.</p></li><li><p>baseStyle, fillStyle, borderStyle, textStyle: <strong>Optional</strong>, Apply CSS to the unfilled portion, filled portion, border, and display text on the bar, in the form of an object where the keys are CSS attributes, and the values are the values for those attributes (both as strings).</p></li><li><p>layer: <strong>Assigned automagically</strong>. It&#39;s the same value as the name of this layer, so you can do player[this.layer].points or similar</p></li><li><p>id: <strong>Assigned automagically</strong>. It&#39;s the &quot;key&quot; which the bar was stored under, for convenient access. The bar in the example&#39;s id is &quot;bigBar&quot;.</p></li></ul>`,6),r=[n];function l(o,p,h,d,c,u){return a(),t("div",null,r)}const b=s(i,[["render",l]]);export{k as __pageData,b as default};
