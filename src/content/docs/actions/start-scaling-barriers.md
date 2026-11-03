---
title: "Start Scaling Barriers"
---

## Description

<big>Start modifying the size of barriers for a Player or Players.</big>

## Snippet

```
Start Scaling Barriers(Event Player, 1, true);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Scale_==, ==_Reevaluation_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The Player or Players whose barriers will have their size modified.

> ==**Scale**==
> _Type: **Float**, Default: **1**_
> The multiplier applied to the size of the barriers (So 0.5 halves the size, 2.0 doubles the size, etc.).

> ==**Reevaluation**==
> _Type: **Boolean**, Default: **true**_
> If this value is True, then scale will be Reevaluated and applied to the Player or Players every frame. If this value is False, then the scale is only avaluated once when the action begins.
