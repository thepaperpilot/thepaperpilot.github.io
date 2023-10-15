import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.1169fbc9.js";const E=JSON.parse('{"title":"Buyables","description":"","frontmatter":{},"headers":[],"relativePath":"public/gamedevtree/docs/buyables.md","filePath":"public/gamedevtree/docs/buyables.md","lastUpdated":1621388509000}'),l={name:"public/gamedevtree/docs/buyables.md"},t=e(`<h1 id="buyables" tabindex="-1">Buyables <a class="header-anchor" href="#buyables" aria-label="Permalink to &quot;Buyables&quot;">​</a></h1><p>Buyables are usually things that can be bought multiple times with scaling costs. If you set a respec function, the player can reset the purchases to get their currency back.</p><p>The amount of a buyable owned is a Decimal. You can get or set the amount of a buyable with getBuyableAmt(layer, id) and setBuyableAmt(layer, id, amt). You can use buyableEffect(layer, id) to get the current effects of a buyable.</p><p>Buyables should be formatted like this:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">buyables</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">rows</span><span style="color:#E1E4E8;">: # </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> rows</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">cols</span><span style="color:#E1E4E8;">: # </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> columns</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">respec</span><span style="color:#E1E4E8;">() {}, </span><span style="color:#6A737D;">//**optional**, implement it to reset things and give back your currency.</span></span>
<span class="line"><span style="color:#E1E4E8;">                     </span><span style="color:#6A737D;">// Having this function makes a respec button appear</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">respecText</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">// **optional**, text that appears on the respec button</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">showRespecButton</span><span style="color:#E1E4E8;">(){} </span><span style="color:#6A737D;">//**optional**, a function determining whether or not to show the button. Defaults to true if absent.</span></span>
<span class="line"><span style="color:#E1E4E8;">        sellOneText, </span><span style="color:#B392F0;">sellAllText</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">// **optional**, text that appears on the &quot;sell one&quot; and &quot;sell all&quot; buttons respectively (if you are using them)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">11</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">display</span><span style="color:#E1E4E8;">() {</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Blah&quot;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">            etc</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        etc</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">buyables</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">rows</span><span style="color:#24292E;">: # </span><span style="color:#D73A49;">of</span><span style="color:#24292E;"> rows</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">cols</span><span style="color:#24292E;">: # </span><span style="color:#D73A49;">of</span><span style="color:#24292E;"> columns</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">respec</span><span style="color:#24292E;">() {}, </span><span style="color:#6A737D;">//**optional**, implement it to reset things and give back your currency.</span></span>
<span class="line"><span style="color:#24292E;">                     </span><span style="color:#6A737D;">// Having this function makes a respec button appear</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">respecText</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">// **optional**, text that appears on the respec button</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">showRespecButton</span><span style="color:#24292E;">(){} </span><span style="color:#6A737D;">//**optional**, a function determining whether or not to show the button. Defaults to true if absent.</span></span>
<span class="line"><span style="color:#24292E;">        sellOneText, </span><span style="color:#6F42C1;">sellAllText</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">// **optional**, text that appears on the &quot;sell one&quot; and &quot;sell all&quot; buttons respectively (if you are using them)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">11</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">display</span><span style="color:#24292E;">() {</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Blah&quot;</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">            etc</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        etc</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span></code></pre></div><p>Features:</p><ul><li><p>title: <strong>optional</strong>, displayed at the top in a larger font It can also be a function that returns updating text.</p></li><li><p>cost(): cost for buying the next buyable. Can have an optional argument &quot;x&quot; to calculate the cost of the x+1th object, but needs to use &quot;current amount&quot; as a default value for x. (x is a Decimal). Can return an object if there are multiple currencies.</p></li><li><p>effect(): <strong>optional</strong>, A function that calculates and returns the current values of bonuses of this buyable. Can return a value or an object containing multiple values.</p></li><li><p>display(): A function returning everything that should be displayed on the buyable after the title, likely including the description, amount bought, cost, and current effect. Can use basic HTML.</p></li><li><p>unlocked(): <strong>optional</strong>, A function returning a bool to determine if the buyable is visible or not. Default is unlocked.</p></li><li><p>canAfford(): A function returning a bool to determine if you can buy one of the buyables.</p></li><li><p>buy(): A function that implements buying one of the buyable, including spending the currency.</p></li><li><p>buyMax(): <strong>optional</strong>, A function that implements buying as many of the buyable as possible.</p></li><li><p>style: <strong>Optional</strong>, Applies CSS to this buyable, in the form of an object where the keys are CSS attributes, and the values are the values for those attributes (both as strings)</p></li><li><p>layer: <strong>Assigned automagically</strong>. It&#39;s the same value as the name of this layer, so you can do player[this.layer].points or similar</p></li><li><p>id: <strong>Assigned automagically</strong>. It&#39;s the &quot;key&quot; which the buyable was stored under, for convenient access. The buyable in the example&#39;s id is 11.</p></li></ul><p>Sell One/Sell All:</p><p>Including a sellOne or sellAll function will cause an additional button to appear beneath the buyable. They are functionally identical, but &quot;sell one&quot; appears above &quot;sell all&quot;. You can also use them for other things.</p><p>sellOne/sellAll(): <strong>optional</strong>, Called when the button is pressed. The standard use would be to decrease/reset the amount of the buyable, And possibly return some currency to the player.</p><p>canSellOne/canSellAll(): <strong>optional</strong>, booleans determining whether or not to show the buttons. If &quot;canSellOne/All&quot; is absent but &quot;sellOne/All&quot; is present, the appropriate button will always show.</p>`,11),o=[t];function p(r,c,i,u,y,h){return a(),n("div",null,o)}const d=s(l,[["render",p]]);export{E as __pageData,d as default};
