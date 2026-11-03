---
title: "Destroy Effect"
---

## Description

Destroys an effect entity that was created by Create Effect.

## Snippet

```
Destroy Effect(Last Created Entity Entity);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Entity_==

> ==**Entity**==
> _Type: **Entity ID**, Default: **Last Created Entity Entity**_
> Specifies which effect entity to destroy. This entity may be last created entity or a variable into which last created entity was earlier stored.

### Notes
- An array of entities may be provided in the place of a single entity ID, in which case all effect entities contained within the array will be destroyed.
	- This behavior may be verified with the share code NV3FE6
