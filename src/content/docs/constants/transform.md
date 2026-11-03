---
title: "Transform"
---

## Description
Used in [Local Vector Of](/values/local-vector-of/) and [World Vector Of](/values/world-vector-of/). Specifies whether the vector should receive a rotation and a translation (usually applied to positions) or only a rotation (usually applied to directions and velocities).

## Options
- **Rotation**
  - The resulting vector will be rotated to the new frame of reference. Use this option when the provided vector is a direction or velocity.
- **Rotation And Translation**
  - The resulting vector will be rotated and translated to the new frame of reference. Use this option when the provided vector is a position.
