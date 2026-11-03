---
title: "Ray Cast Hit Position"
---

## Description

The position where the ray cast hits a surface, object, or player (or the end pos if no hit occurs). Ray casts ignore players with "Phased Out" status.

==_For a more in-depth guide on ray casts, check out Ray casts and You_==

## Snippet

```
Ray Cast Hit Position(Vector(0, 0, 0), Vector(0, 0, 0), All Players(All Teams), Event Player, True);
```

## Properties

**Returns**: _<span style="color: #c678dd">Vector</span>_
**Parameters**: ==_Start Pos_==, ==_End Pos_==, ==_Players To Include_==, ==_Players To Exclude_==, ==_Include Player Owned Objects_==

> ==**Start Pos**==
> _Type: **Position**, Default: **[Vector](/values/vector/)**_
> The start position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.

> ==**End Pos**==
> _Type: **Position**, Default: **[Vector](/values/vector/)**_
> The end position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.

> ==**Players To Include**==
> _Type: **Array** (**Player**), Default: **[All Players](/values/all-players/)**_
> Which players can be hit by this ray cast.

> ==**Players To Exclude**==
> _Type: **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> Which players cannot be hit by this ray cast. This list takes precedence over players to include.

> ==**Include Player Owned Objects**==
> _Type: **BooleanValue**, Default: **[True](/values/true/)**_
> Whether player-owned objects (such as barriers or turrets) should be included in the ray cast.
