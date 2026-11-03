---
title: "Set Jump Vertical Speed"
description: "Player, Jump vertical speed percent"
---

## Description

<big>Sets the jump vertical speed of one or more Players to a percentage of their raw jump vertical speed.</big>

## Snippet

```
Set Jump Vertical Speed(Event Player, 100);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Jump Vertical Speed Percent_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The Player or Players whose jump vertical speed will be set.

> ==**Jump Vertical Speed Percent**==
> _Type: **Float**, Default: **100**_
> The Percentage of Resource that will be set with respect to each Player's Ability Resource capacity.
