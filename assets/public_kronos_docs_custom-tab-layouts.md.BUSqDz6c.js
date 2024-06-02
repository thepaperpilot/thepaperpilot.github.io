import{_ as s,c as a,o as i,a1 as t}from"./chunks/framework.CW2X4ZVO.js";const c=JSON.parse('{"title":"Custom tab layouts","description":"","frontmatter":{},"headers":[],"relativePath":"public/kronos/docs/custom-tab-layouts.md","filePath":"public/kronos/docs/custom-tab-layouts.md","lastUpdated":1701136977000}'),e={name:"public/kronos/docs/custom-tab-layouts.md"},n=t(`<h1 id="custom-tab-layouts" tabindex="-1">Custom tab layouts <a class="header-anchor" href="#custom-tab-layouts" aria-label="Permalink to &quot;Custom tab layouts&quot;">​</a></h1><p>Note: If you are using subtabs, <code>tabFormat</code> is used differently, but the same format is used for defining their layouts. <a href="./subtabs-and-microtabs">See here for more on subtabs</a>.</p><p>Custom tab layouts can be used to do basically anything in a tab window, especially combined with the &quot;style&quot; layer feature. The <code>tabFormat</code> feature is an array of things, like this:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tabFormat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;main-display&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;prestige-button&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Melt your points into &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;blank&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;display-text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;I have &#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(player.points) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39; pointy points!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        { </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;color&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;red&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;font-size&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;32px&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;font-family&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Comic Sans MS&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;blank&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;toggle&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;c&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;beep&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;milestones&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;blank&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;blank&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;upgrades&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><p>It is a list of components, which can be either just a name, or an array with arguments. If it&#39;s an array, the first item is the name of the component, the second is the data passed into it, and the third (optional) applies a CSS style to it with a &quot;CSS object&quot;, where the keys are CSS attributes.</p><p>These are the existing components, but you can create more in <a href="/js/components.js">components.js</a>:</p><ul><li><p>display-text: Displays some text (can use basic HTML). The argument is the text to display. It can also be a function that returns updating text.</p></li><li><p>raw-html: Displays some basic HTML, can also be a function.</p></li><li><p>blank: Adds empty space. The default dimensions are 8px x 17px. The argument changes the dimensions. If it&#39;s a single value (e.g. &quot;20px&quot;), that determines the height. If you have a pair of arguments, the first is width and the second is height.</p></li><li><p>row: Display a list of components horizontally. The argument is an array of components in the tab layout format.</p></li><li><p>column: Display a list of components vertically. The argument is an array of components in the tab layout format. This is useful to display columns within a row.</p></li><li><p>main-display: The text that displays the main currency for the layer and its effects. The argument is the amount of precision to use, allowing it to display non-whole numbers.</p></li><li><p>resource-display: The text that displays the currency that this layer is based on, as well as the best and/or total values for this layer&#39;s prestige currency (if they are put in <code>startData</code> for this layer).</p></li><li><p>prestige-button: The argument is a string that the prestige button should say before the amount of currency you will gain. It can also be a function that returns updating text.</p></li><li><p>text-input: A text input box. The argument is the name of the variable in player[layer] that the input is for, player[layer][argument] (Works with strings, numbers, and Decimals!)</p></li><li><p>slider: Lets the user input a value with a slider. The argument a 3-element array: [name, min, max]. The name is the name of the variable in player[layer] that the input that the input is for, and min and max are the limits of the slider. (Does not work for Decimal values)</p></li><li><p>upgrades: The layer&#39;s upgrades. The argument is optional, and is a the list of rows this component should include, if it doesn&#39;t have all of them.</p></li><li><p>milestones, challenges, achievements: Display the upgrades, milestones, and challenges for a layer, as appropriate.</p></li><li><p>buyables, clickables: Display all of the buyables/clickables for this layer, as appropriate. The argument is optional and is the size of the boxes in pixels.</p></li><li><p>microtabs: Display a set of subtabs for an area. The argument is the name of the set of microtabs in the &quot;microtabs&quot; feature.</p></li><li><p>bar: Display a bar. The argument is the id of the bar to display.</p></li><li><p>infobox: Display an infobox. The argument is the id of the infobox to display.</p></li><li><p>tree: Displays a tree. The argument is an array of arrays containing the names of the nodes in the tree (first by row, then by column) <a href="./trees-and-tree-customization">See here for more information on tree layouts and nodes!</a></p></li><li><p>toggle: A toggle button that toggles a bool value. The argument is a pair that identifies the location in player of the bool to toggle, e.g. <code>[layer, id]</code>. &#39;layer&#39; also affects the color of the toggle.</p></li><li><p>grid: Displays the gridable grid for the layer. If you need more than one grid, use a layer proxy.</p></li><li><p>layer-proxy: Lets you use components from another layer. The argument is a pair, <code>[layer, data]</code>, consisting of the id of the layer to proxy from, and the tabFormat for the components to show. (Note: you cannot use a microtab within a layer proxy)</p></li></ul><p>The rest of the components are sub-components. They can be used just like other components, but are typically part of another component.</p><ul><li><p>upgrade, milestone, challenge, buyable, clickable, achievement, gridable: An individual upgrade, challenge, etc. The argument is the id. This can be used if you want to have upgrades split up across multiple subtabs, for example.</p></li><li><p>respec-button, master-button: The respec and master buttons for buyables and clickables, respectively.</p></li><li><p>sell-one, sell-all: The &quot;sell one&quot; and &quot;sell all&quot; for buyables, respectively. The argument is the id of the buyable.</p></li></ul>`,9),l=[n];function o(h,p,r,u,k,d){return i(),a("div",null,l)}const g=s(e,[["render",o]]);export{c as __pageData,g as default};
