---
title: "Wait"
---

## Description

Pauses the execution of the action list. Unless the wait is interrupted, the remainder of the actions will execute after the pause.

The minimum value is 0.016. This is because the server runs at a tickrate of 62.5 per second. All values are rounded up to a value that is divisible by the tickrate. For example, a value of 0.030 gets rounded up to 0.032 (or 2 ticks), a value of 0.1 gets rounded up 0.112 (or 7 ticks).

## Snippet

```
Wait(0, Ignore Condition);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Time_==, ==_Wait Behavior_==

> ==**Time**==
> _Type: **Float**, Default: **[Number](/values/number/)**_
> The duration of the pause.

> ==**Wait Behavior**==
> _Type: **Wait**, Default: **Ignore Condition**_
> Specifies if and how the wait can be interrupted. If the condition list is ignored, the wait will not be interrupted. Otherwise, the condition list will determine if and when the action list will abort or restart.
