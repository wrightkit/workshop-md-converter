---
title: "Set Player Health"
description: "Player, Amount"
---

## Description

<big>Sets the health of a Player or Players without affecting stats or granting damage/healing credit. This action only has an effect on living players. (For dead players, use the Resurrect Player action instead.)</big>

## Snippet

```
Set Player Health(Event Player, 1);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Amount_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The Player or Players whose Health will be set.

> ==**Amount**==
> _Type: **Float**, Default: **1**_
> How much health the Player or Players will have.
