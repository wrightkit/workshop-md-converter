---
title: "Set Respawn Max Time"
---

## Description

<big>Sets the duration between death and respawn for one or more players. For players that are already dead when this action is executed, the change takes effect on their next death.</big>

## Snippet

```
Set Respawn Max Time(Event Player, 0);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Time_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player or players whose respawn max time is being defined.

> ==**Time**==
> _Type: **Integer**, Default: **[Number](/values/number/)**_
> The duration between death and respawn in seconds.
