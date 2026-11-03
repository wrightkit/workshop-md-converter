---
title: "Disable Movement Collision With Environment"
---

## Description

<big>Causes a Player or Players to stop colliding with the environment (walls, ceilings, certain objects, etc.)</big>

## Snippet

```
Disable Movement Collision With Environment(Event Player, false);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Include Floors_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The Player or Players whose movement collision is affected.

> ==**Include Floors**==
> _Type: **Boolean**, Default: **false**_
> If True, collision with the floors is also disabled.
