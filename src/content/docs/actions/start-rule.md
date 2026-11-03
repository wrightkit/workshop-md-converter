---
title: "Start Rule"
---

## Description

Begins simultaneous execution of a Subroutine rule (which is a rule with a Subroutine event type). Execution of the original rule continues uninterrupted. The subroutine will have access to the same contextual values (such as Event Player) as the original rule.

## Snippet

```
Start Rule(SubroutineName, RESTART RULE);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Subroutine_==, ==_If ALREADY EXECUTING_==

> ==**Subroutine**==
> _Type: **Subroutine**, Default: **Sub0**_
> Specifies which subroutine to start. If a rule with a subroutine event type specifies the same subroutine, then it will execute. Otherwise, this action is ignored.

> ==**If ALREADY EXECUTING**==
> _Type: **AsyncBehavior**, Default: **RESTART RULE**_
> Determines what should happen if the rule specified by the subroutine is already executing on the same player or global entity.
