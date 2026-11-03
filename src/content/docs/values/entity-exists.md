---
title: "Entity Exists"
description: "Entity"
---

## Description

<big>Whether the specified player, icon entity, or effect entity still exists. Useful for determining if a player has left the match or an entity has been destroyed.</big>

## Snippet

```
Entity Exists(Event Player);
```

## Properties

**Returns**: _<span style="color: #c678dd">Boolean</span>_
**Parameters**: ==_Entity_==

> ==**Entity**==
> _Type: **[Player](/constants/player/)** | **Entity ID**, Default: **[Event Player](/values/event-player/)**_
> The player, icon entity, or effect entity whose existence to check.
