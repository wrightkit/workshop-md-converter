---
title: "Ray casts and You"
---

## What is Ray casting?

The easiest way of thinking about ray casting, is to imagine it as a laser pointer. You shoot a completely straight ray from the laser pointer, and then you can see where on a surface you have hit.

In the workshop, the ray cast actions all take a _start position_ and an _end position_. You can see the start position as the position of the laser pointer in the world, and the end position as the position you are aiming at.

To make ray casting more efficient, the ray actually ends completely at _end position_, even if this position is mid-air.

There are currently three types of ray casts in the workshop. Each has a different behaviour when it comes to return value and default return value.

## Ray cast hit position

*   Returns: `Position` of the intersection between the ray and a surface. (The laser pointer dot.)
*   Default: _end position_ if ray did not intersect any surface.

The hit position ray cast is the most basic of ray casts. It simply returns the position of the laser dot on a surface, or the _end position_ if no surface was hit. Can be used to place effects on places where the player is looking.

![Image depicting ray cast hit position](https://i.imgur.com/dtAm7U4.png)

## Ray cast hit player

*   Returns: The `player` entity that was hit by the ray.
*   Default: `null` if ray did not hit any player.

The hit player ray cast returns the player that was hit by the ray. This can be useful if you want to implement a hitscan (no travel time) ability.

## Ray cast hit normal

*   Returns: The `normal vector` of the surface intersection point.
*   Default: `Direction Towards(end pos, start pos)` (points towards the player.)

The hit normal ray cast returns the `normal vector` of the surface that was struck.

The `normal vector` is just a unit-length vector that points straight out from the surface (is orthogonal to the surface). As an example, this could be used for taking into account the angle of approach for a wall jumping rule or implementing a bouncing ball.

![Image depicting ray cast hit normal](https://i.imgur.com/VEHUdOq.png)

## Common Examples

### Ray cast from player camera to reticle.

```
actions
{
	Event Player.R = Ray Cast Hit Position(Eye Position(Event Player), Eye Position(Event Player) + Facing Direction Of(Event Player)
		* 200, All Players(All Teams), Event Player, True);
}
```

## Common Mistakes

*   Only using a direction vector for the end position
    *   Fix: Add start position to the direction vector.
*   Using an end position too close to the start position
    *   Fix: Lengthen the direction vector by multiplying it by a large number, such as 100.
