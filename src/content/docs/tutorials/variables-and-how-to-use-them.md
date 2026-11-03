---
title: "Variables and how to use them"
---

# What are variables?
Variables are a way to store values with either players or globally with the game. These variables do not change unless modified by the many actions which can.

## Global Variables
One of the 2 types of variables are global variables, which store values assigned to the single instance of the game. These variables are useful when values are unique and shared by all players.

One example of global variables is interacting with in-world positions. If you want to make an in-world teleporter at `Vector(5, 5, 5)`, and you want it to go to a certain shop position, but the position of the shop constantly changes, then you can set the shop position in a [Global Variable](/values/global-variable/), and use the following code:
```
rule("Each Player Rule")
{
	event
	{
		Ongoing - Each Player;
		All;
		All;
	}
	conditions
	{
Distance Between(Position Of(Event Player), Vector(5, 5, 5)) <= 5;
	}
	actions
	{
Teleport(Event Player, Global.ShopPosition);
	}
}
```

This code will teleport the player to the shop position when they approach the teleporter.


## Player Variables
The second type of variables are [player variables](/values/player-variable/). They store values for individual players, which can cause confusion and discrepancy if you're not careful. Player variables help with many things, such as custom ability cooldowns, custom positions, and a whole lot more.

As an example of player variables, consider an ability which makes the player jump very far up like Baptiste's Exo Boots, which can be accomplished with a player variable to track the cooldowns:

```

rule("Each Player Rule")
{
	event
	{
		Ongoing - Each Player;
		All;
		All;
	}
	conditions
	{
Event player.Cooldown == True;
Is Button Held(Event Player, Button(Interact))	== True;
    }
	actions
	{
Apply Impulse(Event Player, Up, 12, To World, Incorporate Contrary Motion);
Event player.Cooldown == False;
Wait(6, Ignore Condition);
Event player.Cooldown == True;
	}
}

```
This will simply check if you should be able to use the ability.

## Set [Player](/actions/set-player-variable/)/[Global](/actions/set-global-variable/) Variables
This is a simple action that will set a certain variable to a certain value. In the above example, we used this action to set the cooldown to [False](/values/false/) when we couldn't use the ability, then set it to [True](/values/true/) when we could use the ability.

## Modify [Global](/actions/modify-global-variable/)/[Player](/actions/modify-player-variable/) Variables
This action takes the current value of the variable and modifies it according to a given operation. For arithmetic operations, the value is the second of the two operands, with the other being the variable's existing value. For array operations, this is the value to append or remove. The types are:
* Add
* Append To Array
* Divide
* Max
* Min
* Modulo
* Multiply
* Raise To Power
* Remove From Array By Index
* Remove From Array By Value
* Subtract


## Chasing [Player](/actions/chase-player-variable-at-rate/)/[Global](/actions/chase-player-variable-at-rate/) Variables At Rate
This action will change the value of the variable at a given rate towards the specified destination. This will only work if the variable is a number or vector. The initial value type must match its destination type.

## Chasing [Player](/actions/chase-player-variable-over-time/)/[Global](/actions/chase-player-variable-over-time/) Variables over time
 This action constantly changes the value of your variable for a set duration. Unless it gets changed, it will always reach its destination during the specified time span. This will only work if the variable is a number or vector. The initial value type must match its destination type.

## Stop Chasing [Global](/actions/stop-chasing-global-variable/)/[Player](/actions/stop-chasing-player-variable/) Variables
This action ends chasing the variable, stopping it at its current value.
