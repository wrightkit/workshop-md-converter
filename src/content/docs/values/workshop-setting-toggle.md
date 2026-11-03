---
title: "Workshop Setting Toggle"
description: "Category, Name, Default, Sort order"
---

## Description

<big>Provides the value (true or false) of a new toggle setting that will appear in the workshop settings card as a checkbox.</big>

## Snippet

```
Workshop Setting Toggle(Custom String(""), Custom String(""), false, 0);
```

## Properties

**Returns**: _<span style="color: #c678dd">Boolean</span>_
**Parameters**: ==_Category_==, ==_Name_==, ==_Default_==, ==_Sort Order_==

> ==**Category**==
> _Type: **String**, Default: **[Custom String](/values/custom-string/)**_
> The name of the category in which this setting will be found.

> ==**Name**==
> _Type: **String**, Default: **[Custom String](/values/custom-string/)**_
> The name of this setting.

> ==**Default**==
> _Type: **Boolean**, Default: **false**_
> The default value for this setting.

> ==**Sort Order**==
> _Type: **Integer**, Default: **0**_
> The sort order of the setting relative to other settings in the same category. Settings with a higher sort order will come after settings with a lower sort order.
