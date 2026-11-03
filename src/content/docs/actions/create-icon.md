---
title: "Create Icon"
---

## Description

Creates an in-world icon entity. This icon entity will persist until destroyed. To obtain a reference to this entity, use the Last Created Entity value. This action will fail if too many entities have been created.

==_For a visual list of all icons check out the Icon Reference Sheet_==

## Snippet

```
Create Icon(All Players(All Teams), Vector(0, 0, 0), Arrow: Down, Visible To And Position, Color(White), True);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Visible To_==, ==_Position_==, ==_Icon_==, ==_Reevaluation_==, ==_Icon Color_==, ==_Show When Offscreen_==

> ==**Visible To**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[All Players](/values/all-players/)**_
> One or more players who will be able to see the icon.

> ==**Position**==
> _Type: **Position**, Default: **[Vector](/values/vector/)**_
> The icon's position. If this value is a player, then the icon will appear above the player's head. Otherwise, the value is interpreted as a position in the world.

> ==**Icon**==
> _Type: **[Icon](/constants/icon/)**, Default: **Arrow: Down**_
> The icon to be created.

> ==**Reevaluation**==
> _Type: **[Icon Reevaluation](/constants/icon-reevaluation/)**, Default: **Visible To And Position**_
> Specifies which of this action's inputs will be continuously reevaluated. The icon will keep asking for and using new values from reevaluated inputs.

> ==**Icon Color**==
> _Type: **[Color](/constants/color/)**, Default: **Color**_
> The color of the icon to be created. If a particular team is chosen, the effect will either be red or blue, depending on whether the team is hostile to the viewer.

> ==**Show When Offscreen**==
> _Type: **Boolean**, Default: **[True](/values/true/)**_
> Should this icon appear even when it is behind you?
