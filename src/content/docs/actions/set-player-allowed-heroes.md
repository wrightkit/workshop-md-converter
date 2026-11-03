---
title: "Set Player Allowed Heroes"
description: "Player, Hero"
---

## Description

<big>Sets the list of heroes available to one or more players. If a player's current hero becomes unavailable, the player is forced to choose a different hero and respawn at an appropriate spawn location.</big>

## Snippet

```
Set Player Allowed Heroes(Event Player, Hero(Tracer));
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Hero_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player or players whose hero list is being set.

> ==**Hero**==
> _Type: **Hero** | **Array** (**Hero**), Default: **[Hero](/values/hero/)**_
> The hero or heroes that will be available. If no heroes are provided, the action has no effect.
