---
title: "Start Damage Modification"
---

## Description

Starts modifying how much damage one or more receivers will receive from one or more damagers. A reference to this damage modification can be obtained from the Last Damage Modification ID value. This action will fail if too many damage modifications have been started.

### Notes
* A maximum of 64 damage modifications can be active at once.
* Unlike [Set Damage Dealt](/actions/set-damage-dealt/), Damage Modifications only affect damage to players (and not player owned objects like barriers and turrets).

## Snippet

```
Start Damage Modification(Event Player, All Players(All Teams), 0, Receivers, Damagers, And Damage Percent);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Receivers_==, ==_Damagers_==, ==_Damage Percent_==, ==_Reevaluation_==

> ==**Receivers**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player or players whose incoming damage will be modified (when attacked by the damagers).

> ==**Damagers**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[All Players](/values/all-players/)**_
> The player or players whose outgoing damage will be modified (when attacking the receivers).

> ==**Damage Percent**==
> _Type: **Float**, Default: **[Number](/values/number/)**_
> The percentage of damage that will apply to receivers when attacked by damagers.

> ==**Reevaluation**==
> _Type: **DamageReeval**, Default: **Receivers, Damagers, And Damage Percent**_
> Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.
