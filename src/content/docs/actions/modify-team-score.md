---
title: "Modify Team Score"
description: "Team, Score"
---

## Description

<big>Modifies the score of one or both teams. This action has no effect in free-for-all modes or modes without a team score.</big>

## Snippet

```
Modify Team Score(Team(Team 1), 0);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Team_==, ==_Score_==

> ==**Team**==
> _Type: **[Team](/constants/team/)**, Default: **Team**_
> The team or teams whose score will be changed.

> ==**Score**==
> _Type: **Integer**, Default: **[Number](/values/number/)**_
> The amount the score will increase or decrease. If positive, the score will increase. If negative, the score will decrease.
