---
title: "Start Forcing Player To Be Hero"
---

## Description

Starts forcing one or more players to be a specific hero and, if necessary, respawns them immediately in their current location. This will be the only hero available to the player or players until the Stop Forcing Player To Be Hero action is executed.

## Snippet

```
Start Forcing Player To Be Hero(Event Player, Hero(Tracer));
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Hero_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player or players who will be forced to be a specific hero.

> ==**Hero**==
> _Type: **Hero**, Default: **[Hero](/values/hero/)**_
> The hero that the player or players will be forced to be.
