---
title: "Disable Voice Chat"
---

## Description

<big>Disables Voice Chat for one or more Players until reenabled.</big>

## Snippet

```
Disable Voice Chat(Event Player, true, true, true);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Team Voice Chat_==, ==_Match Voice Chat_==, ==_Group Voice Chat_==

> ==**Player**==
> _Type: **[Player](/constants/player/)**, Default: **[Event Player](/values/event-player/)**_
> The Player or Players who will have their Voice Chat disabled.

> ==**Team Voice Chat**==
> _Type: **Boolean**, Default: **true**_
> Whether or not Team Voice Chat will be disabled.

> ==**Match Voice Chat**==
> _Type: **Boolean**, Default: **true**_
> Whether or not Match Voice Chat will be disabled.

> ==**Group Voice Chat**==
> _Type: **Boolean**, Default: **true**_
> Whether or not Group Voice Chat will be disabled.
