import{_ as s,o as a,c as o,Q as n}from"./chunks/framework.1169fbc9.js";const d=JSON.parse('{"title":"Custom tab layouts","description":"","frontmatter":{},"headers":[],"relativePath":"public/lit/docs/custom-tab-layouts.md","filePath":"public/lit/docs/custom-tab-layouts.md","lastUpdated":1664930832000}'),t={name:"public/lit/docs/custom-tab-layouts.md"},e=n(`<h1 id="custom-tab-layouts" tabindex="-1">Custom tab layouts <a class="header-anchor" href="#custom-tab-layouts" aria-label="Permalink to &quot;Custom tab layouts&quot;">​</a></h1><p>Note: If you are using subtabs, <code>tabFormat</code> is used differently, but you still use the same format within each subtabs. <a href="./subtabs-and-microtabs">See here for more on subtabs</a>.</p><p>Custom tab layouts can be used to do basically anything in a tab window, especially combined with the &quot;style&quot; layer feature. The <code>tabFormat</code> feature is an array of things, like this:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">tabFormat</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;main-display&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    [</span><span style="color:#9ECBFF;">&quot;prestige-button&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() { </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Melt your points into &quot;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;blank&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    [</span><span style="color:#9ECBFF;">&quot;display-text&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() { </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;I have &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">format</span><span style="color:#E1E4E8;">(player.points) </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39; pointy points!&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { </span><span style="color:#9ECBFF;">&quot;color&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;red&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;font-size&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;32px&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;font-family&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Comic Sans MS&quot;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;blank&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    [</span><span style="color:#9ECBFF;">&quot;toggle&quot;</span><span style="color:#E1E4E8;">, [</span><span style="color:#9ECBFF;">&quot;c&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;beep&quot;</span><span style="color:#E1E4E8;">]],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;milestones&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;blank&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;blank&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;upgrades&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">tabFormat</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;main-display&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    [</span><span style="color:#032F62;">&quot;prestige-button&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() { </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Melt your points into &quot;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;blank&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    [</span><span style="color:#032F62;">&quot;display-text&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() { </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;I have &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">format</span><span style="color:#24292E;">(player.points) </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39; pointy points!&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { </span><span style="color:#032F62;">&quot;color&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;red&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;font-size&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;32px&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;font-family&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Comic Sans MS&quot;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;blank&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    [</span><span style="color:#032F62;">&quot;toggle&quot;</span><span style="color:#24292E;">, [</span><span style="color:#032F62;">&quot;c&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;beep&quot;</span><span style="color:#24292E;">]],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;milestones&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;blank&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;blank&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;upgrades&quot;</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><p>It is a list of components, which can be either just a name, or an array with arguments. If it&#39;s an array, the first item is the name of the component, the second is the data passed into it, and the third (optional) applies a CSS style to it with a &quot;CSS object&quot;, where the keys are CSS attributes.</p><p>These are the existing components, but you can create more in <a href="/js/components.js">components.js</a>:</p><ul><li><p>display-text: Displays some text (can use basic HTML). The argument is the text to display. It can also be a function that returns updating text.</p></li><li><p>raw-html: Displays some basic HTML, can also be a function.</p></li><li><p>blank: Adds empty space. The default dimensions are 8px x 17px. The argument changes the dimensions. If it&#39;s a single value (e.g. &quot;20px&quot;), that determines the height. If you have a pair of arguments, the first is width and the second is height.</p></li><li><p>row: Display a list of components horizontally. The argument is an array of components in the tab layout format.</p></li><li><p>column: Display a list of components vertically. The argument is an array of components in the tab layout format. This is useful to display columns within a row.</p></li><li><p>main-display: The text that displays the main currency for the layer and its effects.</p></li><li><p>resource-display: The text that displays the currency that this layer is based on, as well as the best and/or total values for this layer&#39;s prestige currency (if they are put in <code>startData</code> for this layer).</p></li><li><p>prestige-button: The argument is a string that the prestige button should say before the amount of currency you will gain. It can also be a function that returns updating text.</p></li><li><p>upgrades: The layer&#39;s upgrades. The argument is optional, and is a the list of rows this component should include, if it doesn&#39;t have all of them.</p></li><li><p>milestones, challenges, achievements: Display the upgrades, milestones, and challenges for a layer, as appropriate.</p></li><li><p>buyables, clickables: Display all of the buyables/clickables for this layer, as appropriate. The argument is optional and is the size of the boxes in pixels.</p></li><li><p>microtabs: Display a set of subtabs for an area. The argument is the name of the set of microtabs in the &quot;microtabs&quot; feature.</p></li><li><p>bar: Display a bar. The argument is the id of the bar to display.</p></li><li><p>infobox: Display an infobox. The argument is the id of the infobox to display.</p></li><li><p>tree: Displays a tree. The argument is an array of arrays containing the names of the nodes in the tree (first by row, then by column) <a href="./trees-and-tree-customization">See here for more information on tree layouts and nodes!</a></p></li><li><p>toggle: A toggle button that toggles a bool value. The data is a pair that identifies what bool to toggle, e.g. <code>[layer, id]</code></p></li></ul><p>The rest of the components are sub-components. They can be used just like other components, but are typically part of another component.</p><ul><li><p>upgrade, milestone, challenge, buyable, clickable, achievement: An individual upgrade, challenge, etc. The argument is the id. This can be used if you want to have upgrades split up across multiple subtabs, for example.</p></li><li><p>respec-button, master-button: The respec and master buttons for buyables and clickables, respectively.</p></li><li><p>sell-one, sell-all: The &quot;sell one&quot; and &quot;sell all&quot; for buyables, respectively. The argument is the id of the buyable.</p></li></ul>`,9),l=[e];function p(r,c,i,y,u,E){return a(),o("div",null,l)}const b=s(t,[["render",p]]);export{d as __pageData,b as default};
