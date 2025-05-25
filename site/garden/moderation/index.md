---
alias: "Moderate"
public: "true"
slug: "moderation"
title: "Moderation"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Moderation</h1>
<p>1085 words, ~6 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/decentralized-moderation/index.md">Decentralized Moderation</a></details>

Moderation, in the context of [Social Media](/garden/social-media/index.md), is the enforcement of rules by removing offending content, and optionally punishing the offender through silencing, banning, or other measures.

What these rules are will typically vary platform to platform, and sometimes even community to community. This stems from different communities having different purposes or goals, along with differing views on what is acceptable speech. For example, a forums for victims of abuse may feature very heavy moderation, or a community for Christians may limit joining the community to only fellow Christians.

I'm explicitly NOT a free speech absolutist, but I am critical of the necessity and goals of moderation. It is fundamentally about restricting access, and the decision power is all too often centralized to a small group. These conditions reinforce the status quo and are quite harmful.

It's very easy for rules to end up punishing neurodivergent people, for example, for misreading a situation. In general, banning vulnerable groups of people, [like children](https://drdevonprice.substack.com/p/interact-with-minors), can harm that group and moderation should be looking to protect them while not excluding them. It's better to err on the side of inclusivity than eliminating all bad actors. This point is well made by Cory Doctorow [here](https://pluralistic.net/2025/04/24/hermit-kingdom/) and how we shouldn't filter out people solely based on "atypical" behavior. Additionally, Erlend argues that [good intent matters more](https://blog.erlend.sh/socialized-proof-of-work) than whether someone is a criminal, a bit, or even "three raccoons in a trenchcoat".

That said, I'm not suggesting an "anything goes" approwch. Indeed, I think insults are inherently hierarchy reproducing - even when punching up - and would prefer to abstain from their use entirely. Additionally, I think misinformation is a big deal that needs to be resolved, even though my arguments around centralized moderation apply doubly so when it comes to determining what "truth" is.

Honestly, I think moderation is an umbrella over several different goals, and about none of them are necessarily solved by centralized moderation. The general approach here is to focus on inclusivity, connectedness, and trust. I think with some fairly basic - but certainly non-traditional - design decisions, a network can be a great place to be.

What is moderation for, anyways?
- Preventing harmful language
- Preventing attacks (e.g. phishing)
- Preventing spam
- Preventing misinformation
- Content warnings and contextually appropriate content
- Taking down illegal material

I'll address the illegal content first, to get it out of the way. Some laws are just, some aren't. The protocol itself shouldn't have any laws built in (ideally relays shouldn't even be able to see what content exists), but rather leave it up to the apps. Apps should include stuff like CSAM hash matching to filter it out, and optionally add more restricted rules for certain countries, like bluesky adding certain labeling services to block sole content to all users in Turkey.

I think there is a relatively simple but radical approach to designing a social networking app that resolved these problems without the drawbacks of centralized moderation.

Replace discrete communities with ephemeral conversations, which are sort of structured like reddit threads. You find out about these threads by seeing the threads your friends are active in, including ones they created. This forms a network of trust (or rather, a Digital Locality) that should help reduce spam and virality and attacks. Requiring replies also helps things from spreading without being engaged with critically. This adds a natural way to explore the network by friending people you like and, through them, finding communities you like, and thus more people.

These conversations can branch and change topic, context, and tone. I think AI can help label conversations and recognize topic changes and allow people to better sort through large amounts of conversations, potentially from large numbers of people, such that they find the conversations over topics and tones they're looking for. This could also work similarly to bluesky labelers, where some convos could be completely hidden or blurred out. Perhaps a sophisticated rules engine could even let you filter out specific topics involving specific people, etc.

These branching threads could even form communities of their own. Imagine a community for a game having replies about bug reports, features, guides, reviews, and more. They may even go off topic, but rather than those getting removed as such, they just get labeled with the new topic and people skip over them.

I should mention this is a hypothetical, and there's some things about this I *think* would work really well, but would want proven by practice. Of particular note, I'm concerned threads could still go quite viral. But this could be an experiment, and with proper decentralized identity, stuff like your friends lists could follow you to any future experiments and iterations and variants. Orchard, for example, will likely be built on such a system with the goal of *really* combatting vitality and misinformation.

Also, these ideas are not super affected by the network effect. Since part of the goal is to limit virality and create digital locality, you only need some friends on the platform - it doesn't matter how large the entire network is. And if it's properly decentralized, the network can grow from completely unrelated apps as well, while sharing identity and friends lists.

## Free Speech

In general, those arguing for less moderation or more free speech are doing so from a position of privilege. In traditional social media, those with more power have more speech (that is, they're more influential), so arguing for free speech is perpetuating the existing power dynamics by giving them lots of speech and removing the ability for more fringe groups to have that hateful content removed. The fringe may criticize, but that won't likely be enough to change anything, as their calls to deplatform those in the ruling class are stymied by arguments for free speech.

Some platforms try to be very light handed with their moderation, often arguing that infringing on speech is inherently censorship and must be avoided unless it's literally against the law to say. These people are called "Free Speech Absolutists". In practice, most of those advocating for free speech absolutism are just fine censoring speech they disagree with, such as Elon Musk. He has been biased towards his personal views and self interests both in deciding [which government censorship requests X complies with](https://www.socialmediatoday.com/news/elon-musks-push-free-speech-shows-clear-bias-towards-interests/713803/) and promoting [his own posts above others](https://www.theverge.com/2023/2/14/23600358/elon-musk-tweets-algorithm-changes-twitter).

<span id="674531bb-952c-4346-8f0d-febf15e24879"><h2>Blocklists</h2></span>

Blocklists are lists of users someone has blocked, that they then share with the public. Some blocklists even auto update as the creator adds new users to them.

Blocklists are a double edged sword. They can help, for example, marginalized communities block those who wish them harm regularly. However, they centralize power and are often abused. I recommend [this article](https://privacy.thenexus.today/blocklists-in-the-fediverse/) which discusses blocklists and how they help and how they harm, especially with respect to marginalized communities.

## Further Reading

https://github.com/roostorg/awesome-safety-tools