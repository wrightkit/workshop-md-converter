---
title: "Disallow Button"
description: "Player, Button"
---

## Description

<big>Disables a logical button for one or more players such that pressing it has no effect.</big>

## Snippet

```
Disallow Button(Event Player, Button(Primary Fire));
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Button_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player or players whose button is being disabled.

> ==**Button**==
> _Type: **Button**, Default: **Primary Fire**_
> The logical button that is being disabled.
