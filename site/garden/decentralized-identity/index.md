---
alias: "Federated Identity"
public: "true"
slug: "decentralized-identity"
tags: [Decentralized]
title: "Decentralized Identity"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Decentralized Identity</h1>
<p>532 words, ~3 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/decentralized-social-media/index.md">Decentralized Social Media</a><a href="/garden/fedi-v2/index.md">Fedi v2</a><a href="/garden/identity/index.md">Identity</a><a href="/garden/incremental-social/index.md">Incremental Social</a><a href="/garden/nostr/index.md">Nostr</a><a href="/garden/weird/index.md">Weird</a></details>

<details><summary>Tags:</summary><a href="/garden/decentralized/index.md">Decentralized</a></details>

Decentralized identity is when someone's identity can be authenticated without the reliance of a central authoritative source. Keypairs are the most common form of this, where someone generates a pair of keys - one private and one public, with which they can sign a message in a way that allows others to verify it came from someone with access to the private key and was not tampered with. [IndieAuth](https://indieweb.org/IndieAuth) is another version of decentralized identity, used by parts of [The IndieWeb](/garden/the-small-web/index.md).

## User Experience

Clients can silently generate key pairs, and allow methods for migration or "linking" identities. The client could also include backup methods like saving the private key to Google drive or similar services. The point here would to have convenient default choices that are reasonably secure, while allowing people to have full agency to choose their own storage and backup solutions.

Sharing your profile with others may be tricky. If you're registered on a nameserver then you can just share your handle there, similar to fediverse profile handles. Otherwise, I think QR codes are the most user friendly solution. A client could register a URI handler that takes a public key and optionally a relay server that has the information about that identity. Adding the identity to your friends list could happen fully offline, although pulling the profile information would require a connection. Perhaps that, too, could be encoded in a (likely separate) QR code.

## Profile Information

For casual conversation, a nickname in the profile data should be sufficient. Once a client interacts with someone, they can be added as a contact as a way of verifying the next conversation with someone with that username is actually the same person as before.

For situations where you want to verify an identity actually has a credentials they claim, you can query a nameserver that vouches for them. For example, whitehouse.gov would have a nameserver that specifies which identity is the actual president of the United States (and other government officials).

There could be nameservers that allow you to openly "register" your identity with them to get a unique human readable username you can include on billboards or other visual media where you want someone to be able to memorize the identifier, rather than scan a QR code or something.

For more details on how these decentralized usernames would work, check out [Petnames](https://spritely.institute/static/papers/petnames.html).

## Identity Recovery

If you lose access to your account, it's gone forever. That is why I think there should be defaults to backup your private key to existing reliable servers, even if they're owned by large corporations. Otherwise I would see someone have their phone stolen, lost, or upgraded and be surprised when their account is now inaccessible.

If you do lose your account and create a new identity, you could have others "vouch" for the new identity being an alias for the previous identity. You could verify your new identity with people IRL, and then other clients can see those vouches publicly and, after sufficient quantity, just implicitly assume they're the same (although with some sort of indicator, so if this gets abused, users are at least aware of the possibility of impersonation.