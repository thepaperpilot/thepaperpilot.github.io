---
public: "true"
slug: "digital-locality"
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
<p>1648 words, ~9 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/filter-bubbles/index.md">Filter Bubbles</a><a href="/garden/social-media/index.md">Social Media</a></details>

## The Problem with Global Social Media

Digital spaces ([Social Media](/garden/social-media/index.md)) lack locality. If you see a post or thread, you'll see comments and replies from all sorts of people from all across the world and across the ideological spectrum, and you won't recognize a single one. There are no neighbors in cyberspace. This leads to interactions feeling a bit impersonal, as both the interaction and the other person only matter for this brief period of time, and you'll likely never interact again.

The only exception to this are influencers and people who are highly active within specific communities, who will gain a reputation through their name recognition. However, for people who aren't influencers or aren't highly active, these will be one-sided relationships (parasocial). The systems have been designed, often intentionally, to elevate a handful of accounts to celebrity status, a form of class struggle in the attention economy.

The virality sought after by influencers can sometimes happen to "normal" users as well (essentially randomly and non-consensually). This results in the phenomomen of people having their posts "blow up", reaching a much larger audience than intended and with it a lot more attention than intended. People who fall victim to this receive large amounts of negative attention that can seriously impact their mental well-being.

## Networks with Digital Locality

