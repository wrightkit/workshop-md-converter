---
title: "Forcing Perks in Non-Supported Modes"
---

> ⚙️
> ---
> _==In Overwatch, Perks are upgrades to heroes' abilities that are unlocked throughout a match. This article provides documentation on how to force Perks for non-supported modes.==_

<br>

# ==Content==
1. [Non-Supported Modes](#non-supported-modes)
2. [Forcing Perks](#enabling-perks)
3. [Perk Functionality](#perk-func)

<a id="non-supported-modes"></a>
# ==Non-Supported Modes==
==Non-Supported Modes== are defined as modes that do not include a =="Enable Perks"== setting or the setting does absolutely nothing when enabled.

<a id="enabling-perks"></a>
# ==Forcing Perks==
To force Perks for Non-Supported Modes, the =="Enable Perks"== setting must be manually written in the ==General== mode settings:

```cpp
settings
{
	modes
	{

		Stadium

		General
		{
			Enable Perks: On
		}
	}
}
```

<a id="perk-func"></a>
# ==Perk Functionality==
Forcing Perks in a Non-Supported Mode does not guarantee that they will work properly. Below is a list of modes that have been checked for perk functionality:

<table>
  <tr>
    <th>Non-Supported Mode</th>
    <th>Perk Functionality</th>
		<th>Notes</th>
  </tr>
  <tr>
    <td>Stadium</td>
    <td>⚠️Partial</td>
		<td>Perk progress does not transfer between rounds.</td>
  </tr>
  <tr>
    <td>Overwatch: Classic</td>
    <td>❌None</td>
		<td>Perks show up in Hero Info but perk progress is not visible on the player's nameplate.</td>
  </tr>
	<tr>
    <td>Winston's Beach Volleyball</td>
    <td>✅Full</td>
		<td>Perk progress cannot be gained normally as the mode does not allow players to damage/heal.</td>
  </tr>
	<tr>
		<td>Mirrorwatch</td>
    <td>✅Full</td>
		<td></td>
  </tr>
	<tr>
		<td>Lúcioball</td>
    <td>✅Full</td>
		<td>Perk progress cannot be gained normally as the mode does not allow players to damage/heal.</td>
  </tr>
	<tr>
    <td>Junkenstein's Revenge</td>
    <td>✅Full</td>
		<td></td>
  </tr>
</table>
> **==Definitions:==**
> ==Full:== Perks are enabled, and players can gain perk progress (through normal damage/healing or Workshop damage/healing).
> ==Partial:== Perks are enabled, but limited in functionality.
> ==None:== Perks are enabled, but players cannot gain perk progress.
