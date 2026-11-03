---
title: "Create Progress Bar HUD Text"
---

## Description

Creates Progress Bar HUD text visible to specified Players at a specific location on the screen. This text will persist until destroyed. To obtain a reference to this text, use the [Last Text ID](/values/last-text-id/) value. This action will fail if too many text elements have been created.

## Snippet

```
Create Progress Bar HUD Text(All Players(All Teams), 0, Custom String(""), Left, 0, Color(White), Color(White), Visible To Values and Color, Default Visibility);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Visible To_==, ==_Value_==, ==_Text_==, ==_Location_==, ==_Sort Order_==, ==_Progress Bar Color_==, ==_Text Color_==, ==_Reevaluation_==, ==_Non-Team Spectators_==

> ==**Visible To**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[All Players](/values/all-players/)**_
> One or more Players who will see the Progress Bar HUD text.

> ==**Value**==
> _Type: **Float**, Default: **0**_
> The value of the progress bar to be displayed as a percentage from 0 to 100.

> ==**Text**==
> _Type: **Object**, Default: **Custom String("")**_
> The text to be displayed (can be blank)

> ==**Location**==
> _Type: **[HUD Position](/constants/hud-position/)**, Default: **[Left](/values/left/)**_
> The location on the screen where the text will appear.

> ==**Sort Order**==
> _Type: **Float**, Default: **0**_
> The sort order of the text relative to other text in the same location. Text with a higher sort order will come after the text with a lower sort order.

> ==**Progress Bar Color**==
> _Type: **[Color](/constants/color/)**, Default: **Color**_
> The color of the Progress Bar text to be created. If a particular team is chosen, the effect will either be red or blue, depending on whether the team is hostile to the viewer.

> ==**Text Color**==
> _Type: **[Color](/constants/color/)**, Default: **Color**_
> The color of the text to be created. If a particular team is chosen, the effect will either be red or blue, depending on whether the team is hostile to the viewer.

> ==**Reevaluation**==
> _Type: **[HUD Reevaluation](/constants/hud-reevaluation/)**, Default: **Visible To Values and Color**_
> Specifies which of this Action's Inputs will be continuously reevaluated. The text will keep asking for and using new Values from reevaluated Inputs.

> ==**Non-Team Spectators**==
> _Type: **[Spectator Visibility](/constants/spectator-visibility/)**, Default: **Default Visibility**_
> Whether non-team spectators can see the text or not.
