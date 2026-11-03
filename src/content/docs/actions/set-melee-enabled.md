---
title: "Set Melee Enabled"
description: "Player, Enabled"
---

## Description

<big>Enables or disables melee for one or more players.</big>

## Snippet

```
Set Melee Enabled(Event Player, True);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Enabled_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player or players whose access to melee is affected.

> ==**Enabled**==
> _Type: **Boolean**, Default: **[True](/values/true/)**_
> Specifies whether the player or players are able to use melee. Expects a boolean value such as true, false, or compare.
