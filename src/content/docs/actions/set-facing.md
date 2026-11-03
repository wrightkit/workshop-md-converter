---
title: "Set Facing"
description: "Player, Direction, Relative"
---

## Description

<big>Sets the facing of one or more players to the specified direction.</big>

## Snippet

```
Set Facing(Event Player, Vector(0, 0, 0), To World);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Direction_==, ==_Relative_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player or players whose facing will be set.

> ==**Direction**==
> _Type: **Direction**, Default: **[Vector](/values/vector/)**_
> The unit direction in which the player or players will face. This value is normalized internally.

> ==**Relative**==
> _Type: **[Relativity](/constants/relativity/)**, Default: **To World**_
> Specifies whether direction is relative to world coordinates or the local coordinates of the player or players.
