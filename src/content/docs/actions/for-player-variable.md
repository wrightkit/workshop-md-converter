---
title: "For Player Variable"
description: "Control player, Control variable, Range start, Range stop, Step"
---

## Description

<big>Denotes the beginning of a series of actions that will execute in a loop, modifying the control variable on each loop. The corresponding end action denotes the end of the loop. If the control variable reaches or passes the range stop value, then the loop exits, and execution jumps to the next action after the end action.</big>

## Snippet

```
For Player Variable(Event Player, variableName, 0, Count OF, 1);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Control Player_==, ==_Control Variable_==, ==_Range Start_==, ==_Range Stop_==, ==_Step_==

> ==**Control Player**==
> _Type: **[Player](/constants/player/)**, Default: **[Event Player](/values/event-player/)**_
> The player whose variable is being modified in this loop. If multiple players are specified, the first player is used.

> ==**Control Variable**==
> _Type: **Player Variable**, Default: **A**_
> The variable being modified in this loop. It is set to the range start value when the loop begins, and the loop continues until the control variable reaches or passes the range stop value.

> ==**Range Start**==
> _Type: **Float**, Default: **[Number](/values/number/)**_
> The control variable is set to this value when the loop begins.

> ==**Range Stop**==
> _Type: **Float**, Default: **Count OF**_
> If the control variable reaches or passes this value, then the loop will exit, and execution jumps to the next action after the end action. Whether this value is considered passed or not is based on whether the step value is negative or positive. If the control variable has already reached or passed this value when the loop begins, then the loop exits.

> ==**Step**==
> _Type: **Float**, Default: **Number (1)**_
> This value is added to the control variable when the end action is reached. If this modification causes the control variable to reach or pass the range stop value, then the loop exits, and execution jumps to the next action after the end action. Otherwise, the loop continues, and execution jumps to the next action after the for action.
