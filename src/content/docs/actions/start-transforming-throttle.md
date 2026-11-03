---
title: "Start Transforming Throttle"
description: "Player, X axis scalar, Y axis scalar, Relative direction"
---

## Description

<big>Starts transforming (scaling and rotating) the throttle (directional input control) of a player or players. Cancels any existing start transforming throttle behavior.</big>

## Snippet

```
Start Transforming Throttle(Event Player, 0, 0, Vector(0, 0, 0));
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_X Axis Scalar_==, ==_Y Axis Scalar_==, ==_Relative Direction_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player or players whose throttle will be transformed.

> ==**X Axis Scalar**==
> _Type: **Float**, Default: **[Number](/values/number/)**_
> The player or players will have their throttle X axis (left to right) multiplied by this value before the throttle is rotated to its new relative direction. This value is evaluated continuously (meaning it updates every frame).

> ==**Y Axis Scalar**==
> _Type: **Float**, Default: **[Number](/values/number/)**_
> The player or players will have their throttle Y axis (front to back) multiplied by this value before the throttle is rotated to its new relative direction. This value is evaluated continuously (meaning it updates every frame).

> ==**Relative Direction**==
> _Type: **Direction**, Default: **[Vector](/values/vector/)**_
> After the axis scalars are applied, the player or players will have their throttle transformed so that it is relative to this unit direction vector. For example, to make the throttle camera relative, provide the direction that the camera is facing. This value is evaluated continuously (meaning it updates every frame) and normalized internally.
