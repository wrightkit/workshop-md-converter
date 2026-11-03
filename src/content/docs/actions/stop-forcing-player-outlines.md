---
title: "Stop Forcing Player Outlines"
---

## Description

Cancels the behavior of Start Forcing Player Outlines for the specified Viewed Player or Players from the perspective of one or more Viewing Players.

## Snippet

```
Stop Forcing Player Outlines(Event Player, All Players(All Teams));
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Viewed Players_==, ==_Viewing Players_==

> ==**Viewed Players**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The Player or Players who will have their outlines reset.

> ==**Viewing Players**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[All Players](/values/all-players/)**_
> The Viewing Player or Players for whom the viewed Player's outlines will be reset.
