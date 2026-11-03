---
title: "How to calculate values that change the speed of a projectile without affecting its arc"
---

### Why?

Sometimes we want the potential range of an ability to remain the same, just slowed down or sped up.

This is a problem that especially comes up for a few abilities in the game. For example, Baptiste's Immortality Field shares the same arc as his Secondary Fire, and Zarya's Graviton Surge shares the same arc as her Secondary Fire.

If we want to change the speed of either one of those, while keeping the other's speed the same, we'd ideally want to maintain the same arc. This is how we do that.

### The Math:

If P is position, and T is time, Velocity is equal to the changing of position over time. `dP/dT`. And Acceleration is equal to the changing of Velocity over time `d²P/dT²`.

Since Projectile Gravity is an Acceleration, and Projectile Speed is a Velocity, you need to square whatever operation you used on the Projectile Speed in order to obtain the equivalent Projectile Gravity.

### The Result (TLDR):

For example, Immortality Field's normal projectile speed is 60 m/s. If we wanted it to be 20 m/s, we would set projectile speed equal to 100 * 20/60. Projectile gravity needs that operation twice, so it would be 100 * 20/60 * 20/60. So, our full code for taking control of Immortality Field and slowing it down while maintaining the same arc will look like:
```
//Make sure conditions are correct to cast Immortality
Set Projectile Speed(Event Player, 100 * 20/60)
Set Projectile Gravity(Event Player, 100 * 20/60 * 20/60)
//Cast immortality
Set Projectile Speed(Event Player, 100)
Set Projectile Gravity(Event Player, 100)
```

An example code that fully implements this Immortality Change is **`PN5HK`**, where you can see that Immortality still follows the same arc as the secondary, just much slower.
