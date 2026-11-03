---
title: "Direction Towards"
---

## Description

The unit-length direction vector from one position to another. `Direction Towards(A,B)` is equivalent to `Normalize(B - A)`

## Snippet

```
Direction Towards(Vector(0, 0, 0), Vector(0, 0, 0));
```

## Properties

**Returns**: _<span style="color: #c678dd">Direction</span>_
**Parameters**: ==_Start Pos_==, ==_End Pos_==

> ==**Start Pos**==
> _Type: **Position**, Default: **[Vector](/values/vector/)**_
> The position from which the resulting direction vector will point.

> ==**End Pos**==
> _Type: **Position**, Default: **[Vector](/values/vector/)**_
> The position to which the resulting direction vector will point.
