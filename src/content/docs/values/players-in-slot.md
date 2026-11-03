---
title: "Players In Slot"
description: "Slot, Team"
---

## Description

<big>The player or array of players who occupy a specific slot in the game.</big>

## Snippet

```
Players In Slot(0, Team(Team 1));
```

## Properties

**Returns**: _<span style="color: #c678dd">Player</span>_ | _<span style="color: #c678dd">Array</span> (<span style="color: #c678dd">Player</span>)_
**Parameters**: ==_Slot_==, ==_Team_==

> ==**Slot**==
> _Type: **Integer**, Default: **[Number](/values/number/)**_
> The slot number from which to acquire a player or players. In team games, each team has slots 0 through 5. In free-for-all games, slots are numbered 0 through 11.

> ==**Team**==
> _Type: **[Team](/constants/team/)**, Default: **Team**_
> The team or teams from which to acquire a player or players.
