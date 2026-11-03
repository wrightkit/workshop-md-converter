---
title: "Start Forcing Spawn Room"
---

## Description

<big>Forces a team to spawn in a particular spawn room, regardless of the spawn room normally used by the game mode. This action only has an effect in assault, hybrid, and payload maps.</big>

## Snippet

```
Start Forcing Spawn Room(Team(Team 1), 0);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Team_==, ==_Room_==

> ==**Team**==
> _Type: **[Team](/constants/team/)**, Default: **Team**_
> The team whose spawn room will be forced.

> ==**Room**==
> _Type: **Integer**, Default: **[Number](/values/number/)**_
> The number of the spawn room to be forced. 0 is the first spawn room, 1 the second, and 2 is the third. If the specified spawn room does not exist, players will use the normal spawn room.
