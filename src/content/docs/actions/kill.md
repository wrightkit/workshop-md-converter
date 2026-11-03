---
title: "Kill"
---

## Description

Instantly kills one or more players.
\
### Notes
* Will not kill the Player if the Killer has a [damage modification](/actions/start-damage-modification/) of 0 to the Player.

## Snippet

```
Kill(Event Player, Null);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Killer_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player or players who will be killed.

> ==**Killer**==
> _Type: **[Player](/constants/player/)**, Default: **[Null](/values/null/)**_
> The player who will receive credit for the kill. A killer of null indicates no player will receive credit.
