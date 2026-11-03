---
title: "Big Message"
---

## Description

<big>Displays a large message above the reticle that is visible to specific players.</big>

## Snippet

```
Big Message(All Players(All Teams), Custom String(""));
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
	Big Message(Event Player, Custom String("{0} I am hero Tracer!", Hero Icon String(Hero(Tracer))));
```
In Big messages, you can use "{}" curly brackets to insert variables, icons,  or strings.
<details>
  <summary>Example 1</summary>
  <pre><code>
rule("Downed player message")
{
	event
	{
		Ongoing - Each Player;
		All;
		All;
	}

	conditions
	{
		Is Dead(Event Player) == True;
	}

	actions
	{
		Big Message(All Players(All Teams), Custom String("{0} Is downed!", Event Player));
	}
}
  </code>
</pre>
This is for if a player dies, it tracks the <a href="/values/event-player/">event player</a> and uses their battle tag as part of the big message. but only activating when "<a href="/values/is-dead/">Is Dead</a>" is true.
</details>
<details>
  <summary>Example 2</summary>
  <pre><code>
rule("Welcome to the server!")
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
		Big Message(Event Player, Custom String("{0} Welcome to the server!", Hero Icon String(Hero Of(Event Player))));
		Wait(4, Ignore Condition);
		Big Message(Event Player, Custom String("You have {0} Ammo and {1} Health", Ammo(Event Player, 0), Health(Event Player)));
	}
}
  </code></pre>
This example is to show that you can use some basic syntax in your string, as well as introduce the end user the moment they spawn. Things to remember: <a href="/values/has-spawned/">Has Spawned</a>,  <a href="/values/hero-icon-string/">Hero Icon String</a>,  <a href="/values/ammo/">Ammo</a>,  <a href="/constants/health/">Health</a>
</details>
<details>
  <summary>Example 3</summary>
  <pre><code>
	rule("Rule 1")
{
	event
	{
		Ongoing - Global;
	}

	actions
	{
		If(Global.A == Global.B);
			Big Message(Host Player, Custom String("Message Active! {0}", Server Load));
	}
}
  </code></pre>
In this example, this is to show that the user can use big message for debugging, though less common as <a href="/actions/small-message/">Small message</a> for this purpose. useful things to remember: <a href="/values/global-variable/">Global Variable</a>, <a href="/values/server-load/">Server Load</a>
</details>

## Trivia

* Only displayable for 4 seconds. Not modifiable.

## Related articles
* Small message
* Custom String
* Create HUD Text
* Create In-World Text
* Icon
