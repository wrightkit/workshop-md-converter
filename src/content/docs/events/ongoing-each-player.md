---
title: "Ongoing - Each Player"
---

This event type continually checks for each player if its `Conditions` have **become** `True`, if so the actions will be executed for each player that satisfies the `Conditions`. An event of this type with no `Conditions` will trigger immediately on any player loading into the game at any time.

This is an `Ongoing` event. It will check if its `Conditions` have **become** `True` each server tick for the associated player. This means that if the `Conditions` were `True` the previous tick and are still `True` in the current tick, nothing will happen. At least one `Condition` needs to go back to `False` for it to become `True` again.

#### Arguments

*  Team - The team(s) checked by the event.
*  Player - The player(s) checked by the event based on slot number or hero.


#### Contextual Value

*  Event Player - The player that triggered the event.