I believe healthier communities should allow for a higher concentration of recognition, as that will lead to more meaningful relationships. This would mean a shift to smaller communities that aren't dominated by a couple personalities. Ones where you see the same people regularly. This would be in alignment with Dunbar's research on communities, which found there's a cognitive limit to how many people we can meaningfully "know". He discusses his research and how it's held up over the years in [this article](https://theconversation.com/dunbars-number-why-my-theory-that-humans-can-only-maintain-150-friendships-has-withstood-30-years-of-scrutiny-160676).

Discord creates an environment like I describe, at least within it's smaller servers, but introduces a new issue in doing so: Discord servers aren't porous. You're either in the server or not, and you can only reach outside a server by fully joining another. This means that it's more difficult to actually discover people with which to form these meaningful relationships.

A network based on digital locality should operate more similarly to neighborhoods in the real world - you're most likely to see those living closest to you, but you can still see others by just going a little further out. It's "porous" in the sense that you aren't limited to your immediate neighbors; It's a gradient, where more effort will always allow you to reach more people, rather than hitting a wall.
  > Unfortunately, with car dependent society this analogy breaks down a bit, as now people are covering such a large physical area regularly that its still rare to see a familiar face while, for example, buying groceries.

On a forums for discussing design of social spaces, [this post](https://discuss.coding.social/t/discuss-sx-anti-pattern-reply-sigh-aka-reply-guy/531/2) describes how a sense of locality could improve social interactions online, due to social media not having discrete concepts of "living room" discussion versus "public square" discussion. We're both getting at this idea of limiting the reach of posts, or at least making it more intentional to make a post to be shown to everyone.

## Building the Network

There are various values and principles to keep in mind when building this network.

### Decentralization

It should already be clear by how I've described this network, but a lot of its design is specifically trying to limit the reach of individuals. Philosophically, this network is opposed to centralization. The same way no user should accumulate power and influence over other users, the network itself, and whoever runs/maintains it, shouldn't either. Centralized ownership and moderation over the network leaves it vulnerable to enshittification and [other problems](https://www.rand.org/pubs/commentary/2023/01/the-digital-town-square-problem.html).

In practice, this likely means using something like the [Agentic Fediverse](/garden/fedi-v2/index.md) as a base. Either way, ensure servers are only useful as relays; replaceable and without authority. Also design the protocol so that it can be improved and built upon without the need for a central authority. This goes beyond the efforts of AcivityPub and AtProto, which enable federations of smaller centralized authorities, not full decentralization.

### Moderation

Being decentralized does not mean it cannot be organized and moderated. Decentralization is not an excuse to not moderate, and stopping the spread of hateful content does shouldn't be objected to on the principles of free speech.

I discuss how to organize without introducing authoritarian hierarchies while exploring the philosophy behind [Anarchism](/garden/anarchism/index.md). I explore decentralized moderation in my proposal for [Fedi v2](/garden/fedi-v2/index.md). The network of vouches idea I describe in the moderation section is prototypical of the principles of locality describe here.

Moderation is pretty tricky though, and while I believe the above can be quite effective, particularly at eliminating spam, this is something that will need review and iterations. No social media has solved the moderation problem. As [this article](https://privacy.thenexus.today/blocklists-in-the-fediverse/#centralize-power) points out, it's easy for moderation to have unintended side effects, particularly for marginalized groups.

For specifically tackling the problem of keeping fascism out of a community, I recommend [this video](https://youtu.be/P55t6eryY3g) (and the whole series) by Innuendo Studios.

### Avoiding [Filter Bubbles](/garden/filter-bubbles/index.md) (or echo chambers)

The natural argument against what I'm describing here is that it would encourage the creation of filter bubbles. But I'd like to counter that argument by saying you're tackling the wrong issue, and that filter bubbles are typically innocuous and abolishing them would be actively harmful to marginalized communities. I've written a lot about filter bubbles on their own page, so I recommend you check it out.

## Related Concepts

### Webrings

Erlend discusses a similar concept to locality in his blog post [Federated Webrings](https://blog.muni.town/federated-webrings/), which describes how the old internet would make frequent use of webrings to connect similar sites. This would effectively create digital neighbors and make both the site owner and visitors connect with the owners and visitors of the other sites in the webring. Although I think these webrings become a bit too large and centralized. I would've preferred to see them work more like cooperatives, with some form of democratic decision making.

Erlend's suggestion for bringing webrings back is through the use of communities using shared topic-specific rooms. For example, several rust game development libraries having a shared chatroom for discussing game development in general. This makes the communities more porous, so members can discover related people and communities.

I recommend reading through the rest of Erlend's writing and keeping up with their projects. They've done a lot in this sphere, both while working at discourse and since, and are leading the charge for designing and implementing the agentic fediverse.

### [IndieWeb](/garden/the-small-web/index.md)

Personal websites form a fully decentralized social network called the indie web, which focuses on data ownership. However, it's quite small due to the technical and financial barriers to creating a website. Due to the lack of centralization or algorithms, sites spread primarily by being linked to by others. That brings it close to what I'm describing here, although without asynchronous chat I don't think it's quite what I'm looking for.

### MUDs

What I'm describing is also a lot like a MUD, classic online games where players existed in a world of connected rooms, where they interacted via a command line interface, including local and global chat. If it were decentralized and people all had control over their own room, it would look a lot like what I am describing (but much nerdier and less modern). It's a big inspiration for a lot of these ideas.

## The [Chromatic Lattice](/garden/chromatic-lattice/index.md) Experiment

I've been working on designing a game, chromatic lattice, that will involve social elements and be a "living game". It would avoid issues with the network effect by justifying it's existence with it's gameplay, similar to how many MMOs work. This makes it a great testing grounds for some of the ideas discussed in this document, particularly with respect to a community with digital locality.

A person's board will act as their profile page, and will include a local chat room (as opposed to the global one), a description, a list of people actively on the page, and a friends list that can be broken down into categories. Cursors also appear on the board for all users, although those can be toggled off in settings.

The idea is that whenever someone isn't actively working on improving their design, they can be visiting other players and chatting. They should still be able to see their resource amounts and buy upgrades while "abroad".

These chats will need some system for messages being reported, and users banned or silenced. No private chats - those will have to be taken to matrix, which every player will have.

The friend lists effectively work as the links between nodes, creating locality. Everyone has a link to their own board accessible at all times, and from there to their friends. All links would also show a count of how many people are on that board.

In addition to friends, you can jump to a players board or to wherever the player is by right clicking their name in global chat. You can also share links to your board off platform as well.

In theory, by making friends public and mutual, and showing the count of who is actively there, we should see clusters forming. My concern would be everyone just joining a single board, but hopefully stuff like wanting to discuss different topics can naturally prevent that from occurring.

I'll consider this experiment a success if people actually explore the network by jumping between boards, and if there are more messages sent in local chat than global chat. I'd like the average amount of players in a non empty room to be close to log_2(active players).