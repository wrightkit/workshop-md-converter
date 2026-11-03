---
title: "Start Throttle In Direction"
description: "Player, Direction, Magnitude, Relative, Behavior, Reevaluation"
---

## Description

<big>Sets or adds to the throttle (directional input control) of a player or players such that they begin moving in a particular direction. Any previous throttle in direction is cancelled.</big>

## Snippet

```
Start Throttle In Direction(Event Player, Vector(0, 0, 0), 0, To World, Replace Existing Throttle, Direction And Magnitude);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Direction_==, ==_Magnitude_==, ==_Relative_==, ==_Behavior_==, ==_Reevaluation_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player or players whose throttle will be set or added to.

> ==**Direction**==
> _Type: **Direction**, Default: **[Vector](/values/vector/)**_
> The unit direction in which the throttle will be set or added to. This value is normalized internally.

> ==**Magnitude**==
> _Type: **Float**, Default: **[Number](/values/number/)**_
> The amount of throttle (or change to throttle). A value of 1 denotes full throttle.

> ==**Relative**==
> _Type: **[Relativity](/constants/relativity/)**, Default: **To World**_
> Specifies whether direction is relative to world coordinates or the local coordinates of the player or players.

> ==**Behavior**==
> _Type: **[Throttle](/constants/throttle/)**, Default: **Replace Existing Throttle**_
> Specifies whether preexisting throttle is replaced or added to.

> ==**Reevaluation**==
> _Type: **ThrottleReeval**, Default: **Direction And Magnitude**_
> Specifies which of this action's inputs will be continuously reevaluated. This aciton will keep asking for and using new values from reevaluated inputs.
