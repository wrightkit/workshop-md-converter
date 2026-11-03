---
title: "Create Effect"
---

## Description

Creates an in-world effect entity. This effect entity will persist until destroyed. To obtain a reference to this entity, use the Last Created Entity value. This action will fail if too many entities have been created.

There can be a maximum of 128 active effects created by this action, after which new effects will not appear. With the use of Workshop Extensions the maximum can be increased to 256.

==_For a visual list of all effects check out the Effects Reference Sheet_==

## Snippet

```
Create Effect(All Players(All Teams), Sphere, Color(White), Vector(0, 0, 0), 1, Visible To Position And Radius);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Visible To_==, ==_Type_==, ==_Color_==, ==_Position_==, ==_Radius_==, ==_Reevaluation_==

> ==**Visible To**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[All Players](/values/all-players/)**_
> One or more players who will be able to see the effect.

> ==**Type**==
> _Type: **[Effect](/constants/effect/)**, Default: **Sphere**_
> The type of effect to be created.

> ==**Color**==
> _Type: **[Color](/constants/color/)**, Default: **Color**_
> The color of the effect to be created. If a particular team is chosen, the effect will either be red or blue, depending on whether the team is hostile to the viewer. Does not apply to sound effects.

> ==**Position**==
> _Type: **Position**, Default: **[Vector](/values/vector/)**_
> The effect's position. If this value is a player, then the effect will move along with the player. Otherwise, the value is interpreted as a position in the world.

> ==**Radius**==
> _Type: **Float**, Default: **Number (1)**_
> The radius of this effect.

> ==**Reevaluation**==
> _Type: **[Effect Reevaluation](/constants/effect-reevaluation/)**, Default: **Visible To Position And Radius**_
> Specifies which of this action's inputs will be continuously reevaluated.
