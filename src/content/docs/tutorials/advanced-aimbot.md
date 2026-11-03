---
title: "Advanced Aimbot"
---

Whether you use this for a prank on your friend or an AI (AI's what I mainly make), this aimbot will help with what most won't.

Most will just do facing towards eye position, sometimes they don't even have update every frame.

What I have is update every frame with projectile leading and arcing for not only the primary but every ability. All it needs is a couple of large global arrays.

```
variables
{
	global:
		0: All_Heros
		1: Primary_Speed
		2: Secondary_Speed
		3: Ability1_Speed
		4: Ability2_Speed
		5: Primary_Arc
		6: Secondary_Arc
		7: Ability1_Arc
		8: Ability2_Arc
}

actions
{
	Global.All_Heros = Array(Hero(Ana), Hero(Ashe), Hero(Baptiste), Hero(Bastion), Hero(Brigitte), Hero(Cassidy), Hero(D.Va), Hero(
		Doomfist), Hero(Echo), Hero(Genji), Hero(Hanzo), Hero(Illari), Hero(Junker Queen), Hero(Junkrat), Hero(Kiriko), Hero(
		Lifeweaver), Hero(Lúcio), Hero(Mauga), Hero(Mei), Hero(Mercy), Hero(Moira), Hero(Orisa), Hero(Pharah), Hero(Ramattra), Hero(
		Reaper), Hero(Reinhardt), Hero(Roadhog), Hero(Sigma), Hero(Soldier: 76), Hero(Sombra), Hero(Sojourn), Hero(Symmetra), Hero(
		Torbjörn), Hero(Tracer), Hero(Widowmaker), Hero(Winston), Hero(Wrecking Ball), Hero(Zarya), Hero(Zenyatta));
	Global.Primary_Speed = Array(90, 125, 500, 500, 500, 500, 500, 500, 80, 75, 60, 500, 110, 500, 25, 20, 500, 50, 500, 500, 50, 500,
		90, 35, 80, 500, 500, 60, 50, 500, 500, 160, 500, 70, 500, 500, 500, 500, 500);
	Global.Secondary_Speed = Array(0, 0, 60, 40, 0, 0, 0, 44, 50, 60, 110, 0, 30, 25, 90, 70, 0, 115, 500, 50, 0, 25, 35, 80, 0, 0, 80,
		50, 50, 0, 0, 25, 120, 0, 0, 0, 0, 25, 90);
	Global.Ability1_Speed = Array(60, 0, 0, 0, 80, 0, 0, 30, 0, 50, 0, 0, 0, 25, 90, 70, 0, 0, 0, 0, 0, 0, 0, 105, 0, 17, 40, 50, 0, 0,
		160, 0, 70, 0, 0, 30, 0, 0, 0);
	Global.Ability2_Speed = Array(30, 25, 0, 40, 0, 20, 40, 80, 0, 0, 110, 20, 0, 25, 90, 70, 50, 0, 0, 50, 0, 0, 60, 30, 0, 25, 60,
		50, 0, 0, 160, 0, 70, 0, 20, 0, 0, 0, 0);
	Global.Primary_Arc = Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -0.020, 0, 0, -0.400, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		0, -0.050, 0, 0, 0, 0, 0, 0);
	Global.Secondary_Arc = Array(0, 0, 0, -0.150, 0, 0, 0, 0, 0, 0, 0, 0, -0.150, 0, 0, 0, 0, 0, 0, 0, 0, -0.030, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0, -0.300, 0);
	Global.Ability1_Arc = Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -0.500, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0);
	Global.Ability2_Arc = Array(-0.300, -0.300, 0, 0, 0, -0.450, 0, 0, 0, 0, 0, -0.300, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -0.250, 0, 0,
		0, -0.250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
}
```

Now, some of these abilities won't work. However, that's because of them casting instantly, so if you're making AI, that's not even an issue.

Now that you have your values, you need your target!

```
variables
{
	global:
		10: Aimbot_Settings

	player:
		0: Target
		1: Targets
}

actions
{
	Event Player.Targets = Filtered Array(All Living Players(Opposite Team Of(Team Of(Event Player))), (Is In Line of Sight(
		Eye Position(Event Player), Eye Position(Current Array Element), Barriers Do Not Block LOS) && (
		Global.Aimbot_Settings[0] == False || Is In View Angle(Event Player, Eye Position(Current Array Element),
		Global.Aimbot_Settings[1]))) || (Global.Aimbot_Settings[2] == False));
	Event Player.Targets = Filtered Array(Event Player.Targets, (Is Duplicating(Current Array Element) ? Hero Being Duplicated(
		Current Array Element) : Hero Of(Current Array Element)) != Hero(Sombra) || !Is Using Ability 1(Current Array Element)
		|| Is Firing Secondary(Current Array Element));
	Event Player.Targets = Filtered Array(Event Player.Targets, !(Health(Current Array Element) == 1 && Has Status(
		Current Array Element, Unkillable)) && !Has Status(Current Array Element, Invincible) && !Has Status(Current Array Element,
		Phased Out) && !Is In Spawn Room(Current Array Element));
	Event Player.Targets = Filtered Array(Event Player.Targets, (Is Duplicating(Current Array Element) ? Hero Being Duplicated(
		Current Array Element) : Hero Of(Current Array Element)) != Hero(D.Va) || !Is Firing Secondary(Current Array Element)
		|| !Is In View Angle(Current Array Element, Eye Position(Event Player), 45));
	Event Player.Targets = Filtered Array(Event Player.Targets, (Is Duplicating(Current Array Element) ? Hero Being Duplicated(
		Current Array Element) : Hero Of(Current Array Element)) != Hero(Genji) || !Is Using Ability 2(Current Array Element)
		|| !Is In View Angle(Current Array Element, Eye Position(Event Player), 45));
	Event Player.Targets = Filtered Array(Event Player.Targets, (Is Duplicating(Current Array Element) ? Hero Being Duplicated(
		Current Array Element) : Hero Of(Current Array Element)) != Hero(Orisa) || !Is Using Ability 2(Current Array Element)
		|| !Is In View Angle(Current Array Element, Eye Position(Event Player), 45));
	Event Player.Targets = Filtered Array(Event Player.Targets, (Is Duplicating(Current Array Element) ? Hero Being Duplicated(
		Current Array Element) : Hero Of(Current Array Element)) != Hero(Sigma) || !Is Using Ability 1(Current Array Element)
		|| !Is In View Angle(Current Array Element, Eye Position(Event Player), 45));
	Event Player.Targets = Filtered Array(Event Player.Targets, (Is Duplicating(Current Array Element) ? Hero Being Duplicated(
		Current Array Element) : Hero Of(Current Array Element)) != Hero(Doomfist) || !Is Using Ultimate(Current Array Element));
	Event Player.Targets = Filtered Array(Event Player.Targets, (Is Duplicating(Current Array Element) ? Hero Being Duplicated(
		Current Array Element) : Hero Of(Current Array Element)) != Hero(Mei) || !Is Using Ability 1(Current Array Element));
	Event Player.Targets = Filtered Array(Event Player.Targets, (Is Duplicating(Current Array Element) ? Hero Being Duplicated(
		Current Array Element) : Hero Of(Current Array Element)) != Hero(Moira) || !Is Using Ability 1(Current Array Element));
	Event Player.Targets = Filtered Array(Event Player.Targets, (Is Duplicating(Current Array Element) ? Hero Being Duplicated(
		Current Array Element) : Hero Of(Current Array Element)) != Hero(Reaper) || !Is Using Ability 1(Current Array Element));
	Event Player.Targets = Filtered Array(Event Player.Targets, (Is Duplicating(Current Array Element) ? Hero Being Duplicated(
		Current Array Element) : Hero Of(Current Array Element)) != Hero(Tracer) || !Is Using Ability 2(Current Array Element));
	Event Player.Targets = Filtered Array(Event Player.Targets, (Is Duplicating(Current Array Element) ? Hero Being Duplicated(
		Current Array Element) : Hero Of(Current Array Element)) != Hero(Zenyatta) || !Is Using Ultimate(Current Array Element));
	Event Player.Targets = Sorted Array(Event Player.Targets, Distance Between(Current Array Element, Eye Position(Event Player)
		+ Facing Direction Of(Event Player) * Distance Between(Event Player, Current Array Element)) * (Is In Line of Sight(
		Eye Position(Event Player), Eye Position(Current Array Element), Enemy Barriers Block LOS) ? 1 : 10));
	Event Player.Target = First Of(Event Player.Targets);
	Wait(0.250, Ignore Condition);
	Loop If Condition Is True;
}
```

It's about time you get the start facing itself.

```
variables
{
	player:
		0: Target
		2: Projectile_Speed
		3: Projectile_Arc
}

actions
{
	Start Facing(Event Player, Update Every Frame(Direction From Angles(Horizontal Angle From Direction(Direction Towards(Eye Position(
		Event Player), Eye Position(Event Player.Target) + Velocity Of(Event Player.Target) * (Distance Between(Eye Position(
		Event Player), Eye Position(Event Player.Target)) / Event Player.Projectile_Speed))), Vertical Angle From Direction(
		Direction Towards(Eye Position(Event Player), Eye Position(Event Player.Target) - Vector(0, 0.100, 0))) + Distance Between(
		Eye Position(Event Player), Eye Position(Event Player.Target)) * Event Player.Projectile_Arc)), 325, To World,
		Direction and Turn Rate);
}
```

Now, all you need is a script to change the values to the appropriate ones from the global arrays.

```
variables
{
	global:
		0: All_Heros
		1: Primary_Speed
		2: Secondary_Speed
		4: Ability1_Speed
		5: Ability2_Speed
		6: Primary_Arc
		7: Secondary_Arc
		8: Ability1_Arc
		9: Ability2_Arc

	player:
		2: Projectile_Speed
		3: Projectile_Arc
}

rule("Set Projectile Primary")
{
	event
	{
		Ongoing - Each Player;
		All;
		All;
	}

	conditions
	{
		Is Button Held(Event Player, Button(Primary Fire)) == True;
		(((Is Duplicating(Event Player) ? Hero Being Duplicated(Event Player) : Hero Of(Event Player)) != Hero(Ramattra)
			|| !Is In Alternate Form(Event Player)) && (Is True For All(Array(Hero(Ana), Hero(Ashe), Hero(Widowmaker)), (Is Duplicating(
			Event Player) ? Hero Being Duplicated(Event Player) : Hero Of(Event Player)) != Current Array Element) || !Is Firing Secondary(
			Event Player))) == True;
		(Event Player.Projectile_Speed != Global.Primary_Speed[Index Of Array Value(Global.All_Heros, Is Duplicating(Event Player)
			? Hero Being Duplicated(Event Player) : Hero Of(Event Player))
			] || Event Player.Projectile_Arc != Global.Primary_Arc[Index Of Array Value(Global.All_Heros, Is Duplicating(Event Player)
			? Hero Being Duplicated(Event Player) : Hero Of(Event Player))]) == True;
	}

	actions
	{
		Event Player.Projectile_Speed = Global.Primary_Speed[Index Of Array Value(Global.All_Heros, Is Duplicating(Event Player)
			? Hero Being Duplicated(Event Player) : Hero Of(Event Player))];
		Event Player.Projectile_Arc = Global.Primary_Arc[Index Of Array Value(Global.All_Heros, Is Duplicating(Event Player)
			? Hero Being Duplicated(Event Player) : Hero Of(Event Player))];
	}
}

rule("Projectile Secondary")
{
	event
	{
		Ongoing - Each Player;
		All;
		All;
	}

	conditions
	{
		Is Alive(Event Player) == True;
		Is Button Held(Event Player, Button(Secondary Fire)) == True;
		(Event Player.Projectile_Speed != Global.Secondary_Speed[Index Of Array Value(Global.All_Heros, Is Duplicating(Event Player)
			? Hero Being Duplicated(Event Player) : Hero Of(Event Player))
			] || Event Player.Projectile_Arc != Global.Secondary_Arc[Index Of Array Value(Global.All_Heros, Is Duplicating(Event Player)
			? Hero Being Duplicated(Event Player) : Hero Of(Event Player))]) == True;
	}

	actions
	{
		Event Player.Projectile_Speed = Global.Secondary_Speed[Index Of Array Value(Global.All_Heros, Is Duplicating(Event Player)
			? Hero Being Duplicated(Event Player) : Hero Of(Event Player))];
		Event Player.Projectile_Arc = Global.Secondary_Arc[Index Of Array Value(Global.All_Heros, Is Duplicating(Event Player)
			? Hero Being Duplicated(Event Player) : Hero Of(Event Player))];
	}
}

rule("Projectile Ability 1")
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
		(Event Player.Projectile_Speed != Global.Ability1_Speed[Index Of Array Value(Global.All_Heros, Is Duplicating(Event Player)
			? Hero Being Duplicated(Event Player) : Hero Of(Event Player))
			] || Event Player.Projectile_Arc != Global.Ability1_Arc[Index Of Array Value(Global.All_Heros, Is Duplicating(Event Player)
			? Hero Being Duplicated(Event Player) : Hero Of(Event Player))]) == True;
	}

	actions
	{
		Event Player.Projectile_Speed = Global.Ability1_Speed[Index Of Array Value(Global.All_Heros, Is Duplicating(Event Player)
			? Hero Being Duplicated(Event Player) : Hero Of(Event Player))];
		Event Player.Projectile_Arc = Global.Ability1_Arc[Index Of Array Value(Global.All_Heros, Is Duplicating(Event Player)
			? Hero Being Duplicated(Event Player) : Hero Of(Event Player))];
	}
}

rule("Projectile Ability 2")
{
	event
	{
		Ongoing - Each Player;
		All;
		All;
	}

	conditions
	{
		Is Button Held(Event Player, Button(Ability 2)) == True;
		(Event Player.Projectile_Speed != Global.Ability2_Speed[Index Of Array Value(Global.All_Heros, Is Duplicating(Event Player)
			? Hero Being Duplicated(Event Player) : Hero Of(Event Player))
			] || Event Player.Projectile_Arc != Global.Ability2_Arc[Index Of Array Value(Global.All_Heros, Is Duplicating(Event Player)
			? Hero Being Duplicated(Event Player) : Hero Of(Event Player))]) == True;
	}

	actions
	{
		Event Player.Projectile_Speed = Global.Ability2_Speed[Index Of Array Value(Global.All_Heros, Is Duplicating(Event Player)
			? Hero Being Duplicated(Event Player) : Hero Of(Event Player))];
		Event Player.Projectile_Arc = Global.Ability2_Arc[Index Of Array Value(Global.All_Heros, Is Duplicating(Event Player)
			? Hero Being Duplicated(Event Player) : Hero Of(Event Player))];
	}
}
```

And that should do it! You're all set up for any aimbotting you need to do in the workshop!
