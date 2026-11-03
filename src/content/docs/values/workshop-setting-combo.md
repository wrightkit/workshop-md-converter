---
title: "Workshop Setting Combo"
---

## Description

<big>Provides the value (a choice of Custom Strings) of a new option setting that will appear in the Workshop Settings card as a combo box. This value returns the index of the selected choice.</big>

## Snippet

```
Workshop Setting Combo(Custom String(""), Custom String(""), 0, Array, 0);
```

## Properties

**Returns**: _<span style="color: #c678dd">Object</span>_
**Parameters**: ==_Category_==, ==_Name_==, ==_Default_==, ==_Options_==, ==_Sort Order_==

> ==**Category**==
> _Type: **Object**, Default: **[Custom String](/values/custom-string/)**_
> The name of the category in which this setting will be found.

> ==**Name**==
> _Type: **Object**, Default: **[Custom String](/values/custom-string/)**_
> The name of this setting.

> ==**Default**==
> _Type: **Integer**, Default: **0**_
> The default value for this setting.

> ==**Options**==
> _Type: **Array**, Default: **[Array](/values/array/)**_
> The options for this setting.

> ==**Sort Order**==
> _Type: **Integer**, Default: **0**_
> The sort order of the setting relative to other settings in the same category. Settings with a higher sort order will come after settings with a lower sort order.
