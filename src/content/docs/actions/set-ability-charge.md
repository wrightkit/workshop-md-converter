---
title: "Set Ability Charge"
description: "Player, Button, Charge count"
---

## Description

<big>Set the Ability Charge Count for one or more Players if supported.</big>

## Snippet

```
Set Ability Charge(Event Player, Button(Primary Fire), 0);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Button_==, ==_Charge Count_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The Player or Players whose ability charge count will be modified.

> ==**Button**==
> _Type: **Button**, Default: **Primary Fire**_
> The logical button associated with the Ability to be modified.

> ==**Charge Count**==
> _Type: **Integer**, Default: **0**_
> The Charge count that will be set.
