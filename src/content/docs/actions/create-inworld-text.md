---
title: "Create In-World Text"
---

## Description

Creates in-world text visible to specific players at a specific position in the world. This text will persist until destroyed. To obtain a reference to this text, use the Last Text Id value. This action will fail if too many text elements have been created.

## Snippet

```
Create In-World Text(All Players(All Teams), Custom String(""), Vector(0, 0, 0), 1, Clip Against Surfaces, Visible To Position And String, Color(White), Default Visibility);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Visible To_==, ==_Header_==, ==_Position_==, ==_Scale_==, ==_Clipping_==, ==_Reevaluation_==, ==_Text Color_==, ==_Spectators_==

> ==**Visible To**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[All Players](/values/all-players/)**_
> One or more players who will see the in-world text.

> ==**Header**==
> _Type: **Object**, Default: **[String](/values/string/)**_
> The text to be displayed.

> ==**Position**==
> _Type: **Position**, Default: **[Vector](/values/vector/)**_
> The text's position. If this value is a player, then the text will appear above the player's head. Otherwise, the value is interpreted as a position in the world.

> ==**Scale**==
> _Type: **Float**, Default: **Number (1)**_
> The text's scale.

> ==**Clipping**==
> _Type: **[Clip](/constants/clip/)**, Default: **Clip Against Surfaces**_
> Specifies whether the text can be seen through walls or is instead clipped.

> ==**Reevaluation**==
> _Type: **[In-World Text Reevaluation](/constants/inworld-text-reevaluation/)**, Default: **Visible To Position And String**_
> Specifies which of this action's inputs will be continuously reevaluated. The text will keep asking for and using new values from reevaluated inputs.

> ==**Text Color**==
> _Type: **[Color](/constants/color/)**, Default: **Color**_
> Specifies the color of the in-world text to use.

> ==**Spectators**==
> _Type: **[Spectator Visibility](/constants/spectator-visibility/)**, Default: **Default Visibility**_
> Whether spectators can see the text or not.
