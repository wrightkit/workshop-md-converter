---
title: "Play Effect"
---

## Description

Plays an effect at a position in the world. The lifetime of this effect is short, so it does not need to be updated or destroyed.

Effects created with this action do not count towards the Create Effect limit of 128. You can have as many `Play Effect` effects active as you want.

==_For a visual list of all effects check out the Effects Reference Sheet_==

## Snippet

```
Play Effect(All Players(All Teams), Good Explosion, Color(White), Vector(0, 0, 0), 1);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Visible To_==, ==_Type_==, ==_Color_==, ==_Position_==, ==_Radius_==

> ==**Visible To**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[All Players](/values/all-players/)**_
> One or more players who will be able to see the effect.

> ==**Type**==
> _Type: **DynamicEffect**, Default: **Good Explosion**_
> The type of effect to be created.

> ==**Color**==
> _Type: **[Color](/constants/color/)**, Default: **Color**_
> The color of the effect to be created. If a particular team is chosen, the effect will either be red or blue, depending on whether the team is hostile to the viewer. Does not support Custom Color.

> ==**Position**==
> _Type: **Position**, Default: **[Vector](/values/vector/)**_
> The effect's position. If this value is a player, then the effect will play at the player's position. Otherwise, the value is interpreted as a position in the world.

> ==**Radius**==
> _Type: **Float**, Default: **Number (1)**_
> The effect's radius in meters.
