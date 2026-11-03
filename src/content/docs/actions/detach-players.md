---
title: "Detach Players"
---

## Description

Undoes the attachment caused by the Attach Players action for one or more players. These players will resume normal movement from their current position.

## Snippet

```
Detach Players(Event Player);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_CHILDREN_==

> ==**CHILDREN**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player or players that will become detached from their parent.
