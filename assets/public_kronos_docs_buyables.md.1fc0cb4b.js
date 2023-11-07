import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.1169fbc9.js";const b=JSON.parse('{"title":"Buyables","description":"","frontmatter":{},"headers":[],"relativePath":"public/kronos/docs/buyables.md","filePath":"public/kronos/docs/buyables.md","lastUpdated":1664930814000}'),e={name:"public/kronos/docs/buyables.md"},o=l(`<h1 id="buyables" tabindex="-1">Buyables <a class="header-anchor" href="#buyables" aria-label="Permalink to &quot;Buyables&quot;">​</a></h1><p>Buyables are usually things that can be bought multiple times with scaling costs. They come with optional buttons that can be used for respeccing or selling buyables, among other things.</p><p>The amount of a buyable owned is a <code>Decimal</code>.</p><p>Useful functions for dealing with buyables and implementing their effects:</p><ul><li>getBuyableAmount(layer, id): get the amount of the buyable the player has</li><li>setBuyableAmount(layer, id, amount): set the amount of the buyable the player has</li><li>buyableEffect(layer, id): Returns the current effects of the buyable, if any.</li></ul><p>Buyables should be formatted like this:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">buyables</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">11</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">cost</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">x</span><span style="color:#E1E4E8;">) { </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Decimal</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">mul</span><span style="color:#E1E4E8;">(x) },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">display</span><span style="color:#E1E4E8;">() { </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Blah&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">canAfford</span><span style="color:#E1E4E8;">() { </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> player[</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.layer].points.</span><span style="color:#B392F0;">gte</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">cost</span><span style="color:#E1E4E8;">()) },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">buy</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">            player[</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.layer].points </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> player[</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.layer].points.</span><span style="color:#B392F0;">sub</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">cost</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">setBuyableAmount</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.layer, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.id, </span><span style="color:#B392F0;">getBuyableAmount</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.layer, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.id).</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        etc</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    etc</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">buyables</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">11</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">cost</span><span style="color:#24292E;">(</span><span style="color:#E36209;">x</span><span style="color:#24292E;">) { </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Decimal</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">mul</span><span style="color:#24292E;">(x) },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">display</span><span style="color:#24292E;">() { </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Blah&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">canAfford</span><span style="color:#24292E;">() { </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> player[</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.layer].points.</span><span style="color:#6F42C1;">gte</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">cost</span><span style="color:#24292E;">()) },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">buy</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">            player[</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.layer].points </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> player[</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.layer].points.</span><span style="color:#6F42C1;">sub</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">cost</span><span style="color:#24292E;">())</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">setBuyableAmount</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.layer, </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.id, </span><span style="color:#6F42C1;">getBuyableAmount</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.layer, </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.id).</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        etc</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    etc</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>Features:</p><ul><li><p>title: <strong>optional</strong>. displayed at the top in a larger font. It can also be a function that returns updating text.</p></li><li><p>cost(): cost for buying the next buyable. Can have an optional argument &quot;x&quot; to calculate the cost of the x+1th purchase. (x is a <code>Decimal</code>). Can return an object if there are multiple currencies.</p></li><li><p>effect(): <strong>optional</strong>. A function that calculates and returns the current values of bonuses of this buyable. Can have an optional argument &quot;x&quot; to calculate the effect of having x of the buyable.. Can return a value or an object containing multiple values.</p></li><li><p>display(): A function returning everything that should be displayed on the buyable after the title, likely including the description, amount bought, cost, and current effect. Can use basic HTML.</p></li><li><p>unlocked(): <strong>optional</strong>. A function returning a bool to determine if the buyable is visible or not. Default is unlocked.</p></li><li><p>canAfford(): A function returning a bool to determine if you can buy one of the buyables.</p></li><li><p>buy(): A function that implements buying one of the buyable, including spending the currency.</p></li><li><p>buyMax(): <strong>optional</strong>. A function that implements buying as many of the buyable as possible.</p></li><li><p>style: <strong>optional</strong>. Applies CSS to this buyable, in the form of an object where the keys are CSS attributes, and the values are the values for those attributes (both as strings).</p></li><li><p>purchaseLimit: <strong>optional</strong>. The limit on how many of the buyable can be bought. The default is no limit.</p></li><li><p>marked: <strong>optional</strong> Adds a mark to the corner of the buyable. If it&#39;s &quot;true&quot; it will be a star, but it can also be an image URL.</p></li><li><p>layer: <strong>assigned automagically</strong>. It&#39;s the same value as the name of this layer, so you can do <code>player[this.layer].points</code> or similar.</p></li><li><p>id: <strong>assigned automagically</strong>. It&#39;s the &quot;key&quot; which the buyable was stored under, for convenient access. The buyable in the example&#39;s id is 11.</p></li></ul><p>Sell One/Sell All:</p><p>Including a <code>sellOne</code> or <code>sellAll</code> function will cause an additional button to appear beneath the buyable. They are functionally identical, but &quot;sell one&quot; appears above &quot;sell all&quot;. You can also use them for other things.</p><ul><li><p>sellOne/sellAll(): <strong>optional</strong>. Called when the button is pressed. The standard use would be to decrease/reset the amount of the buyable, and possibly return some currency to the player.</p></li><li><p>canSellOne/canSellAll(): <strong>optional</strong>. booleans determining whether or not to show the buttons. If &quot;canSellOne/All&quot; is absent but &quot;sellOne/All&quot; is present, the appropriate button will always show.</p></li></ul><p>To add a respec button, or something similar, add the respecBuyables function to the main buyables object (not individual buyables). You can use these features along with it:</p><ul><li><p>respec(): <strong>optional</strong>. This is called when the button is pressed (after a toggleable confirmation message).</p></li><li><p>respecText: <strong>optional</strong>. Text to display on the respec Button.</p></li><li><p>showRespec(): <strong>optional</strong>. A function determining whether or not to show the button, if respecBuyables is defined. Defaults to true if absent.</p></li><li><p>respecMessage: <strong>optional</strong>. A custom confirmation message on respec, in place of the default one.</p></li></ul>`,14),t=[o];function p(r,c,i,y,u,E){return a(),n("div",null,t)}const d=s(e,[["render",p]]);export{b as __pageData,d as default};