---
title: "Create and destroy multiple effects"
---

For this tutorial we will set up a simple scenario; A player presses Interact and spawns a bunch of effects at their feet. After 3 seconds these effects need to disappear. For the sake of simplicity, let's keep it to 1 rule.

## Setting up the rule

We will create a rule set to the Ongoing - Each Player event so we can track if they press a button.
In this rule we add 1 condition that check if the player holds the Interact button.

```
  Is Button Held(Event Player, Interact) == True;
```

Next up we will need 1 variable, which we will use to store our effects in. We will be using a Player Variable for this. Name one of your variables something sensible so we can easily remember which one to use. In my case I will name it "Effects".

We will create 1 action in the rule we just created. We will set our variable to an empty array using Set Player Variable set to Empty Array.

```
	Event Player.Effects = Empty Array;
```

In essence an array is a list of values we define. We will use this array to store our effects so we can reference them again later. We set the variable to an Empty Array at first so we can properly add values to this list later on.

## Creating the effects

We start off by creating a simple effect using the Create Effect action. The effect can be whatever you want. For this demo we can leave everything at it's default settings.

```
  Create Effect(All Players(All Teams), Cloud, White, Event Player, 1, None);
```

Now that we have created the effect we want to store it in our array. For this we will use Append To Array, which adds something to the end of an array. We could also use Set Player Variable At Index, but that is far less versatile and more difficult to maintain when you have a large number of effects you want to store.

We can't _just_ use `Append To Array`, we first need to use `Set Player Variable`. `Append To Array` creates a new list, independent from the first. It doesn't just append a value. So instead we set our value to the new list.

```
	Event Player.Effects = Append To Array(Event Player.Effects, Last Created Entity);
```
[![](https://i.imgur.com/Zw7rEdZ.png)](https://i.imgur.com/Zw7rEdZ.png)

From this point on we can copy paste our last 2 actions (Create Effect and Storing the effect in the array) to create a bunch more effects. In my case I went with 3 different effects, clouds, sparkles, and a ring. Since we used `Append To Array` instead of `Set Player Variable At Index` we don't need to edit this action, as simple copy pasting it is enough.

At this point here's what we got:

[![](https://i.imgur.com/mxt2WAv.png)](https://i.imgur.com/mxt2WAv.png)

## Destroying the effects

Let's start off with adding a Wait of 3 seconds to our rule. This is so we wait with destroying our effects. Your use case will likely be different.

We could destroy the effects in multiple ways. `Destroy All Effects` would certainly do the trick and be super easy, but what if you have other effects you don't want removed? We could create an action for every effect we created in the array and individually target them, but that would suck if we have a large number of effects.
**We want our code to be versatile and easy to maintain.**

This is why we have our effect ids stored in an array. As of some fairly recent update, we can simply call `Destroy Effect(Event Player.Effects)`, which will destroy all effects stored in our array. And now that this array of effects are all destroyed, we don't need to keep track of them anymore. So we can again call `Event Player.Effects = Empty Array`.

To put the finishing touches on this we can add another condition to this rule that makes sure we can only press the button again when the effects have been removed.

```
	Count Of(Event Player.Effects) == 0;
```

## Final result


```
variables
{
	player:
		0: Effects
}

rule("Create effect")
{
	event
	{
		Ongoing - Each Player;
		All;
		All;
	}

	conditions
	{
		Is Button Held(Event Player, Interact) == True;
		Count Of(Event Player.Effects) == 0;
	}

	actions
	{
		Event Player.Effects = Empty Array;
		Create Effect(All Players(All Teams), Cloud, White, Event Player, 1, Visible To Position and Radius);
		Event Player.Effects = Append To Array(Event Player.Effects, Last Created Entity);
		Create Effect(All Players(All Teams), Sparkles, White, Event Player, 1, Visible To Position and Radius);
		Event Player.Effects = Append To Array(Event Player.Effects, Last Created Entity);
		Create Effect(All Players(All Teams), Ring, White, Event Player, 1, Visible To Position and Radius);
		Event Player.Effects = Append To Array(Event Player.Effects, Last Created Entity);
		Wait(3, Ignore Condition);
		Destroy Effect(Event Player.Effects);
		Event Player.Effects = Empty Array;
	}
}
```
