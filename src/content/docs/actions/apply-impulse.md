---
title: "Apply Impulse"
---

## Description

<big>Applies an instantaneous change in velocity to the movement of one or more players.</big>

## Snippet

```
Apply Impulse(Event Player, Vector(0, 0, 0), 0, To World, Cancel Contrary Motion);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Direction_==, ==_Speed_==, ==_Relative_==, ==_Motion_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player or players whose velocity will be changed.

> ==**Direction**==
> _Type: **Direction**, Default: **[Vector](/values/vector/)**_
> The unit direction in which the impulse will be applied. This value is normalized internally.

> ==**Speed**==
> _Type: **Float**, Default: **[Number](/values/number/)**_
> The magnitude of the change to the velocities of the player or players.

> ==**Relative**==
> _Type: **[Relativity](/constants/relativity/)**, Default: **To World**_
> Specifies whether direction is relative to world coordinates or the local coordinates of the player or players.

> ==**Motion**==
> _Type: **[Impulse](/constants/impulse/)**, Default: **Cancel Contrary Motion**_
> Specifies whether existing velocity that is counter to direction should first be cancelled out before applying the impulse.
