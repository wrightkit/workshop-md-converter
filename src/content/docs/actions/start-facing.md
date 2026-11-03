---
title: "Start Facing"
description: "Player, Direction, Turn rate, Relative, Reevaluation"
---

## Description

<big>Starts turning one or more players to face the specified direction.</big>

## Snippet

```
Start Facing(Event Player, Vector(0, 0, 0), 0, To World, Direction And Turn Rate);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Direction_==, ==_Turn Rate_==, ==_Relative_==, ==_Reevaluation_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player or players who will start turning.

> ==**Direction**==
> _Type: **Direction**, Default: **[Vector](/values/vector/)**_
> The unit direction in which the player or players will eventually face. This value is normalized internally.

> ==**Turn Rate**==
> _Type: **Float**, Default: **[Number](/values/number/)**_
> The turn rate in degrees per second.

> ==**Relative**==
> _Type: **[Relativity](/constants/relativity/)**, Default: **To World**_
> Specifies whether direction is relative to world coordinates or the local coordinates of the player or players.

> ==**Reevaluation**==
> _Type: **[Facing Reevaluation](/constants/facing-reevaluation/)**, Default: **Direction And Turn Rate**_
> Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.
