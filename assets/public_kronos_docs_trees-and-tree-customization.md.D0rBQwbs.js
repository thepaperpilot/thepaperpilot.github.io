import{_ as e,c as t,o as a,a5 as i}from"./chunks/framework.CK8QU5WH.js";const y=JSON.parse('{"title":"Trees and tree customization","description":"","frontmatter":{},"headers":[],"relativePath":"public/kronos/docs/trees-and-tree-customization.md","filePath":"public/kronos/docs/trees-and-tree-customization.md"}'),s={name:"public/kronos/docs/trees-and-tree-customization.md"},o=i(`<h1 id="trees-and-tree-customization" tabindex="-1">Trees and tree customization <a class="header-anchor" href="#trees-and-tree-customization" aria-label="Permalink to &quot;Trees and tree customization&quot;">​</a></h1><p>If you want to have something beyond the standard tree on the left tab, you can do that in tree.js. You can change the layout of the tree, including making non-layer nodes, change it into something other than a tree, or hide the left tab altogether. This also introduces the &quot;tree&quot; component, which can be used in your layers as well.</p><h2 id="layoutinfo" tabindex="-1">layoutInfo <a class="header-anchor" href="#layoutinfo" aria-label="Permalink to &quot;layoutInfo&quot;">​</a></h2><p>The most important part is layoutInfo, containing:</p><ul><li>startTab: The id of the default tab to show on the left at the start.</li><li>showTree: True if the tree tab should be shown at the start of the game. (The other tab will fill the whole page)</li><li>treeLayout: If present, overrides the tree layout and places nodes as you describe instead (explained in the next section).</li></ul><p>Additionally, if you want the main layout to not be a tree, you can edit the &quot;tree-tab&quot; layer at the bottom of tree.js to modify it just like a normal layer&#39;s tab. You can even switch between left tabs, using showNavTab(layer) to make that layer appear on the left.</p><h2 id="trees" tabindex="-1">Trees <a class="header-anchor" href="#trees" aria-label="Permalink to &quot;Trees&quot;">​</a></h2><p>The tree component is defined as an array of arrays of names of layers or nodes to show in the tree. They work just like layers/ nodes in the main tree (but branches between nodes will only work on the first node if you have duplicates.)</p><p>Here is an example tree:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;p&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;left&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;blank&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;right&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;blank&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;a&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;b&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;blank&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;c&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;weirdButton&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]]</span></span></code></pre></div><h2 id="nodes" tabindex="-1">Nodes <a class="header-anchor" href="#nodes" aria-label="Permalink to &quot;Nodes&quot;">​</a></h2><p>Nodes are non-layer buttons that can go in trees. They are defined similarly to layers, but with addNode instead of addLayer.</p><p>Features:</p><ul><li><p>color: <strong>optional</strong>, The node&#39;s color. (A string in hex format with a #)</p></li><li><p>symbol: <strong>optional</strong> The text on the button (The id capitalized by default)</p></li><li><p>canClick(): Returns true if the player can click the node. ()</p></li><li><p>onClick(): The function called when the node is clicked.</p></li><li><p>layerShown(): <strong>optional</strong>, A function returning a bool which determines if this node should be visible. It can also return &quot;ghost&quot;, which will hide the layer, but its node will still take up space in its tree.</p></li><li><p>branches: <strong>optional</strong>. An array of layer/node ids. On a tree, a line will appear from this node to all of the nodes in the list. Alternatively, an entry in the array can be a 2-element array consisting of the id and a color value. The color value can either be a string with a hex color code, or a number from 1-3 (theme-affected colors).</p></li><li><p>nodeStyle: <strong>optional</strong>. A CSS object, where the keys are CSS attributes, which styles this node on the tree.</p></li><li><p>tooltip() / tooltipLocked(): <strong>optional</strong>. Functions that return text, which is the tooltip for the node when the layer is unlocked or locked, respectively. By default the tooltips behave the same as in the original Prestige Tree.</p></li><li><p>row: <strong>optional</strong>, the row that this node appears in (for the default tree).</p></li><li><p>position: <strong>optional</strong>, Determines the horizontal position of the layer in its row in a default tree. By default, it uses the id, and layers/nodes are sorted in alphabetical order.</p></li></ul>`,14),n=[o];function l(r,h,d,p,u,c){return a(),t("div",null,n)}const g=e(s,[["render",l]]);export{y as __pageData,g as default};
