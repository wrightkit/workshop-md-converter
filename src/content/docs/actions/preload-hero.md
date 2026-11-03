---
title: "Preload Hero"
---

## Description

Preemptively loads the specified hero or heroes into memory using the skins of the specified player or players, available memory permitting. Useful whenever rapid hero changing is possible and the next hero is known.
This action can be particulary useful for those on older hardware or those on console. The slower your Harddrive is the more impact this action will have when used properly. On a modern SSD this will have very little effect.

Only 12 Heroes + skins can be loaded at a time. If there are 12 players, each playing a different hero, or each playing the same hero but all with different skins, `Preload Hero` will not do anything. But if each player is playing the same hero all with the same skin you have 11 slots left over for preload.

When executing this action in a loop the latest execution will overwrite previous executions.
```
Preload Hero(Event Player, Random Value In Array(All Heroes));
Wait(5.000, Ignore Condition);
Loop;
```
Regardless of how long you wait, in this example only 1 Hero will be preloaded.

## Snippet

```
Preload Hero(Event Player, Hero(Tracer));
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Hero_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player or players who will begin preloading a hero or heroes. Only one preload hero action will be active at a time for a given player.

> ==**Hero**==
> _Type: **Hero** | **Array** (**Hero**), Default: **[Hero](/values/hero/)**_
> The hero or heroes to begin preloading for the specified player or players. When multiple heroes are specified in an array, the heroes towards the beginning of the array are prioritized.
