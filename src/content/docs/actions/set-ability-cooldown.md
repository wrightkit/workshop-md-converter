---
title: "Set Ability Cooldown"
description: "Player, Button, Cooldown"
---

## Description

<big>Set the ability cooldown time for one or more players.</big>

## Snippet

```
Set Ability Cooldown(Event Player, Button(Primary Fire), 0);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Button_==, ==_COOLDOWN_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player or players whose ability cooldown time will be modified.

> ==**Button**==
> _Type: **Button**, Default: **Primary Fire**_
> The logical button associated with the ability to be modified.

> ==**COOLDOWN**==
> _Type: **Float**, Default: **[Number](/values/number/)**_
> The cooldown time that will be set in seconds. Max of 1000.
