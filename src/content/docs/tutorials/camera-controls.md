---
title: "Camera Controls"
---

**A chase variable that will mimic the flying controls in-game (mostly)**

* **Left/Right is just normal left/right**
* **Up/Down is just normal up/down**

**But MOST importantly**
* **Forward/Backward is relative to the facing direction**

```
variables
{
	player:
		0: Camera
}

actions
{
	Chase Player Variable At Rate(Event Player, Camera, Event Player.Camera + World Vector Of(Vector(X Component Of(Throttle Of(
		Event Player)), Is Button Held(Event Player, Button(Jump)) && !Is Button Held(Event Player, Button(Crouch)) ? 1 : (
		Is Button Held(Event Player, Button(Crouch)) && !Is Button Held(Event Player, Button(Jump)) ? -1 : 0), 0), Event Player,
		Rotation) + Facing Direction Of(Event Player) * Z Component Of(Throttle Of(Event Player)), 12 * (Is Button Held(Event Player,
		Button(Jump)) || Is Button Held(Event Player, Button(Crouch)) ? 1 : Min(Magnitude Of(Throttle Of(Event Player)), 1)),
		Destination and Rate);
}
```

**Q:** Do i know how it works?

**A:** I used to, because i built it however this was 3-5 months ago and i have bad memory. So no i coundn't tell you how it works.

**However** you dont need to understand something to modify it for collisions, this next one is the same thing but it has collision with **Envioment** (not objects, shields or players) however all you need for objects is changing a False to True and for players its just changing a null for something with them wihtin it (like teams)

```
variables
{
	player:
		0: Camera
}

actions
{
	Chase Player Variable At Rate(Event Player, Camera, Ray Cast Hit Position(Event Player.Camera,
		Event Player.Camera + World Vector Of(Vector(X Component Of(Throttle Of(Event Player)), Is Button Held(Event Player, Button(
		Jump)) && !Is Button Held(Event Player, Button(Crouch)) ? 1 : (Is Button Held(Event Player, Button(Crouch)) && !Is Button Held(
		Event Player, Button(Jump)) ? -1 : 0), 0), Event Player, Rotation) + Facing Direction Of(Event Player) * Z Component Of(
		Throttle Of(Event Player)), Null, Event Player, False) - Direction Towards(Event Player.Camera,
		Event Player.Camera + World Vector Of(Vector(X Component Of(Throttle Of(Event Player)), Is Button Held(Event Player, Button(
		Jump)) && !Is Button Held(Event Player, Button(Crouch)) ? 1 : (Is Button Held(Event Player, Button(Crouch)) && !Is Button Held(
		Event Player, Button(Jump)) ? -1 : 0), 0), Event Player, Rotation) + Facing Direction Of(Event Player) * Z Component Of(
		Throttle Of(Event Player))) * 0.250, 12 * (Is Button Held(Event Player, Button(Jump)) || Is Button Held(Event Player, Button(
		Crouch)) ? 1 : Min(Magnitude Of(Throttle Of(Event Player)), 1)), Destination and Rate);
}
```
