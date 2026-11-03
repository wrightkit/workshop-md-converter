---
title: "Weapon position data for creating effects in 1st person"
---

Data was gathered using code `A87YG` (snippet below), at FOV 103, when heroes are idle.

Heroes that dual wield (reaper, tracer, hammond) will have the position of their right gun recorded.

Formula taken from therister's _Junkenstein's Victory_ gamemode:
```
Update Every Frame(Add(Add(Add(Eye Position(Event Player), Facing Direction Of(Event Player)), Multiply(World Vector Of(Right, Event Player, Rotation), (Event Player).xoff)), Multiply(Normalize(Cross Product(Facing Direction Of(Event Player), World Vector Of(Right, Event Player, Rotation))), (Event Player).yoff)))
```

where x & y are from the table below (json is provided at the end)

Note: this **does not provide the correct positions in 3rd person** and **does not account for animations that move the weapon** (in 3rd person the position is farther forward than it should be).

## Table
Alternate names are listed for easy ctrl + F

| Hero | x | y |
| -------- | -------- | -------- |
| REAPER | 0.33 | 0.18 |
| TRACER | 0.35 | 0.14 |
| MERCY (staff) | 0.12 | 0.12 |
| MERCY (gun) | 0.23 | 0.17 |
| HANZO ^1 | 0.03 | 0.41 |
| TORBJORN (gun) | 0.1 | 0.06 |
| TORBJORN (hammer) | 0.27 | 0.06 |
| REINHARDT | 0.42 | 0.09 |
| PHARAH | 0.11 | 0.16 |
| WINSTON | 0.2 | 0.35 |
| WIDOWMAKER | 0.13 | 0.16 |
| BASTION (recon) | 0.21 | 0.15 |
| BASTION (sentry) | 0 | 0.27 |
| SYMMETRA | 0.28 | 0.19 |
| ZENYATTA ^2 | 0 | 0.4 |
| GENJI | -0.44 | 0.42 |
| ROADHOG ^3 | 0.26 | 0.15 |
| CASSIDY/MCCREE | 0.15 | 0.07 |
| JUNKRAT | 0.19 | 0.15 |
| ZARYA | 0.24 | 0.22 |
| SOLDIER | 0.15 | 0.14 |
| LUCIO | 0.3 | 0.23 |
| MEI | 0.24 | 0.13 |
| SOMBRA | 0.29 | 0.13 |
| DOOMFIST ^4 | -0.57 | 0.32 |
| ANA | 0.12 | 0.09 |
| ORISA | 0.33 | 0.19 |
| BRIGITTE | 0.92 | -0.11 |
| MOIRA | 0.79 | 0.38 |
| WRECKING BALL/HAMMOND | 0.65 | 0.33 |
| ASHE | 0.15 | 0.07 |
| ECHO fingers | 0.15 | 0.07 |
| ECHO palm | 0.78 | 0.46 |
| BAPTISTE | 0.19 | 0.11 |
| SIGMA | 0.38 | 0.13 |
|KIRIKO talismans|-0.53|0.08|
|KIRIKO kunai| 0.4|0.48|
|JUNKER QUEEN |0.22 | 0.13|
|LIFEWEAVER ^5 |0.27 | 0.18|
|RAMMATRA staff | 0.58 | -0.32 |
|ILLARI | 0.18| 0.22|
|JUNO ^6 | 0.07| 0.03|
|WUYANG/AQUA| 0.22| 0.12|
|HAZARD| 0.42| 0.19|
|FREJA| 0.22| 0.17|

^1: The tip of his arrow.
^2: Behind his interlaced fingers.
^3: Between the 2 barrels.
^4: His left hand.
^5: Healing Blossom tip of middle finger, Thorn Volley middle of
inner palm.
^6: Tip of the Blaster were the projectiles shoot out of

