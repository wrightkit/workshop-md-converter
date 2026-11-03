---
title: "Workshopping in Stadium (BROKEN)"
---

> ⚠️
> ---
> _==This method is currently broken as of the October 1st, 2025 patch. Attempting to use Workshop in Stadium will soft-lock the mode, preventing players from spawning in.==_

---

>💥
> ---
> _==The release of the June 24th, 2025 (version 2.17.0.0 - 139475) patch introduced Stadium support for custom games. However, official Workshop support has not been added. This article provides documentation on a method to enable Workshop for Stadium==_
>
> **==Credit for discovering this method goes to Zezombye!==**

<br>

==**Content**==
- [Stadium](#stadium)
- [Using Workshop in Stadium](#workshop)

-----

<a id="stadium"></a>
# ==Stadium==
Players can access Stadium through the dedicated button:
![StadiumTutorial](https://files.catbox.moe/pv4uis.png)

Doing so prevents the Workshop and Heroes tab from being accessed, as well as disabling other settings.

<a id="workshop"></a>
# ==Using Workshop in Stadium==
For PC platforms, copy & paste the following settings:
```
settings
{
	lobby
	{
		Return To Lobby: Never
	}

	modes
	{
		Clash

		Control

		Payload Race

		Push
	}
}
```

For non-PC platforms, import the following code: ==**JK5440**==.

You can now access Workshop and other settings in Stadium.

## ==Customizing Stadium==
While Workshop is enabled with Stadium, you will be unable to modify Stadium specific settings in-game. To adjust specific Stadium settings, you must manually write the modified settings for each mode in your lobby settings before pasting them.

## ==Notes==
- Pasting these settings with Workshop code will also work as well.
- The lobby setting ==Return to Lobby== must be set to ==Never== or the game will end after the first round.
- Updating the settings during the Stadium game may soft lock it after the next round.
- Workshop functionality in Stadium is limited; it does not have access to Stadium specific values or actions _(Stadium Cash, Powers, Items, Team Score, etc)_.
- Perks can be enabled in Stadium by including the =="Enable Perks"== setting in your lobby settings for each mode.
- Non-Stadium related data such as Workshop variables and actions do not persist between rounds.
- Using Workshop in Stadium forces the Unranked format instead of the Competitive format.
- When using Workshop in Stadium, the game is unable to start when non-Stadium modes are enabled.
- As of the October 1st, 2025 patch, it is possible to earn Battlepass XP from Stadium matches when using Workshop. Players receive XP upon returning to the lobby.
