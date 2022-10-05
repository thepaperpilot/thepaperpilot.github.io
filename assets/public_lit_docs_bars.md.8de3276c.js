import{_ as s,c as a,o as n,a as e}from"./app.e9531dc8.js";const u=JSON.parse('{"title":"Bars","description":"","frontmatter":{},"headers":[],"relativePath":"public/lit/docs/bars.md","lastUpdated":null}'),t={name:"public/lit/docs/bars.md"},o=e(`<h1 id="bars" tabindex="-1">Bars <a class="header-anchor" href="#bars" aria-hidden="true">#</a></h1><p>Bars let you display information in a more direct way. It can be a progress bar, health bar, capacity gauge, or anything else.</p><p>Bars are defined like other Big Features:</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#FFCB6B;">bars</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">bigBar</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">direction</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">RIGHT</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">width</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">height</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">50</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">progress</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">etc</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">etc</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>Features:</p><ul><li><p>direction: UP, DOWN, LEFT, or RIGHT (not strings). Determines the direction that the bar is filled as it progresses. RIGHT means from left to right.</p></li><li><p>width, height: The size in pixels of the bar, but as numbers (no &quot;px&quot; at the end).</p></li><li><p>progress(): A function that returns the portion of the bar that is filled, from &quot;empty&quot; at 0 to &quot;full&quot; at 1, updating automatically. (Nothing bad happens if the value goes out of these bounds, and it can be a number or <code>Decimal</code>)</p></li><li><p>display(): <strong>optional</strong>. A function that returns text to be displayed on top of the bar, can use HTML.</p></li><li><p>unlocked(): <strong>optional</strong>. A function returning a bool to determine if the bar is visible or not. Default is unlocked.</p></li><li><p>baseStyle, fillStyle, borderStyle, textStyle: <strong>Optional</strong>, Apply CSS to the unfilled portion, filled portion, border, and display text on the bar, in the form of an object where the keys are CSS attributes, and the values are the values for those attributes (both as strings).</p></li><li><p>layer: <strong>assigned automagically</strong>. It&#39;s the same value as the name of this layer, so you can do <code>player[this.layer].points</code> or similar.</p></li><li><p>id: <strong>assigned automagically</strong>. It&#39;s the &quot;key&quot; which the bar was stored under, for convenient access. The bar in the example&#39;s id is &quot;bigBar&quot;.</p></li></ul>`,6),l=[o];function p(r,i,c,y,d,F){return n(),a("div",null,l)}const b=s(t,[["render",p]]);export{u as __pageData,b as default};
