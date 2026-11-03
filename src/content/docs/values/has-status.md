---
title: "Has Status"
---

## Description

<big>Whether the specified player has the specified status, either from the set status action or from a non-scripted game mechanic. See [Abilities Detected by "Has Status"](/references/abilities-detected-by-has-status/) for a list of in-game abilities that can be detected by this value.</big>

## Snippet

```
Has Status(Event Player, Hacked);
```

## Properties

**Returns**: _<span style="color: #c678dd">Boolean</span>_
**Parameters**: ==_Player_==, ==_Status_==

> ==**Player**==
> _Type: **[Player](/constants/player/)**, Default: **[Event Player](/values/event-player/)**_
> The player whose status to check.

> ==**Status**==
> _Type: **[Status](/constants/status/)**, Default: **Hacked**_
> The status to check for.
