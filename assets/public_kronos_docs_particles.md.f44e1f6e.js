import{_ as s,o as e,c as a,Q as l}from"./chunks/framework.1169fbc9.js";const E=JSON.parse('{"title":"Particles","description":"","frontmatter":{},"headers":[],"relativePath":"public/kronos/docs/particles.md","filePath":"public/kronos/docs/particles.md","lastUpdated":1664930814000}'),n={name:"public/kronos/docs/particles.md"},t=l(`<h1 id="particles" tabindex="-1">Particles <a class="header-anchor" href="#particles" aria-label="Permalink to &quot;Particles&quot;">​</a></h1><p>Particles are free-floating elements that can move and have many different behaviors. They can also interact with the mouse.</p><p>To make particles, use <code>makeParticles(particle, amount)</code>. <code>particle</code> is a particle-defining object, with features as explained below. There is also <code>makeShinies</code>, which uses different defaults and creates stationary particles at a random location. There are also a few other useful things listed at the end.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">myParticle</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">image</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;options_wheel.png&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">spread</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">gravity</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">time</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">speed</span><span style="color:#E1E4E8;">() { </span><span style="color:#6A737D;">// Randomize speed a bit</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (Math.</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1.2</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    etc</span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">myParticle</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">image</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;options_wheel.png&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">spread</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">gravity</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">time</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">speed</span><span style="color:#24292E;">() { </span><span style="color:#6A737D;">// Randomize speed a bit</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> (Math.</span><span style="color:#6F42C1;">random</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1.2</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">8</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    etc</span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>Features can be functions or constant. These features will be called when each particle is made, with an <code>id</code> argument, which is assigned based on which of the <code>amount</code> particles being spawned this is. <strong>All of these are optional</strong>, with a default value.</p><p>All distances are in pixels and angles are in degrees, with 0 being up and going clockwise.</p><ul><li><p>time: The amount of time, in seconds, that the particle will last. Default is 3.</p></li><li><p>fadeOutTime: The amount of seconds that fading out at the end should take (part of the total lifetime). Default is 1.</p></li><li><p>fadeInTime: The amount of seconds that fading in should take (part of the total lifetime). Default is 0.</p></li><li><p>image: The image the particle should display. <code>&quot;&quot;</code> will display no image. Default is a generic particle.</p></li><li><p>text: Displays text on the particle. Can use basic HTML.</p></li><li><p>style: Lets you apply other CSS styling to the particle.</p></li><li><p>width, height: The dimensions of the particle. Default is 35 and 35.</p></li><li><p>color: Sets the color of the image to this color.</p></li><li><p>angle: The angle that the particle should face. Default is 0.</p></li><li><p>dir: The initial angle that the particles should move in, before spread is factored in. Default is whatever angle is.</p></li><li><p>spread: If there are several particles, they will be spread out by this many degrees, centered on dir. Default is 30.</p></li><li><p>rotation: The amount that the (visual) angle of the particle should change by. Default is 0.</p></li><li><p>speed: The starting speed of the particle. Default is 15.</p></li><li><p>gravity: The amount the particle should accelerate downwards. Default is 0.</p></li><li><p>x, y: The starting coordinates of the particle. Default is at the mouse position.</p></li><li><p>offset: How far from the start each particle should appear. Default is 10.</p></li><li><p>xVel, yVel: Set initially based on other properties, then used to update movement.</p></li><li><p>layer: When changing tabs, if leaving the <code>layer</code> tab, this particle will be erased.</p></li><li><p>You can add other features to particles, but you must impliment their effects yourself.</p></li></ul><p>Function features: These stay as functions and are for more advanced things. They are optional.</p><ul><li>update(): Called each tick. Lets you do more advanced visual and movement behaviors by changing other properties.</li><li>onClick(), onMouseOver(), onMouseLeave(): Called when the particle is interacted with.</li></ul><p>Other useful things that are not features of the particle object:</p><ul><li>setDir(particle, dir), setSpeed(particle, speed): Set the speed/direction on a particle.</li><li>clearParticles(check): Function to delete particles. With no check, it deletes all particles. Check is a function that takes a particle, and returns true if that particle should be deleted.</li><li>You can use Vue.delete(particles, this.id) to make a particle delete itself.</li><li>mouseX and mouseY are variables that track the mouse position.</li><li>sin(x), cos(x), tan(x): functions that do these operations, with x in degrees. (Instead of radians).</li><li>asin(x), acos(x), atan(x): functions that do these operations, with the returned value in degrees. (instead of radians).</li></ul>`,11),o=[t];function p(i,r,c,d,h,y){return e(),a("div",null,o)}const f=s(n,[["render",p]]);export{E as __pageData,f as default};
