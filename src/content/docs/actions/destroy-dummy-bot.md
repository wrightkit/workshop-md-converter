---
title: "Destroy Dummy Bot"
description: "Team, Slot"
---

## Description

<big>Removes the specified dummy bot from the match.</big>

## Snippet

```
Destroy Dummy Bot(Team(Team 1), 0);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Team_==, ==_Slot_==

> ==**Team**==
> _Type: **[Team](/constants/team/)**, Default: **Team**_
> The team to remove the dummy bot from. The "all" option only works in free-for-all game modes, while the "team" options only work in team-based game modes.

> ==**Slot**==
> _Type: **Integer**, Default: **[Number](/values/number/)**_
> The slot to remove the dummy bot from.
