---
title: "Ammo"
---

## Description

<big>The current ammo of a player.</big>

## Snippet

```
Ammo(Event Player, 0);
```

## Properties

**Returns**: _<span style="color: #c678dd">Float</span>_
**Parameters**: ==_Player_==, ==_Clip_==

> ==**Player**==
> _Type: **[Player](/constants/player/)**, Default: **[Event Player](/values/event-player/)**_
> The player whose ammo to acquire.

> ==**Clip**==
> _Type: **Integer**, Default: **0**_
> The index of the clip to be acquired. 0 is the first clip, and 1 is the second. If the specified type does not exist, this will return 0.
