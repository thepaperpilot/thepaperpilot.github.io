---
public: "true"
slug: "fedi-v2"
title: "Fedi v2"
prev: false
next: false
---
# Fedi v2

> Referenced by: [Social Media](/garden/social-media/index.md)

My take on a theoretical successor to federated [Social Media](/garden/social-media/index.md)

## Inspiration
- [A Plan for Social Media - Rethinking Federation](https://raphael.lullis.net/a-plan-for-social-media-less-fedi-more-webby/)
	- This article doesn't address many implementation details:
		- If the server is a relay, can content not be viewed anonymously?
		- How to handle storing large amounts of data on every client?
		- Don't you still need to associate with a server for people to direct their messages to?
- [Single-user Mastodon Instance is a Bad Idea](https://mull.net/mastodon)
	- Focuses on the non-feasibility of self hosting, contributing to [Federated Social Media](/garden/fediverse/index.md) not actually having all the upsides it should theoretically have by virtue of being [Decentralized](/garden/decentralized/index.md)
- The [Commune](/garden/commune/index.md) community
- Existing protocols:
	- [Nostr](https://nostr.com)
	- [ATProto](https://atproto.com)
- A lot of these ideas are learned lessons from the usenet days

[Weird](/garden/weird/index.md) may eventually move in the direction of implementing something like this
- [Next Gen Federation on Iroh: Graph Data & Linked Documents Layers](https://github.com/commune-os/weird/discussions/32)

## Identity
- [Federated Identity](/garden/federated-identity/index.md)
- Private and public keys anyone can create and store how they want
	- Fully free to create and store with no server dependencies
- Profile information
	- Sent as a signed message through all the relays
	- How would you trust a username?
		- [Petnames](https://spritely.institute/static/papers/petnames.html) could be used to display human readable names via contacts or decentralized "naming hubs"
		- In most conversations online, you can trust their display name and add them as a contact as that display name
			- You only need to verify they are the same person you interacted with previously
			- You only need to trust people you want to send money to or otherwise "important identities"
			- For important identities, you can trust your contacts forming a chain of trust, or a authoritative naming hub
				- E.g. a white house ran naming hub that verifies the identities of the president and people of Congress
				- People typically wouldn't reach out to a naming hub, as it's not typically necessary
			- Contacts supercede naming hubs, so if a naming hub is breached, anyone I've previously added as a contact is still the source of truth
				- This only fails if the private key itself was breached
			- I'm just thepaperpilot, my display name. For most online communication, this is sufficient
				- My website can have a nameserver saying this publickey is the same as the site owner
				- If I write a paper at a scientific journal, they can say the author of x paper is my publickey
- How to handle losing your private key
	- If you do have a naming hub you can verify with, they can say the identity has a new publickey
	- Contacts can "vouch" for a identity having a new publickey
	- Clients can decide to trust the new publickey based on contacts and naming hubs saying to
	- Also applies to stolen or compromised keys
- I believe [Iroh](https://iroh.computer) works this way

## Servers
- Act as relays, merely storing messages and sending them to any clients or servers that have subscribed
- May decide to publicly display messages its received
	- These servers are how discovery would work
	- Different servers may offer unique displays, filters, etc.
- Users can send their content to any server - no authentication or account required, as the identity suffices
	- Even replies can work this way - no need to know from where a given message originated
- Private servers could require some password when sending messages or subscribing to things
	- Useful for a school or other entity that wants an internal social network
- Different ways to subscribe to a server's messages
	- All messages the relay hears about (new relays essentially subscribe like this to some existing relay)
	- All messages from a specific poster ID
	- Any replies to a message created with a specific poster ID
	- Shallow subscriptions, to lighten the load when subscribing to communities

## Content
- Protocol should dictate how to convey text, image, audio, video, and binary content
- Protocol should include reacting to content with arbitrary text, including a URL
	- Upvotes and downvotes are implemented with this system
- Each message contains fields for the poster's ID (public key) and a signature that verifies the content was made by that poster
	- That signature serves as an ID for the message itself
		- Anything can be replied to using the ID as the "parent" property in a new post
- Edits are handled as replies with some flag to indicate it's updating the parent messages' content
	- Naturally, this reply would only be respected if it matches the same creator ID
	- Servers should replace the original message entirely with this one and indicate its an edited message
		- Some servers will inevitably keep a full history though
- Groups/communities are just specially flagged messages
	- Posting to a community is just replying to that message
	- Subscribing to a community is just subscribing to that message
	- The original message creator effectively owns the group

## Moderation
- In general, edits and delete requests are made by replying with a specially flagged message
- Edit and deletion messages are ignored unless they have the correct public key and signature
	- Parent messages form a hierarchy of permission - if someone replies to your message, you can send a delete request for that message
	- Relay owners cannot fully delete messages, but can choose to stop relaying replies etc. of messages as the server owner wishes
- Posts can be publicly reported with a specially flagged reply
	- How to make anonymous reports?
- Users can send deletion or edit messages even without a matching public key, and clients (or relays) can choose to respect those messages if that public key is whitelisted as a moderator
	- Messages (and by extension, groups) can have replies granting or removing permission to other public IDs at that hierarchy level
	- People can setup accounts with their desired heuristic for sending delete messages, such as looking at public reports or analyzing the content with AI
		- This way clients can effectively customize their preferred moderation
- Clients can also choose to add additional rules for hiding content, such as any reports by followed users
- Perhaps delete messages pull double duty as public reports in and of themselves?

## Problems to solve
- No anonymity
	- All upvotes, downvotes, etc. are linked to your public key
	- Perhaps a client could generate new keypairs for every action for anonymity, but then it'd be hard to determine if such an account and action was a genuine user or a bot
- Servers could probably determine the identity of clients sending their messages to them
	- A client that only ever sends messages with a specific public key is unlikely to be a server
	- A client that doesn't subscribe to all messages is unlikely to be a server
- Illegal material will likely be placed on the hard drive at least temporarily
	- Messages will be downloaded and, even if you follow a moderator bot that looks for illegal material, there's likely to be a delay between receiving the initial message and receiving the bots delete message
- You have to download all spam messages
	- For redundancy, you'd likely subscribe to multiple relay servers
	- You cannot trust several relay servers to have identical rules on not relaying messages that don't pass whatever moderation heuristic
	- Therefore, the filtering out of spam has to be done by the client, after downloading it all