---
alias: "Echo Chambers"
public: "true"
slug: "filter-bubbles"
title: "Filter Bubbles"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Filter Bubbles</h1>
<p>2730 words, ~15 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/digital-locality/index.md">Digital Locality</a><a href="/garden/objectivity/index.md">Objectivity</a></details>

Filter bubbles refer to how users may be intellectually isolated as a result of [Social Media](/garden/social-media/index.md) with algorithmic feeds, coupled with things like personalized search engine results and other services catering to someone's existing preferences and world views.

## Are you in a filter bubble?

Absolutely, and without a doubt. Filter bubbles fractal inside each other, and most of them are entirely innocuous - they're not the scary boogeyman they've been portrayed as. If your search results are primarily English - you may be in a filter bubble. If the news you watch covers domestic issues within your country more than domestic issues in other countries - you may be in a filter bubble. If the local news you watch covers the weather in your local area but not in areas halfway across the globe - you may be in a filter bubble. If you avoid spoilers for media you wish to consume - you may be in a filter bubble. These are not significantly contributing to the "intellectual isolation" filter bubbles are said to create, and no one is arguing we must be equally aware of the local weather across the world.

So yes, you're in a filter bubble - likely many, even. But that's not the right question to be asking; We must delve deeper into filter bubbles' causes and manifestations to determine what their negative aspects are and ultimately how to fix them.

## Filter bubbles in search engines

