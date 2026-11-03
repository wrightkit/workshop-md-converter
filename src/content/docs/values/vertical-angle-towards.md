---
title: "Vertical Angle Towards"
---

## Description

<big>The vertical angle in degrees from a player's current forward direction to the specified position. The result is positive if the position is below the player. Otherwise, the result is zero or negative.</big>

## Snippet

```
Vertical Angle Towards(Event Player, Vector(0, 0, 0));
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
