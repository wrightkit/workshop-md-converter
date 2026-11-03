---
title: "Detect AI, Dummy, and real players separately."
---

> Please take in mind that the _"Detect AI players"_ code is from ==Detecting AI bots==. _(It's recommended to read that one first before adding anything from here.)_

==Player variables== were used for the entire code, these can be changed to ==global variables== if needed:

**Player variables used:**
		26: Player
		27: DummyBot
		28: IsAIBot
		29: AIBot

> **Note:** before copying and pasting the script/code, please modify the names of your variables! (Example below.)
>
> ![Text description](https://cdn.workshop.codes/c3k28gdypyswcd74i3dv5nl1wyp3)

### **Script/Code:**

```
rule("Detect players")
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
		Is Dummy Bot(Event Player) == False;
	}

	actions
	{
		Wait(0.250, Ignore Condition);
		If(Event Player.IsAIBot == False);
			Event Player.Player = Event Player;
		End;
	}
}

rule("Detect AI players")
{
	event
	{
		Ongoing - Each Player;
		All;
		All;
	}

	conditions
	{
		Is Dummy Bot(Event Player) == False;
		Has Spawned(Event Player) == True;
	}

	actions
	{
		Start Forcing Dummy Bot Name(Event Player, Custom String("​"));
		If(Custom String("{0}", Event Player) == Custom String("​"));
			Event Player.IsAIBot = True;
			Event Player.AIBot = Event Player;
		End;
		Stop Forcing Dummy Bot Name(Event Player);
	}
}

rule("Detect Dummy players")
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
		Is Dummy Bot(Event Player) == True;
		Event Player.IsAIBot == False;
	}

	actions
	{
		Event Player.DummyBot = Event Player;
	}
}
```
