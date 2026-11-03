---
title: "Frequently Asked Workshop Questions"
---

This article will cover some of the frequently asked workshop-related questions in our community. It will be updated with new topics as more help requests related to them arise.

### ==**Content**==
- [How to Create a Custom Cooldown](#custom-cd)
- [How to Detect a Hero Swap and Set Custom Stats](#hero-swap)
- [How to Spawn and Control Dummy Bots](#control-dummies)
- [How to Accurately Get the Player Closest to Reticle](#closest-to-reticle)

<a id="custom-cd"></a>
## How to Create a Custom Cooldown

### Replacing an Ability
If you want to **replace** an ability, there's a simple solution that just disables the ability input with `Disallow Button` and injects our own logic:

```
rule("Disallow Shift/L1/LB")
{
	event
	{
		Player Joined Match;
		All;
		All;
	}

	actions
	{
		Disallow Button(Event Player, Button(Ability 1));
	}
}

rule("Ability Replacer")
{
	event
	{
		Ongoing - Each Player;
		All;
		All;
	}

	conditions
	{
		Is Button Held(Event Player, Button(Ability 1)) == True;
	}

	actions
	{
		Abort If(Ability Cooldown(Event Player, Button(Ability 1)));
		// Execute ability here
		Set Ability Cooldown(Event Player, Button(Ability 1), 8);
	}
}
```

### Adding a New Ability
However, custom cooldowns are often required when you want to add a new ability. To set them up the proper way, we need to use a player variable. Let's name it `cd`.

There are many ways to go about this. We'll show the simplest, most optimized one even though optimization is not that impactful for such a small feature.

```
variables {
  player:
    0: cd
}

rule("New Ability")
{
	event
	{
		Ongoing - Each Player;
		All;
		All;
	}

	conditions
	{
		Is Button Held(Event Player, Button(Interact)) == True;
	}

	actions
	{
		// Execute ability here
		Event Player.cd = 8;
		While(Event Player.cd > 0);
			Wait(1, Ignore Condition);
			Modify Player Variable(Event Player, cd, Subtract, 1);
		End;
	}
}
```

An important remark on the example above is that in `Wait(1, Ignore Condition)`, the `Ignore Condition` part will automatically "lock" the rule while `cd` is greater than zero, thus removing the need to compare `cd` to any value before executing the ability.

If you wish to display the cooldown to the player, you can do so through a `Create HUD Text` action in an `Ongoing - Global` rule:

```
actions
{
	Create HUD Text({
		Visible To: All Players(All Teams),
		Header: Custom String({
				String: "CD: {0}",
				{0}: Player Variable({
					Player: Local Player,
					Variable: cd
				}),
				{1}: Null,
				{2}: Null
			}),
		Subheader: Null,
		Text: Null,
		Location: Left,
		Sort Order: 0,
		Header Color: Color(White),
		Subheader Color: Null,
		Text Color: Null,
		Reevaluation: Visible To And String,
		Spectators: Default Visibility
	});
}
```

Combining global rules with the `Local Player` value ensures that we don't create a HUD element for each player that joins the game, saving up in workshop resources.

-----

<a id="hero-swap"></a>
## How to Detect a Hero Swap and Set Custom Stats

The easiest way to do this is with a player variable. Let’s call it `currentHero`.

```
variables {
  player:
    0: currentHero
}

rule("Player Changed Hero")
{
	event
	{
		Ongoing - Each Player;
		All;
		All;
	}

	conditions
	{
		Event Player.currentHero != Hero Of(Event Player);
	}

	actions
	{
		Event Player.currentHero = Hero Of(Event Player);
	}
}
```
This rule will execute every time `currentHero` is not equal to the player's hero, resetting itself by setting `currentHero` to the player's current hero. Then, you can easily add any extra custom behavior below that action.

To set isolated stats for each hero without having to worry about reverting them later, we can add this sequence of actions:

```
actions
{
	Set Move Speed(Event Player, 100);
	Event Player.currentHero = Hero Of(Event Player);
	If(Hero Of(Event Player) == Hero(Lúcio));
		Set Move Speed(Event Player, 300);
	Else If(Hero Of(Event Player) == Hero(Roadhog));
		Set Move Speed(Event Player, 50);
	End;
}
```

This will:
1. Set the player move speed to normal;
2. Check if they are a specific hero, Lúcio or Roadhog in this case;
3. Set the player move speed to their respective values.

If the player is none of those heroes, move speed will remain at 100%.

-----

<a id="control-dummies"></a>
## How to Spawn and Control Dummy Bots

To create a dummy bot, we use the `Create Dummy Bot` action. The safest way to reliably control a dummy bot is to first store a reference to it in a variable using `Last Created Entity`. Here's an example:

```
variables {
  player:
    0: myDummy
}

rule("Create & Register Dummy Bot")
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
		Create Dummy Bot(Hero(Tracer), Team Of(Event Player), -1, Position Of(Event Player), Facing Direction Of(Event Player));
		Event Player.myDummy = Last Created Entity;
	}
}
```

We can now use `myDummy` in actions and values such as these below to make the bot do what we want.
* `Set Facing`
* `Start Facing`
* `Start Throttle In Direction`
* `Press Button`
* `Start Holding Button`

<a id="closest-to-reticle"></a>
## How to Accurately Get the Player Closest to Reticle

In most cases, the `Player Closest To Reticle` value is not reliable because it includes dead heroes. To fix this, we need to create our own custom value that only includes living heroes, and picks the one closest to our reticle, through the `Sorted Array` value:

```
First Of(Sorted Array({
	Array: All Living Players(Opposite Team Of(Team Of(Event Player))),
	Value Rank: Angle Between Vectors({
		Vector: Facing Direction Of(Event Player),
		Vector: Vector Towards({
			Start Pos: Event Player,
			End Pos: Current Array Element
		})
	})
}))
```

We can also go further and add a distance filter to it. The code below picks the closest living player to reticle within a radius of 25 meters:

```
First Of(Sorted Array({
	Array: Filtered Array({
		Array: Players Within Radius({
			Center: Event Player,
			Radius: 25,
			Team: Team Of(Event Player),
			Los Check: Surfaces And Enemy Barriers
		}),
		Condition: Is Alive(Current Array Element)
	}),
	Value Rank: Angle Between Vectors({
		Vector: Facing Direction Of(Event Player),
		Vector: Vector Towards({
			Start Pos: Event Player,
			End Pos: Current Array Element
		})
	})
}))
```
