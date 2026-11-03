---
title: "Start Assist"
---

## Description

Starts granting assist credit toward to one or more Assisters when one or more Targets are eliminated. A reference to this damage modification can be obtained from the Last Assist ID value. This Action will fail if too many assists have been started.

## Snippet

```
Start Assist(Event Player, All Players(All Teams), Assisters and Targets);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Assisters_==, ==_Targets_==, ==_Reevaluation_==

> ==**Assisters**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The target Player or Players who will receive assist credit.

> ==**Targets**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[All Players](/values/all-players/)**_
> The Player or Players whose eliminations will grant assist credit to the Assisters. If the Target or Targets are allied to the Assister, this will be a defensive assist. Otherwise, this will be an offensive assist.

> ==**Reevaluation**==
> _Type: **[Chase Reevaluation](/wiki/articles/chase reevaluation)**, Default: **Assisters and Targets**_
> Specifies which of this Action's Inputs will be continously reevaluated. This Action will keep asking for and using new Values from reevaluated Inputs.
