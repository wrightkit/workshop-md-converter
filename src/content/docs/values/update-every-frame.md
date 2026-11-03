---
title: "Update Every Frame"
---

## Description

Results in the value that is provided to the Input Value parameter and increases the update frequency of the value to once per frame. Useful for smoothing the appearance of certain Values - such as Position Of - that normally only update every few frames. Applies to Conditions as well as Action Parameters that reevaluate. May increase server load and/or lower framerate.

Update Every Frame increases the rate at which certain values will update. For example, “Position Of(…)” only updates 12.5 times per second, but “Update Every Frame(Position Of(…))” will evaluate 62.5 times per second for conditions and other logical checks and as fast as your framerate for visual output, such as effects and camera. This value can be used to create highly sensitive positional triggers and smooth movement for effects and camera work. Depending on your usage, this value could have a significant impact on server load, framerate, or both, so use it only when needed. That said, executing a single condition or action that contains an Update Every Frame is still much more performant than repeatedly executing an action in a tight loop to try and achieve the same result.

## Snippet

```
Update Every Frame(Position Of);
```

## Properties

**Returns**: _<span style="color: #c678dd">Value</span>_
**Parameters**: ==_Input Value_==

> ==**Input Value**==
> _Type: **Void**, Default: **[Position Of](/values/position-of/)**_
> This value's update rate will be increased from once every few frame to every frame.
