---
title: "Is In View Angle"
---

## Description

Whether a location is within view of a player.
\
Unaffected by map geometry/line of sight.
The angle is calculated from the players feet and not their eye position.
Equivalent code using `Angle Between Vectors`:
> Angle Between Vectors==(==
> Direction Towards (Position Of (PLAYER), LOCATION),
> Facing Direction Of (PLAYER)==)== <= VIEW ANGLE

## Snippet

```
Is In View Angle(Event Player, Vector(0, 0, 0), 0);
```

## Properties

**Returns**: _<span style="color: #c678dd">Boolean</span>_
**Parameters**: ==_Player_==, ==_Location_==, ==_View Angle_==

> ==**Player**==
> _Type: **[Player](/constants/player/)**, Default: **[Event Player](/values/event-player/)**_
> The player whose view to use for the check.

> ==**Location**==
> _Type: **Position**, Default: **[Vector](/values/vector/)**_
> The location to test if it's within view.

> ==**View Angle**==
> _Type: **Float**, Default: **[Number](/values/number/)**_
> The view angle to compare against in degrees.
