---
title: "Index Of Array Value"
---

## Description

<big>The index of a value within an array or -1 if no such value can be found.</big>

## Snippet

```
Index Of Array Value(All Players(All Teams), 0);
```

## Properties

**Returns**: _<span style="color: #c678dd">Integer</span>_
**Parameters**: ==_Array_==, ==_Value_==

> ==**Array**==
> _Type: **Array** (**Object**), Default: **[All Players](/values/all-players/)**_
> The array in which to search for the specified value.

> ==**Value**==
> _Type: **Object**, Default: **[Number](/values/number/)**_
> The value for which to search.

**Note:**
If the search Value is a 1D Array, the function uses its first element as the target, searches the fully flattened source array, and returns the first 0-based index.
If the search Value is a Vector or Nested Array, the function performs strict exact matching only (no first element extraction, no array flattening) and returns -1 if no identical match is found.
