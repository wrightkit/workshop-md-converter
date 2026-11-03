---
title: "Is Communicating"
description: "Player, Type"
---

## Description

<big>Whether a player is using a specific communication type (such as emoting, using a voice line, etc.).</big>

## Snippet

```
Is Communicating(Event Player, Voice Line Up);
```

## Properties

**Returns**: _<span style="color: #c678dd">Boolean</span>_
**Parameters**: ==_Player_==, ==_Type_==

> ==**Player**==
> _Type: **[Player](/constants/player/)**, Default: **[Event Player](/values/event-player/)**_
> The player whose communication status to check.

> ==**Type**==
> _Type: **Comms**, Default: **Voice Line Up**_
> The type of communication to consider. The duration of emotes is exact, the duration of voice lines is assumed to be 4 seconds, and all other durations are assumed to be 2 seconds.
