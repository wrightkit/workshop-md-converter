---
title: "Stop Healing Modification"
---

## Description

Stops a healing modification that was started by the Start Healing Modification action.

## Snippet

```
Stop Healing Modification(Last Healing Modification ID);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Healing Modification ID_==

> ==**Healing Modification ID**==
> _Type: **HealingModificationId**, Default: **[Last Healing Modification ID](/values/last-healing-modification-id/)**_
> Specifies which healing modification instance to stop. This id may be last healing modification id or a variable into which last healing modification id was earlier stored.
