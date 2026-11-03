---
title: "Start Heal Over Time"
---

## Description

Starts an instance of heal over time. This HoT will persist for the specified duration or until stopped by script. To obtain a reference to this HoT, use the Last Heal Over Time ID value.

## Snippet

```
Start Heal Over Time(Event Player, Null, 0, 0);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Healer_==, ==_Duration_==, ==_Healing Per Second_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> One or more players who will receive the heal over time.

> ==**Healer**==
> _Type: **[Player](/constants/player/)**, Default: **[Null](/values/null/)**_
> The player who will receive credit for the healing. A healer of null indicates no player will receive credit.

> ==**Duration**==
> _Type: **Float**, Default: **[Number](/values/number/)**_
> The duration of the heal over time in seconds. To have a hot that lasts until stopped by script, provide an arbitrarily long duration such as 9999.

> ==**Healing Per Second**==
> _Type: **Float**, Default: **[Number](/values/number/)**_
> The healing per second for the heal over time.
