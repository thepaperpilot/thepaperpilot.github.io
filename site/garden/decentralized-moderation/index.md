---
public: "tags:: Decentralized"
slug: "decentralized-moderation"
title: "Decentralized Moderation"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Decentralized Moderation</h1>
<p>661 words, ~4 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/no-politics-rules/index.md">"No Politics" Rules</a><a href="/garden/decentralized-social-media/index.md">Decentralized Social Media</a><a href="/garden/digital-locality/index.md">Digital Locality</a><a href="/garden/fedi-v2/index.md">Fedi v2</a><a href="/garden/moderation/index.md">Moderation</a><a href="/garden/virality/index.md">Virality</a></details>

<details><summary>Tags:</summary><a href="/garden/decentralized/index.md">Decentralized</a></details>

Naturally, this refers to how to properly [Moderate](/garden/moderation/index.md) content, typically within [Social Media](/garden/social-media/index.md), in a [Decentralized](/garden/decentralized/index.md) fashion - no central authority defining or enforcing the rules. This typically involves organizing under [Anarchist](/garden/anarchism/index.md) principles.

Of course, the standard tools individuals are already familiar for self-moderating their content will still apply - muting or blocking people. This is not sufficient though, as it still means people would need to be exposed to the bad content before being able to block it, and it does nothing to combat the spread of misinformation.

For specifically tackling the problem of keeping fascism out of a community, I recommend [this video](https://youtu.be/P55t6eryY3g) (and the whole series) by Innuendo Studios.

## Approaches

### Labelers

[ATProto](/garden/atproto/index.md) designed a system of labelers that anyone can create and follow. Labeling services mark accounts or posts as NSFW, gore, etc. These will cause the post to either be hidden entirely or obscured until the user clicks through a warning. These labelers can be configured by the app designer or the user themselves. The labelers can be linked to reporting services or setup to label based on arbitrary criteria, such as sending each reported post to an LLM for judgement.

I have several concerns with this system. Firstly, these labelers are likely to accumulate influence as the popular ones get used more and thus become more popular. This centralizes power.

The second concern is with malicious labelers. If a labeler decides to create a list of people known to be a member of a specific marginalized community, there's little to no action anyone can do to stop it.

Lastly, this is moderation through the use of blocklists. This isn't inherently bad, but it's a double edged sword, as I discuss [here](/garden/moderation/index.md#674531bb-952c-4346-8f0d-febf15e24879)).

### Network of vouches

Identities could have a system by which they vouch for or against other identities that they are human and make content worth looking at, and clients could use this network of vouches to filter posts to display or retrieve. For example, a user may say they only want to see posts made by identities within a chain of 4 vouches to themselves. Upon account creation, users could be prompted to vouch for IRL friends or some popular figures within topics they care about to get started. In theory the longer the chain can be, the more varied the content a user will see, and the more likely for it to be something they disagree with. This would allow users to customize how narrow their feed is at a given time by just changing the max chain length. They can also continue vouching for more people to more precisely expand their feed.

Clients could include tools to analyze their network of vouches, such as displaying all the identities within certain max lengths, or viewing what chain was followed for a specific post to have been displayed. Clients could also add additional tools to customize the chain, like being able to ignore a specific user's vouches or reposts/reblogs. They could also treat any interaction as a vouch, overriding the max chain length for different contexts, such as when used for counting likes.

Specific entity types, such as one representing a reddit-like community, could display all replies rather than use the network of trust, and offer controls like only counting likes from within the network when sorting the replies.

This would essentially be an alternative to how current fediverse applications block entire instances as a heuristic, so they can get rid of undesirable content while minimizing how much of it they need to see before doing so. Except in this model, you can always reach people regardless of what server they decided to use, and the controls of in the hands of the individual.

### [Digital Locality](/garden/digital-locality/index.md)

Similar to the network of vouches, a network with digital locality naturally limits the amount of content you'll see, essentially eliminating bots and spam as well as organically filtering the content you see based on the people you interact with.