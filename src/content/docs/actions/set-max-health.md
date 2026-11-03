---
title: "Set Max Health"
description: "Player, Health percent"
---

## Description

<big>Sets the max health of one or more players as a percentage of their max health. This action will ensure that a player's current health will not exceed the new max health.</big>

## Snippet

```
Set Max Health(Event Player, 0);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Health Percent_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player or players whose max health will be set.

> ==**Health Percent**==
> _Type: **Float**, Default: **[Number](/values/number/)**_
> The percentage of raw max health to which the player or players will set their max health.
