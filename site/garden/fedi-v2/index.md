---
public: "true"
slug: "fedi-v2"
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
<p>2566 words, ~14 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/social-media/index.md">Social Media</a><a href="/garden/the-indieweb/signature-blocks/index.md">The IndieWeb/Signature Blocks</a><a href="/garden/weird/index.md">Weird</a></details>

A placeholder name for a theoretical new federated network that is client-centric, in contrast to the server-centric [Fediverse](/garden/fediverse/index.md). Many of the ideas here will be implemented as described or similarly by people much smarter than me as part of [Agentic Federation on Iroh](https://github.com/commune-os/weird/discussions/32), an initiative by the [Weird](/garden/weird/index.md) developers.

## Motivation

The current fediverse, while in theory fully [Decentralized](/garden/decentralized/index.md), in practice suffers many of the issues associated with centralization. This is primarily caused by the friction of having to pick a server and the non feasibility of individuals buying a domain and setting up a single user instance - both of these causes lead to a handful of large servers with the bulk of the users. You can see this in action by looking up the relative sizes of lemmy and mastodon instances. [Single-user Mastodon Instance is a Bad Idea](https://mull.net/mastodon) goes over the non feasibility of self hosting and how it contributes to a handful of servers having the majority of the users.

The promise of federation is the ability to interact with the whole network, while being able to fully choose and customize how you yourself interact with the network. In practice though, clients are severely limited to what they can do based on the server software. Of particular note, Lemmy and Mastodon show content in different formats (threads vs microblogs), and no clients allow changing how they're displayed, or respecting the format of the source of the content. Clients also are unable to change sorting algorithms or how downvotes are handled - those are all dependent on the server. [A Plan for Social Media - Rethinking Federation](https://raphael.lullis.net/a-plan-for-social-media-less-fedi-more-webby/) similarly criticizes how much of the decisions are dependent on the server, which most people won't be able to or willing to self host.

The pick a server problem is such a problem because not only do you have to pick what server has moderation policies you align with, but that you're also linking your identity with that server. Smaller servers tend to be more focused or niche, which is unlikely to fully encompass any person's entire identity. Why would I confine myself to being `thepaperpilot@writinglovers.com` if I'm more than a writing lover? Additionally, I'm risking that the community at that instance won't grow away from things I want to associate with, such as fascism or crypto. My identity could end up being associated with things I drastically don't want it to be.

[Nostr](https://nostr.com/) fixes the pick a server problem with a properly decentralized identity, however it's done so by associating itself with crypto and the alt right, and fixing that culture problem is more effort than it's worth. It'll be difficult to gain broad adoption as anyone using the platform will have to take care to explain how they're using nostr but aren't alt right.

[ATProto](https://atproto.com/) by bluesky offers a version of federation built for a handful of large instances, but allowing smaller servers to be spun up that can implement custom sorting algorithms, views, etc. This fixes a couple of the problems where you're unable to change certain things dictated by the servers, but doesn't quite go far enough - and of particular note, you still have to associate your identity with a specific server.

<span id="66527b3e-58af-41c4-8345-5c0951e42f54"><h2>Identity</h2></span>

The new fediverse should have a fully [Decentralized Identity](/garden/federated-identity/index.md), where it's completely attached to the client rather than any server(s). This means you don't have to pick a server, worry about your chosen server going down, or that yout identity will become associated with an undesired community. It can properly allow you to engage in your variety of interests without having to associate any as core enough to attach your identity to.

This identity can be accomplished by the client merely generating a private and public key, which can then be stored however the user pleases. Reasonably, there's be default options to back up the private key to Google drive or alternatives, as most users will not desire to go the extra effort of backing up their identity without relying on big storage websites. But for those who wish, you could keep the identity solely on the device, or choose your own method of storage and backup.

The client can sign messages using the private key and distribute it through whatever means they wish, and it can be verified as sent by that identity using the public key to decode the message. In this context, messages could also refer to any other signed information, such as a bundle of profile information.

For casual conversation, a nickname in the profile data should be sufficient. Once a client interacts with someone, they can be added as a contact as a way of verifying the next conversation with someone with that username is actually the same person as before. For situations where you want to verify an identity actually has a credentials they claim, you can query a nameserver that vouches for them. For example, whitehouse.gov would have a nameserver that specifies which identity is the actual president of the United States (and other government officials). There could be nameservers that allow you to openly "register" your identity with them to get a unique human readable username you can include on billboards or other visual media where you want someone to be able to memorize the identifier, rather than scan a QR code or something. For more details on how these decentralized usernames would work, check out [Petnames](https://spritely.institute/static/papers/petnames.html).

Through cryptography, you can be confident messages are verifiably sent by someone with access to the private key, and that the message was not tampered with. These are guarantees you can't make with the current server centric fediverse.

If you lose access to your account, it's gone forever. That is why I think there should be defaults to backup your private key to existing reliable servers, even if they're owned by large corporations. Otherwise I would see someone have their phone stolen, lost, or upgraded and be surprised when their account is now inaccessible.

If you do lose your account and create a new identity, you could have others "vouch" for the new identity being an alias for the previous identity. You could verify your new identity with people IRL, and then other clients can see those vouches publicly and, after sufficient quantity, just implicitly assume they're the same (although with some sort of indicator, so if this gets abused, users are at least aware of the possibility of impersonation.

## Servers

Servers would act as mere relays, whose job it is is to store messages and send them to any other clients or servers that have requested to hear about any new messages. Some relays may also display these messages in a web interface, so that you can still share links to messages online. Because your identity isn't attached to any specific server, you could send your messages out to any servers you wish, and change that list as often as you'd like. It's extremely resilient to individual servers going down.

If you want a private network, say for a school or job, you could setup a relay server that requires some sort of password when sending them messages, and then have that server not federate with the rest of the fediverse.

Servers would give clients ways to subscribe to subsets of all received messages - e.g. all messages, all messages from a specific user, any replies to messages from a specific user, or "shallow" subscriptions to a message, meaning it'll send you only 1 level of replies to that message.

## Content

The protocol should be fairly content agnostic, and allow arbitrary metadata on messages that can be used by the community to come up with their own new forms of content to transmit over the protocol. For example, perhaps there's a body field that could include arbitrary text _or_ binary data, and for binary data another field could clarify if its audio, video, an image, or something else.

The signature of the message acts as the de facto ID of that message, for replying purposes. Edits and reactions would be handled by "replying" to a message with a metadata flag indicating what the message actually represents. Edit messages should typically be ignored if they're not from the same author as the original message. We should assume some servers will always make an edit history fully public. Reactions should just be replies without any actual body, and a tag for what the reaction is - either binary image data or a code representing an emoji, like "+1" or "laughing". Upvotes and downvotes could be implemented via reactions.

Edit replies could be sent by people other than the original poster as well. Perhaps some clients would trust edits from a list of identities, but the original poster could also reply to an edit message with an "accepted" message as a form of officially accepting/endorsing that edit suggestion. Clients could also potentially include a list of "proposed edits" that haven't been accepted.

Groups/communities could also be specially flagged messages, effectively allowing for subreddit-style content. Posting to the community is just replying to the message. Subscribing to that community is just subscribing to that message. The original message creator can send edits to update stuff like the description of the community. Perhaps they can also send a message detailing other identities to trust for editing or moderating the community.

A bot could fairly easily be setup to make [IndieWeb](/garden/the-small-web/index.md) posts and web mentions use this protocol. Indeed, this protocol is very POSSE-friendly because you could have your original content on the website, and the messages can be spread across the network while allowing clients to verify it was untampered with and definitely came from that website. I plan on writing a proposal for IndieWeb posts to include [The IndieWeb/Signature Blocks](/garden/the-indieweb/signature-blocks/index.md) to enable this. Within this framework, Fedi v2 would not just be a other social media silo. It would be the source of truth, fully controlled by the author. Even if the author cross posts to other social media (silos), we'd effectively still be the original copy.

## Moderation

Anyone can send edit and delete requests as replies to messages, but they'll typically be ignored since they'd be coming from a different identity. However, you could have clients or even servers honor those requests based on various heuristics - deleting anything that's gotten X delete requests, or trust specific identities to act as moderators. Since individual clients could choose which identities to honor, the moderation is effectively fully decentralized. Clients will probably have a couple identities trusted by default, to check for illegal content or that would otherwise prevent the app from breaking the app store's TOS.

Anyone can spin up their own bots that just automatically send out delete requests based on custom logic, like checking for images that match the CSAM hash list, or messages that ChatGPT says are non-constructive. Through this, the ecosystem will over time allow people to further customize their experience by filtering out unwanted content more and more precisely.

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

### Chatting

The agentic fediverse could theoretically also implement chat rooms, bringing advantages (like divorcing identity from servers) that current decentralized chat protocols like matrix don't offer.

Here are some of the components that could be used to represent a chat room:
- **Chat room**: Marks that replies to this message should be shown as messages in a chat room.
- **Bridge**: Marks that this _identity_ is a bridge for an account on another service. Implies that the verification of authorship may not be preserved.

### Games

The agentic fediverse could support sharing games using a Game component that includes a url or raw html required to play a game. In theory they could even support "cloud saves" by signing a message of their save data that only they can decrypt and sending it as a reply to the game message. Clients could handle displaying the game alongside the usual filtering and sorting features.

## Local identity and contact management

If I have multiple apps that use the agentic fediverse (e.g. one for reddit like content, one for Twitter, discord, Google drive, etc.), I'd like to easily have them all use the same identity(s), as well as a shared contact list (so I know the person I saw do something on one app is the same as the person that did something on another app).

To that end, there should be an app/program that manages your identities and contacts on that device. It sets up your initial identity, any cloud backups, etc., and the other apps talk to it as needed. That could be sending it individual messages to sign or asking for a key that can be used to do limited functionality.

Contacts could be signed such that they're only readable by us, and then sent over the network so I can have multiple devices that keep their contact list synced between them