---
title: "Create HUD Text"
---

## Description

Creates HUD text visible to specific players at a specific location on the screen. This text will persist until destroyed. To obtain a reference to this text, use the Last Text ID value. This action will fail if too many text elements have been created.

## Snippet

```
Create HUD Text(All Players(All Teams), Custom String(""), Null, Null, Left, 0, Color(White), Color(White), Color(White), Visible To And String, Default Visibility);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Visible To_==, ==_Header_==, ==_Subheader_==, ==_Text_==, ==_Location_==, ==_SORT ORDER_==, ==_Header Color_==, ==_Subheader Color_==, ==_Text Color_==, ==_Reevaluation_==, ==_Spectators_==

> ==**Visible To**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[All Players](/values/all-players/)**_
> One or more players who will see the hud text.

> ==**Header**==
> _Type: **Object**, Default: **[String](/values/string/)**_
> The text to be displayed (can be blank)

> ==**Subheader**==
> _Type: **Object**, Default: **[Null](/values/null/)**_
> The subheader text to be displayed (can be blank)

> ==**Text**==
> _Type: **Object**, Default: **[Null](/values/null/)**_
> The body text to be displayed (can be blank)

> ==**Location**==
> _Type: **[HUD Position](/constants/hud-position/)**, Default: **[Left](/values/left/)**_
> The location on the screen where the text will appear.

> ==**SORT ORDER**==
> _Type: **Float**, Default: **[Number](/values/number/)**_
> The sort order of the text relative to other text in the same location. A higher sort order will come after a lower sort order.

> ==**Header Color**==
> _Type: **[Color](/constants/color/)**, Default: **Color**_
> The color of the header.

> ==**Subheader Color**==
> _Type: **[Color](/constants/color/)**, Default: **Color**_
> The color of the subheader.

> ==**Text Color**==
> _Type: **[Color](/constants/color/)**, Default: **Color**_
> The color of the text.

> ==**Reevaluation**==
> _Type: **[HUD Reevaluation](/constants/hud-reevaluation/)**, Default: **Visible To And String**_
> Specifies which of this action's inputs will be continuously reevaluated.

> ==**Spectators**==
> _Type: **[Spectator Visibility](/constants/spectator-visibility/)**, Default: **Default Visibility**_
> Whether spectators can see the text or not.
