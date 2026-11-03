---
title: "Sorted Array"
---

## Description

A `Sorted Array` is a value with the sorted version of a given array. Use the value rank to determine how the array should be sorted. The value rank should be a number that is calculated based a given element and index (Current Array Element and Current Array Index, respectively). The `Sorted Array` gives the array as sorted in non-descending/ascending order.

Examples:
Assuming `Global.array` contains the array `Array(3, 9, 3, 2, 5)`,

`Sorted Array(Global.array, Current Array Element)`
Is equivalent to `Array(2, 3, 3, 5, 9)`.

`Sorted Array(Global.array, 0 - Current Array Index)`
Is equivalent to `Array(5, 2, 3, 9, 3)`. This is `Global.array` reversed.

`Sorted Array(All Players(All Teams), Distance Between(Current Array Element, Host Player))`
Is equivalent to the array of all players in order from closest to the host player to farthest from the host player (*including the host player*).

[![](https://i.imgur.com/R4MnPRB.png)](https://i.imgur.com/R4MnPRB.png) _Getting an array of all players, sorted by their score._


      A copy of the specified array with the values sorted according to the value rank that is evaluated for each element.

## Snippet

```
Sorted Array(Global.variableName, Current Array Element);
```

## Properties

**Returns**: _<span style="color: #c678dd">Array</span> (<span style="color: #c678dd">Object</span>)_
**Parameters**: ==_Array_==, ==_Value Rank_==

> ==**Array**==
> _Type: **Array** (**Object**), Default: **[Global Variable](/values/global-variable/)**_
> The array whose copy will be sorted.

> ==**Value Rank**==
> _Type: **Object**, Default: **[Current Array Element](/values/current-array-element/)**_
> The value that is evaluated for each element of the copied array. The array is sorted by this rank in ascending order. Use the current array element value to reference the element of the array currently being considered.
