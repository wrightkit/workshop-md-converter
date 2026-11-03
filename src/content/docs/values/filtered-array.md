---
title: "Filtered Array"
---

## Description

A `Filtered Array` is a value you can use in your script to get a filtered version of the specified array. It works similarly to the `Sorted Array` in the sense that it iterates over the array you specify, and returns a modified version of it, without modifying the original array. It filters the array by going through each object, and testing it against a `Condition` which you can specify. If the condition evaluates to **True**, that element will be added to the new array, otherwise it will be left out.

One of the more common use cases for this can be to for example get all the players who are alive. You can do this by using the `Filtered Array` value and passing in `All Players` as the array to be filtered. For the `Condition` you would use the `Is Alive` value and pass in the `Current Array Element`.

Similar to the `Sorted Array`, `Current Array Element` represents the element in the array currently being evaluated in your condition.

[![](https://i.imgur.com/7hMOwiw.png)](https://i.imgur.com/7hMOwiw.png) _Getting a filtered array of all players who are alive._

You can use filtered arrays for other things as well though. Such as only displaying an **Effect** if a certain condition is true. Because the `Condition` technically doesn't have to be related to the `Current Array Element`. This is actually a really simple trick and if it's an effect which should exist throughout the entirety of the game, you don't have to bother with keeping track of it and properly destroying and creating new versions of it every time you want it hidden or visible.

All you need to do is set the `Visible To` on your effect to a `Filtered Array`, passing in `All Players` as the array. Finally set the `Condition` to whenever you want it to be visible.

[![](https://i.imgur.com/1VWH2jJ.png)](https://i.imgur.com/1VWH2jJ.png) _Creating an effect positioned at the current player, which only shows up to all players if there is less than 30 seconds left on the match time._


      A copy of the specified array with any values that do not match the specified condition removed.

## Snippet

```
Filtered Array(All Players(All Teams), True);
```

## Properties

**Returns**: _<span style="color: #c678dd">Array</span>_
**Parameters**: ==_Array_==, ==_Condition_==

> ==**Array**==
> _Type: **Array**, Default: **[All Players](/values/all-players/)**_
> The array whose copy will be filtered.

> ==**Condition**==
> _Type: **Boolean**, Default: **[Compare](/values/compare/)**_
> The condition that is evaluated for each element of the copied array. If the condition is true, the element is kept in the copied array. Use the current array element value to reference the element of the array currently being considered.
