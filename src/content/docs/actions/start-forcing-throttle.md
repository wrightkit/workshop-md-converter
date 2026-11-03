---
title: "Start Forcing Throttle"
---

## Description

<big>Defines minimum and maximum movement input values for one or more players, possibly forcing or preventing movement.</big>

## Snippet

```
Start Forcing Throttle(Event Player, 0, 0, 0, 0, 0, 0);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Min Forward_==, ==_Max Forward_==, ==_Min Backward_==, ==_Max Backward_==, ==_Min Sideways_==, ==_Max Sideways_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player or players whose movement will be forced or limited.

> ==**Min Forward**==
> _Type: **Float**, Default: **[Number](/values/number/)**_
> Sets the minimum run forward amount. 0 allows the player or players to stop while 1 forces full forward movement.

> ==**Max Forward**==
> _Type: **Float**, Default: **[Number](/values/number/)**_
> Sets the maximum run forward amount. 0 prevents the player or players from moving forward while 1 allows full forward movement.

> ==**Min Backward**==
> _Type: **Float**, Default: **[Number](/values/number/)**_
> Sets the minimum run backward amount. 0 allows the player or players to stop while 1 forces full backward movement.

> ==**Max Backward**==
> _Type: **Float**, Default: **[Number](/values/number/)**_
> Sets the maximum run backward amount. 0 prevents the player or players from moving backward while 1 allows full backward movement.

> ==**Min Sideways**==
> _Type: **Float**, Default: **[Number](/values/number/)**_
> Sets the minimum run sideways amount. 0 allows the player or players to stop while 1 forces full sideways movement.

> ==**Max Sideways**==
> _Type: **Float**, Default: **[Number](/values/number/)**_
> Sets the maximum run sideways amount. 0 prevents the player or players from moving Sideways while 1 allows full sideways movement.
