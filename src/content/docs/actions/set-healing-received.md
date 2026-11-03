---
title: "Set Healing Received"
description: "Player, Healing received percent"
---

## Description

<big>Sets the healing received of one or more players to a percentage of their raw healing received.</big>

## Snippet

```
Set Healing Received(Event Player, 0);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Healing Received Percent_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player or players whose healing received will be set.

> ==**Healing Received Percent**==
> _Type: **Float**, Default: **[Number](/values/number/)**_
> The percentage of raw healing received to which the player or players will set their healing received.
