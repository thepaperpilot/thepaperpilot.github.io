---
alias: "Federated"
public: "true"
slug: "decentralized"
title: "Decentralized"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Decentralized</h1>
<p>80 words, ~0 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

> Referenced by: [Commune](/garden/commune/index.md), [Fedi v2](/garden/fedi-v2/index.md), [Matrix](/garden/matrix/index.md), [Social Media](/garden/social-media/index.md)

> Tagged by: [ActivityPub](/garden/activitypub/index.md), [ATProto](/garden/atproto/index.md), [Federated Identity](/garden/federated-identity/index.md), [Fediverse](/garden/fediverse/index.md), [Nostr](/garden/nostr/index.md)

Something with no central source of authority

Common examples:
- RSS
- Email
- The [Fediverse](/garden/fediverse/index.md)

In practice, the "pick a server" problem causes email and the fediverse to trend towards a handful of large servers that still suffer from some of the issues of centralization

Advantages over centralization:
- Data ownership
- Increased privacy
- No rules to follow
- Can fully customize your experience
- No single entity can make the experience worse for everyone
- Anyone and everyone can try their hand at improving the ecosystem