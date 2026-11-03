---
title: "Disable Nameplates"
description: "Viewed players, Viewing players"
---

## Description

<big>Disables the nameplate on one or more Viewed Players from the perspective of one or more Viewing Players.</big>

## Snippet

```
Disable Nameplates(Event Player, All Players(All Teams));
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Viewed Players_==, ==_Viewing Players_==

> ==**Viewed Players**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The Player or Players who will have their Nameplates disabled.

> ==**Viewing Players**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[All Players](/values/all-players/)**_
> The Viewing Player or Players for whom the viewed Player's nameplate will be disabled.
