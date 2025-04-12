---
public: "true"
slug: "incremental-automaton"
title: "Incremental Automaton"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Incremental Automaton</h1>
<p>1812 words, ~10 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/chromatic-lattice/index.md">Chromatic Lattice</a><a href="/now/index">/now</a></details>

Play the game [here](https://tpp.rocks/automaton)!

View the source code [here](https://code.incremental.social/thepaperpilot/Incremental-Automaton)!

Incremental Automaton is a game made for April Fools 2025. The game is a commentary on content in incremental games, by having only a single gameplay action you can take (spawning a ball), and nothing you do before or after has any affect on the game. Despite that fact, there are things happening on the screen and a chat feature that means people have actually "played" the game for hours (myself included).

The chat feature is what really made this game shine. Rather than a typical chat system, where people send discrete messages, Incremental Automaton made cursors appear like figma, and you can set a piece of text to appear next to your cursor, which updates live as you type. Cursors and messages disappear after 5s of no moving/editing.

Moderation was intentionally very light. Since everything goes away after 5 seconds, I just added a basic profanity filter (using the bad-words package), and figured things would just kinda work out from there.

What resulted is an experience that was way more fun than I could have anticipated, and I've spent hours just reading and chatting with others. I consider this a clear success and it makes me really excited about future applications of this kind of chat. In particular, it felt very reminiscent of being a kid on the internet, just chatting with people in chatrooms, with a different vibe than modern chatrooms on discord et al.

Also, I really liked this as an April fools joke. It was a bit like a social experiment, like reddit used to do each April fools day. I think these kinds of events are a lot of fun and genuinely useful for experimenting with new tools for communication. I definitely think this project will help inform designs for future projects of mine.

## Launch Retrospective

### Live typing is really cool

I think seeing people type their messages live, with typos and backspaces and all, made things feel a lot more "real"; like they had a stronger sense of presence than in typical chat rooms. Like seeing an avatar of someone, who continues to exist between messages.

The live typing, along with the 30 character limit, also made people get creative and use slang and abbreviations more often than typical. That's likely a part of why it felt nostalgic for the early internet, where things like needing to use T9 encouraged the usage of small messages.

### Positional typing is really cool

It really adds a new dimensions (well, 2 dimensions) to chatting in a way that is very intuitive and natural. People would reply to someone by moving their cursor near their message, or move away from the center to have a separate conversation.

People would play with their cursor positions, playing a fascimile of Tag, lining up, going to the corners of the default viewport and saying "bottom text" etc., and just having fun using the fact that you could control where your messages appear.

One particular moment that struck out to me was someone saying "like this message if 2025", and various others moved over to that message and wrote "like" or "👍". I really like the versatility of arbitrary text and positions and how people will naturally use those tools to create meaning.

### Moderation

Despite the constraints on moderation (everything's anonymous and there's no way to block, ban, or kick users), moderation was actually quite smooth. Spamming required effort and most people gave up quite quick. Since you couldn't see your own message, you also couldn't see if anything got censored, so experimenting with the filter had to happen with others helping you. Naturally people did find ways to express certain offensive terms without triggering the filter, but not to such a degree that it tainted the experience. For the most part, people were just quite chill/cool, as people regularly pointed out even.

There was one moment in particular that did cause me to have to make some changes, though. First, people changed the 30 char limit because it wasn't enforced server side - which is a big oops on my side! I think this was just an oversight as I wanted others to be able to use the cursors server and didn't want to "hardcode" those kinds of rules. The other issue was zalgo text, which could take over large amounts of the screen and even obscure other peoples' messages. A quick server update fixed both these issues without significant interruption to the players who were online.

If I were to further iterate on this, but insisted on maintaining the anonymity and lack of proper reporting features, I think the biggest improvement I could make is silently ignoring messages from users who trigger the profanity filter too often or send the same message over and over. Due to people not being able to directly see what gets filtered and what doesn't, this would be as effective as a shadow ban. It could also have a scaling system for how long someone's messages get ignored, increasing with repeat offenses. That said, since everything is ephemeral eventually they'll figure out they can just refresh to reset any actions taken against them.

## What's Next?

Well, the server handling messages is being hosted on incremental.social, and I have no plans on taking it down. However, the further out we get from April 1 the less activity it should see, and an empty chat room is simply not all that fun. However, I think this chat service can be added elsewhere where it will likely be able to last significantly longer before dying out.

First, I'm working on a major update to my website and I now think I'd like to add the cursors there. If two or more people are on the same page, they can see each other and the chat box will appear. Naturally people can disable it, but with my site being fairly low traffic I think this could result in small serendipitous moments. This would also be inspired by [Ambient Co-presence](https://maggieappleton.com/ambient-copresence/) and the [Interconnected](https://interconnected.org/home/) blog.

Second, I have a project in the works called [Chromatic Lattice](/garden/chromatic-lattice/index.md), which will be a social incremental game and another bit of a social experiment. But unlike this one, it will be a "proper" game I expect people to play and socialize with for a very long time. I'd like to see a version of this chat makes it way there, although de-anonymized and with some other design changes to better fit with the game.

I should also mention that if you enjoyed this kind of chatting, there are obviously various social games you can play today that give similar vibes. VRChat, various Club Penguin sites, and even games like Fortnite have at least parts of them that are intended to be social experiences and will even have aspects of positional typing. These are already popular and have more engaging gameplay aspects that mean they'll continue to be around long long after Incremental Automaton dies down. (This makes me think of [xkcd 1305](https://xkcd.com/1305/)). That said, incremental games do have a bit of an appeal as a "background" activity for a social game. Perhaps that's why Roblox is so popular with incremental games.

Finally, another social experiment thing I'm interested in is [Chat Glue](/garden/chat-glue/index.md), which I plan on playing with as part of [Orchard](/garden/orchard/index.md). I kinda think the way it makes conversations into trees is sorta similar to how positional typing worked here. I'm not sure though, perhaps that's a stretch.

## Original Design Notes

> Obviously, these are a bit rough. Perhaps interesting if you want to know part of the creative process, but not really useful like the rest of the page. Also, keep in mind this page and all my garden pages are written in [Logseq](/garden/logseq/index.md), which is an outliner so everything is typically written as bullet points instead of prose.

April fools game idea: incremental game where the first upgrade creates a little simulation thing that will keep running without any player interaction and buy future upgrades and stuff fully automatically. Have like an hour of "content", despite no further player interaction

<div class="img-container"><img src="/garden/2025-01-23-15-58-58.jpeg" title="2025-01-23-15-58-58.jpeg"/></div>

I also want something that builds up exponentially (as it gets hit or something) and then gets released. Maybe a flurry of "temporary" balls?

Add ambient copresence?

Chat with all online players (via incsoc)

You can follow users to see their cursors (otherwise cursors are just a blob like on Maggie Appleton's site)

You can join players' worlds (unless blocked by them) so you're viewing it live

Chat will have a global and local option

The active players list will also show those you follow, or who the current game's owner follows

Can ambient copresence be done with particle system where we set each particle position?
- Can we make them additive but with a limit
- Ideally more cursors makes it spread wider rather than brighter

Can't join players that aren't on their own game, and joining another game kicks anyone visiting your game

Make things composable
- Feature for using the mbin API that prompts the user to login via a modal and exposes refs for loggedIn, username, friends, and blocked
- Feature for chat that takes username
- Feature for displaying cursors and ambient copresence on a board
- Server side thing for broadcasting chat and copresence
- System for joining games by other players

How to deal with latency between clients?

Actually, can we use cursor party?
- Handles chat and cursors
- Chat is ephemeral, no chatbox
- Doesn't have an ambient mode for large amounts of users
- No global vs local chat
- Way simpler! Especially for a April fools game
- If we don't do the joining rooms thing, perhaps we can eliminate the need for logging into inc soc and showing usernames or anything
- Actually not as simple. It involves cloning a repo, deploying to a service, and respecting a free tier limit
- Would love to bring this to my website as well if I can find a good way
- Website could also show list of popular pages
- Could implement ourselves with bun websockets? (As in, still anonymous and stuff)
	- Switch profectus to bun?
- Maybe also on profectus docs?
- Make cursors show number of "wins"
- After each victory, unlock a modifier and increase the goal
- Maybe a whole prestige shop (part of the board) where you can "upgrade" the amount of content, by reducing modifiers and things
- https://rivet.gg/ ?
- Can replit start up on demand fast enough?
- Use bad-words to censor profanity and fade out cursors after 30s of inactivity

Web socket requirements
- Mouse position and chat message per entity
- Ability to change room

Instructions for creating server side with Bun
- Install bun
- Run `bun install` in project folder
- Delete package-lock.json