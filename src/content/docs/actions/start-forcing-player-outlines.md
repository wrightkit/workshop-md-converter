---
title: "Start Forcing Player Outlines"
---

## Description

<big>Starts forcing the visibility and color of Player Outlines for the specified Viewed Player or Players from the perspective of one or more Viewing Players.</big>

## Snippet

```
Start Forcing Player Outlines(Event Player, All Players(All Teams), true, Color(White), Default);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Viewed Players_==, ==_Viewing Players_==, ==_Visible_==, ==_Color_==, ==_Type_==

> ==**Viewed Players**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The Player or Players who will have their outlines modified.

> ==**Viewing Players**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[All Players](/values/all-players/)**_
> The Viewing Player or Players for whom the viewed Player's outlines will be modified.

> ==**Visible**==
> _Type: **Boolean**, Default: **true**_
> Whether or not the specified Player Outlines should be visible.

> ==**Color**==
> _Type: **[Color](/constants/color/)**, Default: **Color**_
> The color of the specified Player Outlines if they are visible. If a particular team is chosen, the color will either be Red or Blue, depending on whether the team is hostile to the viewer.

> ==**Type**==
> _Type: **Outline**, Default: **Default**_
> The type of the specified Player Outlines if they are visible

## Notes
Outlines may not immediately update from when it starts.
Below is a table of when outline gets updated.

| Viewer → Viewed(Outlined Player) | Alive | Dead | Other |
|-|-|-|-|
| **Viewer → Self** | ✅  | ✅ |
| **Viewer → Teammate** |  Within melee distance  | ✅ | Change to Line of Sight OR Field of View |
| **Viewer → Enemy** | ❌ | ✅ |
