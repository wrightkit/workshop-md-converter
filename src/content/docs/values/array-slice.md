---
title: "Array Slice"
description: "Array, Start index, Count"
---

## Description

<big>A copy of the specified array containing only values from a specified index range.</big>

## Snippet

```
Array Slice(All Players(All Teams), 0, 0);
```

## Properties

**Returns**: _<span style="color: #c678dd">Array</span> (<span style="color: #c678dd">Object</span>)_
**Parameters**: ==_Array_==, ==_Start Index_==, ==_Count_==

> ==**Array**==
> _Type: **Array** (**Object**), Default: **[All Players](/values/all-players/)**_
> The array from which to make a copy.

> ==**Start Index**==
> _Type: **Integer**, Default: **[Number](/values/number/)**_
> The first index of the range.

> ==**Count**==
> _Type: **Integer**, Default: **[Number](/values/number/)**_
> The number of elements in the resulting array. The resulting array will contain fewer elements if the specified range exceeds the bounds of the array.
