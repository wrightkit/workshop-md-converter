---
title: "Create Projectile Effect"
---

## Description

<big>Creates an in-world projectile effect entity. This effect entity will persist until destroyed. To obtain a reference to this entity, use the Last Created Entity value. This action will fail if too many entities have been created.</big>

## Snippet

```
Create Projectile Effect(All Players(All Teams), Orb Projectile, Null, Event Player, Vector(0, 0, 0), 0, Visible To Position Direction and Size);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Visible To_==, ==_Projectile Type_==, ==_Friendly To_==, ==_Position_==, ==_Direction_==, ==_Oversize_==, ==_Reevaluation_==

> ==**Visible To**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[All Players](/values/all-players/)**_
> One or more players who will be able to see the effect.

> ==**Projectile Type**==
> _Type: **[Projectile Effect](/constants/projectile-effect/)**, Default: **Orb Projectile**_
> Type of projectile to be created. New options can be added to this list by enabling the Projectiles Workshop Extension.

> ==**Friendly To**==
> _Type: **[Player](/constants/player/)**, Default: **[Null](/values/null/)**_
> One or more players who the projectile will appear friendly to.

> ==**Position**==
> _Type: **Position**, Default: **[Event Player](/values/event-player/)**_
> The position of the effect.

> ==**Direction**==
> _Type: **Direction**, Default: **[Vector](/values/vector/)**_
> The facing direction of the effect.

> ==**Oversize**==
> _Type: **Float**, Default: **[Number](/values/number/)**_
> A 0 to 1 range for how oversized the projectile should be, 0 being the default size, 1 being the maximum allowed size. The maximum allowed size is different for each projectile type.

> ==**Reevaluation**==
> _Type: **[Projectile Effect Reevaluation](/wiki/articles/projectile effect reevaluation)**, Default: **Visible To Position Direction and Size**_
> Specifies which of this action's inputs will be continuously reevaluated. The effect will keep asking for and using new values from reevaluated inputs.
