import{_ as e,c as i,o as t,a1 as l}from"./chunks/framework.CW2X4ZVO.js";const m=JSON.parse('{"title":"Fedi v2","description":"","frontmatter":{"public":"true","slug":"fedi-v2","title":"Fedi v2"},"headers":[],"relativePath":"garden/fedi-v2/index.md","filePath":"garden/fedi-v2/index.md","lastUpdated":null}'),a={name:"garden/fedi-v2/index.md"},s=l('<blockquote><p>Referenced by: <a href="/garden/social-media/">Social Media</a></p></blockquote><p>My take on a theoretical successor to federated <a href="/garden/social-media/">Social Media</a></p><p>Inspiration:</p><ul><li><a href="https://raphael.lullis.net/a-plan-for-social-media-less-fedi-more-webby/" target="_blank" rel="noreferrer">A Plan for Social Media - Rethinking Federation</a><ul><li>This article doesn&#39;t address many implementation details: <ul><li>If the server is a relay, can content not be viewed anonymously?</li><li>How to handle storing large amounts of data on every client?</li><li>Don&#39;t you still need to associate with a server for people to direct their messages to?</li></ul></li></ul></li><li><a href="https://mull.net/mastodon" target="_blank" rel="noreferrer">Single-user Mastodon Instance is a Bad Idea</a><ul><li>Focuses on the non-feasibility of self hosting, contributing to <a href="/garden/fediverse/">Federated Social Media</a> not actually having all the upsides it should theoretically have by virtue of being <a href="/garden/decentralized/">Decentralized</a></li></ul></li><li>The <a href="/garden/commune/">Commune</a> community</li><li>Existing protocols: <ul><li><a href="https://nostr.com" target="_blank" rel="noreferrer">Nostr</a></li><li><a href="https://atproto.com" target="_blank" rel="noreferrer">ATProto</a></li></ul></li><li>A lot of these ideas are learned lessons from the usenet days</li></ul><p><a href="/garden/weird/">Weird</a> may eventually move in the direction of implementing something like this</p><p><a href="/garden/federated-identity/">Federated Identity</a></p><ul><li>Private and public keys anyone can create and store how they want <ul><li>Fully free to create and store with no server dependencies</li></ul></li><li>Profile information <ul><li>Sent as a signed message through all the relays</li><li>How would you trust a username? <ul><li><a href="https://spritely.institute/static/papers/petnames.html" target="_blank" rel="noreferrer">Petnames</a> could be used to display human readable names via contacts or decentralized &quot;naming hubs&quot;</li></ul></li></ul></li><li>I believe <a href="https://iroh.computer" target="_blank" rel="noreferrer">Iroh</a> works this way</li></ul><p>Servers</p><ul><li>Act as relays, merely storing messages and sending them to any clients or servers that have subscribed</li><li>May decide to publicly display messages its received <ul><li>These servers are how discovery would work</li><li>Different servers may offer unique displays, filters, etc.</li></ul></li><li>Users can send their content to any server - no authentication or account required, as the identity suffices <ul><li>Even replies can work this way - no need to know from where a given message originated</li></ul></li><li>Private servers could require some password when sending messages or subscribing to things <ul><li>Useful for a school or other entity that wants an internal social network</li></ul></li><li>Different ways to subscribe to a server&#39;s messages <ul><li>All messages the relay hears about (new relays essentially subscribe like this to some existing relay)</li><li>All messages from a specific poster ID</li><li>Any replies to a message created with a specific poster ID</li></ul></li></ul><p>Content</p><ul><li>Protocol should dictate how to convey text, image, audio, video, and binary content</li><li>Protocol should include reacting to content with arbitrary text, including a URL <ul><li>Upvotes and downvotes are implemented with this system</li></ul></li><li>Each message contains fields for the poster&#39;s ID (public key) and a signature that verifies the content was made by that poster <ul><li>That signature serves as an ID for the message itself <ul><li>Anything can be replied to using the ID as the &quot;parent&quot; property in a new post</li></ul></li></ul></li><li>Edits are handled as replies with some flag to indicate it&#39;s updating the parent messages&#39; content <ul><li>Naturally, this reply would only be respected if it matches the same creator ID</li><li>Servers should replace the original message entirely with this one and indicate its an edited message <ul><li>Some servers will inevitably keep a full history though</li></ul></li></ul></li><li>Groups/communities are just specially flagged messages <ul><li>Posting to a community is just replying to that message</li><li>Subscribing to a community is just subscribing to that message</li><li>The original message creator effectively owns the group</li></ul></li></ul><p>Moderation</p><ul><li>In general, edits and delete requests are made by replying with a specially flagged message</li><li>Edit and deletion messages are ignored unless they have the correct public key and signature <ul><li>Parent messages form a hierarchy of permission - if someone replies to your message, you can send a delete request for that message</li><li>Relay owners cannot fully delete messages, but can choose to stop relaying replies etc. of messages as the server owner wishes</li></ul></li><li>Posts can be publicly reported with a specially flagged reply <ul><li>How to make anonymous reports?</li></ul></li><li>Users can send deletion or edit messages even without a matching public key, and clients (or relays) can choose to respect those messages if that public key is whitelisted as a moderator <ul><li>Messages (and by extension, groups) can have replies granting or removing permission to other public IDs at that hierarchy level</li><li>People can setup accounts with their desired heuristic for sending delete messages, such as looking at public reports or analyzing the content with AI <ul><li>This way clients can effectively customize their preferred moderation</li></ul></li></ul></li><li>Clients can also choose to add additional rules for hiding content, such as any reports by followed users</li><li>Perhaps delete messages pull double duty as public reports in and of themselves?</li></ul>',13),r=[s];function o(n,d,u,c,h,p){return t(),i("div",null,r)}const f=e(a,[["render",o]]);export{m as __pageData,f as default};
