---
title: "While"
---

## Description

Denotes the beginning of a series of actions that will execute in a loop as long as the specified condition is true. The next End action at the current level denotes the end of the loop. If the condition evaluates to false when execution is at the top of the loop, then the loop exits, and execution jumps to the next action after the End action.

## Snippet

```
While(True);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Condition_==

> ==**Condition**==
> _Type: **Boolean**, Default: **[Compare](/values/compare/)**_
> If this evaluates to true, execution continues with the next action. Otherwise, execution jumps to the next end action at the current level.
