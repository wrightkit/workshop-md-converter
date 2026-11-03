---
title: "Declare Player Victory"
---

## Description

Instantly ends the match with the specific player as the winner. This action only has an effect in free-for-all modes. If no player is specified, the game will end with the text "WINS!".

## Snippet

```
Declare Player Victory(Event Player);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==

> ==**Player**==
> _Type: **[Player](/constants/player/)**, Default: **[Event Player](/values/event-player/)**_
> The winning player.
