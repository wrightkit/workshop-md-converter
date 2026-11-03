---
title: "Modify Player Variable At Index"
description: "Player, Variable, Index, Operation, Value"
---

## Description

<big>Modifies the value of a player variable at an index, which is a variable that belongs to a specific player.</big>

## Snippet

```
Modify Player Variable At Index(Event Player, variableName, 0, Add, 0);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Variable_==, ==_Index_==, ==_Operation_==, ==_Value_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player whose variable will be modified. If multiple players are provided, each of their variables will be set.

> ==**Variable**==
> _Type: **Player Variable**, Default: **A**_
> Specifies which of the player's variables to modify.

> ==**Index**==
> _Type: **Integer**, Default: **[Number](/values/number/)**_
> The index of the array to modify. If the index is beyond the end of the array, the array is extended with new elements given a value of zero.

> ==**Operation**==
> _Type: **[Operation](/constants/operation/)**, Default: **[Add](/values/add/)**_
> The way in which the variable's value will be changed. Options include standard arithmetic operations as well as array operations for appending and removing values.

> ==**Value**==
> _Type: **Object** | **Array**, Default: **[Number](/values/number/)**_
> The value used for the modification. For arithmetic operations, this is the second of the two operands, with the other being the variable's existing value. For array operations, this is the value to append or remove.
