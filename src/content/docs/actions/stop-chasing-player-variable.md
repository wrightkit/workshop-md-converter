---
title: "Stop Chasing Player Variable"
description: "Player, Variable"
---

## Description

<big>Stops an in-progress chase of a player variable, leaving it at its current value.</big>

## Snippet

```
Stop Chasing Player Variable(Event Player, variableName);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Variable_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player whose variable will stop changing. If multiple players are provided, each of their variables will stop changing.

> ==**Variable**==
> _Type: **Player Variable**, Default: **A**_
> Specifies which of the player's variables to stop modifying.
