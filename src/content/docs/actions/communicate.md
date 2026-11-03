---
title: "Communicate"
---

## Description

<big>Causes one or more players to use an emote, voice line, or other equipped communication.</big>

## Snippet

```
Communicate(Event Player, Voice Line Up);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Type_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player or players to perform the communication.

> ==**Type**==
> _Type: **Comms**, Default: **Voice Line Up**_
> The type of communication.

## Trivia
- Communicate does not work on bots anymore.
