---
layout: default
title: Necrio
project-category: Developing
---

# Necrio
A casual strategy game where you resurrect your fallen foes

**[Source Code](https://github.com/thepaperpilot/Necrio)**

## General
**Trying new Things**
I'm taking this opportunity to do learn some things I haven't used before, such as:
 - 2.5D
 - libGDX's AI library
 - Multiplayer
 - Entity Component System

And I've obviously used interfaces before, but I expect to use them here as well for creating things that'll be in both the online and single-player modes, but implemented differently.

**References**:
 - [Part of the gdx AI library dealing with moving units](https://github.com/libgdx/gdx-ai/wiki/Steering-Behaviors)
 - [KryoNet for networking](https://github.com/EsotericSoftware/kryonet)

### Gameplay
You are a necromancer (which is not a physical unit on the screen). You are attacking enemies, and any enemy killed by one of your units becomes an undead unit in your army. Inspired by [Right Click to Necromance](https://juicybeast.itch.io/right-click-to-necromance).

## Online
The online mode is inspired by agar.io. In this mode the Player joins a room with other Players in it and they all are striving to have the largest army. Each Player starts with a couple basic units, and they will attack neutral enemies and other Players to continue to grow their army.

The neutral enemies are stronger than their resurrected counter parts, making them the primary way units _exit_ the room, hopefully matching the units entering the room from Players initial sets. These neutral enemies also prevent Players from getting too large, as the more area they take up the more enemies will spawn around them.

## Campaign
There will also be a single-player mode, with a map to conquer. Each area on the map will be a different battle, probably with different things in it to keep things interesting, like new units or something. Between battles Players can upgrade their army. In this mode resurrected units are just as strong as they were prior to dying.
