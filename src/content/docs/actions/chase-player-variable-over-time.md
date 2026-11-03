---
title: "Chase Player Variable Over Time"
---

## Description

Gradually modifies the value of a [Player Variable](/values/player-variable/) over time. (A player variable is a variable that belongs to a specific player.)

## Snippet

```
Chase Player Variable Over Time(Event Player, variableName, 0, 1, Destination And Duration);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Variable_==, ==_Destination_==, ==_Duration_==, ==_Reevaluation_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player whose variable will gradually change. If multiple players are provided, each of their variables will change independently.

> ==**Variable**==
> _Type: **Player Variable**, Default: **A**_
> Specifies which of the player's variables to modify gradually.

> ==**Destination**==
> _Type: **Float** | **Vector**, Default: **[Number](/values/number/)**_
> The value that the player variable will eventually reach. The type of this value may be either a number or a vector, though the variable's existing value must be of the same type before the chase begins.

> ==**Duration**==
> _Type: **Float**, Default: **Number (1)**_
> The amount of time, in seconds, over which the variable's value will approach the destination.

> ==**Reevaluation**==
> _Type: **[Chase Time Reevaluation](/constants/chase-time-reevaluation/)**, Default: **Destination And Duration**_
> Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.
