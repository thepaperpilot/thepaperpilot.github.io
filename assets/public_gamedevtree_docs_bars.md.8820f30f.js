import{_ as s,o as a,c as e,Q as t}from"./chunks/framework.1169fbc9.js";const E=JSON.parse('{"title":"Bars","description":"","frontmatter":{},"headers":[],"relativePath":"public/gamedevtree/docs/bars.md","filePath":"public/gamedevtree/docs/bars.md","lastUpdated":1621388509000}'),n={name:"public/gamedevtree/docs/bars.md"},o=t(`<h1 id="bars" tabindex="-1">Bars <a class="header-anchor" href="#bars" aria-label="Permalink to &quot;Bars&quot;">​</a></h1><p>Bars let you display information in a more direct way. It can be a progress bar, health bar, capacity gague, or anything else.</p><p>Bars are defined like other Big Features:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">bars</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">bigBar</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">display</span><span style="color:#E1E4E8;">() {</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Blah&quot;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">            etc</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        etc</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">bars</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">bigBar</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">display</span><span style="color:#24292E;">() {</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Blah&quot;</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">            etc</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        etc</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span></code></pre></div><p>Features:</p><ul><li><p>direction: UP, DOWN, LEFT, or RIGHT (not Strings). Determines the direction that the bar is filled as it progresses. RIGHT means from left to right.</p></li><li><p>width, height: The size in pixels of the bar, but as Numbers (no &quot;px&quot; at the end)</p></li><li><p>progress(): A function that returns the portion of the bar that is filled, from &quot;empty&quot; at 0 to &quot;full&quot; at 1. (Nothing bad happens if the value goes out of these bounds, and it can be a number or Decimal).</p></li><li><p>display(): <strong>optional</strong>, A function that returns text to be displayed on top of the bar, can use HTML.</p></li><li><p>unlocked(): <strong>optional</strong>, A function returning a bool to determine if the bar is visible or not. Default is unlocked.</p></li><li><p>baseStyle, fillStyle, borderStyle, textStyle: <strong>Optional</strong>, Apply CSS to the unfilled portion, filled portion, border, and display text on the bar, in the form of an object where the keys are CSS attributes, and the values are the values for those attributes (both as strings).</p></li><li><p>layer: <strong>Assigned automagically</strong>. It&#39;s the same value as the name of this layer, so you can do player[this.layer].points or similar</p></li><li><p>id: <strong>Assigned automagically</strong>. It&#39;s the &quot;key&quot; which the bar was stored under, for convenient access. The bar in the example&#39;s id is &quot;bigBar&quot;.</p></li></ul>`,6),l=[o];function p(r,i,c,d,h,u){return a(),e("div",null,l)}const b=s(n,[["render",p]]);export{E as __pageData,b as default};
