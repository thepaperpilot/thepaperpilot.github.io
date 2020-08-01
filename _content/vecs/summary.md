---
layout: default
title: Vecs Summary
---
V-ecs (pronounced "Vex") is a vulkan-based engine I made for making highly moddable games and tools in lua, centered around the ECS design pattern and a work-stealing job system.

The engine works with "worlds", which are collections of systems and renderers. The engine comes with several worlds using systems and renderers I made, including a voxel world, an incremental game, and some test scenes. All of these include systems to render the fps as well as show a debug console by typing the grave key (\`). The default world is a title screen that detects any worlds in the "worlds" folder and displays a button for each of them.

Eventual plans for this engine include putting it on steam with workshop support so users can create their own systems and renderers, share them, and create custom worlds mixing and matching any systems and renderers available.
