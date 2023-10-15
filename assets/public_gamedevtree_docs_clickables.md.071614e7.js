import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.1169fbc9.js";const d=JSON.parse('{"title":"Clickables","description":"","frontmatter":{},"headers":[],"relativePath":"public/gamedevtree/docs/clickables.md","filePath":"public/gamedevtree/docs/clickables.md","lastUpdated":1621388509000}'),e={name:"public/gamedevtree/docs/clickables.md"},t=l(`<h1 id="clickables" tabindex="-1">Clickables <a class="header-anchor" href="#clickables" aria-label="Permalink to &quot;Clickables&quot;">​</a></h1><p>Clickables are any kind of thing that you can click for an effect. They&#39;re a more generalized version of Buyables.</p><p>DO NOT USE THESE TO MAKE THINGS THAT YOU CLICK REPEATEDLY FOR A BONUS BECAUSE THOSE ARE AWFUL.</p><p>There are several differences between the two. One is that a buyable&#39;s saved data is its amount as a Decimal, while Clickables store a &quot;state&quot; which can be a number or string, but not Decimal, array, or object). Buyables have a number of extra features which you can see on their page. Clickables also have a smaller default size.</p><p>You can get and set a clickable&#39;s state with getClickableState(layer, id) and setClickableState(layer, id, state). You can use clickableEffect(layer, id) to get the current effects of a clickable.</p><p>Clickables should be formatted like this:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">clickables</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">rows</span><span style="color:#E1E4E8;">: # </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> rows</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">cols</span><span style="color:#E1E4E8;">: # </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> columns</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">masterButtonPress</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// **optional** If this is present, an additional button will appear above the clickables.</span></span>
<span class="line"><span style="color:#E1E4E8;">                            </span><span style="color:#6A737D;">// pressing it will call the function.</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">masterButtonText</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Press me!&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// **optional** text to display on the Master Button</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">showMasterButton</span><span style="color:#E1E4E8;">(){} </span><span style="color:#6A737D;">//**optional**, a function determining whether or not to show the button. Defaults to true if absent.</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">11</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">display</span><span style="color:#E1E4E8;">() {</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Blah&quot;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">            etc</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        etc</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">clickables</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">rows</span><span style="color:#24292E;">: # </span><span style="color:#D73A49;">of</span><span style="color:#24292E;"> rows</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">cols</span><span style="color:#24292E;">: # </span><span style="color:#D73A49;">of</span><span style="color:#24292E;"> columns</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">masterButtonPress</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// **optional** If this is present, an additional button will appear above the clickables.</span></span>
<span class="line"><span style="color:#24292E;">                            </span><span style="color:#6A737D;">// pressing it will call the function.</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">masterButtonText</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Press me!&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// **optional** text to display on the Master Button</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">showMasterButton</span><span style="color:#24292E;">(){} </span><span style="color:#6A737D;">//**optional**, a function determining whether or not to show the button. Defaults to true if absent.</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">11</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">display</span><span style="color:#24292E;">() {</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Blah&quot;</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">            etc</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        etc</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span></code></pre></div><p>Features:</p><ul><li><p>title: <strong>optional</strong>, displayed at the top in a larger font It can also be a function that returns updating text.</p></li><li><p>effect(): <strong>optional</strong>, A function that calculates and returns the current values of bonuses of this clickable. Can return a value or an object containing multiple values.</p></li><li><p>display(): A function returning everything that should be displayed on the clickable after the title, likely changing based on its state. Can use basic HTML.</p></li><li><p>unlocked(): <strong>optional</strong>, A function returning a bool to determine if the clickable is visible or not. Default is unlocked.</p></li><li><p>canClick(): A function returning a bool to determine if you can click the clickable.</p></li><li><p>onClick(): A function that implements clicking one of the clickable.</p></li><li><p>style: <strong>Optional</strong>, Applies CSS to this clickable, in the form of an object where the keys are CSS attributes, and the values are the values for those attributes (both as strings)</p></li><li><p>layer: <strong>Assigned automagically</strong>. It&#39;s the same value as the name of this layer, so you can do player[this.layer].points or similar.</p></li><li><p>id: <strong>Assigned automagically</strong>. It&#39;s the &quot;key&quot; which the clickable was stored under, for convenient access. The clickable in the example&#39;s id is 11.</p></li></ul>`,9),o=[t];function p(c,r,i,E,y,u){return a(),n("div",null,o)}const b=s(e,[["render",p]]);export{d as __pageData,b as default};
