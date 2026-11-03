---
title: "Player Closest To Reticle"
description: "Player, Team"
---

## Description

<big>The player closest to the reticle of the specified player, optionally restricted by team.</big>

## Snippet

```
Player Closest To Reticle(Event Player, Team(Team 1));
```

## Properties

**Returns**: _<span style="color: #c678dd">Player</span>_
**Parameters**: ==_Player_==, ==_Team_==

> ==**Player**==
> _Type: **[Player](/constants/player/)**, Default: **[Event Player](/values/event-player/)**_
> The player from whose reticle to search for the closest player.

> ==**Team**==
> _Type: **[Team](/constants/team/)**, Default: **Team**_
> The team or teams on which to search for the closest player.
