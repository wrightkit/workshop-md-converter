---
title: "Get input from a Spectator"
---

If the Host of the Lobby is in a Spectator slot, you can still read input from them via Is Button Held. For example, `Is Button Held(Host Player, Interact)` would return `True` if the spectating Host pressed `E` (or their bound `Move Up` button).

You can also detect inputs from any spectator as long as these inputs are checked in a field of a visual element using the Local Player value. Make sure the Local Player is a spectator using `Not(Entity Exists(Local Player))`. For example, you can make a HUD text appear to a spectator when they hold their `Move Up` button by putting the following code in the `Visible To` parameter:
```
If-Then-Else(
	Not(Entity Exists(Local Player)),
		If-Then-Else(
			Is Button Held(Local Player, Button(Interact)),
			Local Player,
			Null
		),
	Null
)
```


Here are the Workshop buttons with their corresponding spectator input:

| Button pressed by spectator | Button detected by workshop |
| -------- | -------- ||
| Move Down (default Q) | Ability 1 |
| Move Up (default E) | Interact |
| Move Fast (default Shift) | Secondary Fire |
| Move Slow (default Control) | Primary Fire |
| Spectate Lock On (default Left Click) | Ability 2 |
| Modify FOV (default B) | Jump |
| Disable Camera Blending (default Z) | Ultimate |
| ??? | Crouch |
| ??? | Reload |
| ??? | Melee |
