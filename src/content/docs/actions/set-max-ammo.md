---
title: "Set Max Ammo"
description: "Player, Clip, Ammo"
---

## Description

<big>Set the max ammo of one or more Players.</big>

## Snippet

```
Set Max Ammo(Event Player, 0, 0);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Clip_==, ==_Ammo_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player or players whose max ammo will be set.

> ==**Clip**==
> _Type: **Integer**, Default: **0**_
> The index of the clip whose ammo will be set. 0 Is the first clip, and 1 is the second. If the specified type does not exist, this will do nothing.

> ==**Ammo**==
> _Type: **Integer**, Default: **0**_
> The max ammo that will be set.
