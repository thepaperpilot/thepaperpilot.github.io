---
public: "true"
slug: "digital-locality"
tags: [Decentralized]
title: "Digital Locality"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Digital Locality</h1>
<p>1791 words, ~10 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/chromatic-lattice/index.md">Chromatic Lattice</a><a href="/garden/decentralized-moderation/index.md">Decentralized Moderation</a><a href="/garden/early-internet/index.md">Early Internet</a><a href="/garden/filter-bubbles/index.md">Filter Bubbles</a><a href="/garden/generative-ai/index.md">Generative AI</a><a href="/now/index">/now</a><a href="/garden/orchard/index.md">Orchard</a><a href="/garden/social-media/index.md">Social Media</a><a href="/garden/virality/index.md">Virality</a></details>

<details><summary>Tags:</summary><a href="/garden/decentralized/index.md">Decentralized</a></details>

A locality is a physical area or neighborhood where people live and regularly see each other. In the same way I believe strong [Local Communities](/garden/local-communities/index.md) are highly important in real life, I think [Social Media](/garden/social-media/index.md) would benefit from having _digital_ localities.

A digital locality will have a higher concentration of recognition between its members, leading to more meaningful relationships. This is achieved by operating similar to a physical neighborhood, where you're able to "look outside" and perhaps see a couple neighbors quite regularly, but with additional effort you can always "walk" further and further out to see a larger variety of people, and similarly others may "walk" to find you. This makes individual reach rely on a gradient of effort, keeping influence spread thin.

The motivations behind digital locality are aligned with the findings of Dunbar and his research on the cognitive limit for how many people we can maintain meaningful relationships with. He discusses his research and how it's held up over the years in [this article](https://theconversation.com/dunbars-number-why-my-theory-that-humans-can-only-maintain-150-friendships-has-withstood-30-years-of-scrutiny-160676).

## Important Aspects

### Porosity

The most important aspect of digital locality should be that one's neighborhood has no discrete walls, only continuous gradients. For example, if our goal was merely small communities where you see the same people regularly, any small discord server would fit the bill. But in discord if you want to reach out to "nearby" users, you have to join an entire new discord server. In other words, communities on discord are not "porous", letting users freely "leak" between each other. The neighborhood metaphor for digital locality would mean having no discrete walls around any community, thus being fully "porous". This allows you to more easily expand your network and meet people with whom to form meaningful relationships.

### Decentralization

