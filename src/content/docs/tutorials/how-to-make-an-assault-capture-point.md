---
title: "How to make an Assault Capture Point"
---

<h1 id="table-of-contents">Table Of Contents</h1>
<ol>
	<li><a href="#lobby-setup">Lobby Setup</li>
	<li><a href="#variables">Variables</li>
	<li><a href="#initial-setup">Initial Setup</li>
	<li><a href="#players-on-point">Tracking Number of Players</li>
	<li><a href="#capturing">Capturing</li>
	<li><a href="#tick-triggers">Ticks</li>
	<li><a href="#hud-and-effects">HUD and Effects</li>
</ol>

Capture Point Demo import code: XRHDH
# Lobby Setup <span id="lobby-setup"></span>
For the purposes of this walkthrough, we will be hard-coding the location of the capture point along with its other properties such as size and capture rate.  As a result, we'll also need to restrict the lobby to only ever load one map. Here, I've chosen Workshop Island.

_Note: The following code should 100% be built upon and improved. It is only a demo_
# Variables <span id="variables"></span>
For this demo, we will be using 7 global variables:

| Variable | What it does |
| -------- | -------- |
| CP_POSITION | A vector that stores center of the capture point |
| CP_SETTINGS | An array that stores workshop settings that customize the capture point (radius, capture rate) |
| CP_PROGRESS | The capture percentage for the current tick |
| CP_RATES | An array that stores the capture rates for 0, 1, 2 and >3 players) |
| CP_TICK_LOWER | The lower bound of the current tick (0, 33, 66, or 99 in this demo) |
| CP_TICK_UPPER | The upper bound of the current tick (33, 66, 99, 100 in this demo) |
| STEP | A variable to be used in for loops |

# Initial Setup <span id="initial-setup"></span>
To start, we need a few basic components. We need the center `position`, the `radius` of the point, and a `ring effect` so we can visually show where our point is.

_Here, I've gone ahead and also initialized the workshop settings variable to hold the point radius and capture speed_
```
variables
{
	global:
		26: CP_POSITION
		27: CP_SETTINGS
}

actions
{
	"Workshop Settings to easily customize your capture point"
	Global.CP_SETTINGS = Array(Workshop Setting Integer(Custom String("Capture Point Customization"), Custom String("Radius"), 15, 5,
		20, 0), Workshop Setting Real(Custom String("Capture Point Customization"), Custom String("Capture Rate Multiplier"), 1, 1,
		10, 1));

	"Change this vector to change the capture point position"
	Global.CP_POSITION = Vector(0, 0, 0);

	"Create a ring effect to visibly show the size and location of the capture point to all players"
	Create Effect(All Players(All Teams), Ring, Color(Team 1), Global.CP_POSITION, First Of(Global.CP_SETTINGS),
		Visible To Position and Radius);
}
```
Now that we can see the point, let's add some functionality. We'll start by initializing capture progress and the starting progress bounds. Since this demo is based off the Assault mode, we will be using 3 ticks with each tick being at intervals of 33.

```
variables
{
	global:
		28: CP_PROGRESS
		30: CP_TICK_LOWER
		31: CP_TICK_UPPER
}

actions
{
	"Next, progress bar setup to display capture percentage to attacking team"
	Global.CP_PROGRESS = 0;

	"This variable will store the current target tick (33 > 66 > 100)"
	Global.CP_TICK_UPPER = 33;

	"This variable will hold the previous tick (0 > 33 > 66)"
	Global.CP_TICK_LOWER = 0;
}
```
Then, we need the rate at which attackers will capture the point. Here, we'll use an array(0, 4.125, 6.6, 8.25). These numbers were obtained by dividing the value for one tick (33) by the capture rate for 1, 2 and >3 players repectively.

_Using the `STEP` variable in a for loop, I've also multiplied each value in the capture rates array by the capture rate modifier constant from the workshop settings we created previously_

```
variables
{
	global:
		27: CP_SETTINGS
		29: CP_RATES
		32: STEP
}

actions
{
	"Objective capture rates * cap speed multiplier"
	Global.CP_RATES = Array(0, 4.125, 6.600, 8.250);

	For Global Variable(STEP, 0, 4, 1);
		Global.CP_RATES[Global.STEP] *= Global.CP_SETTINGS[1];
	End;
}
```
# Tracking Number of Players<span id="players-on-point"></span>
Before continuing to the capturing, we need to be able to count the number of living players on the capture point. This can be done by using `Count Of()`, `Filtered Array()`, and `Players Within Radius()`:

_Note: Here we are using a set radius of 15_
```
variables
{
	global:
		0: playersOnPoint
		26: CP_POSITION
}

actions
{
	Global.playersOnPoint = Count Of(Filtered Array(Players Within Radius(Global.CP_POSITION, 15, All Teams, Off), Is Alive(
		Current Array Element)));
}
```
# Capturing <span id="capturing"></span>
We have all the moving parts, now we need to put it together. In the demo, the capture progress is crammed into one `Chase Global Variable At Rate` action while the tick logic is handled by a separate rule. For understanding, let's address this by parts.

