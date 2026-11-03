---
title: "Stop Holding Button"
---

## Description

Undoes the effect of the Start Holding Button action for one or more players.

## Snippet

```
Stop Holding Button(Event Player, Button(Primary Fire));
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Button_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player or players who are no longer holding a button virtually.

> ==**Button**==
> _Type: **Button**, Default: **Primary Fire**_
> The logical button that is no longer being held virtually.
