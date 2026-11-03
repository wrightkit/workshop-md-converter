---
title: "Create Beam Effect"
---

## Description

Creates an in-world beam effect entity. This effect entity will persist until destroyed. To obtain a reference to this entity, use the [Last Created Entity](/values/last-created-entity/) value. This action will fail if too many entities have been created.

## Snippet

```
Create Beam Effect(All Players(All Teams), Good Beam, Event Player, Event Player, Color(White), Visible To Position And Radius);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Visible To_==, ==_Type_==, ==_Start Position_==, ==_End Position_==, ==_Color_==, ==_Reevaluation_==

> ==**Visible To**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[All Players](/values/all-players/)**_
> One or more players who will be able to see the effect.

> ==**Type**==
> _Type: **[Beam](/constants/beam/)**, Default: **Good Beam**_
> The type of effect to be created.

> ==**Start Position**==
> _Type: **Position**, Default: **[Event Player](/values/event-player/)**_
> The effect's start position. If this value is a player, then the effect will move along with the player. Otherwise, the value is interpreted as a position in the world.

> ==**End Position**==
> _Type: **Position**, Default: **[Event Player](/values/event-player/)**_
> The effect's end position. If this value is a player, then the effect will move along with the player. Otherwise, the value is interpreted as a position in the world.

> ==**Color**==
> _Type: **[Color](/constants/color/)**, Default: **Color**_
> The color of the beam to be created. If a particular team is chosen, the effect will either be red or blue, depending on whether the team is hostile to the viewer. Does not apply to sound effects. Only the "good" and "bad" beam effects can have color applied.

> ==**Reevaluation**==
> _Type: **[Effect Reevaluation](/constants/effect-reevaluation/)**, Default: **Visible To Position And Radius**_
> Specifies which of this action's inputs will be continuously reevaluated. The effect will keep asking for and using new values from reevaluated inputs.
