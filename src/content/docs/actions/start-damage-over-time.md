---
title: "Start Damage Over Time"
---

## Description

Starts an instance of damage over time. This DoT will persist for the specified duration or until stopped by script. To obtain a reference to this DoT, use the Last Damage Over Time ID value.

## Snippet

```
Start Damage Over Time(Event Player, Null, 0, 0);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Damager_==, ==_Duration_==, ==_Damage Per Second_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> One or more players who will receive the damage over time.

> ==**Damager**==
> _Type: **[Player](/constants/player/)**, Default: **[Null](/values/null/)**_
> The player who will receive credit for the damage. A damager of null indicates no player will receive credit.

> ==**Duration**==
> _Type: **Float**, Default: **[Number](/values/number/)**_
> The duration of the damage over time in seconds. To have a dot that lasts until stopped by script, provide an arbitrarily long duration such as 9999.

> ==**Damage Per Second**==
> _Type: **Float**, Default: **[Number](/values/number/)**_
> The damage per second for the damage over time.
