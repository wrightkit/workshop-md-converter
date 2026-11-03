---
title: "Set Environment Credit Player"
description: "Target, Environment credit player"
---

## Description

<big>Sets the Player who will received credit if the specified target Player or Players die to the environment before landing on the ground.</big>

## Snippet

```
Set Environment Credit Player(Event Player, Null);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Target_==, ==_Environment Credit Player_==

> ==**Target**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The target Player or Players whose death is being considered.

> ==**Environment Credit Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Null](/values/null/)**_
> The Player who will received credit if the target Player or Players die to the environment before landing on the ground. An Environment Credit Player of Null indicates no Player will receive credit.
