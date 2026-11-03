---
title: "Modify Player Variable"
description: "Player, Variable, Operation, Value"
---

## Description

<big>Modifies the value of a player variable, which is a variable that belongs to a specific player.</big>

## Snippet

```
Modify Player Variable(Event Player, variableName, Add, 0);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Variable_==, ==_Operation_==, ==_Value_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player whose variable will be modified. If multiple players are provided, each of their variables will be set.

> ==**Variable**==
> _Type: **Player Variable**, Default: **A**_
> Specifies which of the player's variables to modify.

> ==**Operation**==
> _Type: **[Operation](/constants/operation/)**, Default: **[Add](/values/add/)**_
> The way in which the variable's value will be changed. Options include standard arithmetic operations as well as array operations for appending and removing values.

> ==**Value**==
> _Type: **Object** | **Array**, Default: **[Number](/values/number/)**_
> The value used for the modification. For arithmetic operations, this is the second of the two operands, with the other being the variable's existing value. For array operations, this is the value to append or remove.
