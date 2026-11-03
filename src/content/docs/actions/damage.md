---
title: "Damage"
---

## Description

<big>Applies instantaneous damage to one or more players, possibly killing the players.</big>

## Snippet

```
Damage(Event Player, Null, 0);
```

## Properties

**Returns**: _<span style="color: #c678dd">Void</span>_
**Parameters**: ==_Player_==, ==_Damager_==, ==_Amount_==

> ==**Player**==
> _Type: **[Player](/constants/player/)** | **Array** (**Player**), Default: **[Event Player](/values/event-player/)**_
> The player or players who will receive damage.

> ==**Damager**==
> _Type: **[Player](/constants/player/)**, Default: **[Null](/values/null/)**_
> The player who will receive credit for the damage. A damager of null indicates no player will receive credit.

> ==**Amount**==
> _Type: **Float**, Default: **[Number](/values/number/)**_
> The amount of damage to apply. This amount may be modified by buffs, debuffs, or armor.

## Examples
```
	Damage(Victim, Players On Hero(Hero(Tracer), Team 1), 100);
```
This example displays the victim is receiving 100 damage, and the credit goes to all players on team 1 as hero Tracer.
<details>
  <summary>Example 1</summary>
  <pre><code>
rule("Wuyang ultimate damage buff")
{
	event
	{
		Player Dealt Damage;
		All;
		Wuyang;
	}

	conditions
	{
		Is Using Ultimate(Event Player) == True;
	}

	actions
	{
		Damage(Victim, Event Player, 100);
	}
}
  </code>
</pre>
In this example: when hero Wuyang <a href="/values/is-using-ultimate/">is using their ultimate</a> and does damage, it causes the <a href="/values/victim/">victim</a> to receive an extra 100 damage. Though due to workshop limits, it wont track specifically the ultimates damage, and instead will be any damage event during the ultimate.
</details>
<details>
  <summary>Example 2</summary>
  <pre><code>
rule("Roadhog damage during Take a breather")
{
	event
	{
		Ongoing - Each Player;
		Team 2;
		Roadhog;
	}

	conditions
	{
		Is Using Ability 2(Event Player) == True;
	}

	actions
	{
		Damage(Players Within Radius(Event Player, 5, Team 1, Surfaces And All Barriers), Event Player, 100);
		Wait(0.125, Abort When False);
		Loop If Condition Is True;
	}
}
  </code></pre>
This example uses a <a href="/actions/loop-if-condition-is-true/">loop if true</a> and a <a href="/actions/wait/">wait</a> action. When a roadhog on team 2 uses his <a href="/values/is-using-ability-2/">ability 2</a>"take a breather" he will do damage to all players on team 1 within 5 meters for 100 damage every .125 seconds, till the ability ends.
</details>
<details>
  <summary>Example 3</summary>
  <pre><code>
rule("Mercy deals damage around healee")
{
	event
	{
		Player Dealt Healing;
		All;
		Mercy;
	}

	actions
	{
		Damage(Players Within Radius(Healee, 6, Opposite Team Of(Team Of(Event Player)), Surfaces And All Barriers), Healer, 250);
		Wait(1, Abort When False);
		Loop If Condition Is True;
	}
}
  </code></pre>
For this example, a Mercy deals damage <a href="/values/players-within-radius/">around the person (6 meters)</a> she is <a href="/events/player-dealt-healing/">healing</a> for 250 damage every 1 second till she stops healing. the damage also checks line of sight.
</details>

## Trivia
## Related articles
* [Heal](/actions/heal/)
* [Kill](/actions/kill/)
* [Set Damage Dealt](/actions/set-damage-dealt/)
* [Set Damage Received](/actions/set-damage-received/)
* [Start Damage Over Time](/actions/start-damage-over-time/)
