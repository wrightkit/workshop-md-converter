---
title: "Enable Nameplates"
---

## Description

Undoes the effect of Disable Nameplates for one or more Viewed Players from the perspective of one or more Viewing Players.

## Snippet

```
Enable Nameplates(Event Player, All Players(All Teams));
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Viewed Players_==, ==_Viewing Players_==

> ==**Viewed Players**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The Player or Players who will have their Nameplates enabled.

> ==**Viewing Players**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[All Players](/values/all-players/)**_
> The Viewing Player or Players for whom the viewed Player's nameplate will be enabled.
