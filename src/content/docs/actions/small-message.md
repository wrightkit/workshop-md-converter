---
title: "Small Message"
---

## Description

<big>Displays a small message beneath the reticle that is visible to specific players.</big>

## Snippet

```
Small Message(All Players(All Teams), Custom String("Hello World"));
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Visible To_==, ==_Header_==

> ==**Visible To**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[All Players](/values/all-players/)**_
> One or more players who will see the message.

> ==**Header**==
> _Type: **Object**, Default: **[String](/values/string/)**_
> The message to be displayed.

## Examples
```
Small Message(Event Player, Custom String("{0} I am hero Tracer", Hero Icon String(Hero(Tracer))));
```
In small messages, you can use "{}" curly brackets to insert a variables, icons,  or strings.
<details>
  <summary>Example 1</summary>
  <pre><code>
rule("welcome to the server!")
{
	event
	{
		Ongoing - Each Player;
		All;
		All;
	}
	conditions
	{
		Has Spawned(Event Player) == True;
	}
	actions
	{
		Small Message(Event Player, Custom String("{0} I have joined the server!", Hero Icon String(Hero Of(Event Player))));
		Wait(4, Ignore Condition);
		Small Message(Event Player, Custom String("{0} I have {1} points and {2} hit points", Hero Icon String(Hero Of(Event Player)),
			Event Player.A, Health(Event Player)));
	}
}
  </code>
</pre>
This sends 2 messages, with 4 seconds of a wait, and uses several different syntax.
</details>
<details>
  <summary>Example 2</summary>
  <pre><code>
rule("Setup")
{
	event
	{
		Ongoing - Global;
	}
	actions
	{
		Global.A = False;
		Global.B = Empty Array;
		Global.C = Array(Vector(0, 0, 0), Vector(0, 0, 0), Vector(0, 0, 0));
		Small Message(Host Player, Custom String("Setup initialized"));
	}
}
  </code></pre>
	This example, is to show that you can use small messages to troubleshoot your code and see if something is executing or not. good for debugging.
</details>
<details>
  <summary>Example 3</summary>
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
		Distance Between(Event Player, Vector(0, 0, 0)) < 2;
	}
	actions
	{
		Small Message(Event Player, Custom String("You Found the small message! "));
	}
}
  </code></pre>
	In this example if the user gets close to a specified <a href="/values/vector/">vector</a> you get a small message.
</details>

## Trivia

* Line break `"\n"` will not display the new line, but will create it.
* Only displayable for 4 seconds. Not modifiable.
* Spamming can result in removing viewing players from lobby.

## Related articles
* Big message
* Custom String
* Create HUD Text
* Create In-World Text
* Icon
