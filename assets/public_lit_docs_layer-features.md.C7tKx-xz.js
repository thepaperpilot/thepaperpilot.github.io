import{_ as e,c as t,o as a,a1 as s}from"./chunks/framework.CW2X4ZVO.js";const y=JSON.parse('{"title":"Layer Features","description":"","frontmatter":{},"headers":[],"relativePath":"public/lit/docs/layer-features.md","filePath":"public/lit/docs/layer-features.md","lastUpdated":1701137263000}'),i={name:"public/lit/docs/layer-features.md"},o=s(`<h1 id="layer-features" tabindex="-1">Layer Features <a class="header-anchor" href="#layer-features" aria-label="Permalink to &quot;Layer Features&quot;">​</a></h1><p>This is a more comprehensive list of established features to add to layers. You can add more freely, if you want to have other functions or values associated with your layer. These have special functionality, though.</p><p>You can make almost any value dynamic by using a function in its place, including all display strings and styling/color features.</p><h2 id="layer-definition-features" tabindex="-1">Layer Definition features <a class="header-anchor" href="#layer-definition-features" aria-label="Permalink to &quot;Layer Definition features&quot;">​</a></h2><ul><li><p>layer: <strong>assigned automagically</strong>. It&#39;s the same value as the name of this layer, so you can do <code>player[this.layer].points</code> or similar to access the saved value. It makes copying code to new layers easier. It is also assigned to all upgrades and buyables and such.</p></li><li><p>name: <strong>optional</strong>. used in reset confirmations (and the default infobox title). If absent, it just uses the layer&#39;s id.</p></li><li><p>startData(): A function to return the default save data for this layer. Add any variables you have to it. Make sure to use <code>Decimal</code> values rather than normal numbers.</p><p>Standard values: - Required: - unlocked: a bool determining if this layer is unlocked or not - points: a Decimal, the main currency for the layer - Optional: - total: A Decimal, tracks total amount of main prestige currency. Always tracked, but only shown if you add it here. - best: A Decimal, tracks highest amount of main prestige currency. Always tracked, but only shown if you add it here. - unlockOrder: used to keep track of relevant layers unlocked before this one. - resetTime: A number, time since this layer was last prestiged (or reset by another layer)</p></li><li><p>color: A color associated with this layer, used in many places. (A string in hex format with a #)</p></li><li><p>row: The row of the layer, starting at 0. This affects where the node appears on the standard tree, and which resets affect the layer.</p><p>Using &quot;side&quot; instead of a number will cause the layer to appear off to the side as a smaller node (useful for achievements and statistics). Side layers are not affected by resets unless you add a doReset to them.</p></li><li><p>displayRow: <strong>OVERRIDE</strong> Changes where the layer node appears without changing where it is in the reset order.</p></li><li><p>resource: Name of the main currency you gain by resetting on this layer.</p></li><li><p>effect(): <strong>optional</strong>. A function that calculates and returns the current values of any bonuses inherent to the main currency. Can return a value or an object containing multiple values. <em>You will also have to implement the effect where it is applied.</em></p></li><li><p>effectDescription: <strong>optional</strong>. A function that returns a description of this effect. If the text stays constant, it can just be a string.</p></li><li><p>layerShown(): <strong>optional</strong>, A function returning a bool which determines if this layer&#39;s node should be visible on the tree. It can also return &quot;ghost&quot;, which will hide the layer, but its node will still take up space in the tree. Defaults to true.</p></li><li><p>hotkeys: <strong>optional</strong>. An array containing information on any hotkeys associated with this layer:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hotkeys</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        key: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;p&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// What the hotkey button is. Use uppercase if it&#39;s combined with shift, or &quot;ctrl+x&quot; for holding down ctrl.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        description: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;p: reset your points for prestige points&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// The description of the hotkey that is displayed in the game&#39;s How To Play tab</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        onPress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (player.p.unlocked) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">doReset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;p&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div></li><li><p>style: <strong>optional</strong>. a &quot;CSS object&quot; where the keys are CSS attributes, containing any CSS that should affect this layer&#39;s entire tab.</p></li><li><p>tabFormat: <strong>optional</strong>. use this if you want to add extra things to your tab or change the layout. <a href="./custom-tab-layouts">See here for more info.</a></p></li><li><p>midsection: <strong>optional</strong>, an alternative to <code>tabFormat</code>, which is inserted in between Milestones and Buyables in the standard tab layout. (cannot do subtabs)</p></li></ul><h2 id="big-features-all-optional" tabindex="-1">Big features (all optional) <a class="header-anchor" href="#big-features-all-optional" aria-label="Permalink to &quot;Big features (all optional)&quot;">​</a></h2><ul><li><p>upgrades: A grid of one-time purchases which can have unique upgrade conditions, currency costs, and bonuses. <a href="./upgrades">See here for more info.</a></p></li><li><p>milestones: A list of bonuses gained upon reaching certain thresholds of a resource. Often used for automation/QOL. <a href="./milestones">See here for more info.</a></p></li><li><p>challenges: The player can enter challenges, which make the game harder. If they reach a goal and beat the challenge, they recieve a bonus. <a href="./challenges">See here for more info.</a></p></li><li><p>buyables: Effectively upgrades that can be bought multiple times, and are optionally respeccable. Many uses. <a href="./buyables">See here for more info.</a></p></li><li><p>clickables: Extremely versatile and generalized buttons which can only be clicked sometimes. <a href="./clickables">See here for more info.</a></p></li><li><p>microtabs: An area that functions like a set of subtabs, with buttons at the top changing the content within. (Advanced) <a href="./subtabs-and-microtabs">See here for more info.</a></p></li><li><p>bars: Display some information as a progress bar, gague, or similar. They are highly customizable, and can be vertical as well. <a href="./bars">See here for more info.</a></p></li><li><p>achievements: Kind of like milestones, but with a different display style and some other differences. Extra features are on the way at a later date! <a href="./achievements">See here for more info.</a></p></li><li><p>infoboxes: Displays some text in a box that can be shown or hidden. <a href="./infoboxes">See here for more info.</a></p></li><li><p>achievementPopups, milestonePopups: <strong>optional</strong>, If false, disables popup message when you get the achievement/milestone. True by default.</p></li></ul><h2 id="prestige-formula-features" tabindex="-1">Prestige formula features <a class="header-anchor" href="#prestige-formula-features" aria-label="Permalink to &quot;Prestige formula features&quot;">​</a></h2><ul><li><p>type: <strong>optional</strong>. Determines which prestige formula you use. Defaults to &quot;none&quot;.</p><ul><li>&quot;normal&quot;: The amount of currency you gain is independent of its current amount (like Prestige). The formula before bonuses is based on <code>baseResource^exponent</code></li><li>&quot;static&quot;: The cost is dependent on your total after reset. The formula before bonuses is based on <code>base^(x^exponent)</code></li><li>&quot;custom&quot;: You can define everything, from the calculations to the text on the button, yourself. (See more at the bottom)</li><li>&quot;none&quot;: This layer does not prestige, and therefore does not need any of the other features in this section.</li></ul></li><li><p>baseResource: The name of the resource that determines how much of the main currency you gain on reset.</p></li><li><p>baseAmount(): A function that gets the current value of the base resource.</p></li><li><p>requires: A Decimal, the amount of the base needed to gain 1 of the prestige currency. Also the amount required to unlock the layer. You can instead make this a function, to make it harder if another layer was unlocked first (based on unlockOrder).</p></li><li><p>exponent: Used as described above.</p></li><li><p>base: <strong>sometimes required</strong>. required for &quot;static&quot; layers, used as described above. If absent, defaults to 2. Must be greater than 1.</p></li><li><p>roundUpCost: <strong>optional</strong>. a bool, which is true if the resource cost needs to be rounded up. (use if the base resource is a &quot;static&quot; currency.)</p></li><li><p>gainMult(), gainExp(): <strong>optional</strong>. Functions that calculate the multiplier and exponent on resource gain from upgrades and boosts and such. Plug in any bonuses here.</p></li><li><p>softcap, softcapPower: <strong>optional</strong>. For normal layers, gain beyond [softcap] points is put to the [softcapPower]th power Default for softcap is e1e7, and for power is 0.5.</p></li></ul><h2 id="other-prestige-related-features" tabindex="-1">Other prestige-related features <a class="header-anchor" href="#other-prestige-related-features" aria-label="Permalink to &quot;Other prestige-related features&quot;">​</a></h2><ul><li><p>canBuyMax(): <strong>sometimes required</strong>. required for static layers, function used to determine if buying max is permitted.</p></li><li><p>onPrestige(gain): <strong>optional</strong>. A function that triggers when this layer prestiges, just before you gain the currency. Can be used to have secondary resource gain on prestige, or to recalculate things or whatnot.</p></li><li><p>resetDescription: <strong>optional</strong>. Use this to replace &quot;Reset for &quot; on the Prestige button with something else.</p></li><li><p>prestigeButtonText(): <strong>sometimes required</strong>. Use this to make the entirety of the text a Prestige button contains. Only required for custom layers, but usable by all types.</p></li><li><p>passiveGeneration(): <strong>optional</strong>, returns a regular number. You automatically generate your gain times this number every second (does nothing if absent) This is good for automating Normal layers.</p></li><li><p>autoPrestige(): <strong>optional</strong>, returns a boolean, if true, the layer will always automatically do a prestige if it can. This is good for automating Static layers.</p></li></ul><h2 id="tree-node-features" tabindex="-1">Tree/node features <a class="header-anchor" href="#tree-node-features" aria-label="Permalink to &quot;Tree/node features&quot;">​</a></h2><ul><li><p>symbol: <strong>optional</strong>. The text that appears on this layer&#39;s node. Default is the layer id with the first letter capitalized.</p></li><li><p>image: <strong>override</strong>. The url (local or global) of an image that goes on the node. (Overrides symbol)</p></li><li><p>position: <strong>optional</strong>. Determines the horizontal position of the layer in its row in a standard tree. By default, it uses the layer id, and layers are sorted in alphabetical order.</p></li><li><p>branches: <strong>optional</strong>. An array of layer/node ids. On a tree, a line will appear from this layer to all of the layers in the list. Alternatively, an entry in the array can be a 2-element array consisting of the layer id and a color value. The color value can either be a string with a hex color code, or a number from 1-3 (theme-affected colors).</p></li><li><p>nodeStyle: <strong>optional</strong>. A CSS object, where the keys are CSS attributes, which styles this layer&#39;s node on the tree.</p></li><li><p>tooltip() / tooltipLocked(): <strong>optional</strong>. Functions that return text, which is the tooltip for the node when the layer is unlocked or locked, respectively. By default the tooltips behave the same as in the original Prestige Tree. If the value is &quot;&quot;, the tooltip will be disabled.</p></li></ul><h2 id="other-features" tabindex="-1">Other features <a class="header-anchor" href="#other-features" aria-label="Permalink to &quot;Other features&quot;">​</a></h2><ul><li><p>doReset(resettingLayer): <strong>optional</strong>. Is triggered when a layer on a row greater than or equal to this one does a reset. The default behavior is to reset everything on the row, but only if it was triggered by a layer in a higher row. <code>doReset</code> is always called for side layers, but for these the default behavior is to reset nothing.</p><p>If you want to keep things, determine what to keep based on <code>resettingLayer</code>, <code>milestones</code>, and such, then call <code>layerDataReset(layer, keep)</code>, where <code>layer</code> is this layer, and <code>keep</code> is an array of the names of things to keep. It can include things like &quot;points&quot;, &quot;best&quot;, &quot;total&quot; (for this layer&#39;s prestige currency), &quot;upgrades&quot;, any unique variables like &quot;generatorPower&quot;, etc. If you want to only keep specific upgrades or something like that, save them in a separate variable, then call <code>layerDataReset</code>, and then set <code>player[this.layer].upgrades</code> to the saved upgrades.</p></li><li><p>update(diff): <strong>optional</strong>. This function is called every game tick. Use it for any passive resource production or time-based things. <code>diff</code> is the time since the last tick.</p></li><li><p>autoUpgrade: <strong>optional</strong>, a boolean value, if true, the game will attempt to buy this layer&#39;s upgrades every tick. Defaults to false.</p></li><li><p>automate(): <strong>optional</strong>. This function is called every game tick, after production. Use it to activate automation things that aren&#39;t otherwise supported.</p></li><li><p>resetsNothing: <strong>optional</strong>. Returns true if this layer shouldn&#39;t trigger any resets when you prestige.</p></li><li><p>increaseUnlockOrder: <strong>optional</strong>. An array of layer ids. When this layer is unlocked for the first time, the <code>unlockOrder</code> value for any not-yet-unlocked layers in this list increases. This can be used to make them harder to unlock.</p></li><li><p>shouldNotify: <strong>optional</strong>. A function to return true if this layer should be highlighted in the tree. The layer will automatically be highlighted if you can buy an upgrade whether you have this or not.</p></li><li><p>componentStyles: <strong>optional</strong>. An object that contains a set of functions returning CSS objects. Each of these will be applied to any components on the layer with the type of its id. Example:</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">componentStyles</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;challenge&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;height&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;200px&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;prestige-button&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;color&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#AA66AA&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="custom-prestige-type" tabindex="-1">Custom Prestige type <a class="header-anchor" href="#custom-prestige-type" aria-label="Permalink to &quot;Custom Prestige type&quot;">​</a></h2><p>(All of these can also be used by other prestige types)</p><ul><li><p>getResetGain(): <strong>mostly for custom prestige type</strong>. Returns how many points you should get if you reset now. You can call <code>getResetGain(this.layer, useType = &quot;static&quot;)</code> or similar to calculate what your gain would be under another prestige type (provided you have all of the required features in the layer).</p></li><li><p>getNextAt(canMax=false): <strong>mostly for custom prestige type</strong>. Returns how many of the base currency you need to get to the next point. <code>canMax</code> is an optional variable used with Static-ish layers to differentiate between if it&#39;s looking for the first point you can reset at, or the requirement for any gain at all (Supporting both is good). You can also call <code>getNextAt(this.layer, canMax=false, useType = &quot;static&quot;)</code> or similar to calculate what your next at would be under another prestige type (provided you have all of the required features in the layer).</p></li><li><p>canReset(): <strong>mostly for custom prestige type</strong>. Return true only if you have the resources required to do a prestige here.</p></li><li><p>prestigeNotify(): <strong>mostly for custom prestige types</strong>, returns true if this layer should be subtly highlighted to indicate you can prestige for a meaningful gain.</p></li></ul>`,19),r=[o];function n(l,h,u,p,d,c){return a(),t("div",null,r)}const f=e(i,[["render",n]]);export{y as __pageData,f as default};
