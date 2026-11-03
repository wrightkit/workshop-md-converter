---
title: "Health Pool Bug: An Alternative to Set Max Health (PATCHED)"
---

>⚠️
> ---
> _==This bug has been patched as of May 7, 2025 (version 2.16.0 - 138051) and no longer works. The original article below provides documentation on the mechanics behind the bug and how it was used.==_

---

> _In Overwatch, health is managed via a health pool system that allows for adding and removing different types of health from a hero. This article will go over a Workshop bug involving the system and how to exploit it to more finely control a hero's max health._

==**Content**==
- [Health Pool Bug](#health-pool-bug)
	- [Workshop Control over Health Pools](#workshop-control)
	- [Replicating the Bug](#replicating-bug)
	- [Use Case: Custom Health](#use-case-custom-health)
	- [Why not Set Max Health?](#why-not-max-health)
- [Trivia](#trivia)
- [References](#references)

-----

<a id="health-pool-bug"></a>
# **Health Pool Bug**
<a id="workshop-control"></a>
### **Workshop Control over Health Pools**
In the workshop, we can add and remove health pools to heroes via the following actions:
- [Add Health Pool to Player](/actions/add-health-pool-to-player/)
- [Remove Health Pool From Player](/actions/remove-health-pool-from-player/)
- [Remove All Health Pools From Player](/actions/remove-all-health-pools-from-player/)

These actions normally do not affect the hero's default health pool, and health pools are removed properly when used.

<a id="replicating-bug"></a>
### **Replicating the Bug**

To cause this bug, the player must satisfy the following conditions:
- The player has less health than their max health.
- The health that is intended to be removed must be the only health remaining _(e.g. you cannot remove normal health if the hero has armor, since armor is on top of normal health)_.

With these conditions, we can remove the health of a hero in the following code snippet:

```
rule("Remove Normal Health")
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
		Damage(Event Player, Null, 50);
		Add Health Pool To Player(Event Player, Health, 50, True, True);
		Remove All Health Pools From Player(Event Player);
		Heal(Event Player, Null, Max Health(Event Player));
	}
}
```
[video https://cdn.workshop.codes/yllpjh4hj7xa35bzjhbd3n1og7x9 autoplay]
> A rule that removes the normal health of a hero when the player presses the `Interact`  button. The player is damaged, then 50 normal health is added and removed, then the player is healed. This results in the player having 50 less max health.

<br>

<a id="use-case-custom-health"></a>
### **Use Case: Custom Health**

Since we can remove health from a hero, we can apply custom health to heroes by adding health pools after removal:

```
rule("Custom Health")
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
		Set Player Health(Event Player, 1);
		Add Health Pool To Player(Event Player, Health, Max Health(Event Player), True, True);
		Add Health Pool To Player(Event Player, Armor, Max Health(Event Player), True, True);
		Add Health Pool To Player(Event Player, Shields, Max Health(Event Player), True, True);
		Remove All Health Pools From Player(Event Player);
		Heal(Event Player, Null, Max Health(Event Player));
		Add Health Pool To Player(Event Player, Health, 199, True, True);
	}
}
```
> A rule that removes all of a hero's base health and replaces it with custom health via health pools when the player presses `Interact`. The player's health is set to 1 and temporary health pools are then added and removed, which remove all of the base health of the hero down to 1. The player is then healed and a health pool of 199 normal health is added. This results in the player having 200 normal health.

<br>

<a id="why-not-max-health"></a>
### **Why not Set Max Health?**

In the Workshop, the max health of a player can be modified using the `Set Max Health` action. Using this action to change a hero's health may not be desirable as it does not allow for adjusting of different types of health. It can also affect abilities that grant additional health _(e.g. Junker Queen's Commanding Shout, Orisa's Fortify, etc.)_

[video https://cdn.workshop.codes/82j7yu9ny5xuns4cv48knj1evv5a autoplay]
> A Junker Queen set to 200 health using the `Set Max Health` action _(From 100% ⇒ 38%)_. Shout gives her 58 overhealth since it scales with her max health.

<br>

[video https://cdn.workshop.codes/an8w2n0ebbxe06qxrxsrh8zqdxwx autoplay]

> A Junker Queen set to 200 health using the health pool bug. Shout gives her 150 overhealth since her max health is still at 100%.

<a id="trivia"></a>
# **Trivia**
- This bug may be related to the bug that resulted in Wrecking Ball having less health from using Adaptive Shields while in Kitsune Rush. This was fixed in November 17, 2022 _(version 2.1.2.0 - 107360)_. [==\[1\]==](#references)

# **References**
<a id="references"></a>
1. ["Wrecking Ball Can Permanently Lose Health"][1] Marblr on Youtube

[1]: https://www.youtube.com/watch?v=G38nhNApg0o
