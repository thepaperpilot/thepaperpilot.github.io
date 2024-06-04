---
public: "true"
slug: "v-ecs"
tags: [My Projects]
title: "V-ecs"
---
# V-ecs

> Tags: [My Projects](/garden/my-projects/index.md)

![screenshot.png](/garden/screenshot_1717383987886_0.png)

V-ecs (pronounced "Vex") is a Vulkan-based engine I made for making highly moddable games and tools in Lua centered around the ECS design pattern and a work-stealing job system.

The engine works with "worlds", which are collections of systems and renderers. The engine comes with several worlds using systems and renderers I made, including a voxel world, an incremental game, and some test scenes. All of these include systems to render the fps as well as show a debug console by typing the grave key (\`). The default world is a title screen that detects any worlds in the "worlds" folder and displays a button for each of them.

![debug.png](/garden/debug_1717384018620_0.png)

The original plans were to eventually put it on the steam workshop so people could more easily share their creations amongst each other, but I never became happy enough with the performance of the engine - the parallelization of the lua code involved a lot of overhead that severely limited performance.

Instead, I made a couple of worlds by myself - an infinite procedurally generated voxel world, a simple incremental game, and a more complex incremental game I call "[Sands of Time](https://thepaperpilot.itch.io/sands-of-time)".

![sandsoftime.png](/garden/sandsoftime_1717383994964_0.png)

The gameplay of Sands of Time was replicated in [Kronos](/garden/kronos/index.md) Chapter 2!