import{_ as e,c as a,o as t,a1 as o}from"./chunks/framework.CW2X4ZVO.js";const b=JSON.parse('{"title":"The-Modding-Tree","description":"","frontmatter":{},"headers":[],"relativePath":"public/gamedevtree/docs/!general-info.md","filePath":"public/gamedevtree/docs/!general-info.md","lastUpdated":1701137241000}'),n={name:"public/gamedevtree/docs/!general-info.md"},r=o('<h1 id="the-modding-tree" tabindex="-1">The-Modding-Tree <a class="header-anchor" href="#the-modding-tree" aria-label="Permalink to &quot;The-Modding-Tree&quot;">​</a></h1><p>The main way to add content is through creating layers. You can either add a layer directly in the layers object in layersSupportjs, or declare it in another file and then do &quot;<code>addLayer(layername, layerdata)</code>&quot; (good for breaking things up into smaller files). The existing layers are just examples and can be freely deleted. You can also use them as references and a base for your own layers.</p><p>The first thing you need to do is to edit the modInfo at the top of game.js to set your modID (a string). A unique modId will prevent your mod&#39;s saves from conflicting with other mods.</p><p>Most of the time, you won&#39;t need to dive deep into the code to create things, but you still can if you really want to.</p><p>The Modding Tree uses break_eternity.js to store large values. This means that many numbers are Decimal objects, and must be treated differently. For example, you have to use <code>new Decimal(x)</code> to create a Decimal value instead of a plain number, and perform operations on them by calling functions. e.g, instead of <code>x = x + y</code>, use <code>x = x.add(y)</code>.</p><p>Almost all values can be either a constant value, or a dynamic value. Dynamic values are defined by putting a function that returns what the value should be at any given time.</p><p>All display text can be basic HTML instead (But you can&#39;t use most Vue features there).</p><h1 id="table-of-contents" tabindex="-1">Table of Contents: <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of Contents:&quot;">​</a></h1><h2 id="general" tabindex="-1">General: <a class="header-anchor" href="#general" aria-label="Permalink to &quot;General:&quot;">​</a></h2><ul><li><a href="./getting-started">Getting Started</a>: Getting your own copy of the code set up with Github Desktop.</li><li><a href="./main-mod-info">Main mod info</a>: How to set up general things for your mod in mod.js.</li><li><a href="./basic-layer-breakdown">Basic layer breakdown</a>: Breaking down the components of a layer with minimal features.</li><li><a href="./layer-features">Layer features</a>: Explanations of all of the different properties that you can give a layer.</li><li><a href="./custom-tab-layouts">Custom Tab Layouts</a>: An optional way to give your tabs a different layout. You can even create entirely new components to use.</li><li><a href="./updating-tmt">Updating TMT</a>: Using Github Desktop to update your mod&#39;s version of TMT.</li></ul><h2 id="common-components" tabindex="-1">Common components <a class="header-anchor" href="#common-components" aria-label="Permalink to &quot;Common components&quot;">​</a></h2><ul><li><a href="./upgrades">Upgrades</a>: How to create upgrades for a layer.</li><li><a href="./milestones">Milestones</a>: How to create milestones for a layer.</li><li><a href="./buyables">Buyables</a>: Create rebuyable upgrades for your layer (with the option to make them respec-able). Can be used to make Enhancers or Space Buildings.</li><li><a href="./clickables">Clickables</a>: A more generalized variant of buyables, for any kind of thing that is sometimes clickable. Between these and Buyables, you can do just about anything.</li></ul><h2 id="other-components" tabindex="-1">Other components <a class="header-anchor" href="#other-components" aria-label="Permalink to &quot;Other components&quot;">​</a></h2><ul><li><a href="./challenges">Challenges</a>: How to create challenges for a layer.</li><li><a href="./bars">Bars</a>: Display some information as a progress bar, gague, or similar. They are highly customizable, and can be horizontal and vertical as well.</li><li><a href="./subtabs-and-microtabs">Subtabs and Microtabs</a>: Create subtabs for your tabs, as well as &quot;microtab&quot; components that you can put inside the tabs.</li><li><a href="./milestones">Achievements</a>: How to create achievements for a layer (or for the whole game).</li><li><a href="./infoboxes">Infoboxes</a>: Boxes containing text that can be shown or hidden.</li></ul>',14),i=[r];function s(l,d,c,h,u,m){return t(),a("div",null,i)}const p=e(n,[["render",s]]);export{b as __pageData,p as default};
