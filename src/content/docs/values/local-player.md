---
title: "Local Player"
---

## Description

The Player being controlled on the end user's computer. This Value is different for each end user and thus can only be accessed in Actions which affect visuals or the HUD. This Value cannot be stored in Variables.



## Use Example:
### Creating HUD texts for every player (without local player)

```
rule("Show Each Players Position")
{
	event
	{
		Ongoing - Each Player;
		All;
		All;
	}

	conditions
	{

	}

	actions
	{
		Create HUD Text(Event Player, Position Of(Event Player), Null, Null, Left, 0, Color(white), Color(white), Color(white), Visible To And String, Default Visibility);
	}
}
```

### Creating one single HUD (Using local player)

```
rule("Show Local Player Position")
{
	event
	{
		Ongoing - Global;
	}

	conditions
	{

	}

	actions
	{
		Create HUD Text(Local Player, Position Of(Local Player), Null, Null, Left, 0, Color(white), Color(white), Color(white), Visible To And String, Default Visibility);
	}
}
```

Note that the Local Player HUD text is created in a global rule, yet the text it shows is different for every player. By creating only one HUD rather than one for each player, you can reduce both server load and text count.

Keep in mind that Local Player elements do not show properly for spectators, or when watching the replay.

## Snippet

```
Local Player;
```

## Properties

**Returns**: _<span style="color: #c678dd">Player</span>_
**Parameters**: _None_
