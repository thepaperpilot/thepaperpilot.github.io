import{_ as s,o as e,c as a,Q as n}from"./chunks/framework.1169fbc9.js";const g=JSON.parse('{"title":"Upgrades","description":"","frontmatter":{},"headers":[],"relativePath":"public/lit/docs/upgrades.md","filePath":"public/lit/docs/upgrades.md","lastUpdated":1664930832000}'),t={name:"public/lit/docs/upgrades.md"},o=n(`<h1 id="upgrades" tabindex="-1">Upgrades <a class="header-anchor" href="#upgrades" aria-label="Permalink to &quot;Upgrades&quot;">​</a></h1><p>Useful functions for dealing with Upgrades and implementing their effects:</p><ul><li>hasUpgrade(layer, id): determine if the player has the upgrade</li><li>upgradeEffect(layer, id): Returns the current effects of the upgrade, if any</li><li>buyUpgrade(layer, id): Buys an upgrade directly (if affordable)</li></ul><p>Hint: Basic point gain is calculated in <a href="/js/mod.js">mod.js</a>&#39;s &quot;getPointGen&quot; function.</p><p>Upgrades are stored in the following format:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">upgrades</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">rows</span><span style="color:#E1E4E8;">: # </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> rows,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">cols</span><span style="color:#E1E4E8;">: # </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> columns,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">11</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        description: </span><span style="color:#9ECBFF;">&quot;Blah&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        cost: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Decimal</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        etc</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    etc</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">upgrades</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">rows</span><span style="color:#24292E;">: # </span><span style="color:#D73A49;">of</span><span style="color:#24292E;"> rows,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">cols</span><span style="color:#24292E;">: # </span><span style="color:#D73A49;">of</span><span style="color:#24292E;"> columns,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">11</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        description: </span><span style="color:#032F62;">&quot;Blah&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        cost: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Decimal</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">        etc</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    etc</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>Each upgrade should have an id where the first digit is the row and the second digit is the column.</p><p>Individual upgrades can have these features:</p><ul><li><p>title: <strong>optional</strong>. Displayed at the top in a larger font. It can also be a function that returns updating text. Can use basic HTML.</p></li><li><p>description: A description of the upgrade&#39;s effect. <em>You will also have to implement the effect where it is applied.</em> It can also be a function that returns updating text. Can use basic HTML.</p></li><li><p>effect(): <strong>optional</strong>. A function that calculates and returns the current values of any bonuses from the upgrade. Can return a value or an object containing multiple values.</p></li><li><p>effectDisplay(): <strong>optional</strong>. A function that returns a display of the current effects of the upgrade with formatting. Default displays nothing. Can use basic HTML.</p></li><li><p>fullDisplay(): <strong>OVERRIDE</strong>. Overrides the other displays and descriptions, and lets you set the full text for the upgrade. Can use basic HTML.</p></li><li><p>cost: A Decimal for the cost of the upgrade. By default, upgrades cost the main prestige currency for the layer.</p></li><li><p>unlocked(): <strong>optional</strong>. A function returning a bool to determine if the upgrade is visible or not. Default is unlocked.</p></li><li><p>onPurchase(): <strong>optional</strong>. This function will be called when the upgrade is purchased. Good for upgrades like &quot;makes this layer act like it was unlocked first&quot;.</p></li><li><p>style: <strong>optional</strong>. Applies CSS to this upgrade, in the form of an object where the keys are CSS attributes, and the values are the values for those attributes (both as strings).</p></li><li><p>layer: <strong>assigned automagically</strong>. It&#39;s the same value as the name of this layer, so you can do <code>player[this.layer].points</code> or similar.</p></li><li><p>id: <strong>assigned automagically</strong>. It&#39;s the &quot;key&quot; which the upgrade was stored under, for convenient access. The upgrade in the example&#39;s id is 11.</p></li></ul><p>By default, upgrades use the main prestige currency for the layer. You can include these to change them (but it needs to be a Decimal):</p><ul><li><p>currencyDisplayName: <strong>optional</strong>. The name to display for the currency for the upgrade.</p></li><li><p>currencyInternalName: <strong>optional</strong>. The internal name for that currency.</p></li><li><p>currencyLayer: <strong>optional</strong>. The internal name of the layer that currency is stored in. If it&#39;s not in a layer (like Points), omit. If it&#39;s not stored directly in a layer, instead use the next feature.</p></li><li><p>currencyLocation: <strong>optional</strong>. If your currency is stored in something inside a layer (e.g. a buyable&#39;s amount), you can access it this way. This is a function returning the object in &quot;player&quot; that contains the value (like <code>player[this.layer].buyables</code>)</p></li></ul><p>If you want to do something more complicated like upgrades that cost two currencies, you can override the purchase system with these (and you need to use fullDisplay as well)</p><ul><li><p>canAfford(): <strong>OVERRIDE</strong>, a function determining if you are able to buy the upgrade</p></li><li><p>pay(): <strong>OVERRIDE</strong>, a function that reduces your currencies when you buy the upgrade</p></li></ul>`,13),l=[o];function p(r,i,c,u,d,y){return e(),a("div",null,l)}const f=s(t,[["render",p]]);export{g as __pageData,f as default};
