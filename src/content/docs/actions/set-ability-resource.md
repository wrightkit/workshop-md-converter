---
title: "Set Ability Resource"
description: "Player, Button, Resource percent"
---

## Description

<big>Set the Ability Resource Percentage for one or more Players if supported.</big>

## Snippet

```
Set Ability Resource(Event Player, Button(Primary Fire), 0);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Button_==, ==_Resource Percent_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The Player or Players whose Ability Resource Percentage will be modified.

> ==**Button**==
> _Type: **Button**, Default: **Primary Fire**_
> The logical button associated with the Ability to be modified.

> ==**Resource Percent**==
> _Type: **Float**, Default: **0**_
> The Percentage of Resource that will be set with respect to each Player's Ability Resource capacity.
