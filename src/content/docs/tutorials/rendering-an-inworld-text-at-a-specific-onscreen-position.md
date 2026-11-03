---
title: "Rendering an In-World Text at a specific onscreen position"
---

For creating player HUDs, sometimes it can be advantageous to use In-World Texts instead of HUD Texts.

**Pros:**
* Easier to place text where you want it, such as at the bottom of the screen, compared to HUD Texts
* Fine control over text size
* Can be seen after the match has ended

**Cons:**
* The exact position of the text will be affected by the viewing player's FoV. This can be avoided by using Start Camera, which has a fixed FoV of about 102.5
* In certain situations, the extra readability of a HUD Text header may be more desirable
* Custom Strings containing newlines typically interfere with the alignment of In-World Texts on the screen
* This technique has yet to be properly tested with In-World Progress Bar Texts and Icons

==A quick note about screen coordinates==

In this implementation, the origin \[(x,y) = (0,0)\] is at the center of the screen (on the crosshair), positive x is toward the right, and positive y is towards the top of the screen. If the text is viewed in first person, it is recommended to limit the ==x coordinate to ±2.5== and the ==y coordinate to ±1.25==, since these are more or less the limits of the screen for a player on the lowest possible FoV and a 16:9 aspect ratio. The border values for Start Camera are not listed here but would be larger due to the fixed FoV (approx. equivalent to 102.48 degrees).

[gallery {
  "SCREEN COORDINATES": "https://cdn.workshop.codes/c2fbw37atvjgj0c6apcjw2obxk8y"}]
