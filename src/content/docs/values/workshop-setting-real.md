---
title: "Workshop Setting Real"
description: "Category, Name, Default, Min, Max, Sort order"
---

## Description

<big>Provides the value of a new real number setting that will appear in the workshop settings card as a slider.</big>

## Snippet

```
Workshop Setting Real(Custom String(""), Custom String(""), 0, 0, 100, 0);
```

## Properties

**Returns**: _<span style="color: #c678dd">Float</span>_
**Parameters**: ==_Category_==, ==_Name_==, ==_Default_==, ==_Min_==, ==_Max_==, ==_Sort Order_==

> ==**Category**==
> _Type: **String**, Default: **[Custom String](/values/custom-string/)**_
> The name of the category in which this setting will be found.

> ==**Name**==
> _Type: **String**, Default: **[Custom String](/values/custom-string/)**_
> The name of this setting.

> ==**Default**==
> _Type: **Float**, Default: **0**_
> The default value for this setting.

> ==**Min**==
> _Type: **Float**, Default: **0**_
> The lowest allowed value for this setting.

> ==**Max**==
> _Type: **Float**, Default: **100**_
> The highest allowed value for this setting.

> ==**Sort Order**==
> _Type: **Integer**, Default: **0**_
> The sort order of the setting relative to other settings in the same category. Settings with a higher sort order will come after settings with a lower sort order.
