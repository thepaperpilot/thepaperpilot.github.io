---
layout: default
title: da4-caption
---
There is a generic object dragging manager using delegates to check for valid things to drag, valid things to be dragged to (based on whats being dragged), getting a list of transforms to add the target indicator to, and what to do when the drag ends, on both a valid and invalid target. In this case its being used to drag a die to another die, telling the game to attack with the die. 