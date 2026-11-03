---
title: "Set Damage Received"
description: "Player, Damage received percent"
---

## Description

<big>Sets the damage received of one or more players to a percentage of their raw damage received.</big>

## Snippet

```
Set Damage Received(Event Player, 0);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Damage Received Percent_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player or players whose damage received will be set.

> ==**Damage Received Percent**==
> _Type: **Float**, Default: **[Number](/values/number/)**_
> The percentage of raw damage received to which the player or players will set their damage received.
