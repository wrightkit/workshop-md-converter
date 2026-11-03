---
title: "World Vector Of"
description: "Local vector, Relative player, Transformation"
---

## Description

<big>The vector in world coordinates corresponding to the provided vector in local coordinates.</big>

## Snippet

```
World Vector Of(Vector(0, 0, 0), Event Player, Rotation);
```

## Properties

**Returns**: _<span style="color: #c678dd">Vector</span>_
**Parameters**: ==_Local Vector_==, ==_Relative Player_==, ==_Transformation_==

> ==**Local Vector**==
> _Type: **Position**, Default: **[Vector](/values/vector/)**_
> The vector in local coordinates that will be converted to world coordinates.

> ==**Relative Player**==
> _Type: **[Player](/constants/player/)**, Default: **[Event Player](/values/event-player/)**_
> The player to whom the local vector is relative.

> ==**Transformation**==
> _Type: **[Transform](/constants/transform/)**, Default: **Rotation**_
> Specifies whether the vector should receive a rotation and a translation (usually applied to positions) or only a rotation (usually applied to directions and velocities).
