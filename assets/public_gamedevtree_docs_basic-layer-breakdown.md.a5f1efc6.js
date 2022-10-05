import{_ as s,c as n,o as a,a as l}from"./app.e9531dc8.js";const d=JSON.parse('{"title":"Basic layer breakdown","description":"","frontmatter":{},"headers":[],"relativePath":"public/gamedevtree/docs/basic-layer-breakdown.md","lastUpdated":null}'),o={name:"public/gamedevtree/docs/basic-layer-breakdown.md"},p=l(`<h1 id="basic-layer-breakdown" tabindex="-1">Basic layer breakdown <a class="header-anchor" href="#basic-layer-breakdown" aria-hidden="true">#</a></h1><p>This is a very minimal layer with minimal features. Most things will require additional features.</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">p</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">startData</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">                  </span><span style="color:#676E95;">// startData is a function that returns default data for a layer. </span></span>
<span class="line"><span style="color:#F07178;">            unlocked</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">                    </span><span style="color:#676E95;">// You can add more variables here to add them to your layer.</span></span>
<span class="line"><span style="color:#F07178;">            points</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Decimal</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">             </span><span style="color:#676E95;">// &quot;points&quot; is the internal name for the main resource of the layer.</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">color</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#FE0102</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">                       </span><span style="color:#676E95;">// The color for this layer, which affects many elements</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">resource</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">prestige points</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">            </span><span style="color:#676E95;">// The name of this layer&#39;s main prestige resource</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">row</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">                                 </span><span style="color:#676E95;">// The row this layer is on (0 is the first row)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">baseResource</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">points</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">                 </span><span style="color:#676E95;">// The name of the resource your prestige gain is based on</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">baseAmount</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">player</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">points</span><span style="color:#89DDFF;">},</span><span style="color:#F07178;">    </span><span style="color:#676E95;">// A function to return the current value of that resource</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">requires</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Decimal</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">200</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">            </span><span style="color:#676E95;">// The amount of the base needed to  gain 1 of the prestige currency.</span></span>
<span class="line"><span style="color:#89DDFF;">                                                </span><span style="color:#676E95;">// Also the amount required to unlock the layer.</span></span>
<span class="line"><span style="color:#F07178;">        </span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">type</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">normal</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">                         </span><span style="color:#676E95;">// Determines the formula used for calculating prestige currency.</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">exponent</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">                          </span><span style="color:#676E95;">// &quot;normal&quot; prestige gain is (currency^exponent)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">gainMult</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">                            </span><span style="color:#676E95;">// Returns your multiplier to your gain of the prestige resource</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Decimal</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)               </span><span style="color:#676E95;">// Factor in any bonuses multiplying gain here</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">gainExp</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">                             </span><span style="color:#676E95;">// Returns your exponent to your gain of the prestige resource</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Decimal</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">layerShown</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">},</span><span style="color:#F07178;">             </span><span style="color:#676E95;">// Returns a bool for if this layer&#39;s node should be visible in the tree.</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span></code></pre></div>`,3),e=[p];function r(t,c,F,y,i,D){return a(),n("div",null,e)}const h=s(o,[["render",r]]);export{d as __pageData,h as default};
