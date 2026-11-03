---
title: "Chase Global Variable At Rate"
---

## Description

Gradually modifies the value of a [Global Variable](/values/global-variable/) at a specific rate. (A global variable is a variable that belongs to the game itself.)

## Snippet

```
Chase Global Variable At Rate(variableName, 0, 1, Destination And Rate);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Variable_==, ==_Destination_==, ==_Rate_==, ==_Reevaluation_==

> ==**Variable**==
> _Type: **Global Variable**, Default: **A**_
> Specifies which global variable to modify gradually.

> ==**Destination**==
> _Type: **Float** | **Vector**, Default: **[Number](/values/number/)**_
> The value that the global variable will eventually reach. The type of this value may be either a number or a vector, though the variable's existing value must be of the same type before the chase begins.

> ==**Rate**==
> _Type: **Float**, Default: **Number (1)**_
> The amount of change that will happen to the variable's value each second.

> ==**Reevaluation**==
> _Type: **[Chase Reevaluation](/wiki/articles/chase reevaluation)**, Default: **Destination And Rate**_
> Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.

## Example usages
* Game where gave players points. To make it seem more responsive, have it roll through the numbers actively until it gets to the new number.
* Animating something to move. "Create Effect Sphere" to move through the air.

## Related Actions
* chase global variable over time A different chase that finishes at a set duration [over time.]
