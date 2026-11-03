---
title: "Wait Behaviour"
---

## Description
Used in [Wait](/actions/wait/). Specifies if and how the wait can be interrupted. If the condition list is ignored, the wait will not be interrupted. Otherwise, the condition list will determine if and when the action list will abort or restart.

## Options
- **Abort When False**
  - The execution of the action list is aborted if any condition on this rule becomes false.
- **Ignore Condition**
  - The execution of the action list is never interrupted.
- **Restart When True**
  - The execution of the action list restarts from the first action if the condition list transitions from false to true or if the rule's event occurs again with true conditions.