_Yes, this is just one action. Works, but could be simplified_
```
variables
{
	global:
		26: CP_POSITION
		27: CP_SETTINGS
		28: CP_PROGRESS
		29: CP_RATES
		30: CP_TICK_LOWER
		31: CP_TICK_UPPER
}

actions
{
	"Main capture logic (capture rate scales with players, destination updates each tick, stops capture progress when contesting)"
	Chase Global Variable At Rate(CP_PROGRESS, (Count Of(Filtered Array(Players Within Radius(Global.CP_POSITION, First Of(
		Global.CP_SETTINGS), Team 1, Off), Is Alive(Current Array Element))) > 0 && Count Of(Filtered Array(Players Within Radius(
		Global.CP_POSITION, First Of(Global.CP_SETTINGS), Team 2, Off), Is Alive(Current Array Element))) == 0) || (Count Of(
		Filtered Array(Players Within Radius(Global.CP_POSITION, First Of(Global.CP_SETTINGS), Team 2, Off), Is Alive(
		Current Array Element))) == 0) ? Global.CP_TICK_LOWER : Global.CP_TICK_UPPER, Count Of(Filtered Array(Players Within Radius(
		Global.CP_POSITION, First Of(Global.CP_SETTINGS), Team 1, Off), Is Alive(Current Array Element))) > 0 && Count Of(
		Filtered Array(Players Within Radius(Global.CP_POSITION, First Of(Global.CP_SETTINGS), Team 2, Off), Is Alive(
		Current Array Element))) > 0 ? 0 : (Count Of(Filtered Array(Players Within Radius(Global.CP_POSITION, First Of(
		Global.CP_SETTINGS), Team 2, Off), Is Alive(Current Array Element))) == 0 ? 6 : (Count Of(Filtered Array(Players Within Radius(
		Global.CP_POSITION, First Of(Global.CP_SETTINGS), Team 2, Off), Is Alive(Current Array Element))) >= 3 ? Last Of(
		Global.CP_RATES) : Global.CP_RATES[Count Of(Filtered Array(Players Within Radius(Global.CP_POSITION, First Of(
		Global.CP_SETTINGS), Team 2, Off), Is Alive(Current Array Element)))])), Destination and Rate);
}
```
The logic behind this is as follows:

If there is `at least one living player on the attacking team on point` `and` there are `no living players on point from the defending team`, `increase capture progress at a certain rate.` Else, if there is `at least one living player from bother the attacking and defending team on point`, `hold current capture progress.` If neither of the previous are true,`decrease capture progress.`
* The rate is dependent on the count of attacking players on point and corresponds to a value in the capture rates array.
* The increase and decrease in capture progress is capped by the upper and lower tick bounds

# Ticks <span id="tick-triggers"></span>
In the demo, we're using 3 ticks; each tick being 33 units for a total of 99 units for a full capture. In Capture, we established the conditions for which the capture progress can increase. Now, we can add triggers corresponding to each tick. In this case, we will be incrementing the upper and lower bounds of capture progress to mimic the ticks from Assault mode.
```
variables
{
	global:
		26: CP_POSITION
		27: CP_SETTINGS
		28: CP_PROGRESS
		30: CP_TICK_LOWER
		31: CP_TICK_UPPER
		32: STEP
}

rule("Ticks and capture triggers")
{
	event
	{
		Ongoing - Global;
	}

	conditions
	{
		Global.CP_PROGRESS == Global.CP_TICK_UPPER;
	}

	actions
	{
		If(Global.CP_PROGRESS == 99);
			Global.CP_TICK_UPPER = 100;
			Global.CP_TICK_LOWER = 99;
		Else If(Global.CP_PROGRESS == 100);
			Global.CP_TICK_LOWER = 100;
			For Global Variable(STEP, 0, 6, 1);
				Play Effect(All Players(Team 2), Ring Explosion, Color(Team 1), Global.CP_POSITION, First Of(Global.CP_SETTINGS) * 2);
				Wait(0.050, Ignore Condition);
			End;
			Big Message(All Players(Team 1), Custom String("Objective Lost!"));
			Big Message(All Players(Team 2), Custom String("Objective Captured!"));
			Play Effect(All Players(Team 2), Buff Impact Sound, Color(White), Players Within Radius(Global.CP_POSITION, First Of(
				Global.CP_SETTINGS), Team 2, Off), 75);
			Play Effect(All Players(Team 1), Explosion Sound, Color(White), Players Within Radius(Global.CP_POSITION, First Of(
				Global.CP_SETTINGS), Team 1, Off), 75);
			Wait(0.500, Ignore Condition);
			"Reset capture progress variables"
			Global.CP_PROGRESS = 0;
			Global.CP_TICK_UPPER = 33;
			Global.CP_TICK_LOWER = 0;
			"This is where you would trigger any events you want to happen when objective is fully captured. In this case, I'm just moving the objective below the map"
			Global.CP_POSITION = Vector(0, -100, 0);
		Else;
			Play Effect(All Players(Team 2), Buff Impact Sound, Color(White), Players Within Radius(Global.CP_POSITION, First Of(
				Global.CP_SETTINGS), Team 2, Off), 75);
			Global.CP_TICK_LOWER += 33;
			Global.CP_TICK_UPPER += 33;
		End;
		Wait(0.100, Ignore Condition);
		Loop If Condition Is True;
	}
}
```

Here we have a rule with the conditon `Global.CP_PROGRESS == Global.CP_TICK_UPPER` which triggers when the capture progress reaches the upper bound of the current tick. The general action for this condition is to increase the bounds by 33. The main special action here is when the capture progress reaches 100. This is the trigger for any actions you want to happen once the point is captured. It also resets the capture point progress.

# HUD and Effects<span id="hud-and-effects"></span>
With a working capture point, players might want to have some more information on their screen regarding capture progress, opponents on point, or simply the location of the point.

_See the demo for the player hud, in-world text, and icons_
