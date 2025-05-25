---
alias: "Agentic Fediverse, Leaf"
public: "true"
slug: "fedi-v2"
tags: [Decentralized]
title: "Fedi v2"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Fedi v2</h1>
<p>3025 words, ~17 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/decentralized-social-media/index.md">Decentralized Social Media</a><a href="/garden/decentralized/index.md">Decentralized</a><a href="/garden/erlend-heggen/index.md">Erlend Heggen</a><a href="/garden/filter-bubbles/index.md">Filter Bubbles</a><a href="/garden/incremental-social/index.md">Incremental Social</a><a href="/now/index">/now</a><a href="/garden/orchard/index.md">Orchard</a><a href="/garden/social-media/index.md">Social Media</a><a href="/garden/the-indieweb/signature-blocks/index.md">The IndieWeb/Signature Blocks</a><a href="/garden/weird/index.md">Weird</a></details>

<details><summary>Tags:</summary><a href="/garden/decentralized/index.md">Decentralized</a></details>

Leaf is a decentralized network in development by [Erlend Heggen](/garden/erlend-heggen/index.md) and company that would be a client-centric alternative to the server-centric [Fediverse](/garden/fediverse/index.md). I'm really interested in seeing this develop, so have put my own thought on the vision of this project here, under the more generic term "Fedi v2". You can see the official plans and implementation on the [Agentic Fediverse repo](https://github.com/muni-town/agentic-fediverse).

## Motivation

