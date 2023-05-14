import{_ as s,c as a,o as n,d as e}from"./app.c95a51e0.js";const u=JSON.parse('{"title":"Grids","description":"","frontmatter":{},"headers":[],"relativePath":"public/kronos/docs/grids.md","lastUpdated":null}'),l={name:"public/kronos/docs/grids.md"},o=e(`<h1 id="grids" tabindex="-1">Grids <a class="header-anchor" href="#grids" aria-hidden="true">#</a></h1><p>Grids are an easier way of making a group of similar clickables. They all have the same behavior, but are different based on their data.</p><p><strong>NOTE: Gridables are similar to clickables in some respects, but are fundamentally different from normal TMT components in quite a few ways. Be sure to keep these in mind:</strong></p><ul><li>Gridable ids use base 100 instead of base 10, so you can have more than 10 tiles in a row. This means that a grid might look like this: 101 102 201 202</li><li>Individual gridables are not defined individually. All properties go directly into the &quot;grid&quot; object. Functions are called with arguments for the id of the gridables and its associated data, so you can give them the appropriate appearance and properties based on that.</li><li>If you need two unrelated grids in a layer, you&#39;ll need to use a layer proxy component.</li></ul><p>Useful functions for dealing with grids:</p><ul><li>getGridData(layer, id): get the data for the chosen gridable</li><li>setGridData(layer, id, state): set the data for the chosen gridable</li><li>gridEffect(layer, id): get the effect for the chosen gridable</li></ul><p>The grid should be formatted like this:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#FFCB6B;">grid</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">rows</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// If these are dynamic make sure to have a max value as well!</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">cols</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">getStartData</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">getUnlocked</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// Default</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">getCanClick</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">onClick</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">player</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">layer</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">grid</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">getDisplay</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">etc</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>Features:</p><ul><li><p>rows, cols: The amount of rows and columns of gridable to display.</p></li><li><p>maxRows, maxCols: <strong>sometimes needed</strong>. If rows or cols are dynamic, you need to define the maximum amount that there can be (you can increase it when you update the game though). These CANNOT be dynamic.</p></li><li><p>getStartData(id): Creates the default data for the gridable at this position. This can be an object, or a regular value.</p></li><li><p>getUnlocked(id): <strong>optional</strong>. Returns true if the gridable at this position should be visible.</p></li><li><p>getTitle(data, id): <strong>optional</strong>. Returns text that should displayed at the top in a larger font, based on the position and data of the gridable.</p></li><li><p>getDisplay(data, id): <strong>optional</strong>. Returns everything that should be displayed on the gridable after the title, based on the position and data of the gridable.</p></li><li><p>getStyle(data, id): <strong>optional</strong>. Returns CSS to apply to this gridable, in the form of an object where the keys are CSS attributes, and the values are the values for those attributes (both as strings).</p></li><li><p>getCanClick(data, id): <strong>optional</strong>. A function returning a bool to determine if you can click a gridable, based on its data and position. If absent, you can always click it.</p></li><li><p>onClick(data, id): A function that implements clicking on the gridable, based on its position and data.</p></li><li><p>onHold(data, id): <strong>optional</strong> A function that is called 20x/sec when the button is held for at least 0.25 seconds.</p></li><li><p>getEffect(data, id): <strong>optional</strong>. A function that calculates and returns a gridable&#39;s effect, based on its position and data. (Whatever that means for a gridable)</p></li><li><p>layer: <strong>assigned automagically</strong>. It&#39;s the same value as the name of this layer, so you can do <code>player[this.layer].points</code> or similar.</p></li></ul>`,10),t=[o];function p(r,i,c,d,y,F){return n(),a("div",null,t)}const g=s(l,[["render",p]]);export{u as __pageData,g as default};