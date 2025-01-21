import{d as o}from"./chunks/git.data.UoOg2Pa-.js";import{M as i,q as n,Q as e,K as s,u as t,ag as r,p as l}from"./chunks/framework.CYFY2zz0.js";const h=e("h1",{class:"p-name"},"Orchard",-1),d=["innerHTML"],c=r('<hr><details><summary>Referenced by:</summary><a href="/garden/constructivism/index.md">Constructivism</a><a href="/garden/digital-locality/index.md">Digital Locality</a><a href="/garden/efficiency/index.md">Efficiency</a><a href="/now/index">/now</a></details><details><summary>Tags:</summary><a href="/garden/my-projects/index.md">My Projects</a><a href="/garden/decentralized/index.md">Decentralized</a></details><p>This is an <a href="/garden/fedi-v2/">Agentic Fediverse</a> app I&#39;m designing and at least building a mock for. The purpose of the app is to organize and grow a <a href="/garden/network-of-knowledge/">Network of Knowledge</a> sorted by topic. It achieves this through a concept called message gardening, the process of converting casual conversations into formal, referenceable stores of knowledge. It would be an experiment in <a href="/garden/digital-locality/">Digital Locality</a> and perhaps represent an alternative to traditional <a href="/garden/social-media/">Social Media</a>.</p><p>The original problem I was trying to solve is having a lot of conversations about various topics stretching back far into the past and across many platforms. I often want to review something I said on a given topic and find it difficult to do so. This app would make it far easier to retrieve my notes on any topic, and collect those notes into a useful resource about that topic (a process called &quot;message gardening&quot;). It&#39;s different than a traditional note-taking app because it works with conversations directly, which is useful because discourse is typically what prompts me to collect my thoughts on a topic in the first place.</p><p>Core to this project is improving how conversations online are carried out. It&#39;s inspired by <a href="/garden/commune/">Commune</a> but aims to remove the idea of discrete communities.</p><h2 id="implementing-chat-glue" tabindex="-1">Implementing <a href="/garden/chat-glue/">Chat Glue</a> <a class="header-anchor" href="#implementing-chat-glue" aria-label="Permalink to &quot;Implementing [Chat Glue](/garden/chat-glue/index.md)&quot;">​</a></h2><p>As you converse in your group chats and DMs, you can specify topic changes. These will break the conversation up into pieces called notes, and each piece gets added to each of the topics it was about (with links to the convo from before and after that one).</p><p>Notes should also allow specific parts, up to the character level, to reply to, react to, otherwise annotate, or mark as a topic change. This is something to think about with regards to decentralized moderation and things like muting pages or gardens. Plus the matter of displaying the sync to the user.</p><p>Exactly where these DMs and group chats are coming from isn&#39;t super clear in my mind. I want <a href="/garden/digital-locality/">Digital Locality</a>, which means avoiding large groups of users and limiting the influence of individual posts and posters. We don&#39;t want a federation of discrete independently moderated communities, as that will lead to centralizing power and influence. But, organizing communities this way is very common due to its convenience and appeal. If you make, say, an open source library and want people to know where they can go to discuss how to use the library, show off what they used it for, etc. then you&#39;re likely to create a discrete community for it.</p><p>In theory we could take the Chromatic Lattice&#39;s initial approach and just have a chat room tied to each user, but I&#39;m not confident that&#39;ll translate well to this project. I&#39;m leaving this open ended, since I expect we&#39;ll learn from Chromatic Lattice anyways and find a better solution to this problem.</p><h2 id="non-conversation-notes" tabindex="-1">Non-conversation Notes <a class="header-anchor" href="#non-conversation-notes" aria-label="Permalink to &quot;Non-conversation Notes&quot;">​</a></h2><p>In addition to including conversations, I want to support freeform notes that also discuss one or more topics. Another type of non-conversation note could be excerpts from online articles, which could be automatically cited. Through leaf&#39;s compositional structure, in theory any entity should be able to be added to the network.</p><p>When allowing these kinds of notes, users should be encouraged to split notes small if possible. This could potentially allow us to avoid or delay the need for something like <a href="/garden/garden-rss/">Garden-RSS</a>, and instead allow us to just mark entire notes as changed.</p><h2 id="the-topic-graph" tabindex="-1">The Topic Graph <a class="header-anchor" href="#the-topic-graph" aria-label="Permalink to &quot;The Topic Graph&quot;">​</a></h2><p>If a note was about multiple topics it forms a link between those topics and considers them in some way related. These links are represented as lines in the topics graph, and cause the topics to be physically closer within the graph.</p><p>Links can also be manually created, and all links can be labeled to display a relationship between two topics, like &quot;x is a y&quot; or &quot;x is similar to y&quot; or &quot;x contains y&quot;. These would be stored as specially marked notes and can be made public like any other. Selecting an edge will show all relationships that edge has been labeled with, along with any other notes that contain both topics.</p><h2 id="sharing-notes" tabindex="-1">Sharing Notes <a class="header-anchor" href="#sharing-notes" aria-label="Permalink to &quot;Sharing Notes&quot;">​</a></h2><p>You can jump to other people&#39;s gardens and see their public notes (via a friends list or via a mutual chat room). You should be able to take any of those notes or the whole graph and include it in your own, so they are part of your graph and queries. There&#39;ll need to be a good way of displaying changes, aliasing topics, and proposing edits to other peoples&#39; pages. A user should also be able to &quot;fork&quot; someone&#39;s notes so they can modify them, and maintain a link to the original note but no longer auto-update them. Unread notes should appear similar to unread chats, which will improve the ability to use Orchard as a method of learning. In fact, breaking down books by topic and adding them to an Orchard graph is something I think would be worth looking into, once the project is usable.</p><p>I think a conversation should show a sidebar of notes from both the user&#39;s network as well as any public notes from any other active participants&#39; networks that relate to the set of topics being discussed. I think this would help encourage message gardening and assist with distributing information. We could go a step further and notify participants when those notes get added to or edited, which could help with corrections to articles getting spread to those who saw the original incorrect information (something that traditional media doesn&#39;t do well).</p><p>We&#39;ll need to be careful sharing notes doesn&#39;t lead to centralizing power. I think if you subscribe/follow someone&#39;s graph, it shouldn&#39;t include the pages they&#39;ve followed (although forks would be fine). This would lead to <a href="/garden/digital-locality/">Digital Locality</a> and all the benefits it entails. However, this might make it harder for movements to spread, because it means it spreading requires people to write new content rather than sharing existing content. I believe (perhaps optimistically) that movements can succeed in this environment, but perhaps instead there&#39;s a happy medium we can strike, so high quality notes can be spread without leading to issues like non-consensual virality.</p><p>I think a compromise here might just be letting people copy notes over to their own graph. Instead of suggesting changes to other peoples notes, you just copy the note over and modify it. If the other person is friends with you, they&#39;ll see your new (changed) note, and perhaps the app can even highlight the similarity (and importantly, the differences) between that note and the original. This system would be similar to sharing/retweeting a post, but with a bit more effort that I think would strike the right balance between signal boosting good information and limiting influence. Notes would naturally be iterated upon as they spread through the network.</p><h2 id="llms" tabindex="-1">LLMs <a class="header-anchor" href="#llms" aria-label="Permalink to &quot;LLMs&quot;">​</a></h2><p>A local LLM could assist in marking topic changes automatically, making it so chat participants don&#39;t have to themselves. Since being broken down into topics is particularly useful for &quot;catching up&quot; on a conversation (allowing you to skip topics you&#39;re not interested in), this feature would be particularly useful on chats from platforms that don&#39;t support topics themselves, such as discord or slack. Jigsaw&#39;s <a href="https://medium.com/jigsaw/making-sense-of-large-scale-online-conversations-b153340bda55" target="_blank" rel="noreferrer">sensemaking-tools</a> project could slot in here particularly well.</p><p>LLMs could also be given the topics as context and be able to query the network for knowledge.</p><h2 id="education" tabindex="-1">Education <a class="header-anchor" href="#education" aria-label="Permalink to &quot;Education&quot;">​</a></h2><p>This graph of topics could naturally lead itself to educational purposes. I think people should be able to perhaps describe directed sub graphs that present the topics as a dependency tree. This would enable self paced learning, with the dependencies acting as a guide for what can be learned next. This is in alignment with my personal beliefs that we should have <a href="/garden/decentralized-education/">Decentralized Education</a> using a <a href="/garden/constructivism/">Constructivist</a> approach.</p><p>Couple Orchard with some sort of mastery system and subject dependency tree and you basically have an alternative to Khan Academy or Brilliant.</p><p>Flash cards are a good method of memorizing thinks, especially through something like anki. Flash cards are already fairly decentralized, so perhaps annotations on notes should allow mapping them into flash cards that can be easily imported in flash cards apps through standard formats.</p><h2 id="tech-stack" tabindex="-1">Tech Stack <a class="header-anchor" href="#tech-stack" aria-label="Permalink to &quot;Tech Stack&quot;">​</a></h2><p>It&#39;ll use the <a href="/garden/fedi-v2/">Agentic Fediverse</a> to store the messages and other data, making the whole app <a href="/garden/local-first-software/">Local-First Software</a>. The frontend of the app will be built in either <a href="https://v2.tauri.app/" target="_blank" rel="noreferrer">tauri</a> or perhaps just be a website, using sqlite and service workers to work local-first. It&#39;ll use <a href="/garden/incremental-social/">Incremental Social</a> as the default iroh node and handle any other (optional) server side features.</p>',31),y=JSON.parse('{"title":"Orchard","description":"","frontmatter":{"public":"true","slug":"orchard","tags":["My Projects","Decentralized"],"title":"Orchard","prev":false,"next":false},"headers":[],"relativePath":"garden/orchard/index.md","filePath":"garden/orchard/index.md"}'),p={name:"garden/orchard/index.md"},b=Object.assign(p,{setup(u){const a=i();return(g,m)=>(l(),n("div",null,[h,e("p",null,[s("1348 words, ~7 minute read. "),e("span",{innerHTML:t(o)[`site/${t(a).page.value.relativePath}`]},null,8,d)]),c]))}});export{y as __pageData,b as default};
