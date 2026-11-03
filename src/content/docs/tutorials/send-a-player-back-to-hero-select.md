---
title: "Send a player back to Hero Select"
---

In some gamemodes there's no spawn room, meaning players can't change their hero. Or changing their Hero would involve killing themselves, which is not possible on every map. In this How-to we will go over a quick and easy method to change heroes, and how you could apply it in your game.

**Here's the scenario**; we want a player to be able to change their heroes when they press _Interact_.

1. First up, we will need to create 1 rule. This rule is set to the "Ongoing - Each Player" so we can check when they press a button.
2. Next up we create a condition that check if they are holding the Interact button.
3. In the actions we can do two things to send a player back to Hero Select, both involve Set Player Allowed Heroes. In this action we can set two arguments, the player it will affect, and the heroes that are available to said player. In this case we will leave the first argument on `Event Player`. For the second value we must set an array of Allowed Heroes, minus the Hero the Event Player is current using. This will case the player to return to the Hero Select.
4. It  will also make the Event Player's current hero unavailable to pick, which we want to reset using Reset Player Hero Availability. This will reset the available heroes to what they could pick at the start of the game.

![](https://i.imgur.com/a29rS3m.jpg)

```
rule("On Interact, send player to hero select")
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
		Set Player Allowed Heroes(Event Player, Remove From Array(Allowed Heroes(Event Player), Hero Of(Event Player)));
		Reset Player Hero Availability(Event Player);
	}
}
```
