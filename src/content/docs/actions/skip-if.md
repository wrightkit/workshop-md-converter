---
title: "Skip If"
---

## Description

<big>Skips execution of a certain number of actions in the action list if this action's condition evaluates to true. If it does not, execution continues with the next action.</big>

## Snippet

```
Skip If(True, 0);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Condition_==, ==_Number OF Actions_==

> ==**Condition**==
> _Type: **Boolean**, Default: **[Compare](/values/compare/)**_
> Specifies whether the skip occurs.

> ==**Number OF Actions**==
> _Type: **Integer**, Default: **[Number](/values/number/)**_
> The number of actions to skip, not including this action.

## Example usages

```
		Skip If(Global.A == True, 99);
		Set Status(All Living Players(All Teams), Null, Burning, 9999);
```

Notice that in Skip if, it can compare  an operation and if the compare result is true, then it shall skip the number of steps. in this case 99. (99 being the max of skip)


<details>
  <summary>Example use case 1</summary>
  <pre><code>
	rule("Rule 1")
{
	event
	{
		Ongoing - Each Player;
		All;
		All;
	}

	conditions
	{
		Distance Between(Event Player, Vector(0, 0, 0)) <= 2;
	}

	actions
	{
		Skip If(Global.A == 5, 2);
		Global.A = 5;
		Set Max Health(Event Player, 500);
	}
}
  </code>
</pre>
This code sets it so that the first player to get to the position of the vector, they can get 500% health. then anyone after will then after will only "skip if" the action and not get anything.
</details>


## Trivia
* This action is obsolete and is for backwards compatibilty only. Instead use:
   * [If](/actions/if/)
   * [Else If](/actions/else-if/)
   * [Else](/actions/else/)
	* [End](/actions/end/)

* Can only skip a maximum of 99 actions.

## Related articles
* [If](/actions/if/)
* [Else If](/actions/else-if/)
* [Else](/actions/else/)
* [End](/actions/end/)
* [Skip](/actions/skip/)
