---
title: "Modify Global Variable"
description: "Variable, Operation, Value"
---

## Description

<big>Modifies the value of a global variable, which is a variable that belongs to the game itself.</big>

## Snippet

```
Modify Global Variable(variableName, Add, 0);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Variable_==, ==_Operation_==, ==_Value_==

> ==**Variable**==
> _Type: **Global Variable**, Default: **A**_
> The global variable to modify.

> ==**Operation**==
> _Type: **[Operation](/constants/operation/)**, Default: **[Add](/values/add/)**_
> The way in which the variable's value will be changed. Options include standard arithmetic operations as well as array operations for appending and removing values.

> ==**Value**==
> _Type: **Object** | **Array**, Default: **[Number](/values/number/)**_
> The value used for the modification. For arithmetic operations, this is the second of the two operands, with the other being the variable's existing value. For array operations, this is the value to append or remove.
