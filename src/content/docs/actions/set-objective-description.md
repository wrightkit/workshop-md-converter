---
title: "Set Objective Description"
description: "Visible to, Header, Reevaluation"
---

## Description

<big>Sets the text at the top center of the screen that normally describes the objective to a message visible to specific players.</big>

## Snippet

```
Set Objective Description(All Players(All Teams), Custom String(""), Visible To And String);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Visible To_==, ==_Header_==, ==_Reevaluation_==

> ==**Visible To**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[All Players](/values/all-players/)**_
> One or more players who will see the message.

> ==**Header**==
> _Type: **Object**, Default: **[String](/values/string/)**_
> The message to be displayed.

> ==**Reevaluation**==
> _Type: **[HUD Reevaluation](/constants/hud-reevaluation/)**, Default: **Visible To And String**_
> Specifies which of this action's inputs will be continuously reevaluated. The message will keep asking for and using new values from reevaluated inputs.
