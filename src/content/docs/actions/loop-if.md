---
title: "Loop If"
---

## Description

Restarts the action list from the beginning if this action's condition evaluates to true. If it does not, execution continues with the next action. To prevent an infinite loop, a Wait action must execute between the start of the action list and this action.

## Snippet

```
Loop If(True);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Condition_==

> ==**Condition**==
> _Type: **Boolean**, Default: **[Compare](/values/compare/)**_
> Specifies whether the loop will occur.
