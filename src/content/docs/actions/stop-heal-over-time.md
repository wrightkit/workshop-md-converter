---
title: "Stop Heal Over Time"
---

## Description

Stops an instance of heal over time started by the Start Heal Over Time action.

## Snippet

```
Stop Heal Over Time(Player.variableName);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_HEAL Over Time ID_==

> ==**HEAL Over Time ID**==
> _Type: **HotId**, Default: **[Player Variable](/values/player-variable/)**_
> Specifies which heal over time instance to stop. This id may be last heal over time id or a variable into which last heal over time id was earlier stored.
