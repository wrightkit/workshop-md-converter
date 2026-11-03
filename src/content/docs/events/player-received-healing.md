---
title: "Player Received Healing"
---

This event type triggers for a player when they receive healing from another player or themself and the `Conditions` evaluate to `True`.

#### Arguments

*  Team - The team(s) checked by the event.
*  Player - The player(s) checked by the event based on slot number or hero.

#### Contextual Values

*  Event Player - The player that triggered the event.
*  Event Healing - The amount of healing received by `Event Player`.
*  Healer - The player restoring health to the healee. Will have the same value as `Healee` when self-healing.
*  Healee - The player receiving health. In this context, it has the same value as `Event Player`.
*  Event Was Health Pack - Wether the healing event was triggered by a health pack.
*  Event Ability - The ability used by the `Healer`.
*  Event Direction - The incoming direction from the source of healing to the `Healee`.
