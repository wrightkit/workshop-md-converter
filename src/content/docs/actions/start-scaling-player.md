---
title: "Start Scaling Player"
---

## Description

Start modifying the size of a Player or Players (including mode, movement collision, hit detection, and certain abilities). Note that large players placed into complex environments will severely impact server load, so consider also applying the Disable Movement Collision With Enviroment action.

## Snippet

```
Start Scaling Player(Event Player, 1, True);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Scale_==, ==_Reevaluation_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The Player or Players whose size will be modified.

> ==**Scale**==
> _Type: **Float**, Default: **1**_
> The multiplier applied to the size of the player or players (So 0.5 halves the size, 2.0 doubles the size, etc.).

> ==**Reevaluation**==
> _Type: **Boolean**, Default: **True**_
> If this value is True, then scale will be Reevaluated and applied to the Player or Players every frame. If this value is False, then the scale is only evaluated once when the action begins.
