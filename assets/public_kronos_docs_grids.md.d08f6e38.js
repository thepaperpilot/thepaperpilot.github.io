import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.1169fbc9.js";const u=JSON.parse('{"title":"Grids","description":"","frontmatter":{},"headers":[],"relativePath":"public/kronos/docs/grids.md","filePath":"public/kronos/docs/grids.md","lastUpdated":1664930814000}'),e={name:"public/kronos/docs/grids.md"},o=l(`<h1 id="grids" tabindex="-1">Grids <a class="header-anchor" href="#grids" aria-label="Permalink to &quot;Grids&quot;">​</a></h1><p>Grids are an easier way of making a group of similar clickables. They all have the same behavior, but are different based on their data.</p><p><strong>NOTE: Gridables are similar to clickables in some respects, but are fundamentally different from normal TMT components in quite a few ways. Be sure to keep these in mind:</strong></p><ul><li>Gridable ids use base 100 instead of base 10, so you can have more than 10 tiles in a row. This means that a grid might look like this: 101 102 201 202</li><li>Individual gridables are not defined individually. All properties go directly into the &quot;grid&quot; object. Functions are called with arguments for the id of the gridables and its associated data, so you can give them the appropriate appearance and properties based on that.</li><li>If you need two unrelated grids in a layer, you&#39;ll need to use a layer proxy component.</li></ul><p>Useful functions for dealing with grids:</p><ul><li>getGridData(layer, id): get the data for the chosen gridable</li><li>setGridData(layer, id, state): set the data for the chosen gridable</li><li>gridEffect(layer, id): get the effect for the chosen gridable</li></ul><p>The grid should be formatted like this:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">grid</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">rows</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// If these are dynamic make sure to have a max value as well!</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">cols</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">getStartData</span><span style="color:#E1E4E8;">(id) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">getUnlocked</span><span style="color:#E1E4E8;">(id) { </span><span style="color:#6A737D;">// Default</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">getCanClick</span><span style="color:#E1E4E8;">(data, id) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">onClick</span><span style="color:#E1E4E8;">(data, id) { </span></span>
<span class="line"><span style="color:#E1E4E8;">        player[</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.layer].grid[id]</span><span style="color:#F97583;">++</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">getDisplay</span><span style="color:#E1E4E8;">(data, id) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> data </span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    etc</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">grid</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">rows</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// If these are dynamic make sure to have a max value as well!</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">cols</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">getStartData</span><span style="color:#24292E;">(id) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">getUnlocked</span><span style="color:#24292E;">(id) { </span><span style="color:#6A737D;">// Default</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">getCanClick</span><span style="color:#24292E;">(data, id) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">onClick</span><span style="color:#24292E;">(data, id) { </span></span>
<span class="line"><span style="color:#24292E;">        player[</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.layer].grid[id]</span><span style="color:#D73A49;">++</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">getDisplay</span><span style="color:#24292E;">(data, id) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> data </span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    etc</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>Features:</p><ul><li><p>rows, cols: The amount of rows and columns of gridable to display.</p></li><li><p>maxRows, maxCols: <strong>sometimes needed</strong>. If rows or cols are dynamic, you need to define the maximum amount that there can be (you can increase it when you update the game though). These CANNOT be dynamic.</p></li><li><p>getStartData(id): Creates the default data for the gridable at this position. This can be an object, or a regular value.</p></li><li><p>getUnlocked(id): <strong>optional</strong>. Returns true if the gridable at this position should be visible.</p></li><li><p>getTitle(data, id): <strong>optional</strong>. Returns text that should displayed at the top in a larger font, based on the position and data of the gridable.</p></li><li><p>getDisplay(data, id): <strong>optional</strong>. Returns everything that should be displayed on the gridable after the title, based on the position and data of the gridable.</p></li><li><p>getStyle(data, id): <strong>optional</strong>. Returns CSS to apply to this gridable, in the form of an object where the keys are CSS attributes, and the values are the values for those attributes (both as strings).</p></li><li><p>getCanClick(data, id): <strong>optional</strong>. A function returning a bool to determine if you can click a gridable, based on its data and position. If absent, you can always click it.</p></li><li><p>onClick(data, id): A function that implements clicking on the gridable, based on its position and data.</p></li><li><p>onHold(data, id): <strong>optional</strong> A function that is called 20x/sec when the button is held for at least 0.25 seconds.</p></li><li><p>getEffect(data, id): <strong>optional</strong>. A function that calculates and returns a gridable&#39;s effect, based on its position and data. (Whatever that means for a gridable)</p></li><li><p>layer: <strong>assigned automagically</strong>. It&#39;s the same value as the name of this layer, so you can do <code>player[this.layer].points</code> or similar.</p></li></ul>`,10),t=[o];function p(r,i,c,d,y,E){return a(),n("div",null,t)}const g=s(e,[["render",p]]);export{u as __pageData,g as default};
