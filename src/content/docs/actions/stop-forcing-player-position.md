---
title: "Stop Forcing Player Position"
---

## Description

Cancels the behavior of Start Forcing Player Position for the specified player or players. Regular movement will resume from the last forced position(s).

## Snippet

```
Stop Forcing Player Position(Event Player);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player or players whose positions will stop being forced.