**Thanks to [Alomare](https://workshop.codes/u/Alomare)**

# Option 1: First person using Event Player
This is the simplest option. It will use one text per player and position the text assuming the player is always in first person. However, abilities that put you in third person and/or alter FoV will displace the text.

You will need an expression for the following 2 values:
1. `X_POS`: The x coordinate of the onscreen position
2. `Y_POS`: The y coordinate of the onscreen position

These expressions can be numbers, variables, or any other combination of values. Once you've determined the expressions, plug them into the action below:

```
actions
{
	Create In-World Text(
        Event Player,
        Custom String("Text"),
        Update Every Frame(
            Eye Position(Event Player) + 100 * (
            X_POS * World Vector Of(Right, Event Player, Rotation) +
            (Y_POS - 0.200) * Direction From Angles(Horizontal Angle From Direction(Facing Direction Of(Event Player)), Vertical Angle From Direction(Facing Direction Of(Event Player)) - 90) +
            3 * Facing Direction Of(Event Player))),
        2,
        Do Not Clip,
        Visible To Position String and Color,
        Color(White),
        Default Visibility);
}
```

Once you've pasted in the action, you can change the other parameters of the text to your heart's content, such as the text, scale, color, and reevaluation. Keep in mind that position reevaluation **must be on** for the text to move with the player properly, so if you want a non-reevaluating expression for `X_POS` or `Y_POS`, wrap that expression in Evaluate Once.

# Option 2: First person using Local Player
This option has the advantage of using only 1 text overall instead of 1 per player. Like Option 1, the text will be displaced by abilities that affect FoV or put the player in third person. Additionally, since it uses Local Player, it will (as of patch 1.59 at least) not be visible to spectators. Keep this in mind if you are making a mode that may be livestreamed or hosted in a large private lobby.

You will need an expression for the following 2 values:
1. `X_POS`: The x coordinate of the onscreen position
2. `Y_POS`: The y coordinate of the onscreen position

These expressions can be numbers, variables, or any other combination of values. Once you've determined the expressions, plug them into the action below. **Make sure to place the action in a Global rule.**

```
actions
{
	Create In-World Text(
        Local Player,
        Custom String("Text"),
        Update Every Frame(
            Eye Position(Local Player) + 100 * (
		    X_POS * World Vector Of(Right, Local Player, Rotation) +
            (Y_POS - 0.200) * Direction From Angles(Horizontal Angle From Direction(Facing Direction Of(Local Player)), Vertical Angle From Direction(Facing Direction Of(Local Player)) - 90) +
            3 * Facing Direction Of(Local Player))),
        2,
        Do Not Clip,
        Visible To Position String and Color,
        Color(White),
        Visible Never);
}
```

Once you've pasted in the action, you can change the other parameters of the text to your heart's content, such as the text, scale, color, and reevaluation. Keep in mind that position reevaluation **must be on** for the text to move with the player properly, so if you want a non-reevaluating expression for `X_POS` or `Y_POS`, wrap that expression in Evaluate Once.

# Option 3: Third person or fixed camera using Event Player
Since this option uses Start Camera, it will not be affected by the player's FoV setting. However, certain abilities such as Wrecking Ball's rolling form and Soldier: 76's sprint will still affect FoV and displace these texts. This option uses one text per player and supports spectators.

You will need an expression for the following 4 values:
1. `X_POS`: The x coordinate of the onscreen position
2. `Y_POS`: The y coordinate of the onscreen position
3. `EYE`: The expresison used in the Eye Position field of the Start Camera action
4. `LOOK`: The expresison used in the Look At Position field of the Start Camera action

These expressions can be numbers, variables, or any other combination of values. Once you've determined the expressions, plug them into the action below.

```
actions
{
	Create In-World Text(
        Event Player,
        Custom String("Text"),
        Update Every Frame(
            EYE + 100 * (
            X_POS * Cross Product(Direction Towards(EYE, LOOK), Direction From Angles(Horizontal Angle From Direction(Direction Towards(EYE, LOOK)), Vertical Angle From Direction(Direction Towards(EYE, LOOK)) - 90)) +
            (Y_POS - 0.200) * Direction From Angles(Horizontal Angle From Direction(Direction Towards(EYE, LOOK)), Vertical Angle From Direction(Direction Towards(EYE, LOOK)) - 90) +
            3 * Direction Towards(EYE, LOOK))),
        2,
        Do Not Clip,
        Visible To Position String and Color,
        Color(White),
        Default Visibility);
}
```

Once you've pasted in the action, you can change the other parameters of the text to your heart's content, such as the text, scale, color, and reevaluation. Keep in mind that position reevaluation **must be on** for the text to move with the player properly, so if you want a non-reevaluating expression for `X_POS` or `Y_POS`, wrap that expression in Evaluate Once.

# Option 4: Third person or fixed camera using Local Player
Like Option 2, this option uses one text overall but is not visible to spectators as of patch 1.59. Like Option 3, the text will be displaced by abilities that affect FoV or put the player in third person.

You will need an expression for the following 4 values:
1. `X_POS`: The x coordinate of the onscreen position
2. `Y_POS`: The y coordinate of the onscreen position
3. `EYE`: The expresison used in the Eye Position field of the Start Camera action, with any `Event Player`s replaced by Local Player
4. `LOOK`: The expresison used in the Look At Position field of the Start Camera action, with any `Event Player`s replaced by Local Player

These expressions can be numbers, variables, or any other combination of values. Once you've determined the expressions, plug them into the action below. **Make sure to place the action in a Global rule.**

```
actions
{
	Create In-World Text(
        Local Player,
        Custom String("Text"),
        Update Every Frame(
            EYE + 100 * (
            X_POS * Cross Product(Direction Towards(EYE, LOOK), Direction From Angles(Horizontal Angle From Direction(Direction Towards(EYE, LOOK)), Vertical Angle From Direction(Direction Towards(EYE, LOOK)) - 90)) +
            (Y_POS - 0.200) * Direction From Angles(Horizontal Angle From Direction(Direction Towards(EYE, LOOK)), Vertical Angle From Direction(Direction Towards(EYE, LOOK)) - 90) +
            3 * Direction Towards(EYE, LOOK))),
        2,
        Do Not Clip,
        Visible To Position String and Color,
        Color(White),
        Visible Never);
}
```

Once you've pasted in the action, you can change the other parameters of the text to your heart's content, such as the text, scale, color, and reevaluation. Keep in mind that position reevaluation **must be on** for the text to move with the player properly, so if you want a non-reevaluating expression for `X_POS` or `Y_POS`, wrap that expression in Evaluate Once.



-----


# First person Progress bar
Progressbar where position uses the same value as option 1.

You will need an expression for the following 2 values:
1. `X_POS`: The x coordinate of the onscreen position
2. `Y_POS`: The y coordinate of the onscreen position

These expressions can be numbers, variables, or any other combination of values. Once you've determined the expressions, plug them into the action below:

```
actions
{
	Create Progress Bar In-World Text(Event Player, 0, Custom String(""), Update Every Frame(
            Eye Position(Event Player) + 100 * (
            X_POS * World Vector Of(Right, Event Player, Rotation) +
            (Y_POS - 0.200) * Direction From Angles(Horizontal Angle From Direction(Facing Direction Of(Event Player)), Vertical Angle From Direction(Facing Direction Of(Event Player)) - 90) +
            3 * Facing Direction Of(Event Player))), 1, Do Not Clip, Color(
		White), Color(White), Visible To Position Values and Color, Default Visibility);
}
```
## Local version
```
actions
{
	Create Progress Bar In-World Text(Local Player, 0, Custom String(""), Update Every Frame(Eye Position(Local Player) + 100 * (
		X_POS * World Vector Of(Right, Local Player, Rotation) + (Y_POS - 0.200) * Direction From Angles(Horizontal Angle From Direction(
		Facing Direction Of(Local Player)), Vertical Angle From Direction(Facing Direction Of(Local Player)) - 90)
		+ 3 * Facing Direction Of(Local Player))), 1, Do Not Clip, Color(White), Color(White),
		Visible To Position Values and Color, Default Visibility);
}
```

# Notes

* Make sure that Clipping is set to Do Not Clip for the Create In-World Text action. This will ensure that the text is not obscured by map geometry or the player's first person viewmodel.
* The values `100`, `3`, and `0.2` were determined by trial and error and are somewhat arbitrary. In some cases, if the player or camera is near the world boundary for Overwatch maps, the position expression may fail because the Workshop is trying to render texts outside the world boundary. In this case, you may need to change some of these values, which will also affect the scale of onscreen coordinates.

# How it works
The actual math behind this is fairly straightforward. It essentially uses the player or camera's facing direction to determine the relative x and y axes of the player's screen, then places the text on a plane parallel to the screen. The position is determined by adding the following components:
* The player or camera's eye position, which serves as starting point
* A multiple of the player or camera's facing direction. This ensures that the plane the text is placed on is parallel with the player's screen but still visible.
* The x coordinate of the desired screen position multiplied by the x axis of the player's screen. This is determined by using either World Vector Of(Right) for a player-based text or Cross Product(facing direction, y axis) for a camera-based text.
* The y coordinate of the desired screen position multiplied by the y axis of the player's screen. This is determined by rotating the facing direction vector 90 degrees upward using Direction From Angles(horizontal angle of facing direction, vertical angle of facing direction - 90).

Note that the last 3 components are all multiplied by 100 in the above implementation. This places the text very far away in world space while keeping it in the same place onscreen. The idea is to reduce the effect of camera sway from walking or ability animations.

Theoretically, this same technique should be applicable to both Create In-World Progress Bar Text and Create Icon, though the math may be a little different. It should also work for effects and beam effects to place them relative to the player's screen, though they should not be placed far away like texts/icons, and certain effects will appear to rotate as the player turns.
