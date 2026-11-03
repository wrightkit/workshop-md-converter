---
title: "Custom String"
---

## Description

Custom text with optional inserted values. In UI/code, the field is limited to 128 chars, ie. only 128 chars maximum can be put in a `Custom String` value. However, during the playtime of a mode, the string limit is 511 bytes, ie. 511 bytes' worth of chars can fit into a string. So strings over 128 chars can be extended by splitting them to multiple strings and concatenating them together like so:

Before:
`Custom String("<125 chars><125 chars>...")`

After:
`Custom String("<125 chars>{0}", Custom String("<125 chars>{0}", Custom String(...)))`

Blocks of 125 chars are used in order to fit the '{0}'

## Snippet

```
Custom String("Hello", Null, Null, Null);
```

## Properties

**Returns**: _<span style="color: #c678dd">String</span>_
**Parameters**: ==_String_==, ==_{0}_==, ==_{1}_==, ==_{2}_==

> ==**String**==
> _Type: **String**, Default: **"Hello"**_
>

> ==**{0}**==
> _Type: **Object**, Default: **[Null](/values/null/)**_
> The value that will be converted to text and used to replace {0}.

> ==**{1}**==
> _Type: **Object**, Default: **[Null](/values/null/)**_
> The value that will be converted to text and used to replace {1}.

> ==**{2}**==
> _Type: **Object**, Default: **[Null](/values/null/)**_
> The value that will be converted to text and used to replace {2}.
