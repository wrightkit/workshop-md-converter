---
title: "Heal"
description: "Player, Healer, Amount"
---

## Description

<big>Provides an instantaneous heal to one or more players. This heal will not resurrect dead players.</big>

## Snippet

```
Heal(Event Player, Null, 0);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Healer_==, ==_Amount_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player or players whose health will be restored.

> ==**Healer**==
> _Type: **[Player](/constants/player/)**, Default: **[Null](/values/null/)**_
> The player who will receive credit for the healing. A healer of null indicates no player will receive credit.

> ==**Amount**==
> _Type: **Float**, Default: **[Number](/values/number/)**_
> The amount of healing to apply. This amount may be modified by buff or debuffs. Healing is capped by each player's max health.
