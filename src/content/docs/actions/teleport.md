---
title: "Teleport"
description: "Player, Position"
---

## Description

<big>Teleports one or more players to the specified position.</big>

## Snippet

```
Teleport(Event Player, Vector(0, 0, 0));
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Position_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player or players to teleport.

> ==**Position**==
> _Type: **Position**, Default: **[Vector](/values/vector/)**_
> The position to which the player or players will teleport. If a player is provided, the position of the player is used.
