---
title: "Horizontal Angle Towards"
description: "Player, Position"
---

## Description

<big>The horizontal angle in degrees from a player's current forward direction to the specified position. The result is positive if the position is on the player's left. Otherwise, the result is zero or negative.</big>

## Snippet

```
Horizontal Angle Towards(Event Player, Vector(0, 0, 0));
```

## Properties

**Returns**: _<span style="color: #c678dd">Float</span>_
**Parameters**: ==_Player_==, ==_Position_==

> ==**Player**==
> _Type: **[Player](/constants/player/)**, Default: **[Event Player](/values/event-player/)**_
> The player from whose current facing the angle begins.

> ==**Position**==
> _Type: **Position**, Default: **[Vector](/values/vector/)**_
> The position in the world where the angle ends.
