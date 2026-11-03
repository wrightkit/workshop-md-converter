---
title: "Ongoing - Global"
---

This event type continually checks if its `Conditions` have **become** `True`, if so the actions will be executed. An event of this type with no `Conditions` will trigger immediately upon server start.

This is an `Ongoing` event. It will check if its `Conditions` have **become** `True` each server tick. This means that if the `Conditions` were `True` the previous tick and are still `True` in the current tick, nothing will happen. At least one `Condition` needs to go back to `False` for it to become `True` again.
