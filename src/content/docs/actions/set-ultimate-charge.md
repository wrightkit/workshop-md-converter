---
title: "Set Ultimate Charge"
---

## Description

Sets the ultimate charge for one or more players as a percentage of maximum charge.

			Note that if you supply a literal with decimals, such as `Set Ultimate Charge(Event Player, 6.3)` it must be wrapped with a function such as `First Of` or `Absolute Value`, else it will be rounded to the nearest integer.

## Snippet

```
Set Ultimate Charge(Event Player, 0);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Charge Percent_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player or players whose ultimate charge will be set.

> ==**Charge Percent**==
> _Type: **Float**, Default: **[Number](/values/number/)**_
> The percentage of maximum charge.
