---
title: "If"
---

## Description

<big>Denotes the beginning of a series of actions that will only execute if the specified condition is true.</big>

## Snippet

```
If(True);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Condition_==

> ==**Condition**==
> _Type: **Boolean**, Default: **[Compare](/values/compare/)**_
> If this evaluates to true, execution continues with the next action. Otherwise, execution jumps to the next else if, else, or end action at the current level.

## Examples
```
	If(Has Spawned(Event Player) == True);
		Set Max Ammo(Event Player, 0, 15);
```
In this example, if the player has spawned, it will set their max ammo to 15.


<details>
  <summary>Example 1</summary>
  <pre><code class="microlight">
rule("when crouching, set hacked. if global.A = 1, change it.")
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
		If(Global.A == 1);
			Global.A = 0;
		End;
		Set Status(Event Player, Null, Hacked, 5);
	}
}
  </code></pre>
In this example, it uses a single if statement. if it activates or fails, it will then move on to the next thing by using the <a href="/actions/end/">End;</a> statement.
</details>
<details>
  <summary>Example 2</summary>
  <pre><code class="microlight">
rule("When jumping, set global B, depending on Player Variable A")
{
	event
	{
		Ongoing - Each Player;
		All;
		All;
	}

	conditions
	{
		Is Jumping(Event Player) == True;
	}

	actions
	{
		Set Status(Event Player, Null, Burning, 9999);
		If(Event Player.A == 0);
			Global.B = 1;
		Else If(Event Player.A == 1);
			Global.B = 2;
		Else;
			Global.B = 3;
	}
}
  </code></pre>
For this example, we demonstrate the power of "if" when combined with <a href="/actions/else-if/">Else If</a> and <a href="/actions/else/">Else</a>. This allows us to make a chain of options, if the first option doesnt go through check the next, but if none of them work, just run to the Else statement.
</details>
<details>
  <summary>Example 3</summary>
  <pre><code class="microlight">
rule("When moving, and if host, change variables, but if also communicating voicelines then change gravity.")
{
	event
	{
		Ongoing - Each Player;
		All;
		All;
	}

	conditions
	{
		Is Moving(Event Player) == True;
	}

	actions
	{
		Set Damage Dealt(Event Player, 200);
		If(Host Player == True);
			If(Is Communicating(Event Player, Voice Line Up) == True);
				Set Gravity(All Living Players(All Teams), 10);
			End;
			Global.A = 1;
			Global.B[0] = 3;
	}
}
  </code></pre>
This shows a nested "if" statement. meaning you can leave a "if" statement inside another one to create options inside itself. so in this example, when the player is moving, set their damage, then if they are host while not doing a voiceline (skip several lines) change variables around. but i they are "host player" and they are "communicating voiceline up" then set gravity.
</details>

## Related articles
* [Else If](/actions/else-if/)
* [Else](/actions/else/)
* [End](/actions/end/)
