---
title: "Set Global Variable At Index"
description: "Variable, Index, Value"
---

## Description

<big>Finds or creates an array on a global variable, which is a variable that belongs to the game itself, then stores a value in the array at the specified index.</big>

## Snippet

```
Set Global Variable At Index(variableName, 0, 0);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Variable_==, ==_Index_==, ==_Value_==

> ==**Variable**==
> _Type: **Global Variable**, Default: **A**_
> Specifies which global variable's value is the array to modify. If the variable's value is not an array, then its value becomes an empty array.

> ==**Index**==
> _Type: **Integer**, Default: **[Number](/values/number/)**_
> The index of the array to modify. If the index is beyond the end of the array, the array is extended with new elements given a value of zero.

> ==**Value**==
> _Type: **Object** | **Array**, Default: **[Number](/values/number/)**_
> The value that will be stored into the array.
