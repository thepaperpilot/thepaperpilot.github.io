import{_ as s,c as i,o as a,a1 as n}from"./chunks/framework.CW2X4ZVO.js";const g=JSON.parse('{"title":"Basic layer breakdown","description":"","frontmatter":{},"headers":[],"relativePath":"public/lit/docs/basic-layer-breakdown.md","filePath":"public/lit/docs/basic-layer-breakdown.md","lastUpdated":1701137263000}'),t={name:"public/lit/docs/basic-layer-breakdown.md"},e=n(`<h1 id="basic-layer-breakdown" tabindex="-1">Basic layer breakdown <a class="header-anchor" href="#basic-layer-breakdown" aria-label="Permalink to &quot;Basic layer breakdown&quot;">​</a></h1><p>This is a very minimal layer with minimal features. Most things will require additional features.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addLayer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;p&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    startData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {                  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// startData is a function that returns default data for a layer. </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        unlocked: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,                     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// You can add more variables here to add them to your layer.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        points: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Decimal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),             </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &quot;points&quot; is the internal name for the main resource of the layer.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }},</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    color: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#4BDC13&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,                       </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// The color for this layer, which affects many elements.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    resource: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;prestige points&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,            </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// The name of this layer&#39;s main prestige resource.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    row: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,                                 </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// The row this layer is on (0 is the first row).</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    baseResource: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;points&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,                 </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// The name of the resource your prestige gain is based on.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    baseAmount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> player.points },  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// A function to return the current amount of baseResource.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    requires: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Decimal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),              </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// The amount of the base needed to  gain 1 of the prestige currency.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                                            // Also the amount required to unlock the layer.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;normal&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,                         </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Determines the formula used for calculating prestige currency.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    exponent: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,                          </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &quot;normal&quot; prestige gain is (currency^exponent).</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    gainMult</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {                            </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Returns your multiplier to your gain of the prestige resource.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Decimal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)               </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Factor in any bonuses multiplying gain here.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    gainExp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {                             </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Returns your exponent to your gain of the prestige resource.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Decimal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    layerShown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }            </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Returns a bool for if this layer&#39;s node should be visible in the tree.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div>`,3),h=[e];function l(p,k,r,E,d,o){return a(),i("div",null,h)}const c=s(t,[["render",l]]);export{g as __pageData,c as default};
