---
title: "Press Button"
description: "Player, Button"
---

## Description

<big>Forces one or more players to press a button virtually for a single frame.</big>

## Snippet

```
Press Button(Event Player, Button(Primary Fire));
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Button_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player or players for whom the virtual button input will be forced.

> ==**Button**==
> _Type: **Button**, Default: **Primary Fire**_
> The button to be pressed.