A large motivation behind this concept is spreading influence thin. In the same way digital locality directly opposes the centralization of influence in the hands of the few, it opposes all sorts of centralization. Centralized ownership and moderation over the network leaves it vulnerable to enshittification and [other problems](https://www.rand.org/pubs/commentary/2023/01/the-digital-town-square-problem.html). In practice, this means such a network should be [Decentralized](/garden/decentralized/index.md).

Social media must be moderated, which means a network with digital locality will need [Decentralized Moderation](/garden/decentralized-moderation/index.md). There's several approaches discussed there, but ultimately the way digital locality works should overall mean users are significantly less likely to see unwanted content from influencers, advertisers, bots, spammers, or those who wish them harm. Users won't need to worry about their post going viral leading to a very large and unexpected amount of attention, including negative attention, directed their way.

### Democratized [Virality](/garden/virality/index.md)

A network with digital locality would make individual people or posts have limited reach, and thus prevent those from "going viral". However, movements and ideas can still spread largely uninhibited, and even empower individuals to help spread the movement moreso than traditional social media. They can put more effort into being heard by moving further and further out through the network, whereas on traditional social media you can only hope the algorithm spreads your post.

### Synchronous vs Asynchronous Interactions

Exactly how such a network looks and behaves will differ based on if it's going for synchronous vs asynchronous communication. Synchronous is the easier one, as that's essentially just a network of chat rooms with links to other chat rooms. Users explore the network through those links and just have realtime conversations with the people they find.

Asynchronous interactions are a bit trickier, and I'm not fully convinced on how it should work. It'll be important to work this out since that's how a lot of social media operates - any social media where you make posts, essentially. We'll go over a couple approaches to how it could work, keeping mind neither are perfect.

#### Local Feeds

Having a feed of posts that's just those you follow and the stuff they've liked or shared works fairly well and can be done today in most existing social media apps. However, seeing the exact post that has gone through a very long chain of shares to get to you means the author of that post may be receiving more attention than they desired. Additionally, this method may not have enough throughout if you read a lot of posts or don't follow active people.

The [Network of Vouches](/garden/network-of-vouches/index.md) approach to decentralized moderation sort of expands on this type of feed, giving the user content from longer following chains and much more control over who is let into the network. It's also auditable, unlike algorithmic feeds.

#### Communal wiki editing

A more radical approach would be treating social media more like communal wiki editing. That is, if engaging with a post was, rather than liking or sharing it, proposing edits to communal wiki pages it relates to. This would be a process of message gardening, and would likely help distributing corrections to articles, which typically spread much less far than the original incorrect information. It's for that reason I brought this idea up at the end of [Filter Bubbles](/garden/filter-bubbles/index.md) as a potential way to combat the spread of misinformation.

However, wiki editing requires a lot more effort than liking or sharing currently does. It's also not clear how this would preserve locality without making discrete communities. [Commune](/garden/commune/index.md) is related to this idea but would have discrete communities (although with a bit of porosity through shared channels). I describe my own vision for how this could look without discrete communities in [Orchard](/garden/orchard/index.md).

## Obstacles

### The Network Effect

The biggest obstacle, as with any alternative social media, is the network effect. People want to be on a platform that's already popular, thus preserving the status quo. Social Media typically succeeds by enabling some new medium, like Twitter for microplogging, vine for videos (and later Snapchat once vine shut down), or Musically for lip syncing.  The exceptions are existing platforms with large user bases expanding into one of those new mediums, like Instagram or Musically rebranding as Tiktok.

There's an issue here, though. I'm not describing a new medium here. The unique selling point is that by limiting influence accumulation and making it so you're more likely to see the same not-popular people regularly, we're actually fighting against part of what makes social media interesting for so many people: the concept of this meritocratic space where anyone can become a celebrity if they just make good enough content. That it could become a job, even, where they get paid a lot to make content and receive free stuff and other perks for doing so. This is the classic American Dream argument that American culture has already been conditioned into supporting. So success for this platform may hinge on convincing people becoming a social media influencer is not a good thing to strive for, both for how unhealthy the mindset is, and how unlikely it is for any individual to "make it". Needless to say, that's a very tall order.

### Avoiding [Filter Bubbles](/garden/filter-bubbles/index.md) (or Echo Chambers)

An anticipated argument against what I'm describing here is that it would encourage the creation of filter bubbles. But I'd like to counter that argument by saying you're tackling the wrong issue, and that filter bubbles are typically innocuous and abolishing them would be actively harmful to marginalized communities. Indeed, I think digital locality would help fight against a lot of the root problems that are often attributed to echo chambers, as I describe on the [Filter Bubbles](/garden/filter-bubbles/index.md) page.

## Influences

### Webrings

Erlend discusses a similar concept to locality in his blog post [Federated Webrings](https://blog.muni.town/federated-webrings/), which describes how the old internet would make frequent use of webrings to connect similar sites. This would effectively create digital neighbors and make both the site owner and visitors connect with the owners and visitors of the other sites in the webring. Although I think these webrings become a bit too large and centralized. I would've preferred to see them work more like cooperatives, with some form of democratic decision making.

Erlend's suggestion for bringing webrings back is through the use of communities using shared topic-specific rooms. For example, several rust game development libraries having a shared chatroom for discussing game development in general. This makes the communities more porous, so members can discover related people and communities.

I recommend reading through the rest of Erlend's writing and keeping up with their projects. They've done a lot in this sphere, both while working at discourse and since, and are leading the charge for designing and implementing the agentic fediverse.

### [IndieWeb](/garden/the-small-web/index.md)

Personal websites form a fully decentralized social network called the indie web, which focuses on data ownership. However, it's quite small due to the technical and financial barriers to creating a website. Due to the lack of centralization or algorithms, sites spread primarily by being linked to by others. That brings it close to what I'm describing here, although without asynchronous chat I don't think it's quite what I'm looking for.

### MUDs

What I'm describing is also a lot like a MUD, classic online games where players existed in a world of connected rooms, where they interacted via a command line interface, including local and global chat. If it were decentralized and people all had control over their own room, it would look a lot like what I am describing (but much nerdier and less modern). It's a big inspiration for a lot of these ideas.

## Where to Start

There are so many competing protocols out there at the moment, and the network effect has made them all struggle to find a foothold. I don't think anything described in here would be the unique selling point to just immediately attract a large user base. With that in mind, I think the approach should be to make something thats with using for reasons other than social media, and attach the social media experiment to it. That can serve as a proof of concept to prove the ideas here work, although ideas that don't work to be iterated upon, and collect public interest in whatever the next step is.

With the above in mind, let me introduce [Chromatic Lattice](/garden/chromatic-lattice/index.md), an incremental game I've been designing that would need social features to work anyways. Specifically, it will have boards for each player, where the actual gameplay happens. These boards can be linked to publicly, so you can show off your boards. When a player is visiting someone else's board, their cursor will be visible to others there, and their will be local chat to just people on that page, a form of  ambient copresence. These boards can be customized, including links to other boards. Thus locality is introduced - we now have synchronous chat rooms that every player has, and they can explore the network by jumping through these links. There are more details on the chromatic lattice page.

After Chromatic Lattice, I have plans for a larger experiment in the form of [Orchard](/garden/orchard/index.md).