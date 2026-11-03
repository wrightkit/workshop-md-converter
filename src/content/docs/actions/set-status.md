---
title: "Set Status"
---

## Description

Applies a status to one or more players. This status will remain in effect for the specified duration or until it is cleared by the Clear Status action.

## Snippet

```
Set Status(Event Player, Null, Hacked, 0);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Assister_==, ==_Status_==, ==_Duration_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player or players to whom the status will be applied.

> ==**Assister**==
> _Type: **[Player](/constants/player/)**, Default: **[Null](/values/null/)**_
> Specifies a player to be awarded assist credit should the affected player or players be killed while the status is in effect. An assister of null indicates no player will receive credit.

> ==**Status**==
> _Type: **[Status](/constants/status/)**, Default: **Hacked**_
> The status to be applied to the player or players. These behave similarly to statuses applied from hero abilities.

> ==**Duration**==
> _Type: **Float**, Default: **[Number](/values/number/)**_
> The duration of the status in seconds. To have a status that lasts until a clear status action is executed, provide an arbitrarily long duration such as 9999.
