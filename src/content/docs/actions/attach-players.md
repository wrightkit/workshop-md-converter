---
title: "Attach Players"
---

## Description

Attaches one Player (the Child) to another Player (the Parent). Once attached, the Child will be unable to move freely until detached or teleported away. Multiple children may be attached to the same Parent (but not vice versa).

## Snippet

```
Attach Players(Event Player, Last Created Entity Entity, Vector(0, 0, 0));
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Child_==, ==_Parent_==, ==_Offset_==

> ==**Child**==
> _Type: **[Player](/constants/player/)**, Default: **[Event Player](/values/event-player/)**_
> The player that will attach to the parent. This player will be unable to move freely until detached or teleported away.

> ==**Parent**==
> _Type: **[Player](/constants/player/)**, Default: **Last Created Entity Entity**_
> The player to whom the child will attach. This player's movement will be unaffected and will determine the child's position.

> ==**Offset**==
> _Type: **Position**, Default: **[Vector](/values/vector/)**_
> The coordinates of the child relative to the parent. For example, `vect(1,2,0)` would be above and to the left of the parent's head.
