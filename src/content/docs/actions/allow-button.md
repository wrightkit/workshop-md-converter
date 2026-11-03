---
title: "Allow Button"
---

## Description

Undoes the effect of the Disallow Button action for one or more players.

## Snippet

```
Allow Button(Event Player, Button(Primary Fire));
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Button_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player or players whose button is being reenabled.

> ==**Button**==
> _Type: **Button**, Default: **Primary Fire**_
> The logical button that is being reenabled.
