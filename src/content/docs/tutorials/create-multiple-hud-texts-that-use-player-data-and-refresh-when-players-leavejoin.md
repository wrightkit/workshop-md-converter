---
title: "Create Multiple HUD Texts that use Player Data and Refresh when players Leave/Join "
---

This is just an example, it could probably be done better.

**Global Variables**
GA\_T2StatusHudsCheck        _( Global Array Team 2 Status HUDs Check )_
GA\_T2StatusHudsLastID        _( Global Array Team 2 Status HUDs LastID )_

**Player Variables**
PA\_T2StatusHudsCheck        _( Player Array Team 2 Status HUDs Check )_

**Code**

```
rule("Team 2 Invulnerability Status HUB Text")
{
	event
	{
		Ongoing - Each Player;
		Team 2;
		All;
	}

	conditions
	{
		"if somone joined or left team 2"
		Event Player.PA_T2StatusHudsCheck != All Players(Team 2);
		"dont run before game starts"
		Is Game In Progress == True;
	}

	actions
	{
		"important property to make sure that this event stops and lets the Auto Cleaner run first"
		Wait(0.500, Ignore Condition);
		"update the control variable"
		Event Player.PA_T2StatusHudsCheck = All Players(Team 2);
		"create hud text"
		Create HUD Text(All Players(All Teams), Custom String("{0}", Has Status(Event Player, Invincible) ? Custom String("Invulnerable")
			: Custom String("Vulnerable")), Custom String("        -        -        -        -        -        -        "), Custom String(
			"{0}", Event Player), Right, Slot Of(Event Player), White, White, White, Visible To and String, Default Visibility);
		"add last text id to array of hud text ids"
		Global.GA_T2StatusHudsLastID = Append To Array(Global.GA_T2StatusHudsLastID, Last Text ID);
	}
}
```

```
rule("Team 2 Invulnerability Status HUB Text - Auto Cleaner")
{
	event
	{
		Ongoing - Global;
	}

	conditions
	{
		Global.GA_T2StatusHudsCheck != All Players(Team 2);
		Is Game In Progress == True;
	}

	actions
	{
		Global.GA_T2StatusHudsCheck = All Players(Team 2);
		"remove hud texts using the array we made"
		For Global Variable(A, 0, Count Of(Global.GA_T2StatusHudsLastID), 1);
			Destroy HUD Text(Global.GA_T2StatusHudsLastID[Global.A]);
		End;
		"after cleanup is complete, setting array to empty so that it can recieve new appends'"
		Global.GA_T2StatusHudsLastID = Empty Array;
	}
}
```
