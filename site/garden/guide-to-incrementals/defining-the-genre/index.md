---
public: "true"
slug: "guide-to-incrementals/defining-the-genre"
title: "Guide to Incrementals/Defining the Genre"
prev: false
next: false
---
<script setup>
import { data } from '../../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Guide to Incrementals/Defining the Genre</h1>
<p>4048 words, ~22 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/incremental-social/index.md">Incremental Social</a><a href="/garden/kronos/index.md">Kronos</a><a href="/garden/social-media/index.md">Social Media</a></details>

Video games are placed into genres for a variety of reasons. They can give a mental shorthand to set the player's expectations up, they can help a game market itself by its similarities to other, already popular games, and honestly, people just love categorization for its own sake. For this guide, it's important to define the genre so it is clear what games it's even talking about.

This poses a problem. Genres, being [Social Constructs](/garden/social-constructs/index.md), suffer from the usual issues social constructs have of being vague and shifting over time. "Incremental", in particular, is a _horribly_ vague way to define games. _Most_ games have numbers going up in some form or another. We need a more specific definition - similar to how "strategy" can't just mean any game with _any_ amount of strategy because that would be _most_ games. What specifically differentiates incremental games from the rest?

"Incremental" implies it's a genre defined by a game mechanic, but all those game mechanics it could imply exist in many other games. Having a skill tree or upgrades doesn't make you incremental, and if a reset mechanic is all it takes then every roguelite would be an incremental as well. So clearly there's more to it than that - what makes an incremental an incremental?

I'd like to go over a couple of popular suggestions I've seen on defining the genre here. I have my personal preferences and will state them here, but I don't think there's a truly perfect answer.

