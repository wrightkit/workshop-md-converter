---
title: "Start Healing Modification"
---

## Description

Starts modifying how much healing one or more receivers will receive from one or more healers. A reference to this healing modification can be obtained from the Last Healing Modification ID value. This action will fail if too many healing modifications have been started.

### Notes
A maximum of 64 healing modifications can be active at once.

## Snippet

```
Start Healing Modification(Event Player, All Players(All Teams), 0, Receivers, Healers, And Healing Percent);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Receivers_==, ==_Healers_==, ==_Healing Percent_==, ==_Reevaluation_==

> ==**Receivers**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player or players whose incoming healing will be modified (when healed by the healers).

> ==**Healers**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[All Players](/values/all-players/)**_
> The player or players whose outgoing healing will be modified (when healing the receivers).

> ==**Healing Percent**==
> _Type: **Float**, Default: **[Number](/values/number/)**_
> The percentage of healing that will apply to receivers when healed by healers.

> ==**Reevaluation**==
> _Type: **HealingReeval**, Default: **Receivers, Healers, And Healing Percent**_
> Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.
