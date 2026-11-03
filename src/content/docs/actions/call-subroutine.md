---
title: "Call Subroutine"
---

## Description

Pauses execution of the current rule and begins executing a subroutine rule (which is a rule with a [Subroutine](/events/subroutine/) event type). When the subroutine rule finishes, the original rule resumes execution. The subroutine will have access to the same contextual values (such as [Event Player](/values/event-player/)) as the original rule.

## Snippet

```
Call Subroutine(SubroutineName);
```

## Basic explanation
Call Subroutine: Go and run a separate, pre-defined set of instructions (a 'subroutine'), then come back here and continue.

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Subroutine_==

> ==**Subroutine**==
> _Type: **Subroutine**, Default: **Sub0**_
> Specifies which subroutine to call. If a rule with a subroutine event type specifies the same subroutine, then it will execute. Otherwise, this action is ignored.

## Examples
```
		Subroutine;
		givehealth;
		Set Max Health(Event Player, 300);
```
This sets a subroutine to give player a max health with command set max health and subroutine named "givehealth"


<details>
  <summary>Example 1</summary>
  <pre><code class="microlight">
subroutines
{
	0: modifyVariables
}

rule("pressing crouch")
{
	event
	{
		Ongoing - Each Player;
		All;
		All;
	}

	conditions
	{
		Is Button Held(Event Player, Button(Crouch)) == True;
	}

	actions
	{
		Call Subroutine(modifyVariables);
	}
}

rule("pressing Jump")
{
	event
	{
		Ongoing - Each Player;
		All;
		All;
	}

	conditions
	{
		Is Button Held(Event Player, Button(Jump)) == True;
	}

	actions
	{
		Call Subroutine(modifyVariables);
	}
}

rule("A very long subroutine")
{
	event
	{
		Subroutine;
		modifyVariables;
	}

	actions
	{
		Global.A += 1;
		Global.B += 1;
		Global.C[0] += 1;
		Event Player.A += 1;
		Event Player.B[0] += 1;
	}
}
  </code></pre>
In these rules, when the user presses crouch, or jump, they call the subroutine. This demonstrates the power of subroutines to simplify your code, allowing you to "duplicate" or rather, re-use, the same code in different places. saving on workshop "elements" and being more concise with your workflow.
</details>
<details>
  <summary>Example 2</summary>
  <pre><code class="microlight">
subroutines
{
	0: NestedSubroutine
	1: IncramentVariables
}

rule("call subroutine on jump")
{
	event
	{
		Ongoing - Each Player;
		All;
		All;
	}

	conditions
	{
		Is Button Held(Event Player, Button(Jump)) == True;
	}

	actions
	{
		Call Subroutine(NestedSubroutine);
	}
}

rule("call subroutine on crouch")
{
	event
	{
		Ongoing - Each Player;
		All;
		All;
	}

	conditions
	{
		Is Button Held(Event Player, Button(Crouch)) == True;
	}

	actions
	{
		Call Subroutine(NestedSubroutine);
	}
}

rule("Set facing - subroutine")
{
	event
	{
		Subroutine;
		NestedSubroutine;
	}

	actions
	{
		Set Facing(Event Player, Vector(0, 0, 0), To World);
		Wait(0.250, Ignore Condition);
		Call Subroutine(IncramentVariables);
		Wait(0.250, Ignore Condition);
		Call Subroutine(IncramentVariables);
		Wait(0.250, Ignore Condition);
		Call Subroutine(IncramentVariables);
	}
}

rule("change variables by 1 - Subroutine")
{
	event
	{
		Subroutine;
		IncramentVariables;
	}

	actions
	{
		Global.A += 1;
		Global.B += 1;
		Global.C[0] += 1;
		Event Player.A += 1;
		Event Player.B[0] += 1;
	}
}
  </code></pre>
This is a more complex use case for subroutines. Which is called a "nested Subroutine". These nested subroutines allow you to make a subroutine use code repeatedly within itself.
</details>

## Trivia

* a "subroutine" is most commonly referred to as a function or a procedure in standard programming.

## Related articles
* If
* else if
* if-then-else