## JSON
Format: `"hero": [x, y]`
```
{
	"REAPER": [0.33, 0.18],
	"TRACER": [0.35, 0.14],
	"MERCY (staff)": [0.08, 0.12],
	"MERCY (gun)": [0.23, 0.17],
	"HANZO": [0.03, 0.41],
	"TORBJORN (gun)": [0.1,0.06],
	"TORBJORN (hammer)": [0.27, 0.06],
	"REINHARDT": [0.42, 0.09],
	"PHARAH": [0.11, 0.16],
	"WINSTON": [0.2, 0.35],
	"WIDOWMAKER": [0.13, 0.16],
	"BASTION (recon)": [0.21, 0.15],
	"BASTION (sentry)": [0, 0.27],
	"SYMMETRA": [0.28, 0.19],
	"ZENYATTA": [0, 0.4],
	"GENJI": [-0.44, 0.42],
	"ROADHOG": [0.26, 0.15],
	"MCCREE": [0.15, 0.07],
	"JUNKRAT": [0.19, 0.15],
	"ZARYA": [0.24, 0.22],
	"SOLDIER": [0.15, 0.14],
	"LUCIO": [0.3, 0.23],
	"MEI": [0.24, 0.13],
	"SOMBRA": [0.29, 0.13],
	"DOOMFIST": [-0.57, 0.32],
	"ANA": [0.12, 0.09],
	"ORISA": [0.33, 0.19],
	"BRIGITTE": [0.92, -0.11],
	"MOIRA": [0.79, 0.38],
	"WRECKING_BALL": [0.65, 0.33],
	"ASHE": [0.15, 0.07],
	"ECHO fingers": [0.15, 0.07],
	"ECHO palm": [0.78, 0.46],
	"BAPTISTE": [0.19, 0.11],
	"SIGMA": [0.38, 0.13],
	"SOJOURN": [0.15, 0.13],
	"KIRIKO talismans": [-0.53, 0.08],
	"KIRIKO kunai": [0.4, 0.48],
	"JUNKER QUEEN": [0.22, 0.13],
	"LIFEWEAVER": [0.27, 0.18],
	"RAMMATRA staff": [0.58, -0.32],
	"JUNO": [0.07, 0.03]
	"WUYANG": [0.22, 0.12]
	"HAZARD": [0.42, 0.19]
	"FREJA": [0.22, 0.17]
}
```
## Snippet
```
settings
{
	modes
	{
		Skirmish
		{
			enabled maps
			{
				Workshop Island Night
			}
		}
		General
		{
			Game Mode Start: Manual
			Hero Limit: Off
			Respawn Time Scalar: 30%
			Health Pack Respawn Time Scalar: 10%
		}
	}
	extensions
	{
		Buff Status Effects
	}
}
variables {
    player:
        0: option
        1: sign
        2: camPos
        3: xoff
        4: yoff
        5: heroNo
}
rule ("aroundthewooooorldaroundtheworkdolwioeiffsdgdd") {
    event {
        Ongoing - Global;
    }
    actions {
        Pause Match Time;
        "print(hostPlayer.weaponPos)"
        Create HUD Text(Local Player, Ability Icon String(Hero(Widowmaker), Button(Ultimate)), Custom String("facing direction", Null, Null, Null), Facing Direction Of(Local Player), Left, 0, Color(Red), Color(Red), Color(White), Visible To and String, Default Visibility);
        Create HUD Text(Local Player, Custom String("X", Null, Null, Null), Custom String("horizontal offset", Null, Null, Null), (Local Player).xoff, Left, 1.1, If-Then-Else(Compare((Local Player).option, >, 0), Color(Turquoise), Color(Gray)), Color(White), Color(White), Visible To String and Color, Default Visibility);
        Create HUD Text(Local Player, Custom String("Y", Null, Null, Null), Custom String("vertical offset", Null, Null, Null), (Local Player).yoff, Left, 1.2, If-Then-Else(Compare((Local Player).option, <, 0), Color(Turquoise), Color(Gray)), Color(White), Color(White), Visible To String and Color, Default Visibility);
        Create HUD Text(Local Player, Null, Null, Custom String("[{0}] - toggle selected variable (x/y)\n	emote - toggle 3rd person (fixed camera) (positions not accurate in 3rd person)\n	[{1}{2}", Input Binding String(Button(Melee)), Input Binding String(Button(Primary Fire)), Custom String("/{0}] - decrease/increase variable\n	[{1}] - fine adjustment (hold while adjusting variable)\ndying swaps you to next hero", Input Binding String(Button(Secondary Fire)), Input Binding String(Button(Interact)), Null)), Left, 3, Null, Null, Color(Gray), Visible To and String, Default Visibility);
    }
}

rule ("eachpl") {
    event {
        Ongoing - Each Player;
        All;
        All;
    }
    conditions {
        Has Spawned(Event Player) == True;
    }
    actions {
        Set Player Variable(Event Player, option, 1);
        Set Player Variable(Event Player, heroNo, Index Of Array Value(All Heroes, Hero Of(Event Player)));
        "eventPlayer.startForcingHero(getAllHeroes()[eventPlayer.heroNo])\r\n eventPlayer.weaponPos = Vector.RIGHT"
        Disallow Button(Event Player, Button(Primary Fire));
        Disallow Button(Event Player, Button(Secondary Fire));
        "updateEveryTick(eventPlayer.getEyePosition() + worldVector(eventPlayer.weaponPos, eventPlayer, Transform.ROTATION) + eventPlayer.getFacingDirection() * eventPlayer.faceMag), 0.1, EffectReeval.VISIBILITY_POSITION_AND_RADIUS)"
        Create Effect(Event Player, Sphere, Color(Aqua), Update Every Frame(Add(Add(Add(Eye Position(Event Player), Facing Direction Of(Event Player)), Multiply(World Vector Of(Right, Event Player, Rotation), (Event Player).xoff)), Multiply(Normalize(Cross Product(Facing Direction Of(Event Player), World Vector Of(Right, Event Player, Rotation))), (Event Player).yoff))), 0.01, Visible To Position and Radius);
        Create Effect(Event Player, Sphere, Color(Rose), Update Every Frame(Add(Add(Add(Eye Position(Event Player), Facing Direction Of(Event Player)), Multiply(World Vector Of(Right, Event Player, Rotation), (Event Player).xoff)), Multiply(Normalize(Cross Product(Facing Direction Of(Event Player), World Vector Of(Right, Event Player, Rotation))), (Event Player).yoff))), 0.1, Visible To Position and Radius);
    }
}

rule ("melee") {
    event {
        Ongoing - Each Player;
        All;
        All;
    }
    conditions {
        Is Button Held(Event Player, Button(Melee)) == True;
    }
    actions {
        Modify Player Variable(Event Player, option, Multiply, -1);
    }
}

disabled rule ("setface") {
    event {
        Ongoing - Each Player;
        All;
        All;
    }
    conditions {
        Is Button Held(Event Player, Button(Crouch)) == True;
    }
    actions {
        Set Facing(Event Player, Multiply(Facing Direction Of(Event Player), Vector(1, 0, 1)), To World);
    }
}

rule ("mod var") {
    event {
        Ongoing - Each Player;
        All;
        All;
    }
    conditions {
        Or(Is Button Held(Event Player, Button(Primary Fire)), Is Button Held(Event Player, Button(Secondary Fire))) == True;
    }
    actions {
        If(Is Button Held(Event Player, Button(Primary Fire)));
            Set Player Variable(Event Player, sign, -1);
        Else;
            Set Player Variable(Event Player, sign, 1);
        End;
        If(Compare((Event Player).option, >, 0));
            Modify Player Variable(Event Player, xoff, Add, Multiply((Event Player).sign, If-Then-Else(Is Button Held(Event Player, Button(Interact)), 0.01, 0.1)));
        Else;
            Modify Player Variable(Event Player, yoff, Add, Multiply((Event Player).sign, If-Then-Else(Is Button Held(Event Player, Button(Interact)), 0.01, 0.1)));
    }
}

rule ("3p") {
    event {
        Ongoing - Each Player;
        All;
        All;
    }
    conditions {
        Is Communicating Any Emote(Event Player) == True;
    }
    actions {
        If((Event Player).camPos);
            Stop Camera(Event Player);
            Set Player Variable(Event Player, camPos, Null);
        Else;
            Set Player Variable(Event Player, camPos, Eye Position(Event Player));
            Start Camera(Event Player, (Event Player).camPos, Event Player, 0);
        End;
        Set Status(Event Player, Null, Frozen, 0.1);
    }
}

rule ("you are dead, not big surprise") {
    event {
        Player Died;
        All;
        All;
    }
    actions {
        Modify Player Variable(Event Player, heroNo, Add, 1);
        Start Forcing Player To Be Hero(Event Player, Value In Array(All Heroes, (Event Player).heroNo));
        Stop Forcing Player To Be Hero(Event Player);
        Respawn(Event Player);
    }
}

```
