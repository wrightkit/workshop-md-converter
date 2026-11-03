---
title: "Player Dealt Damage"
---

This event type triggers for a player when they deal damage to another player or themself and the `Conditions` evaluate to `True`.

#### Arguments

*  Team - The team(s) checked by the event.
*  Player - The player(s) checked by the event based on slot number or hero.

#### Contextual Values

*  Event Player - The player that triggered the event. In this case, the damage dealer.
*  Event Damage - The amount of damage dealt by `Event Player`.
*  Attacker - The player dealing damage. In this context, it has the same value as `Event Player`.
*  Victim - The player receiving damage. Will have the same value as `Attacker` when dealing damage to themself.
*  Event Was Critical Hit - Whether the inflicted damage was a headshot.
*  Event Ability - The ability used by the `Attacker`.
*  Event Direction  - The incoming direction from the source of damage to the `Victim`.
