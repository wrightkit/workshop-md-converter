---
title: "Set Weapon"
---

## Description

Sets the weapon of one or more Players.

			Cannot set to a weapon disabled via the settings menu.

## Snippet

```
Set Weapon(Event Player, 0);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Weapon_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player or players whose weapon will be set.

> ==**Weapon**==
> _Type: **Integer**, Default: **0**_
> The number of the weapon to be equipped. 1 Is the first weapon, and 2 is the second. If the specified weapon does not exist, players will use the default weapon.
