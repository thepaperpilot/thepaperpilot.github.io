import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.1169fbc9.js";const h=JSON.parse('{"title":"Subtabs and Microtabs","description":"","frontmatter":{},"headers":[],"relativePath":"public/gamedevtree/docs/subtabs-and-microtabs.md","filePath":"public/gamedevtree/docs/subtabs-and-microtabs.md","lastUpdated":1621388509000}'),t={name:"public/gamedevtree/docs/subtabs-and-microtabs.md"},l=e(`<h1 id="subtabs-and-microtabs" tabindex="-1">Subtabs and Microtabs <a class="header-anchor" href="#subtabs-and-microtabs" aria-label="Permalink to &quot;Subtabs and Microtabs&quot;">​</a></h1><p>Subtabs are separate sections of a tab that you can view by selecting one at the top of the tab. Microtabs are smaller areas that function in much the same way.</p><p>Subtabs are defined by using the tab format like this, where each element of tabFormat is given the name of that subtab:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">tabFormat</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;Main tab&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            *subtab features*</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;Other tab&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            *subtab features*</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        etc</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">tabFormat</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;Main tab&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">            *subtab features*</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;Other tab&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">            *subtab features*</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        etc</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span></code></pre></div><p>Microtabs are defined similarly, and use the same features, but are defined in the &quot;microtabs&quot; feature. Each entry is a group of tabs which will appear in a microtabs component. The first set, &quot;stuff&quot;, has 2 tabs, and the second, &quot;otherStuff&quot;, has none.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">microtabs</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">stuff</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">first</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">subtab features</span><span style="color:#F97583;">*</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">second</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">subtab features</span><span style="color:#F97583;">*</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">otherStuff</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// There could be another set of microtabs here</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">microtabs</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">stuff</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">first</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">subtab features</span><span style="color:#D73A49;">*</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">second</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">subtab features</span><span style="color:#D73A49;">*</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">otherStuff</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// There could be another set of microtabs here</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span></code></pre></div><p>Normal subtabs and microtab subtabs both use the same features:</p><h1 id="features" tabindex="-1">Features: <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features:&quot;">​</a></h1><ul><li><p>content: The tab layout code for the subtab, in <a href="./custom-tab-layouts">the tab layout format</a></p></li><li><p>style: <strong>Optional</strong>, Applies CSS to the whole subtab when switched to, in the form of an &quot;CSS Object&quot;, where the keys are CSS attributes, and the values are the values for those attributes (both as strings)</p></li><li><p>buttonStyle: <strong>Optional</strong>, A CSS object, which affects the appearance of the button for that subtab.</p></li><li><p>unlocked(): <strong>Optional</strong>, a function to determine if the button for this subtab should be visible. By default, a subtab is always unlocked. (You can&#39;t use the &quot;this&quot; keyword in this function.)</p></li></ul>`,9),p=[l];function o(c,r,i,E,u,b){return a(),n("div",null,p)}const d=s(t,[["render",o]]);export{h as __pageData,d as default};
