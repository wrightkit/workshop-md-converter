---
title: "Players Within Radius"
description: "Center, Radius, Team, Los check"
---

## Description

<big>An array containing all players within a certain distance of a position, optionally restricted by team and line of sight.</big>

## Snippet

```
Players Within Radius(Vector(0, 0, 0), 0, Team(Team 1), OFF);
```

## Properties

**Returns**: _<span style="color: #c678dd">Array</span> (<span style="color: #c678dd">Player</span>)_
**Parameters**: ==_Center_==, ==_Radius_==, ==_Team_==, ==_LOS CHECK_==

> ==**Center**==
> _Type: **Position**, Default: **[Vector](/values/vector/)**_
> The center position from which to measure distance.

> ==**Radius**==
> _Type: **Float**, Default: **[Number](/values/number/)**_
> The radius in meters inside which players must be in order to be included in the resulting array.

> ==**Team**==
> _Type: **[Team](/constants/team/)**, Default: **Team**_
> The team or teams to which a player must belong to be included in the resulting array.

> ==**LOS CHECK**==
> _Type: **LosCheck**, Default: **OFF**_
> Specifies whether and how a player must pass a line-of-sight check to be included in the resulting array.
