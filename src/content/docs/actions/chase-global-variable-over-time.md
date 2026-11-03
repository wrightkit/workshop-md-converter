---
title: "Chase Global Variable Over Time"
---

## Description

Gradually modifies the value of a [Global Variable](/values/global-variable/) over time. (A global variable is a variable that belongs to the game itself.)

## Snippet

```
Chase Global Variable Over Time(variableName, 0, 1, Destination And Duration);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Variable_==, ==_Destination_==, ==_Duration_==, ==_Reevaluation_==

> ==**Variable**==
> _Type: **Global Variable**, Default: **A**_
> Specifies which global variable to modify gradually.

> ==**Destination**==
> _Type: **Float** | **Vector**, Default: **[Number](/values/number/)**_
> The value that the global variable will eventually reach. The type of this value may be either a number or a vector, though the variable's existing value must be of the same type before the chase begins.

> ==**Duration**==
> _Type: **Float**, Default: **Number (1)**_
> The amount of time, in seconds, over which the variable's value will approach the destination.

> ==**Reevaluation**==
> _Type: **[Chase Time Reevaluation](/constants/chase-time-reevaluation/)**, Default: **Destination And Duration**_
> Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.
