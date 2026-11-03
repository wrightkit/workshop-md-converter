---
title: "OSTW Pathmaps"
---

Here are the OSTW pathmaps. There are some for specific maps, or for specific gamemodes I have personally made.

OSTW is made by ItsDetin in which you can use the Pathfinding module to pathfind a bot or person to a specific location using a preset pathmap. Since pathmaps are so frustrating to create, I will list some here!

You can import a pathmap into your [Visual Studio Code](https://code.visualstudio.com/) in which you will be able to use specific commands to make a player move to the specified location.

```
globalvar Pathmap map = new Pathmap("path-to-file.pathmap");
```

### Other Pathfinding Options
==**BAKEMAPS**==
==Variables:==
```
globalvar Bakemap bake;
globalvar define i = 0;
```
==Baking Rule:==
*map.Bake or map.BakeCompressed, compressed is much faster*
```
rule:"bake"
{
    bake = map.BakeCompressed('path-to-file.pathmap', onLoopStart: () =>
    {
        i++;
        if (!(i % 5))
            MinWait();
    });
}
```
==Pathfinding Action:==
```
map.Pathfind(Player, Destination)
```
**OR**
*for baking ONLY*
```
bake.Pathfind(Player, Destination)
```
==For Smoother Pathfinding Outcomes Use This Rule:==
```
rule: 'Pathfinder: skip if visible'
Event.OngoingPlayer
if (Pathmap.IsPathfinding(EventPlayer()))
if (Pathmap.CurrentNode(EventPlayer()) != -1)
if (Pathmap.CurrentPosition(EventPlayer()).Y - Pathmap.NextPosition(EventPlayer()).Y~Abs() < 1)
if (IsInLineOfSight(
    StartPos: PositionOf() + Up() * .25,
    EndPos: Pathmap.NextPosition(EventPlayer()) + Up() * .25
))
{
    Wait(0.1);
    Pathmap.SkipNode(EventPlayer());
    Wait(0.1);
    LoopIfConditionIsTrue();
}
```


OSTW: _https://github.com/ItsDeltin/Overwatch-Script-To-Workshop_
Pathfinding Module: _https://github.com/ItsDeltin/Overwatch-Script-To-Workshop/wiki/Pathfinding_

# Pathmaps
## Malvento
[malvento pathmap.pathmap](https://drive.google.com/file/d/12-h1vDIHwn6t1rldXStCQXSXyRWJaDsz/view?usp=sharing)

## Junkenstein's Revenge
_(Made Specifically for Junkenstein's Revenge)_
[Junkenstein's Revenge.pathmap](https://drive.google.com/file/d/1o7fCF1Ir4K2ffH2HM-3DBtnpYPuEiq_o/view?usp=sharing)

## Storm Rising
_(Made Specifically for Storm Rising)_
[Storm Rising.pathmap](https://drive.google.com/file/d/1vjLukB1rnK6zAPYdqS9CPA7kupltcQvx/view?usp=sharing)
## Uprising
_(Made Specifically for Uprising)_
[Uprising.pathmap](https://drive.google.com/file/d/1dsiT5T6j0rcliwpjRIcb0BESVa9w7Oec/view?usp=sharing)

## Chateau Guillard
[Chateau Guillard.pathmap](https://drive.google.com/file/d/1-NlRX9rjtE52N9R-4I5bGbh2rcYdjELi/view?usp=sharing)
## Eichenwalde
[eichenwalde.pathmap](https://drive.google.com/file/d/1YTQNa9VFz3oHjByO8swo7MTr3Ezi758Q/view?usp=sharing)
## Retribution
_(Made Specifically for Retribution)_
[rialtopathmap.pathmap](https://drive.google.com/file/d/1YczR8AP138WJkzu0_iu67psagBHGGGzG/view?usp=sharing)
