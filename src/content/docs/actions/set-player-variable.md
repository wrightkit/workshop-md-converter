---
title: "Set Player Variable"
---

## Description

<big>Stores a value into a player variable, which is a variable that belongs to a specific player.</big>

## Snippet

```
Set Player Variable(Event Player, variableName, 0);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Variable_==, ==_Value_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player whose variable will be set. If multiple players are provided, each of their variables will be set.

> ==**Variable**==
> _Type: **Player Variable**, Default: **A**_
> Specifies which of the player's variables to store the value into.

> ==**Value**==
> _Type: **Object** | **Array**, Default: **[Number](/values/number/)**_
> The value that will be stored.
