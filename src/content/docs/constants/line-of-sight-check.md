---
title: "Line of Sight Check"
---

## Description
Used in [Players Within Radius](/values/players-within-radius/). Specifies whether and how a player must pass a line-of-sight check to be included in the resulting array.

## Options
- **Off**
  - Line of sight is never blocked, allowing results through walls.
- **Surfaces**
  - Line of sight is blocked by ceilings, walls, floors, platforms, and any fixed object that blocks projectiles.
- **Surfaces And All Barriers**
  - Line of sight is blocked by ceilings, walls, floors, platforms, any fixed object that blocks projectiles, and all barriers.
- **Surfaces And Enemy Barriers**
  - Line of sight is blocked by ceilings, walls, floors, platforms, any fixed object that blocks projectiles, and barriers created by the enemy team.
