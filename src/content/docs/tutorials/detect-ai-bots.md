---
title: "Detect AI Bots"
---

**Note:** Dummy Bot is _not_ the same as AI Bot:
- Dummy Bots are created via a the [`Create Dummy Bot()`](/actions/create-dummy-bot/) Workshop action, and don't do anything by default
- AI Bots are added by the lobby host, and have a mind of their own

It is popular for hosts to add AI Bots to artificially increase player count.

### code?

```
rule("Detect AI")
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
	}

	actions
	{
		Start Forcing Dummy Bot Name(Event Player, Custom String("​"));
		If(Custom String("{0}", Event Player) == Custom String("​"));
			Event Player.IsAIBot = True;
		End;
		Stop Forcing Dummy Bot Name(Event Player);
	}
}
```

### Explanation

1. As soon as the game starts, if a player is not a Dummy bot, starting forcing their name to something that would be invalid for Battle.net usernames (in this case, the zero-width unicode character).
2. For non AI Bots, this will do nothing. For AI Bots, this will change their name on their nameplate and possibly the scoreboard.
3. Immediately after, check if the player's name is the one we set it to.
4. If so, set a variable we can check later in the code
5. Immediately after, stop forcing a name, so real players in the lobby don't notice anything.

After this, you can check for `Event Player.IsAIBot` to know whether the check passed or not.
