---
title: "Workshop Settings"
---

# Jump To: <span id="table-of-contents"></span>

- <a href=#overview>Overview</a>
- <a href=#general-usage>General Usage</a>
- <a href=#setting-types>Types of Workshop Settings</a>
	- <a href=#combo>Combo</a>
	- <a href=#hero>Hero</a>
	- <a href=#integer>Integer</a>
	- <a href=#real>Real</a>
	- <a href=#toggle>Toggle</a>

---
# Overview <span id="overview"></span>
Oftentimes, a Workshop developer may wish to allow the lobby host to customize certain aspects of their Workshop mode without requiring said host to open up the Workshop rules. The Workshop Settings values address this issue by introducing a new custom submenu of options for lobby hosts.

![](https://i.imgur.com/NqPZWg5.png)

![](https://i.imgur.com/JHWssOy.png)

# General Usage <span id="general-usage"></span>
A Workshop Setting is created when a Workshop Setting value is used within the Rules of a Workshop mode. The submenu itself automatically shows up as long as one or more Workshop Settings are included in the Rules of a Workshop mode.

All Workshop settings contain a Name field, and no two Workshop Setting values can share the same name. Within the Workshop script, a Workshop Setting value will evaluate to a value depending on what type of Workshop Setting it is (see <a href=#setting-types>Types of Workshop Settings</a>.)

![](https://i.imgur.com/YjayFGn.png)

Workshop Settings are grouped by their Category field (case-sensitive). Categories appear in the order that they are listed in the script. Within a Category, each setting is ordered first by its sort order (bigger sort order = lower on the screen), then alphanumerically.


# Types of Workshop Settings <span id="setting-types"></span>

## Combo<span id="combo"></span>
_Workshop Settings Menu_
![](https://i.imgur.com/d7lpCn7.png)

_Workshop Editor Example_
![](https://i.imgur.com/0xekLFv.png)
![](https://i.imgur.com/1IiSrgZ.png)

A Workshop Setting Combo is used to define a list of strings which the host may choose from. The string selected is then communicated to the Workshop mode as the index of the string selected, with the first item being index 0.

For example, if the Workshop mode presents options `"Option A"`, `"Option B"`, and `"Option C"`, in that order, and the host selects `"Option B"`, the Workshop Setting will evaluate internally to `1`.

_Full Wiki Article: Workshop Setting Combo_
## Hero<span id="hero"></span>
_Workshop Settings Menu_
![](https://i.imgur.com/OChqXaY.png)

_Workshop Editor Example_
![](https://i.imgur.com/OKgBWzI.png)

A Workshop Setting Hero value is used to select a hero from the roster of available heroes. This value will evaluate to a Hero value.

_Full Wiki Article: Workshop Setting Hero_

## Integer<span id="integer"></span>
_Workshop Settings Menu_
![](https://i.imgur.com/x0F8Xxn.png)

_Workshop Editor Example_
![](https://i.imgur.com/enKSmdN.png)

A Workshop Setting Integer allows the lobby host to select a whole number from a range of whole numbers (limits included). The value will evaluate to a whole number.

_Full Wiki Article: Workshop Setting Integer_

## Real<span id="real"></span>
_Workshop Settings Menu_
![](https://i.imgur.com/9BUNsfb.png)

_Workshop Editor Example_
![](https://i.imgur.com/D7wlpmR.png)

A Workshop Setting Real allows the lobby host to select any real number from a range of numbers (limits included). The value will evaluate to a real number.

_Full Wiki Article: Workshop Setting Real_

## Toggle<span id="toggle"></span>
_Workshop Settings Menu_
![](https://i.imgur.com/QNGps0E.png)

_Workshop Editor Example_
![](https://i.imgur.com/BMRQAZ2.png)

A Workshop Setting Toggle allows the lobby host to toggle something On or Off. The value will evaluate to True if the setting is turned On, and False if the setting is turned Off.

_Full Wiki Article: Workshop Setting Toggle_

## Full Workshop Code:
```
rule("Rule 1")
{
	event
	{
		Ongoing - Global;
	}

	actions
	{
		Global.A = Workshop Setting Combo(Custom String("Category Name Here"), Custom String("Combo"), 0, Array(Custom String("Option 1"),
			Custom String("Option 2"), Custom String("Option 3")), 0);
		Global.B = Workshop Setting Hero(Custom String("Category Name Here"), Custom String("Hero"), Ana, 0);
		Global.C = Workshop Setting Integer(Custom String("Category Name Here"), Custom String("Integer"), 0, 0, 100, 0);
		Global.D = Workshop Setting Real(Custom String("Category Name Here"), Custom String("Real"), 0, 0, 100, 0);
		Global.E = Workshop Setting Toggle(Custom String("Category Name Here"), Custom String("Toggle"), False, 0);
	}
}
```
