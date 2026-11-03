---
title: "Set Player Variable At Index"
description: "Player, Variable, Index, Value"
---

## Description

<big>Finds or creates an array on a player variable, which is a variable that belongs to a specific player, then stores a value in the array at the specified index.</big>

## Snippet

```
Set Player Variable At Index(Event Player, variableName, 0, 0);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Variable_==, ==_Index_==, ==_Value_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player whose variable will be modified. If multiple players are provided, each of their variables will be set.

> ==**Variable**==
> _Type: **Player Variable**, Default: **A**_
> Specifies which player variable's value is the array to modify. If the variable's value is not an array, then its value becomes an empty array.

> ==**Index**==
> _Type: **Integer**, Default: **[Number](/values/number/)**_
> The index of the array to modify. If the index is beyond the end of the array, the array is extended with new elements given a value of zero.

> ==**Value**==
> _Type: **Object** | **Array**, Default: **[Number](/values/number/)**_
> The value that will be stored into the array.
