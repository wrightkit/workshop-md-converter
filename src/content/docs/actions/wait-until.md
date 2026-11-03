---
title: "Wait Until"
---

## Description

<big>Waits until the Continue Condition is true or Timeout seconds elapse. (The Rule's Condition is ignored during this wait.)</big>

### Notes
* Can pass after 0 ticks (no 1 tick minimum).

## Snippet

```
Wait Until(false, 0);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Continue Condition_==, ==_Timeout_==

> ==**Continue Condition**==
> _Type: **Boolean**, Default: **false**_
> If this value becomes true, the wait concludes, and the next action in the action list begins executing.

> ==**Timeout**==
> _Type: **Integer**, Default: **0**_
> If this many seconds elapse, the wait concludes, and the next action in the action list begins executing.
