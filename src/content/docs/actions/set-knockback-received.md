---
title: "Set Knockback Received"
description: "Player, Knockback dealt percentage"
---

## Description

<big>Sets the knockback received of one or more Players to a percentage of their raw knockback received.</big>

## Snippet

```
Set Knockback Received(Event Player, 100);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Knockback Dealt Percentage_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The Player or Players whose knockback received will be set.

> ==**Knockback Dealt Percentage**==
> _Type: **Integer**, Default: **100**_
> The percentage of raw knockback received to which the Player or Players will set their knockback dealt.
