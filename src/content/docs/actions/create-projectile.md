---
title: "Create Projectile"
---

## Description

Create a projectile entity that either heals or damages players and player owned entities. This action will fail if too many entities have been created.

## Snippet

```
Create Projectile(Orb Projectile, Event Player, Null, Null, To World, Damage, Team(Team 1), 1, 1, 0, Bad Explosion, Explosion Sound, 0, 1, 1, 0, 0, 0);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Projectile Type_==, ==_Player_==, ==_Start Position_==, ==_Direction_==, ==_Relative_==, ==_Modify Health Type_==, ==_Affected Team_==, ==_Amount_==, ==_Amount Scalar_==, ==_Explosion Radius_==, ==_Explosion Effect_==, ==_Explosion Sound Effect_==, ==_Oversize_==, ==_Speed_==, ==_Lifetime_==, ==_Impulse_==, ==_Ricochet Count_==, ==_Gravity_==

> ==**Projectile Type**==
> _Type: **[Projectile Effect](/constants/projectile-effect/)**, Default: **Orb Projectile**_
> Type of projectile to be created. New options can be added to this list by enabling the Projectiles Workshop Extension.

> ==**Player**==
> _Type: **[Player](/constants/player/)**, Default: **[Event Player](/values/event-player/)**_
> The player who owns this projectile and will receive credit for kills. If null, the projectile will be owned by nobody. The projectile will not affect its owner.

> ==**Start Position**==
> _Type: **Position**, Default: **[Null](/values/null/)**_
> The start position of the projectile. If null, the player's eye position will be used.

> ==**Direction**==
> _Type: **Direction**, Default: **[Null](/values/null/)**_
> The direction for the projectile to travel. If null, the player's facing direction will be used.

> ==**Relative**==
> _Type: **[Relativity](/constants/relativity/)**, Default: **To World**_
> Whether the projectile's start position and direction are relative to the player or to the world.

> ==**Modify Health Type**==
> _Type: **[Modify Health Type](/wiki/articles/modify health type)**, Default: **Damage**_
> Whether the projectile will heal or damage targets it collides with.

> ==**Affected Team**==
> _Type: **[Team](/constants/team/)**, Default: **Team**_
> Which team the projectile will collide with. The projectile will never affect its owner regardless of team.

> ==**Amount**==
> _Type: **Float**, Default: **Number (1)**_
> The amount of damage or healing the projectile will apply to targets it collides with. If explosion radius is set to an amount greater than 0, this is how much damage the explosion will do at its center.

> ==**Amount Scalar**==
> _Type: **Float**, Default: **Number (1)**_
> If explosion radius is set to 0 this is how much to scale the damage amount for critical hits. If the explosion radius is greater than 0 this is how much damage the projectile will do at the edge of the explosion.

> ==**Explosion Radius**==
> _Type: **Float**, Default: **[Number](/values/number/)**_
> The radius of the explosion created by this projectile. If 0, this projectile doesn't create an explosion.

> ==**Explosion Effect**==
> _Type: **[Effect](/constants/effect/)**, Default: **Bad Explosion**_
> The effect to use when the projectile explodes. If explosion radius is 0 this effect will not be created.

> ==**Explosion Sound Effect**==
> _Type: **[Effect](/constants/effect/)**, Default: **Explosion Sound**_
> The sound effect to use when the projectile explodes. If explosion radius is 0 this effect will not be created.

> ==**Oversize**==
> _Type: **Float**, Default: **[Number](/values/number/)**_
> A 0 to 1 range for how oversized the projectile should be, 0 being the default size, 1 being the maximum allowed size. The maximum allowed size is different for each projectile type.

> ==**Speed**==
> _Type: **Float**, Default: **Number (1)**_
> The speed in meters per second that the projectile will travel along its direction.

> ==**Lifetime**==
> _Type: **Float**, Default: **Number (1)**_
> How long in seconds before the projectile expires.

> ==**Impulse**==
> _Type: **Float**, Default: **[Number](/values/number/)**_
> The impulse to apply to a target when hit by this projectile. If explosion radius greater than 0, this impulse will applied to all targets affected by the explosion.

> ==**Ricochet Count**==
> _Type: **Integer**, Default: **[Number](/values/number/)**_
> How many times the projectile will ricochet off the environment before expiring.

> ==**Gravity**==
> _Type: **Float**, Default: **[Number](/values/number/)**_
> The amount of gravity affecting the projectile, creating an arc. If negative, the projectile will arc upwards.
