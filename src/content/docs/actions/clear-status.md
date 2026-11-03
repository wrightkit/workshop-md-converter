---
title: "Clear Status"
---

## Description

Clears a status that was applied from a Set Status action from one or more players.

## Snippet

```
Clear Status(Event Player, Hacked);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Status_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player or players from whom the status will be removed.

> ==**Status**==
> _Type: **[Status](/constants/status/)**, Default: **Hacked**_
> The status to be removed from the player or players.
