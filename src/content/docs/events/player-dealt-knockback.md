---
title: "Player Dealt Knockback"
---

This event type triggers for a player when they deal knockback to another player or themself and the `Conditions` evaluate to `True`.

#### Arguments

*  Team - The team(s) checked by the event.
*  Player - The player(s) checked by the event based on slot number or hero.

#### Contextual Values

*  Event Player - The player that triggered the event.
*  Attacker - The player dealing knockback. In this context, it has the same value as `Event Player`.
*  Victim - The player receiving knockback. Will have the same value as `Attacker` when dealing knockback to themself.
*  Event Ability - The ability used by the `Attacker`.
*  Event Direction - The incoming direction from the source of knockback to the `Victim`.
