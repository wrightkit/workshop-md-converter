---
title: "Create Dummy Bot"
---

## Description

Adds a new bot to the specified slot on the specified team so long as the slot is available. This bot will only move, fire, or use abilities if executing Workshop actions. Extra dummy bots may be created if the corresponding [Workshop Extension](/references/workshop-extensions/) is enabled.

## Snippet

```
Create Dummy Bot(Hero(Tracer), Team(Team 1), -1, Vector(0, 0, 0), Vector(0, 0, 0));
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Hero_==, ==_Team_==, ==_Slot_==, ==_Position_==, ==_Facing_==

> ==**Hero**==
> _Type: **Hero**, Default: **[Hero](/values/hero/)**_
> The hero that the bot will be. If more than one hero is provided, one will be chosen at random.

> ==**Team**==
> _Type: **[Team](/constants/team/)**, Default: **Team**_
> The team on which to create the bot. The "all" option only works in free-for-all game modes, while the "team" options only work in team-based game modes.

> ==**Slot**==
> _Type: **Integer**, Default: **-1**_
> The player slot which will receive the bot (-1 for first available slot). Up to 6 bots may be added to each team, or 12 bots to the free-for-all team, regardless of lobby settings.

> ==**Position**==
> _Type: **Position**, Default: **[Vector](/values/vector/)**_
> The initial position where the bot will appear.

> ==**Facing**==
> _Type: **Direction**, Default: **[Vector](/values/vector/)**_
> The initial direction that the bot will face.