The author of The Filter Bubble describes what is supposed to be a [chilling story](https://www.theatlantic.com/daily-dish/archive/2010/10/the-filter-bubble/181427/) of a search for BP giving results on investment opportunities to one person, and news about the oil spill disaster to another. They posit this is indicative of a problem, but I question that the personalized search results did anything wrong here. Searching BP just by itself is a "neutral" search, and so I think its fine for it to have shown results based on what its learned that user usually looks companies up for. The implication is that the former is an individual who regularly searches companies to see their current investment opportunities, and got what they wanted. If this person were to suddenly want to, say, write a report on BP's history or ecological impact, they'd naturally search for something more specific than just "BP", and certainly find the results they're looking for. And of course, there's layers to this - Google is also figuring out what search results the average person usually wants when searching a given term, and ranking those higher. So the more people search for BP to get info on the disaster, the more prominent that disaster will be.

The problems stem from the various biases we all bring with us when researching anything, whether we're in a filter bubble or not. In this regard, filter bubbles are just automated applications of our own biases. For example, if you're researching the impact of the BP ecological disaster, your pre-conceived notions over its impact - and perhaps your personal financial interests - will dictate which sources you read at all, or ultimately decide to reference or ignore when discussing the issue with others. And to be clear, _all sources_ will have a bias. There is no such thing as [Objectivity](/garden/objectivity/index.md), and even seemingly "neutral" outlets are implicitly defending the status quo of society.

I think most of you may relate to this, because we're all guilty of it, myself included. I've certainly shared news articles based on the headline, and perhaps even spend a bit too much time writing and not enough reading. Research papers in particular are incredibly dry and most people will only read articles about the paper, which may not be accurate, or perhaps only read the abstract, which may not be thorough. I'm keenly aware when citing a source that its unlikely someone will actually follow that link, to the point where it almost feels futile. Perhaps even now you're only skimming this page? Taken together, it seems an article existing with a given headline is more important than any arguments held within it.

## Filter bubbles in social media

The more insidious issue of filter bubbles is when it applies passively, such as when you're on social media and simply don't see anything about an important topic, say the BP oil spill. But actually, part of the issue here isn't just not seeing the post, as even if someone sees posts about the event, they may be tainted with biases towards their existing world view, and the reader will just accept that interpretation at face value. After all, most users are not going to see a headline and start doing independent research to verify the claims held within the article. Hell, most won't even go as far as reading the article itself - as has been [studied](https://inria.hal.science/hal-01281190/document) [many](https://www.nature.com/articles/s41562-024-02067-4) [times](https://asistdl.onlinelibrary.wiley.com/doi/10.1002/asi.24458), sometimes in quite amusing widely shared but fake ["prank" articles](https://thesciencepost.com/study-70-of-facebook-commenters-only-read-the-headline/).

Even if you click a link, you may just skim the results. This is a problem because people are not reading articles to actually learn from them, but rather to confirm their pre-existing opinions on the topic. With that reassurance in hand, they'll share the articles and [feel more confident](https://www.futurity.org/sharing-news-expert-2792872-2/) they actually understand the topic.

A lot of the articles even available to share on social media are being crafted especially to be sharable using clickbait, caring more for covering topics profitably rather than ethically. AI slop has significantly compounded this issue by being able to mass produce articles that wholly lack meaningful insight, and is now a major problem for both search engines and social media platforms.

All the biases described above contribute to an especially problematic aspect of filter bubbles: the spreading of misinformation. If people are unwilling to verify provocative but ultimately wrong claims they read in a headline, then how do we fix that? There are different approaches people have suggested: algorithmic suppression by a independent organization tasked with verifying articles' legitimacy like Facebook, relying on community-driven notes like Twitter, or just trying to shift the culture to engage with social media more productively/healthily.

### Are safe spaces filter bubbles?

The internet is a dangerous place, especially for members of marginalized groups. There are a lot of -phobes in the world, and the internet gives them a platform to harass far more widespread than before. It takes concerted effort to keep them out of communities, as described by Innuendo Studios' [How to radicalize a normie](https://youtu.be/P55t6eryY3g). I think we should all be in agreement that it is entirely fine for people to want to filter out this kind of hateful content. So safe spaces are filter bubbles, but also are good and important things to have access to.

I bring this up to really drive home that filter bubbles are not intrinsically good or bad. They happen innocuously and are even beneficial for filtering out certain kinds of content. It's important any solution to the issues with filter bubbles focuses doesn't involve exposing people to, say, those who'd like to see them dead.

The line doesn't have to be at hateful content though. There's any number of content someone may want to filter out - gore, SA, or other PTSD triggers. Ultimately the line is subjective, and where the line is shouldn't be restricted or imposed. Empathy is the key here, and the same way a trans person shouldn't be encouraged to interact with transphobes, no one should be encouraged to engage in any social interactions they deem uncomfortable, even if others don't think it's uncomfortable.

## Filtering politics

In the previous section I proposed that allowing people to decide what they want to see should is important. Most people can, I imagine, agree with that, barring one notable and often contested exception: politics. Our liberal democracy  insists that universal political engagement is required for it to function properly. While I agree politics are critically important, politics should not be an exception that people "must" be subjected to regardless of their consent.

A lot of political topics are deeply personal and emotionally exhausting to engage with, particularly for those marginalized under the current power structures. For example, trans rights are an extremely important political issue, but demanding that trans people continually defend their very existence against reactionary attacks amounts to a form of re-traumatization. People not being exposed to these kinds of upsetting things is not a problem to be solved, and democracy can survive while allowing people to filter out political topics or perspectives they don't want to see. You do not need to tolerate the intolerant (as argued by Karl Popper, who coined the term "[paradox of tolerance](https://en.wikipedia.org/wiki/Paradox_of_tolerance)").

Admittedly, I desire revolutionary change and see such transformation as necessary before this framework of consent can fully hold true. Today, the drive to filter out politics often stems from alienation or reactionary thinking—a symptom of a capitalist system designed to depoliticize and pacify the masses. That's why I object to blanket policies like ["No Politics" Rules](/garden/no-politics-rules/index.md) that promote political apathy.

### Radicalization

"Radicalization" is a nebulous term that's been used for a variety of purposes. The ACLU, for example, [warns against its usage](https://www.aclu.org/documents/qa-myth-radicalization) by saying this:
> The government’s “radicalization” theory has become a euphemism for religious and ideological profiling. It leads to discrimination and stigmatization, and is fundamentally un-American. Casting suspicion on American faith or belief communities is wrong and does nothing to make us safer.

Personally, I think the term has been decontextualized a bit, as I see it used today to describe people moving to the left or right. In leftist communities, sharing "what radicalized you" is commonplace and not stigmatized. I think what most accurately describes radicalization is that it's the process of people moving outside the spectrum of acceptable opinion, which in American politics goes from the Republican part to the Democratic party. All other opinions are largely seen as extremist or otherwise untenable. Noam Chomsky describes how this framing perpetuates itself like this:
> The smart way to keep people passive and obedient is to strictly limit the spectrum of acceptable opinion, but allow very lively debate within that spectrum—even encourage the more critical and dissident views. That gives people the sense that there's free thinking going on, while all the time the presuppositions of the system are being reinforced by the limits put on the range of the debate.
> \- Noam Chomsky

So, personally, I don't see radicalization as an inherent issue because the current spectrum of acceptable opinion is atrocious (and, separately, an example of a filter bubble that encapsulates most of the US). I'm biased, as by my own definition I'm a radical, but I don't think radicalization should be a reason to fight against filter bubbles. Suppressing it is ultimately a way of enforcing the status quo and enabling those at the top of the status quo to perpetuate their reign.

Of course, I _do_ want to stop people from radicalizing towards fascism. But the solution isn't to restrict all "extremist" content so that only the acceptable opinions are allowed, because fascism _is_ acceptable! The spectrum I've been discussing is so far right that fascist and genocidal rhetoric are normal in our presidential elections and takes like "I won't vote for genocide" are met with "but ending the genocide isn't on the table". Combatting extremism explicitly means supporting our rightwards trend towards fascism.

Jubilee exemplifies the issues I'm discussing here with shows like "middle ground". Besides their clear bias in picking media trained individuals for the right but not the left, they also place the "middle ground" as being between the far right position and a moderate/central position. Funnily enough, it's a great example of why middle grounds as a concept are not intrinsically better than the extremes, as often claimed (again, in defense of the status quo). Drawing a middle point is arbitrary and tied to whatever the currently established spectrum of acceptable opinion happens to be. I recommend [this podcast episode](https://www.youtube.com/watch?v=1JP7DbzxRK8) that explores the issues with Jubilee and the "free market of ideas". Naturally, they also uphold the principle that marginalized groups should be expected to relive their traumatic experiences with those who wish them harm, under the justification that democracy falls without that.

## Echo Chambers vs Filter Bubbles

I've been mostly referring to filter bubbles all this time, but it's time to make an important distinction that will really tie this whole thing together. Filter bubbles are simply having preferences towards the kind of content you see being reflected by algorithms. They can be emergent or intentional, are often innocuous and even helpful, and sometimes may be bad. They have no intrinsic moral value.

Echo Chambers is the term for when filter bubbles turn bad. This is the term for when those inside a filter bubble turn against those outside it. When the only portrayal of those outside the bubble are hateful caricatures from those within it. This is truly where the hateful content and misinformation comes from. Echo Chambers are the problem to solve. But since they're composed of two parts - filter bubbles and hateful content and misinformation - we have a choice for approaching the problem.

Traditionally, people argue the solution to echo chambers is removing the filter bubbles. That if people are simply exposed to more ideas, the echo chamber goes away. As discussed earlier, this cannot be accepted when some of those ideas actively wish harm upon you.

The other approach is just solving the issues with misinformation and hateful content directly. They cannot be tolerated, and should be entirely suppressed. Free speech should not protect people actively doing harm upon others.

## Moderating away hate and misinformation

So if the issue isn't the filter bubbles but rather hateful content and misinformation... what do we do to combat it?

On an individual level, we can try to improve our media literacy and spread accurate information with positive values like DEI and class consciousness. Every person counts, although the system is working against us currently.

On a systemic level, a new social media can be designed so they are more protected from misinformation spreading. For example, by allowing users to publicly "vouch" for other users for writing and sharing accurate posts, forming a web of trust/reputation. Also designing the network so those who are popular are not prioritized in algorithmic feeds, essentially centralizing influence into the hands of the few. I explore this topic and other aspects to a radical new social media network in [Fedi v2](/garden/fedi-v2/index.md) and [Digital Locality](/garden/digital-locality/index.md).

Taking a step back, several of these issues described - clickbait and spam, specifically - only exist due to financial incentives brought on by our capitalist system. Additionally, Capitalism is the reason for people not having the time, energy, or motivation to more healthily approach social media and combat misinformation. Therefore, we need a leftist shift to fix these problems and bring us to a more media literate society free of influencers and advertisers. It's the only long term solution.

And I must reiterate that if something is neither hateful nor misinformation, it is okay for the message to exist and also so for an individual to not wish to see it. So long as its neither hateful nor misinformation, there are no bad values, only different values.

### Message gardening

This is largely theoretical, but something I've been thinking of a lot about are [Digital Gardens](/garden/digital-gardens/index.md), and I think the philosophy of them could lead to a different kind of solution to tackling hate and misinformation. Right now a lot of news and discourse about said news is essentially frozen in time. Corrections to stories never get as much attention as the original incorrect story. We have the same discussions over and over again. I thinking we could improve this situation by explicitly framing social media as a tool for building a network of knowledge, like a wiki (or rather, a communal digital garden).

This is something that would need to be explored more before it could be implemented, but I'm sort of envisioning something like twitter's community notes system alongside something like [Commune](/garden/commune/index.md) where informal discussions are part of a process of continuously updating a formal document about the topic/event, with new developments, perspectives, and context. I think structuring social media this way, and updating people of important changes to these formal documents people have read or participated in, could lead to a more well informed populace.

## Further Reading

Everything discussed in this article falls under the field of sociology, so you may be interested in looking more into that study. I recommend a few of the games by [Nicky Case](https://ncase.me/), which share a common thread of exploring sociological concepts:
- [The Wisdom and/or Madness of Crowds](https://ncase.me/crowds/)
- [The Evolution of Trust](https://ncase.me/trust/)
- [WE BECOME WHAT WE BEHOLD](https://ncase.itch.io/wbwwb)