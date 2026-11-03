---
title: "Set Player Score"
description: "Player, Score"
---

## Description

<big>Sets the score (kill count) of one or more players. This action only has an effect in free-for-all modes.</big>

## Snippet

```
Set Player Score(Event Player, 0);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Score_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player or players whose score will be set.

> ==**Score**==
> _Type: **Integer**, Default: **[Number](/values/number/)**_
> The score that will be set.
