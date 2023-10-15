import{_ as e,o as t,c as a,Q as s}from"./chunks/framework.1169fbc9.js";const v=JSON.parse('{"title":"Achievements","description":"","frontmatter":{},"headers":[],"relativePath":"public/kronos/docs/achievements.md","filePath":"public/kronos/docs/achievements.md","lastUpdated":1664930814000}'),n={name:"public/kronos/docs/achievements.md"},o=s(`<h1 id="achievements" tabindex="-1">Achievements <a class="header-anchor" href="#achievements" aria-label="Permalink to &quot;Achievements&quot;">​</a></h1><p>Achievements are awarded to the player when they meet a certain goal, and optionally give some benefit.</p><p>You can make global achievements by putting them in a side layer by making its row equal to &quot;side&quot; instead of a number.</p><p>Useful functions for dealing with achievements and implementing their effects:</p><ul><li>hasAchievement(layer, id): determine if the player has the Achievement.</li><li>achievementEffect(layer, id): Returns the current effects of the achievement, if any.</li></ul><p>Achievements should be formatted like this:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">achievements</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">11</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&quot;Blah&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        more features</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    etc</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">achievements</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">11</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&quot;Blah&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        more features</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    etc</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>Usually, each achievement should have an id where the first digit is the row and the second digit is the column.</p><p>Individual achievement can have these features:</p><ul><li><p>name: <strong>optional</strong>. displayed at the top of the achievement. The only visible text. It can also be a function that returns updating text. Can use basic HTML.</p></li><li><p>done(): A function returning a boolean to determine if the achievement should be awarded.</p></li><li><p>tooltip: Default tooltip for the achievement, appears when it is hovered over. Should convey the goal and any reward for completing the achievement. It can also be a function that returns updating text. Can use basic HTML. Setting this to &quot;&quot; disables the tooltip.</p></li><li><p>effect(): <strong>optional</strong>. A function that calculates and returns the current values of any bonuses from the achievement. Can return a value or an object containing multiple values.</p></li><li><p>unlocked(): <strong>optional</strong>. A function returning a bool to determine if the achievement is visible or not. Default is unlocked.</p></li><li><p>onComplete() - <strong>optional</strong>. this function will be called when the achievement is completed.</p></li><li><p>image: <strong>optional</strong>, puts the image from the given URL (relative or absolute) in the achievement</p></li><li><p>style: <strong>optional</strong>. Applies CSS to this achievement, in the form of an object where the keys are CSS attributes, and the values are the values for those attributes (both as strings).</p></li><li><p>textStyle: <strong>optional</strong>. Applies CSS to the text, in the form of an object where the keys are CSS attributes, and the values are the values for those attributes (both as strings).</p></li><li><p>layer: <strong>assigned automagically</strong>. It&#39;s the same value as the name of this layer, so you can do <code>player[this.layer].points</code> or similar.</p></li><li><p>id: <strong>assigned automagically</strong>. It&#39;s the &quot;key&quot; which the achievement was stored under, for convenient access. The achievement in the example&#39;s id is 11.</p></li><li><p>goalTooltip: <strong>optional, deprecated</strong>. Appears when the achievement is hovered over and locked, overrides the basic tooltip. This is to display the goal (or a hint). It can also be a function that returns updating text. Can use basic HTML.</p></li><li><p>doneTooltip: <strong>optional, deprecated</strong>. Appears when the achievement is hovered over and completed, overrides the basic tooltip. This can display what the player achieved (the goal), and the rewards, if any. It can also be a function that returns updating text. Can use basic HTML.</p></li></ul><p>Disable achievement popups by adding <code>achievementsPopups: false</code> to the layer.</p>`,11),i=[o];function l(p,r,c,h,d,u){return t(),a("div",null,i)}const g=e(n,[["render",l]]);export{v as __pageData,g as default};
