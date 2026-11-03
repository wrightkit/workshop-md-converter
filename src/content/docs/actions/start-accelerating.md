---
title: "Start Accelerating"
---

## Description

<big>Starts accelerating one or more players in a specified direction.</big>

## Snippet

```
Start Accelerating(Event Player, Vector(0, 0, 0), 0, 0, To World, Direction, Rate, And Max Speed);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Direction_==, ==_Rate_==, ==_Max Speed_==, ==_Relative_==, ==_Reevaluation_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player or players that will begin accelerating.

> ==**Direction**==
> _Type: **Direction**, Default: **[Vector](/values/vector/)**_
> The unit direction in which the acceleration will be applied. This value is normalized internally.

> ==**Rate**==
> _Type: **Float**, Default: **[Number](/values/number/)**_
> The rate of acceleration in meters per second squared. This value may need to be quite high in order to overcome gravity and/or surface friction.

> ==**Max Speed**==
> _Type: **Float**, Default: **[Number](/values/number/)**_
> The speed at which acceleration will stop for the player or players. It may not be possible to reach this speed due to gravity and/or surface friction.

> ==**Relative**==
> _Type: **[Relativity](/constants/relativity/)**, Default: **To World**_
> Specifies whether direction is relative to world coordinates or the local coordinates of the player or players.

> ==**Reevaluation**==
> _Type: **[Acceleration Reevaluation](/constants/acceleration-reevaluation/)**, Default: **Direction, Rate, And Max Speed**_
> Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.

## Trivia
This action has properties that may not appear intuitive:
* Speed in a horizontal direction is capped to maximum walking speed of the Player (5.5m/s by default for most heroes).
* The speed at which acceleration stops is not equal to `Max Speed` but is equal to `Max Speed^2 - Rate/62.5`.
* Speed at which acceleration stops is measured as the speed in the direction of acceleration.
