---
layout: default
title: da3-caption
---
The dice rolling uses the physics engine and detects once the dice have stopped moving, then determines which side is face up based on which of the normals is closest to straight up. It flags the die as cocked if that smallest angle is above a threshold. The dice sink into the table when not rolling so as to not interfere with any dice that are rolling.