BTW, if this article made you realize discourse around defining genres is actually a really interesting, even fascinating, topic, I recommend this video essay: [Who Shot Guybrush Threepwood? | Genre and the Adventure Game](https://www.youtube.com/watch?v=tMVl5U3SlS0).

> Disclaimer: I mostly play incremental games on my computer, and my definitions will be heavily biased towards the games I'm familiar with.

## Incrementals vs Idlers vs Clickers

Oftentimes people refer to this genre as idle games and/or clicker games. You'll even find a trend of oxymoronic game titles that contain both terms. "Incremental games" is the umbrella term both those terms fall under. However, I'd like to argue that not only is it better to just use the term "incremental games", but calling them "idle games" or "clicker games" is _wrong_. Almost universally, these terms are used interchangeably to refer to the _same kind of game_, where you start the game click spamming and eventually automate the process. Frankly, that kind of game deserves neither title, and the genre of incremental games has trended away from ever requiring click spamming, as it's a bad mechanic, anyways.

While these games do span a spectrum of how active it requires you to be, and sorting games by that metric can be useful for those looking for a particular experience, the borders of when an incremental game counts as an "idler" is too blurry for the term to be useful. "Incremental games" may not be a great descriptive term for the genre (hence this many thousands of words long page on defining what the genre even is), but it's strictly better than calling them "idler" or "clicker" games. This guide will always use the term "incremental games" unless quoting someone else, as it is the term you typically see on all modern games in the genre.

<span id="665cea25-b1e5-40bc-8c82-2296982ce1d1"><h2>Incrementals as Parodies</h2></span>

Let's start with one of the most _interesting_ definitions of incremental games. Incremental games appear to be distilled versions of games or genres, "revealing" the naked game design at the core of these games or genres not unlike how parodies comment upon their source material.

To understand what that means, think of how a casino uses skinner boxes to emotionally manipulate its customers to keep playing, but "dressing" up the skinner box with tons of stimuli to hide that ultimately the goal is to condition you into coming back compulsively. The idea that incremental games are parodies means taking the stance that at some level _all_ games are similarly manipulating you, giving dopamine rewards in a way that manipulates you to keep playing while not necessarily giving you any value or fulfillment. Incremental games, then, are any games that plainly display the skinner box, and the manipulative core of the game, at the forefront of the experience.

> While incremental games can be fun and even healthy in certain contexts, they can exacerbate video game addiction more than other genres. If you feel like playing incremental games is taking priority over other things in your life, or manipulating your sleep schedule, it may be prudent to seek help. See [r/StopGaming](https://www.reddit.com/r/StopGaming) for resources.

This "undressing" tends to go hand in hand with a reduced focus on aesthetics, often just printing the game state directly to the screen as text. This makes incremental games much easier to develop, particularly for those with programming skills but not art skills, but that's a tangent for why Incremental Games [Guide to Incrementals/Appeal to Developers](/garden/guide-to-incrementals/appeal-to-developers/index.md).

Before I continue, I'd like to make my stance clear that I love games and incremental games, and do not think they should be considered inherently bad or manipulative with the above logic. Skinner boxes are just a way of manipulating behavior _via rewards_. The games are still fun - that's the reward! I'd believe the real criticism here is that it is "empty fun", or "empty dopamine", that doesn't offer any additional value or sense of fulfillment. I don't think that's inherently bad in moderation, although it can become a problem if the game is manipulating you for profit-seeking, or if you play the game to the detriment of the other parts of your life.

Another interpretation of incremental games as parodies comes from several mainstream incremental games that are also parodies of capitalism, such as [cookie clicker](http://orteil.dashnet.org/cookieclicker/) and [adventure capitalist](https://store.steampowered.com/app/346900/adventure_capitalist). It's a very common framework for incremental games to portray the ever-increasing numbers as an insatiable hunger for resources, like the ones observed within capitalism. Therefore, these games are used as evidence that the genre as a whole is about parody and commentary.

Popular videos on incremental games that portray the genre as parodies are [Why Idle games make good satire, and how it was ruined.](https://www.youtube.com/watch?v=7khbIR-WQIw) and [Bad Game Design - Clicker Games](https://www.youtube.com/watch?v=C-9ASzBErjo). You may also be interested in this response to the latter video from a fan of incremental games: [~~Bad~~Good Game Design - Clicker Games](https://www.youtube.com/watch?v=vBuYzLUzPqw).

I think that this definition ultimately ascribes a motive to the genre as a whole that only happens to apply to some of the more mainstream titles. There certainly _are_ incremental games commenting on different things, including the genre itself as in the case of [The Prestige Tree Classic](https://jacorb90.me/Prestige-Tree-Classic/), [The Ascension Tree](https://ascensiontree.semenar.ru/), or [Omega Layers](https://veprogames.github.io/omega-layers/), but certainly not all. And of course, not all games that comment on something or parody something are incremental games! Additionally, a very large majority of incremental games are mobile games using these manipulative strategies to get players to spend as much money as possible - hell, Adventure Capitalist is ostensibly a critique on capitalism but features microtransactions and gameplay that manipulates you into buying them! These profit-seeking incremental games certainly belong within the genre but are hardly parodies when they too use manipulation to serve their interests. Also, from my own anecdotal experience, those who use this definition seem to do so from a fairly surface-level familiarity with the genre, and often in the context of criticizing the genre or the fans thereof.

## Incrementals as NGU

Another broad definition often used is that incremental games are games where the _focus_ of the game is "numbers going up". This definition proposes that other genres simply use increasing numbers as a means to an end, but incremental games uniquely _only_ care about the numbers themselves going up. Put another way, it implies there should be no narrative justification for the numbers going up other than "why _shouldn't_ they be going up?"

While this definition is common because it _feels_ easy to understand, it is difficult to formally define. Often phrases are used to describe games using this framework, such as having an "exaggerated sense of progression" or "big" numbers. These terms are vague and don't demonstrate an actual threshold between non-incrementals and incrementals. Most games have a sense of progression, so when is it "exaggerated"? How big are "big" numbers? Most notably, RPGs that are typically not considered incrementals will often pass this definition.

Additionally, a lot of incrementals tend to have _some_ theme guiding the gameplay, or at least the names of mechanics. This makes the line blurred between when numbers are going up for their own sake versus for a contextual reason. I believe this point is best illustrated that, while _most_ RPGs are not considered incremental games, there _is_ a sub-genre of "incremental RPGs" that typically relates to RPGs that perform combat automatically. This definition of incremental games does not support RPGs and "incremental RPGs" being on distinct sides of the line if the only difference between them is manual vs automatic combat.

<span id="665cea25-437a-49a4-8445-00422fb9ded1"><h2>Incrementals as Strategies</h2></span>

This is a rarer interpretation, but there are similarities between incremental games and strategy games, implying incrementals might just be a sub-genre of strategy games. By this approach, incremental games would be defined by their relation to strategy games, and how they involve player strategy. Incremental games are often large optimization problems - above all else, the actual gameplay the player is performing is deciding what to do next. The consequences of wrong decisions are typically more lenient in incremental games - such as just not making optimal progress - but they _certainly_ get complex.

So if we accept the premise that incrementals could fall under strategy, we still need to define what makes a strategy game an incremental versus some other strategy sub-genre. This is a bit tricky due to one particular sub-genre of strategy games: Factory Builders.

Factory builders, such as Factorio or Satisfactory, are games about gaining ever increasing resources, optimizing production, and expanding more and more. That... sounds pretty similar, doesn't it? In fact, there's been some debate on whether factory builders would fall under the "incremental" umbrella. I think it's safe to say the two are certainly related, and probably have quite a bit of overlap in playerbase.

## Roguelites as Incrementals?

Earlier on, I mentioned reset mechanics shouldn't be used in the definition because that could make all roguelites incrementals... But what if it does? A _lot_ of incrementals can be described as games with a strong sense of progression, often with layers of meta-progression. Roguelites fit that bill to a T. What would make roguelites _not_ incremental? I honestly don't think there's a good explanation here, but many fans of incremental games will state they do believe the two genres to be unrelated, even if there's a significant overlap between their player bases due to having similar appealing traits.

At this point, it'd be appropriate to consider what part of the definition of roguelites precludes them from also being incrementals, but that reveals a new problem: What are roguelites? They're usually defined as rogue_likes with meta-progression, but that just pushes the problem back a step: Incrementals aren't the only genre to have difficulties defining themselves, it seems! Roguelikes are another genre where the community argues over the formal definition of their genre, although that means we can borrow from their process of coming to a consensus, and maybe come across a viable definition for incremental games.

### The Berlin Interpretation

By far the most popular way of defining roguelikes is the "[Berlin Interpretation](http://www.roguebasin.com/index.php?title=Berlin_Interpretation)", which acknowledged the diversity of games within the genre and argued the definition should not be based on any ideals about what the genre _ought_ to be, but rather defined by "its canon". They argued there are a handful of games that can be used to define the canon for roguelikes, and from those games, a list of factors can be derived to determine a game's "roguelikeness". The more factors a game has, the more of a roguelike it is. This strategy is very lenient, allowing a game to not present any specific factor so long as it shows _enough_, and accounts for the blurriness of any genre definition by not explicitly stating how many factors a game must have to qualify as a definite roguelike.

I believe this strategy for defining genres can be applied to other genres as well. A handful of games can be argued to be the incremental games canon, and a list of factors derived from them can be used to judge any game based on its "incrementalness". I'll propose such a canon and list of factors here, but by no means should it be considered the end-all-be-all.

> Note: The "Temple of the roguelike", an authority within the genre, has since replaced the Berlin Interpretation with a new set of factors here: https://blog.roguetemple.com/what-is-a-traditional-roguelike/

### A Modern Incremental Games Canon

Alright, time to get controversial. Up til now, I've been trying my best to stay objective and analytical, but now it's time to start making some _opinionated decisions_. I've created a list of games I think could be justified in making up a modern incremental games canon.

Before I mention the list, let's establish how I got to this list. First off, I'm really focusing on building a definition of the genre today, so I prefer modern games over traditional ones. A canon of culturally or historically significant titles to the genre would give a different list. Keep in mind the original Berlin interpretation (and the temple's update to it) were trying to define "_traditional_ roguelikes", which is not my objective here. Building a canon that aims to trace the history of the genre is still valid and useful.

I'm also trying to ensure I pick a large breadth of incremental games, so I'm going to approach the list as a list of archetypes, with a single game to represent it but with other titles mentioned as other examples. This approach places each archetype as equally important, even if one only has a couple entries. Besides the impracticality of a canon that just includes every game, it'd be very biased towards games with large modding communities like Cookie Clicker or The Prestige Tree.

With all that behind us, here is a list of games I think could justifiably make up a Modern Incremental Games Canon:
- [Dodecadragons](https://demonin.com/games/dodecaDragons/)
  > This game represents incremental games with many prestige layers that often have rapid resets and automate lower layers as more get unlocked. Other examples could also include [The Prestige Tree](https://jacorb90.me/Prestige-Tree/), [Really Grass Cutting Incremental Classic](https://mrredshark77.github.io/RGCI-Classic/), [Distance Incremental](https://jacorb90.me/DistInc.github.io/main.html), or the massive [modding community](https://forums.moddingtree.com/c/mods/8/none/l/top) TPT has. A lot of the games I've personally worked on fall in this group, like [Advent Incremental](https://www.thepaperpilot.org/advent/).
- [Evolve Idle](https://pmotschmann.github.io/Evolve/)
  > This game represents incremental games with few prestige layers, very slow resets, and a focus on resource management. Typically involve some sort of worker allocation. Other examples would be [Kitten's Game](https://kittensgame.com/web/), [Shark Game](https://alpha.shark.tobot.dev/), or [Magic Research](https://store.steampowered.com/app/2311680/Magic_Research/).
- [(the) Gnorp Apologue](https://gnorp.dev/)
  > This game represents incremental games with a central mechanic that gets added to by various other mechanics. All the mechanics remain relevant throughout the game, with different ones contributing most over time. Other examples include [Nodebuster](https://store.steampowered.com/app/3107330/Nodebuster/) and [To the Core](https://store.steampowered.com/app/1988550/To_The_Core/). A lot of traditional games also fall in this archetype by having characters or buildings you level up, that each contribute additively to gaining the primary resources. These include [Cookie Clicker](https://orteil.dashnet.org/cookieclicker/), [Clicker Heroes](https://www.clickerheroes.com/play.html), and [Realm Grinder](https://store.steampowered.com/app/610080/Realm_Grinder/). In a way, that makes the modern titles mentioned in this archetype the spiritual successors of those traditional games, and exemplifies how the genre has changed.
- [Idle Momentum](https://idlemomentum.com/)
  > This game represents incremental games that include polynomial growth as a central mechanic that is then built upon. Other examples include [Antimatter Dimensions](https://ivark.github.io/AntimatterDimensions/), [Swarm Simulator](https://www.swarmsim.com/), and [Derivative Clicker](https://gzgreg.github.io/DerivativeClicker/).
- [Melvor Idle](https://melvoridle.com/)
  > This game represents incremental games that are essentially a genre blend between incremental games and RPGs. Compared to other types of RPGs, these games have a focus on progressing while idle. Other examples would be [IdleOn](https://store.steampowered.com/app/1476970/IdleOn__The_Idle_RPG/) and a _very large_ amount of mobile RPGs.
- [Stuck in Time](https://store.steampowered.com/app/1814010/Stuck_In_Time/)
  > This game represents incremental games that include a reset mechanic where there are pre-defined decisions being made during the course of the run. There's typically a concept of a playable character, whose actions are being "queued up" during a run, and these runs become longer or otherwise more productive as the game progresses. There are a lot of examples of this genre, including [Cavernous II](https://nucaranlaeg.github.io/incremental/CavernousII/), [Increlution](https://store.steampowered.com/app/1593350/Increlution/), [Progress Knight](https://ihtasham42.github.io/progress-knight/), [Idle Loops](https://stopsign.github.io/idleLoops/), and [Groundhog Life](https://mogron.itch.io/groundhog-life).
- [Universal Paperclips](https://www.decisionproblem.com/paperclips/)
  > This game represents incremental games that involve several phases of completely distinct gameplay that fully replace the previous, called "paradigm shifts". Prestige layers are also often paradigm shifts, but this game represents paradigm shifts that are not reset mechanics but still transform the gameplay. Other examples would be [Crank](https://faedine.com/games/crank/b39/) or [A Dark Room](https://adarkroom.doublespeakgames.com/). [Spore](https://www.spore.com/) would be an example that's not typically considered an incremental.
- [Unnamed Space Idle](https://store.steampowered.com/app/2471100/Unnamed_Space_Idle/)
  > This game represents incremental games that focus on unlocking many different independent progression systems that boost each other, and all remain relevant throughout the course of the game. Other examples include [NGU Idle](https://store.steampowered.com/app/1147690/NGU_IDLE/), [Anti-Idle](https://drive.google.com/drive/folders/1yE8OxD0P0Tx1B5JyGpEaLJ7KOuayMd9s), [Idle Skilling](https://store.steampowered.com/app/1048370/Idle_Skilling/), and [Idle Wizard](https://store.steampowered.com/app/992070/Idle_Wizard/).

It may look like I've just shifted the problem down a level - rather than defining the genre, I'm now defining a bunch of sub-genres. However, the methods used here for defining the canon, and my attempt at ensuring a breadth of games by determining distinct archetypes, is just my approach. This list is additionally biased towards games I'm more familiar with, which will differ person to person. The only hard and fast rule is that every game on the list should be nearly universally accepted as an incremental game. So long as you do that, the factors should be relatively similar, although ofc individuals will still likely have small differences, as is the nature of socially constructed definitions.

Naturally this canon is a perpetual work-in-progress. I'm currently a bit uncertain about the distinctions between the evolve idle, melvor idle, and unnamed space idle archetypes. I could see those being rewritten as two or even a single archetype.

### Unfolding

There are several related concepts mentioned in the canon - unfolding, prestige layers, and paradigm shifts. Unfolding is the umbrella term which includes the other two, and is clearly the _highest_ possible value factor for an incremental. It's so common that for a while people referred to incrementals that exhibit this trait as "unfolding" games, to the point of trying to _replace_ the term incremental due to their popularity.

There are many reasons for the appeal of unfolding mechanics. Oftentimes each mechanic builds on top of the existing mechanics, increasing the complexity of the game in steps so the player can follow along. In fact, sometimes the older mechanics will be entirely phased out (e.g. by automating them), so the complexity of the game remains roughly equal throughout the game. In any case, adding new mechanics regularly provides a sense of mystery, with the player anticipating what will happen next. They shake up the gameplay before it gets too stale - allowing the game to entertain for longer before the sense of [Guide to Incrementals/What is Content?](/garden/guide-to-incrementals/what-is-content/index.md) dissipates. Of the canon games selected above, I would argue _every single one_ contains unfolding to some degree.

I should take a moment to say that while I'm hyping up this specific factor, we cannot just reduce the genre definition to "does it introduce new mechanics over time". Many games have paradigm shifts that are not incremental, so it's just an _indicator_ of incrementalness. Every single canon game may show that it's common amongst incremental games, but could just as easily indicate that they're common in games in general.

### High-Value Factors

I won't take as long to discuss the high and low-value factors, as you've already seen most of them brought up earlier on this page. As a reminder, a game does NOT need all of these to be an incremental game, but these are factors that each indicate a strong possibility the game is an incremental, so having several of these means they probably are. These factors apply to most of the canon incremental games.

**"Pure UI" Display**. Incrementals typically have a data-driven interface of the game state - there isn't a visual representation of the entities within the game. The interface resembles what might be a control panel in another genre, with a focus on numbers, buttons, and readouts rather than animated sprites or scenes. Even when there are visual elements, like item icons or simple enemy images, the player's main interaction is with non-diegetic, UI-focused components rather than immersive game visuals.

**Reduced Consequences**. Incrementals tend to have reduced repurcussions for misplaying. They very rarely have fail states, where often the largest consequence is simply _not_ progressing - never _losing_ progress.

**Optimization Problems**. The _predominant gameplay_ of incrementals is typically solving optimization problems, from deciding which purchase to save up for to reasoning and deciding between different mutually exclusive options the game presents.

**Resource Management**. Incrementals tend to have a lot of resources within the game to keep track of.

### Low-Value Factors

These are low-value factors, meaning they aren't as strongly correlated with incremental games. Incremental games may have none of these, and non-incrementals may have several of these - if a game _only_ has low-value factors, they're probably not an incremental.

**Fast Numeric Growth**. Numbers in incremental games tend to grow faster than in other genres. There are more instances of superlinear growth. The larger the numbers get, the stronger of a signal this factor is.

**Automation**. As an incremental game progresses, the player often no longer has to deal with earlier mechanics, by having them either happen automatically or otherwise be replaced with an alternative that requires less player interaction.

**Goal-Oriented**. Incrementals are often heavily reliant on extrinsic motivation to guide the player. Typically this is through some sort of in-game goal to work towards, such as a certain amount of a resource being required to unlock or purchase something new.

**Waiting is a Mechanic**. In incremental games, the player may come across times where there is no action they can take, and the game will progress automatically instead. The player must wait for some amount of this automatic progress to occur before they can resume interaction with the game.

### Are Roguelites Incrementals?

Having made our variation of the Berlin Interpretation for incremental games, we can compare it to the Berlin Interpretation to determine if there's enough overlap that any game that "passes" the Berlin Interpretation would also pass the incremental variant. That is to say, whether any roguelite would also be considered an incremental game.

The meta-progression of an incremental game could arguably be considered a paradigm shift, and certainly adds some resource management. Goal-oriented would probably also apply. I think anything other than those would be a stretch, and in my opinion that just isn't enough to qualify. To be totally honest, I was never expecting to conclude otherwise though ;)

## Sub-Genres

There are some trends in incremental games that go beyond just being a commonly used mechanic, such that they deeply affect the rest of the game design. To a degree each of the games in the canon could arguably be part of distinct sub-genres, but I think these 4 deserve specific mentions:

**Loops** games are a sub-genre defined by having a core mechanic related to a loop, where the player is deciding the actions taken per loop. Notable examples include [Idle Loops](https://omsi6.github.io/loops), [Stuck in Time](https://store.steampowered.com/app/1814010/Stuck_In_Time/), [Cavernous II](https://nucaranlaeg.github.io/incremental/CavernousII/), and [Increlution](https://store.steampowered.com/app/1593350/Increlution/). You may also argue [Groundhog Life](https://mogron.itch.io/groundhog-life) and [Progress Knight](https://ihtasham42.github.io/progress-knight/) fall into this sub-genre.

**ITRTG-like** games are a sub-genre defined by having a core mechanic based on clearing increasingly difficult battles and often tend to have a lot of different mechanics to become progressively stronger. Notable examples include [Idling to Rule the Gods](https://store.steampowered.com/app/466170/Idling_to_Rule_the_Gods/), [NGU Idle](https://store.steampowered.com/app/1147690/NGU_IDLE/), and [Wizard and Minion Idle](https://store.steampowered.com/app/1011510/Wizard_And_Minion_Idle/).

**Polynomial Growth** games are a sub-genre defined by having a core mechanic related to a higher degree polynomial. Notable examples include the base layer of [Antimatter Dimensions](https://ivark.github.io) and [Swarm Simulator](https://www.swarmsim.com).

**Upgrades Games** is a category popular on flash games websites that featured games focused on buying upgrades that would allow you to attain more currency in some sort of minigame that would earn you more money to buy more upgrades, which I'd argue now belong under the fold of incremental games. Notable examples include the [Learn to Fly](https://www.coolmathgames.com/0-learn-to-fly) series and [Upgrade Complete](https://www.kongregate.com/games/armorgames/upgrade-complete).

## Other Related Genres

**Cultivation RPGs** are a genre of games, books, and anime popular in China that center around being in a fantasy world with characters getting stronger over time. While few of them get translated into English, a fan of incremental games may find the available games interesting.