import{_ as s,c as e,o as n,a}from"./app.e9531dc8.js";const F=JSON.parse('{"title":"Milestones","description":"","frontmatter":{},"headers":[],"relativePath":"public/lit/docs/milestones.md","lastUpdated":null}'),t={name:"public/lit/docs/milestones.md"},o=a(`<h1 id="milestones" tabindex="-1">Milestones <a class="header-anchor" href="#milestones" aria-hidden="true">#</a></h1><p>Milestones are awarded to the player when they meet a certain goal, and give some benefit. Milestones should be formatted like this:</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#FFCB6B;">milestones</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        requirementDescription</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">123 waffles</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        effectDescription</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">blah</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        done</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">player</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">w</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">points</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">gte</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">123</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">etc</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>You can use <code>hasMilestone(layer, id)</code> to determine if the player has a given milestone</p><p>Milestone features:</p><ul><li><p>requirementDescription: A string describing the requirement for unlocking this milestone. Suggestion: Use a &quot;total&quot;. It can also be a function that returns updating text. Can use basic HTML.</p></li><li><p>effectDescription: A string describing the reward for having the milestone. <em>You will have to implement the reward elsewhere.</em> It can also be a function that returns updating text. Can use basic HTML.</p></li><li><p>done(): A function returning a boolean to determine if the milestone should be awarded.</p></li><li><p>toggles: <strong>optional</strong>. Creates toggle buttons that appear on the milestone when it is unlocked. The toggles can toggle a given boolean value in a layer. It is defined as an array of paired items, one pair per toggle. The first is the internal name of the layer the value being toggled is stored in, and the second is the internal name of the variable to toggle. (e.g. [[&quot;b&quot;, &quot;auto&quot;], [&quot;g&quot;, &quot;auto&quot;])</p><p><strong>Tip:</strong> Toggles are not de-set if the milestone becomes locked! In this case, you should also check if the player has the milestone.</p></li><li><p>style: <strong>optional</strong>. Applies CSS to this milestone, in the form of an object where the keys are CSS attributes, and the values are the values for those attributes (both as strings).</p></li><li><p>unlocked(): <strong>optional</strong>. A function returning a boolean to determine if the milestone should be shown. If absent, it is always shown.</p></li><li><p>layer: <strong>assigned automagically</strong>. It&#39;s the same value as the name of this layer, so you can do <code>player[this.layer].points</code> or similar.</p></li><li><p>id: <strong>assigned automagically</strong>. It&#39;s the &quot;key&quot; which the milestone was stored under, for convenient access. The milestone in the example&#39;s id is 0.</p></li></ul><p>Disaable milestone popups by adding <code>milestonePopups: false</code> to the layer.</p>`,7),l=[o];function p(i,r,c,u,d,h){return n(),e("div",null,l)}const g=s(t,[["render",p]]);export{F as __pageData,g as default};