The current fediverse, while in theory fully [Decentralized](/garden/decentralized/index.md), in practice suffers many of the issues associated with centralization. This is primarily caused by the friction of having to pick a server and the non feasibility of individuals buying a domain and setting up a single user instance - both of these causes lead to a handful of large servers with the bulk of the users. You can see this in action by looking up the relative sizes of lemmy and mastodon instances. [Single-user Mastodon Instance is a Bad Idea](https://mull.net/mastodon) goes over the non feasibility of self hosting and how it contributes to a handful of servers having the majority of the users.

The promise of federation is the ability to interact with the whole network, while being able to fully choose and customize how you yourself interact with the network. In practice though, clients are severely limited to what they can do based on the server software. Of particular note, Lemmy and Mastodon show content in different formats (threads vs microblogs), and no clients allow changing how they're displayed, or respecting the format of the source of the content. Clients also are unable to change sorting algorithms or how downvotes are handled - those are all dependent on the server. [A Plan for Social Media - Rethinking Federation](https://raphael.lullis.net/a-plan-for-social-media-less-fedi-more-webby/) similarly criticizes how much of the decisions are dependent on the server, which most people won't be able to or willing to self host.

The pick a server problem is such a problem because not only do you have to pick what server has moderation policies you align with, but that you're also linking your identity with that server. Smaller servers tend to be more focused or niche, which is unlikely to fully encompass any person's entire identity. Why would I confine myself to being `thepaperpilot@writinglovers.com` if I'm more than a writing lover? Additionally, I'm risking that the community at that instance won't grow away from things I want to associate with, such as fascism or crypto. My identity could end up being associated with things I drastically don't want it to be.

[Nostr](https://nostr.com/) fixes the pick a server problem with a properly decentralized identity, however it's done so by associating itself with crypto and the alt right, and fixing that culture problem is more effort than it's worth. It'll be difficult to gain broad adoption as anyone using the platform will have to take care to explain how they're using nostr but aren't alt right.

[ATProto](https://atproto.com/) by bluesky offers a version of federation built for a handful of large instances, but allowing smaller servers to be spun up that can implement custom sorting algorithms, views, etc. Your identity can be tied to a domain you own, if you have one. This fixes a couple of the problems where you're unable to change certain things dictated by the servers, but doesn't quite go far enough. Their PDS system is very similar to what we're going for, but it's still tied to signing up at (and then relying upon) specific servers.

[NextGraph](https://docs.nextgraph.org/en/introduction/) looks very similar to what we're trying to build. My only note is really that it gives a bit of a crypto vibe through decisions like calling identities "wallets" that I think may make it fall into the same problems nostr has, but conceptually its _really_ similar to everything discussed here, which is great! It should be incredibly easy to interoperate, at the very least.

<span id="66527b3e-58af-41c4-8345-5c0951e42f54"><h2>[Decentralized Identity](/garden/decentralized-identity/index.md)</h2></span>

The decentralized fediverse should have a fully decentralized identity, where it's completely attached to the client rather than any server(s). This means you don't have to pick a server, worry about your chosen server going down, or that your identity will become associated with an undesired community. It can properly allow you to engage in your variety of interests without having to associate your identity with just one.

By relying on signed messages, content (posts, profile information, etc.) is also not attached to any specific delivery system. Relay servers, a USB stick, or QR code could all work and still have the guarantees it was written by someone with the private key and has not been tampered with. It should be noted that none of the major social media platforms existing today can give verifiable proof a message was not tampered with.

## Servers

Servers would act as mere relays, whose job it is is to store messages and send them to any other clients or servers that have requested to hear about any new messages. Some relays may also display these messages in a web interface, so that you can still share links to messages online. Because your identity isn't attached to any specific server, you could send your messages out to any servers you wish, and change that list as often as you'd like. It's extremely resilient to individual servers going down.

If you want a private network, say for a school or job, you could setup a relay server that requires some sort of password when sending them messages, and then have that server not federate with the rest of the fediverse.

Servers would give clients ways to subscribe to subsets of all received messages - e.g. all messages, all messages from a specific user, any replies to messages from a specific user, or "shallow" subscriptions to a message, meaning it'll send you only 1 level of replies to that message.

With a decentralized identity and the ability to switch servers seamlessly whenever you want, many of the benefits of self hosting a server are granted to everyone. This means there'll likely be fewer servers than the current fediverse has. There'll likely be enough to ensure redundancy, but beyond that I'd really only expect a couple large servers, similar to how bluesky intends AtProto to have, and perhaps smaller instances by institutions that want to provide storage for the people within that institution. Fortunately, it also means the disadvantages of only having 1 or a small number of servers also go away. We only need enough instances for redundancy, but beyond that we don't need to worry about being locked into a server or your server having rules you disagree with or anything. You'll always have your data, and can just send it to another server whenever you'd like. These fewer but larger servers will be useful for discoverability with less traffic between all the servers.

## Content

The protocol should be fairly content agnostic, and allow arbitrary metadata on messages that can be used by the community to come up with their own new forms of content to transmit over the protocol. For example, perhaps there's a body field that could include arbitrary text _or_ binary data, and for binary data another field could clarify if its audio, video, an image, or something else.

The signature of the message acts as the de facto ID of that message, for replying purposes. Edits and reactions would be handled by "replying" to a message with a metadata flag indicating what the message actually represents. Edit messages should typically be ignored if they're not from the same author as the original message. We should assume some servers will always make an edit history fully public. Reactions should just be replies without any actual body, and a tag for what the reaction is - either binary image data or a code representing an emoji, like "+1" or "laughing". Upvotes and downvotes could be implemented via reactions.

Edit replies could be sent by people other than the original poster as well. Perhaps some clients would trust edits from a list of identities, but the original poster could also reply to an edit message with an "accepted" message as a form of officially accepting/endorsing that edit suggestion. Clients could also potentially include a list of "proposed edits" that haven't been accepted.

Groups/communities could also be specially flagged messages, effectively allowing for subreddit-style content. Posting to the community is just replying to the message. Subscribing to that community is just subscribing to that message. The original message creator can send edits to update stuff like the description of the community. Perhaps they can also send a message detailing other identities to trust for editing or moderating the community.

A bot could fairly easily be setup to make [IndieWeb](/garden/the-small-web/index.md) posts and web mentions use this protocol. Indeed, this protocol is very POSSE-friendly because you could have your original content on the website, and the messages can be spread across the network while allowing clients to verify it was untampered with and definitely came from that website. I plan on writing a proposal for IndieWeb posts to include [The IndieWeb/Signature Blocks](/garden/the-indieweb/signature-blocks/index.md) to enable this. Within this framework, Fedi v2 would not just be a other social media silo. It would be the source of truth, fully controlled by the author. Even if the author cross posts to other social media (silos), we'd effectively still be the original copy.

## [Decentralized Moderation](/garden/decentralized-moderation/index.md)

## Success

I believe the main benefits of this new fediverse are mostly going to apply to the techy power users who will appreciate the increased control over their identity and browsing experience. As far as the general public goes, I think the main benefit will be verified authorship and guaranteeing lack of tampering. Specifically, I think this will appeal to notable figures who have to be wary of concerns like that. Reddit and Twitter could edit your content or stifle it in the algorithm, or any other sort of malicious actions. So I think success of this platform will mostly come from seeing notable figures switching to it, and treating is as the source of truth (even if they cross post it to other platforms for increased outreach). Ideally, they even host their messages on their own website.

## Component Definitions

The agentic fediverse is currently being designed such that messages are entities in a Entity-Component relationship. Component schemas can then be formally defined and then implemented in clients, without the need of a centralized authority releasing formal spec bumps. In theory _anyone_ could propose a new schema.

Here's some initial ideas for components I currently plan on proposing and perhaps even implementing:
- **Community** (placeholder name): Marks that replies to this message should be displayed like a collection of threads, reddit-style.
- **Delete**: Marks that this message is a deletion request to the message its a reply to.
	- Can be used to delete specific components in the parent message.
- **Edit**: Marks that this message is an edit request to the message its a reply to.
	- Can be used to edit specific components in the parent message.
- **Accept**: Marks that any requests in the message this message is a reply to were accepted.
	- Takes an optional schema property to identify which specific request component of the parent message was accepted.
- **Reaction**: Marks that this message is a reaction to the message its a reply to.
- **Ascii**: Describes a text component to be rendered.
- **Unicode**: Describes a text component to be rendered.
- **Image**: Describes an image component to be rendered. (Or perhaps specific file formats should have their own schemas)
- **Audio**: Describes an audio component to be rendered. (Or perhaps specific file formats should have their own schemas)
- **Video**: Describes a video component to be rendered. (Or perhaps specific file formats should have their own schemas)
- **Topics**: Describes a list of topics/tags this message is relevant to, for use in client searching and filtering.
- **Editors**: Describes a list of identities who have the power to edit this message, or accept edit requests to this message.
- **Deleters**: Describes a list of identities who have the power to delete this message, or accept deletion requests to this message.
- **No Discovery**: Marks that this message should not be included in any global feeds or search results. Servers should only send it to servers and clients that subscribe to messages like this one.
- **Timestamp Requested**: Marks that this message would like to receive a response from a trusted server (optionally defined in the component data) once it is delivered. May also include a schema ID that represents what the timestamp represents. Defaults to referring to the published date.
- **Calendar Event**: Describes a calendar event.
- **RSVP**: Marks that you [are, might be, or aren't] participating in whatever a linked entity is describing.

### Chatting

The agentic fediverse could theoretically also implement chat rooms, bringing advantages (like divorcing identity from servers) that current decentralized chat protocols like matrix don't offer.

Here are some of the components that could be used to represent a chat room:
- **Chat room**: Marks that replies to this message should be shown as messages in a chat room.
- **Bridge**: Marks that this _identity_ is a bridge for an account on another service. Implies that the verification of authorship may not be preserved.

### Games

The agentic fediverse could support sharing games using a Game component that includes a url or raw html required to play a game. In theory they could even support "cloud saves" by signing a message of their save data that only they can decrypt and sending it as a reply to the game message. Clients could handle displaying the game alongside the usual filtering and sorting features.

I'd also be excited in seeing a sort of MMO style game on the agentic fediverse. So you see other players and there's a shared game state, calculated on the client based on the actions recorded by the various different players. And since the rules would have to be defined by the components, people could create their own copies of the world (e.g. to play with a friend group or solo), or even make their own mods of the game. I'd like to look into that.

Having the game state be calculatable by the client like that would also allow trophies and achievements to work verifiably. People could probably still write software to copy someone else's events at the right times and effectively replicate their save, but I think that won't happen commonly enough to matter.

### Permissions

Instead of having various different licenses like CC0, MIT, etc., just make each permission discrete. For example, you can have a DoNotTrainOn component that marks that using an entity for training AI models is not allowed.

This is different from the willow permissions system which determines who can read or write to specific entities/paths. This is for telling someone who has read access to your post what they're allowed to use it for.

There should be a component that makes permissions explicit rather than implicit. E.g. assume you don't have the right to do anything unless explicitly stated.

## Local identity and contact management

If I have multiple apps that use the agentic fediverse (e.g. one for reddit like content, one for Twitter, discord, Google drive, etc.), I'd like to easily have them all use the same identity(s), as well as a shared contact list (so I know the person I saw do something on one app is the same as the person that did something on another app).

To that end, there should be an app/program that manages your identities and contacts on that device. It sets up your initial identity, any cloud backups, etc., and the other apps talk to it as needed. That could be sending it individual messages to sign or asking for a key that can be used to do limited functionality.

Contacts could be signed such that they're only readable by us, and then sent over the network so I can have multiple devices that keep their contact list synced between them

An identity management app could also work as a link handler for the `leaf` protocol. It could take a schema ID as another path component, which then describes the purpose of the URI and the expected remaining data in the URI. The identity management app can then pass the message along to any app that has specified it knows how to handle that schema.

## Sustainability

Servers are expensive, especially as they get popular. Most current fediverse instances are free and funded by donations. Things like ads or paying for an account are difficult to do due to the nature of federation. This is a pretty major problem because if a server becomes too expensive to host, it will shut down, along with all the accounts associated with it. Fedi v2 makes individual servers going down not be an issue anymore, since identities aren't attached to them. However, it's an issue if _all_ the instances go down, and if there's no way to pay for them still, why would _any_ instance stay up?

Since instance nodes do not have to do filtering, sorting, or really any other processing, but rather just serving the events and sending out notifications to clients, the cost will be cheaper than the current fediverse. It's really just a file server, which is cheap. For example, idrive charges $40 per tb per year, which is enough for a LOT of content. So I expect some instance nodes to have fairly generous free tiers that will suffice for a lot of users. Idrive also doesn't have egress charges, so the cost only scales with how much content is being published, not downloaded.

For power users, instance nodes could accept payments to store data above the free quota. This would likely most often happen for people wishing to upload high resolution images or videos. A user could also switch nodes after filling a quota on one node - you don't have to delete your content on the old instance. You could also do this to backup your content on multiple nodes (although you should also keep a local copy of all your content).

I assume this aspect of Fedi v2 will be the most controversial - people really like free services, and are expecting it. Knowing they might eventually need to pay to post more will perhaps require a cultural shift. I think it's worth it to not have ads or tracking, and in general we should be supporting sustainable services.

## What about Incremental Social?

I think Incremental Social can operate similarly to weird.one, hosting an iroh node and storing events for the agentic fediverse for users of the site. We'll generate and manage a keypair for the user, with the possibility of the user migrating their identity.

I suspect the way the identity management app will work to support sites like weird.one and incremental.social is by passing the request for a delegate key to incremental.social, which will then show the consent screen before passing the key back to the app which sends it to the actual fediverse app.

## Further Reading

https://deadsuperhero.com/my-dream-fediverse-platform/ has a lot of ideas that sound a LOT like what we're planning here!