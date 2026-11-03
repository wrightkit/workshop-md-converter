---
title: "Start Holding Button"
---

## Description

<big>Forces one or more players to hold a button virtually until stopped by the stop holding button action.</big>

## Snippet

```
Start Holding Button(Event Player, Button(Primary Fire));
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Button_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player or players who are holding a button virtually.

> ==**Button**==
> _Type: **Button**, Default: **Primary Fire**_
> The logical button that is being held virtually.
