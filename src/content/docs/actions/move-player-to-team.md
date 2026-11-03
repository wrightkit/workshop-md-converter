---
title: "Move Player To Team"
---

## Description

<big>Move one or more Players to the specified Team and Slot. This action can fail if the specified slot is not available. This action doesn't work on Dummy Bots.</big>

## Snippet

```
Move Player To Team(Event Player, All, -1);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Team_==, ==_Slot_==

> ==**Player**==
> _Type: **[Player](/constants/player/)**, Default: **[Event Player](/values/event-player/)**_
> The Player or Players to move.

> ==**Team**==
> _Type: **[Team](/constants/team/)**, Default: **All**_
> The team on which to move the Player. The "all" option only works in free-for-all game modes, while the "team" options only work in team-based game modes.

> ==**Slot**==
> _Type: **Integer**, Default: **-1**_
> The player slot which will receive the Player (-1 for first available slot).
