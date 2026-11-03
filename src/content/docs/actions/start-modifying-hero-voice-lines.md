---
title: "Start Modifying Hero Voice Lines"
---

## Description

<big>Modifies the way hero voice lines sound for a Player or Players.</big>

## Snippet

```
Start Modifying Hero Voice Lines(Event Player, 0, true);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Pitch Scalar_==, ==_Reevaluation_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The Player or Players whose movement collision is affected.

> ==**Pitch Scalar**==
> _Type: **Float**, Default: **0**_
> The amount that the pitch of the voice will be raised. (Up to 1.5) or lowered (Down to 0.5).

> ==**Reevaluation**==
> _Type: **Boolean**, Default: **true**_
> If True, Pitch Scalar is evaluated and updated every frame. If False, Pitch Scalar is evaluated once when the actions executes.
