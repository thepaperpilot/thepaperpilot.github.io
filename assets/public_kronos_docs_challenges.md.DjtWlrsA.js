import{_ as e,c as t,o as i,a5 as a}from"./chunks/framework.CK8QU5WH.js";const f=JSON.parse('{"title":"Challenges","description":"","frontmatter":{},"headers":[],"relativePath":"public/kronos/docs/challenges.md","filePath":"public/kronos/docs/challenges.md"}'),s={name:"public/kronos/docs/challenges.md"},n=a(`<h1 id="challenges" tabindex="-1">Challenges <a class="header-anchor" href="#challenges" aria-label="Permalink to &quot;Challenges&quot;">​</a></h1><p>Challenges can have fully customizable win conditions. Useful functions for dealing with Challenges and implementing their effects:</p><ul><li>inChallenge(layer, id): determine if the player is in a given challenge (or another challenge on the same layer that counts as this one).</li><li>hasChallenge(layer, id): determine if the player has completed the challenge.</li><li>challengeCompletions(layer, id): determine how many times the player completed the challenge.</li><li>maxedChallenge(layer, id): determines if the player has reached the maximum completions.</li><li>challengeEffect(layer, id): Returns the current effects of the challenge, if any.</li></ul><p>Challenges are stored in the following format:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">challenges</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    11</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Ouch&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        challengeDescription: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;description of ouchie&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        canComplete</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> player.points.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        etc</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    etc</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Usually, each challenge should have an id where the first digit is the row and the second digit is the column.</p><p>Individual Challenges can have these features:</p><ul><li><p>name: Name of the challenge, can be a string or a function. Can use basic HTML.</p></li><li><p>challengeDescription: A description of what makes the challenge a challenge. <em>You will need to implement these elsewhere.</em> It can also be a function that returns updating text. Can use basic HTML.</p></li><li><p>goalDescription: A description of the win condition for the challenge. It can also be a function that returns updating text. Can use basic HTML. (Optional if using the old goal system)</p></li><li><p>canComplete(): A function that returns true if you meet the win condition for the challenge. Returning a number will allow bulk completing the challenge. (Optional if using the old goal system)</p></li><li><p>rewardDescription: A description of the reward&#39;s effect. <em>You will also have to implement the effect where it is applied.</em> It can also be a function that returns updating text. Can use basic HTML.</p></li><li><p>rewardEffect(): <strong>optional</strong>. A function that calculates and returns the current values of any bonuses from the reward. Can return a value or an object containing multiple values. Can use basic HTML.</p></li><li><p>rewardDisplay(): <strong>optional</strong>. A function that returns a display of the current effects of the reward with formatting. Default behavior is to just display the a number appropriately formatted.</p></li><li><p>fullDisplay(): <strong>OVERRIDE</strong>. Overrides the other displays and descriptions, and lets you set the full text for the challenge. Can use basic HTML.</p></li><li><p>unlocked(): <strong>optional</strong>. A function returning a bool to determine if the challenge is visible or not. Default is unlocked.</p></li><li><p>onComplete() - <strong>optional</strong>. this function will be called when the challenge is completed when previously incomplete.</p></li><li><p>onEnter() - <strong>optional</strong>. this function will be called when entering the challenge</p></li><li><p>onExit() - <strong>optional</strong>. this function will be called when exiting the challenge in any way</p></li><li><p>countsAs: <strong>optional</strong>. If a challenge combines the effects of other challenges in this layer, you can use this. An array of challenge ids. The player is effectively in all of those challenges when in the current one.</p></li><li><p>completionLimit: <strong>optional</strong>. the amount of times you can complete this challenge. Default is 1 completion.</p></li><li><p>style: <strong>optional</strong>. Applies CSS to this challenge, in the form of an object where the keys are CSS attributes, and the values are the values for those attributes (both as strings).</p></li><li><p>marked: <strong>optional</strong> Adds a mark to the corner of the challenge. If it&#39;s &quot;true&quot; it will be a star, but it can also be an image URL. By default, if the challenge has multiple completions, it will be starred at max completions.</p></li><li><p>layer: <strong>assigned automagically</strong>. It&#39;s the same value as the name of this layer, so you can do player[this.layer].points or similar</p></li><li><p>id: <strong>assigned automagically</strong>. It&#39;s the &quot;key&quot; which the challenge was stored under, for convenient access. The challenge in the example&#39;s id is 11.</p></li></ul><p>The old goal system uses these features:</p><ul><li><p>goal: <strong>deprecated</strong>, A Decimal for the amount of currency required to beat the challenge. By default, the goal is in basic Points. The goal can also be a function if its value changes.</p></li><li><p>currencyDisplayName: <strong>deprecated</strong>. the name to display for the currency for the goal</p></li><li><p>currencyInternalName: <strong>deprecated</strong>. the internal name for that currency</p></li><li><p>currencyLayer: <strong>deprecated</strong>. the internal name of the layer that currency is stored in. If it&#39;s not in a layer, omit. If it&#39;s not stored directly in a layer, instead use the next feature.</p></li><li><p>currencyLocation(): <strong>deprecated</strong>. if your currency is stored in something inside a layer (e.g. a buyable&#39;s amount), you can access it this way. This is a function returning the object in &quot;player&quot; that contains the value (like <code>player[this.layer].buyables</code>)</p></li></ul>`,10),l=[n];function o(h,r,p,c,g,u){return i(),t("div",null,l)}const y=e(s,[["render",o]]);export{f as __pageData,y as default};
