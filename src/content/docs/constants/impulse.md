---
title: "Impulse"
---

## Description
Used in [Apply Impulse](/actions/apply-impulse/). Specifies whether existing velocity that is counter to Direction should first be cancelled out before applying the impulse.

## Options
- **Cancel Contrary Motion**
  - If the target is moving against the direction of the impulse, this relative velocity is negated before the impulse is applied. Horizontal velocity (XZ) and vertical velocity (Y) are processed separately. This is largely a legacy value and Cancel Contrary Motion XYZ would likely produce more expected behaviour.
- **Cancel Contrary Motion XYZ**
  - If the target is moving against the direction of the impulse, this relative velocity is negated before the impulse is applied. Horizontal and vertical velocity (XYZ) are processed together.
- **Incorporate Contrary Motion**
  - The impulse is added directly to the velocity of the target, so if the target is moving against the direction of the impulse, it might seem like the impulse has less of an effect.
