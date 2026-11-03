---
title: "Workshop Setting Hero"
description: "Category, Name, Default, Sort order"
---

## Description

<big>Provides the value of a new hero setting that will appear in the Workshop Settings card as a combo box.</big>

## Snippet

```
Workshop Setting Hero(Custom String(""), Custom String(""), Ana, 0);
```

## Properties

**Returns**: _<span style="color: #c678dd">Hero</span>_
**Parameters**: ==_Category_==, ==_Name_==, ==_Default_==, ==_Sort Order_==

> ==**Category**==
> _Type: **Object**, Default: **[Custom String](/values/custom-string/)**_
> The name of the category in which this setting will be found.

> ==**Name**==
> _Type: **Object**, Default: **[Custom String](/values/custom-string/)**_
> The name of this setting.

> ==**Default**==
> _Type: **Hero**, Default: **Ana**_
> The default value for this setting.

> ==**Sort Order**==
> _Type: **Integer**, Default: **0**_
> The sort order of the setting relative to other settings in the same category. Settings with a higher sort order will come after settings with a lower sort order.
