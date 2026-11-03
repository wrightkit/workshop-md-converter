---
title: "Is In Line of Sight"
description: "Start pos, End pos, Barriers"
---

## Description

<big>Whether two positions have line of sight with each other.</big>

## Snippet

```
Is In Line of Sight(Vector(0, 0, 0), Vector(0, 0, 0), Barriers DO NOT BLOCK LOS);
```

## Properties

**Returns**: _<span style="color: #c678dd">Boolean</span>_
**Parameters**: ==_Start Pos_==, ==_End Pos_==, ==_Barriers_==

> ==**Start Pos**==
> _Type: **Position** | **[Player](/constants/player/)**, Default: **[Vector](/values/vector/)**_
> The start position for the line-of-sight check. If a player is provided, a position 2 meters above the player's feet is used.

> ==**End Pos**==
> _Type: **Position** | **[Player](/constants/player/)**, Default: **[Vector](/values/vector/)**_
> The end position for the line-of-sight check. If a player is provided, a position 2 meters above the player's feet is used.

> ==**Barriers**==
> _Type: **BarrierLos**, Default: **Barriers DO NOT BLOCK LOS**_
> Defines how barriers affect line of sight. When considering whether a barrier belongs to an enemy, the allegiance of the player provided to start pos (if any) is used.
