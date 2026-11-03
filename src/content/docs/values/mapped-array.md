---
title: "Mapped Array"
---

## Description

A copy of the specified array with the values mapped according to the Mapping Expression that is evaluated for each element.

### Example

Let's say we have an array with a bunch of numbers;

```
Global.A = [2, 4, 7]
```

Using Mapped Array we can alter all these values with 1 action.

```
Global.A = Mapped Array(Global.A, Current Array Element * 2)
```

This multiplies all elements in the array by 2, resulting in the following array;

```
Global.A = [4, 8, 14]
```

## Snippet

```
Mapped Array(Global.variableName, Current Array Element);
```

## Properties

**Returns**: _<span style="color: #c678dd">Array</span> (<span style="color: #c678dd">Object</span>)_
**Parameters**: ==_Array_==, ==_Mapping expression_==

> ==**Array**==
> _Type: **Array** (**Object**), Default: **[Global Variable](/values/global-variable/)**_
> The array whose copy will be sorted.

> ==**Mapping expression**==
> _Type: **Object**, Default: **[Current Array Element](/values/current-array-element/)**_
> The mapping expression that is evaluated for each element of the copied array. Use the Current Array Element value to reference the element of the array currently being considered.
