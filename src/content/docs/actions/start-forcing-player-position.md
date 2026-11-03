---
title: "Start Forcing Player Position"
description: "Player, Position, Reevaluate"
---

## Description

Starts forcing a player to be in a given position. IF reevaluation is enabled, then the position is evaluated every frame, allowing the player to be moved around over time.

## Snippet

```
Start Forcing Player Position(Event Player, Vector(0, 0, 0), True);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Position_==, ==_REEVALUATE_==

> ==**Player**==
> _Type: **[Player](/constants/player/)**, Default: **[Event Player](/values/event-player/)**_
> The player whose position will be forced. (The reevaluation option does not apply to this value.)

> ==**Position**==
> _Type: **Position**, Default: **[Vector](/values/vector/)**_
> The position the player will occupy. If reevaluation is enabled, this value can be used to move the player around over time.

> ==**REEVALUATE**==
> _Type: **Boolean**, Default: **[True](/values/true/)**_
> If this value is true, then the position will be reevaluated and applied to the player every frame. If this value is false, then the posiiton is only evaluated once when the action begins.
