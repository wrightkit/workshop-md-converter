---
title: "Players in View Angle"
---

## Description

The players who are within a specific view angle of a specific player's reticle, optionally restricted by team.
\
Unaffected by map geometry/line of sight and player status (dead/alive).
The angle is calculated from the players feet to the position of any other players feet.

## Snippet

```
Players in View Angle(Event Player, Team(Team 1), 0);
```

## Properties

**Returns**: _<span style="color: #c678dd">Array</span> (<span style="color: #c678dd">Player</span>)_
**Parameters**: ==_Player_==, ==_Team_==, ==_View Angle_==

> ==**Player**==
> _Type: **[Player](/constants/player/)**, Default: **[Event Player](/values/event-player/)**_
> The player whose view to use for the check.

> ==**Team**==
> _Type: **[Team](/constants/team/)**, Default: **Team**_
> The team or teams on which to consider players.

> ==**View Angle**==
> _Type: **Float**, Default: **[Number](/values/number/)**_
> The view angle to compare against in degrees.
