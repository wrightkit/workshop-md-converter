---
title: "Start Camera"
---

## Description

<big>Places your camera at a location, facing a direction.</big>

## Snippet

```
Start Camera(Event Player, Vector(0, 0, 0), Vector(0, 0, 0), 0);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Eye Position_==, ==_Look At Position_==, ==_Blend Speed_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player or players whose cameras will be placed at the location.

> ==**Eye Position**==
> _Type: **Position**, Default: **[Vector](/values/vector/)**_
> The position of the camera. Reevaluates continuously.

> ==**Look At Position**==
> _Type: **Position**, Default: **[Vector](/values/vector/)**_
> Where the camera looks at. Reevaluates continuously.

> ==**Blend Speed**==
> _Type: **Float**, Default: **[Number](/values/number/)**_
> How fast to blend the camera speed as positions change. 0 means do not blend at all, and just change positions instantly.
