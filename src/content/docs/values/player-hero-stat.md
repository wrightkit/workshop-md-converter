---
title: "Player Hero Stat"
---

## Description

<big>Provides a statistic of the specified Player's time playing a specific Hero (limited to the current match). Statistics are only gathered when the game is in progress. Dummy bots do not gather statistics.</big>

## Snippet

```
Player Hero Stat(Event Player, Hero(Tracer), All Damage Dealt);
```

## Properties

**Returns**: _<span style="color: #c678dd">Integer</span>_
**Parameters**: ==_Player_==, ==_Hero_==, ==_Stat_==

> ==**Player**==
> _Type: **[Player](/constants/player/)**, Default: **[Event Player](/values/event-player/)**_
> The Player whose Statistic to acquire.

> ==**Hero**==
> _Type: **Hero**, Default: **[Hero](/values/hero/)**_
> The hero whose statistic to acquire

> ==**Stat**==
> _Type: **Statistic**, Default: **All Damage Dealt**_
> The statistic to acquire.
