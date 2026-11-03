---
title: "Evaluate Once"
---

## Description

Results in the first value that was provided to the Input Value parameter for the given action or condition (used to selectively not reevaluate certain parts of a value in a reevaluating field).

Evaluate Once can be used to isolate a part of a reevaluating parameter and “freeze” it at its initial value. One way this can be useful is when a reevaluating parameter (such as an effect’s position) makes use of a For loop’s control variable. For example, if you want to create a vertical stack of effects that move with a player, you could loop over a Create Effect action using Global.Y as your control variable and “Position Of(Event Player) + Vector(0, Evaluate Once(Global.Y), 0)” as your position (with reevaluation enabled). Doing this, the position of each effect would move along with the player, but thanks to Evaluate Once, the vertical offset for each effect would be frozen to the value of Global.Y when that particular effect was created (instead of the final value of Global.Y when the loop ends).

## Snippet

```
Evaluate Once(0);
```

## Properties

**Returns**: _<span style="color: #c678dd">Value</span>_
**Parameters**: ==_Input Value_==

> ==**Input Value**==
> _Type: **Void**, Default: **0**_
> This value is only evaluated once per action or condition.
