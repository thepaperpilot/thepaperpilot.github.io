import{_ as e,o as a,c as t,Q as o}from"./chunks/framework.1169fbc9.js";const m=JSON.parse('{"title":"2.0 format changes","description":"","frontmatter":{},"headers":[],"relativePath":"public/kronos/Old Things/2.0-format-changes.md","filePath":"public/kronos/Old Things/2.0-format-changes.md","lastUpdated":1664930814000}'),n={name:"public/kronos/Old Things/2.0-format-changes.md"},i=o('<h1 id="_2-0-format-changes" tabindex="-1">2.0 format changes <a class="header-anchor" href="#_2-0-format-changes" aria-label="Permalink to &quot;2.0 format changes&quot;">​</a></h1><ul><li>Temp format is changed from <code>temp.something[layer]</code> to <code>temp[layer].something</code>, for consistency</li><li>Challenges are now saved as an object with the amount of completions in each spot. (This will break saves.)</li><li><code>effectDisplay</code> in Challenges and Upgrades no longer takes an argument, and neither does <code>effect</code> for Buyables</li><li>Buyable cost can take an argument for amount of buyables, but it needs to function if no argument is supplied (it should do the cost for the next purchase).</li><li>Generation of Points now happens in the main game loop (not in a layer update function), enabled by <code>canGenPoints</code> in <a href="js/game.js">game.js</a>.</li><li>Changed <code>fullLayerReset</code> to <code>layerDataReset</code>, which takes an array of names of values to keep</li></ul><p>In addition, many names were changed, mostly expanding abbreviations:</p><p>All instances of:</p><ul><li>chall -&gt; challenge</li><li>unl -&gt; unlocked</li><li>upg -&gt; upgrade (besides CSS)</li><li>amt -&gt; amount</li><li>desc -&gt; description</li><li>resCeil -&gt; roundUpCost</li><li>order -&gt; unlockOrder</li><li>incr_order -&gt; increaseUnlockOrder</li></ul><p>Challenges:</p><ul><li>desc -&gt; challengeDescription</li><li>reward -&gt; rewardDescription</li><li>effect -&gt; rewardEffect</li><li>effectDisplay -&gt; rewardDisplay</li><li>active -&gt; challengeActive</li></ul>',7),l=[i];function s(r,c,d,h,g,p){return a(),t("div",null,l)}const u=e(n,[["render",s]]);export{m as __pageData,u as default};
