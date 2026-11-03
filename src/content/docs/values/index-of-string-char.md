---
title: "Index Of String Char"
---

## Description

<big>The index of a character within a String or -1 if no such character can be found. Despite the name only mentioning characters, this value also works with longer strings, looking for the substring and returning the index if found. For instance, `Index Of String Char("abcdefg", "cd")` returns 2, while `Index Of String Char("abcdefg", "ce")` returns -1, as "ce" is not a substring of "abcdefg".</big>

## Snippet

```
Index Of String Char(Global.variableName, Global.variableName);
```

## Properties

**Returns**: _<span style="color: #c678dd">Index</span>_
**Parameters**: ==_String_==, ==_Character_==

> ==**String**==
> _Type: **String**, Default: **[Global Variable](/values/global-variable/)**_
> The String Value from which to search for the character.

> ==**Character**==
> _Type: **String**, Default: **[Global Variable](/values/global-variable/)**_
> The character for which to search
