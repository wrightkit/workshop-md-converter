---
title: "Add Health Pool To Player"
---

## Description

Adds a temporary health pool to a Player or Players. This health pool can be referenced using the Last Created Health Pool value. Up to 16 health pools of a given health type (Health, Armor, or Shields) may exist on a player (including base pools and pools granted by abilities).

## Snippet

```
Add Health Pool To Player(Event Player, Armor, 100, true, true);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Health Type_==, ==_Max Health_==, ==_Recoverable_==, ==_Reevaluation_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The Player or Players whose movement collision is affected.

> ==**Health Type**==
> _Type: **Health Type** | **Array** (**Health of Type**), Default: **Armor**_
> Specifies the type of health (Armor or shields) contained in the Health Pool.

> ==**Max Health**==
> _Type: **Float**, Default: **100**_
> The size of the Health Pool

> ==**Recoverable**==
> _Type: **Boolean**, Default: **true**_
> Whether health in this pool can be healed once it is lost. If this is value is False, then the Health Pool will shrink and disappear as it is damaged.

> ==**Reevaluation**==
> _Type: **Boolean**, Default: **true**_
> If True and Recoverable is also True, then Max Health will be reevaluated every frame, if False or Recoverable is False, then Max Health is only evaluated once when this action executes.
