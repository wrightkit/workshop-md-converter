---
title: "OW2 Workshop Changes/Bugs"
---

### Lobby Settings

- Seasonal event game modes to choose from as templates (like Lucioball, Yeti Hunter, etc) are no longer available (were available in OW1).
- Multiple copies of game modes (e.g. Push) are shown in mode settings.
	- These copies correspond to the 5v5, 6v6, and Limited-Time Mode versions (if applicable) of these game modes.
	- The existence of these duplicate game modes makes pasting these modes problematic due to some versions of the game mode not supporting certain game mode settings.
- Route 66 is also an available map for FFA/TDM, but not for Bounty Hunter.
- [Workshop Setting](/references/workshop-settings/) categories are sorted alphabetically, whereas before it was sorted in order of declaration in the script.
- Setting a Workshop String Combo default to something other than 0 will cause the first value to not be able to be selected from within the UI.

### Hero Setting Changes

- [Ability Cooldown](/values/ability-cooldown/)/[Charge](/values/ability-charge/)/[Resource](/values/ability-resource/) values are incorrectly returning [null](/values/null/) or 0 for some abilities. The actions also have no effect on these abilities. See below for the affected abilties.
- The following abilities cooldown request just returns 0:
  - Baptiste's Immortality Field
  - Soldier: 76's Helix Rockets
  - Tracer's Recall
  - Genji's Swift Strike
  - D.Va's Micro Missiles
  - Lifeweaver's Rejuvenating Dash
	- Ramattra's Void Barrier
- Abilities with charges also return 0 when requesting their cooldown:
  - Reinhardt's Fire Strike
  - Zarya's Particle Barrier & Projected Barrier
  - Tracer's Blink
  - Sojourn's Power Slide (with Dual Thrusters perk)
  - Symmetra's Sentry Turret
  - Junkrat's Concussion Mine
  - Brigitte's Repair Pack
- [Player Stat](/values/player-stat/) doesn't track "Ultimates Used" for the following heroes:
	- Reinhardt
	- Roadhog
	- Sombra
	- Torbjörn
	- Widowmaker
	- Kiriko
	- (Echo) _(her ultimate itself does not count toward the statistic but Ultimates she uses while copying other heroes do, as long as they are not on this list)_
- Roadhog's Ability 1 cooldown starts the moment the button is pressed, but is restarted when the cast animation for the ability ends.
- Setting ammo / max ammo doesn't work for some heroes, see below for all affected heroes.
- "Secondary fire" has no effect for disabling Sojourn's secondary, you must use "Railgun alt fire" in custom game settings.
- When a hero's max health is reduced, their health will exceed their max health if they die and get [Resurrected](/actions/resurrect/). This makes it look as if the target is taking no damage as long as their health is above max health.
	- **Workaround**: Use [Set Player Health](/actions/set-player-health/) to set the player's health to their max when it goes above max.
- Ammo and Max Ammo fails on some heroes. See below for affected heroes.
- Event Ability fails for some heroes when primary fire was used. See below for affected heroes.
- Mercy's Caduceus Blaster is now considered as the first weapon (Clip 0)
-  The value for Juno's Glide Boost Duration Scalar is removed when copying settings from the UI
-  [`Is In Alternate Form`](/values/is-in-alternate-form/) always returns False or Null for Ramattra when using Nemesis Form.
	-  **Possible Workaround**: Use [Is Using Ability 1](/values/is-using-ability-1/) for regular Nemesis Form and [Is Using Ultimate](/values/is-using-ultimate/) for Nemesis Form during Annihilation.
-  Hanzo and Zenyatta _(Ability 1)_ and _(Ability 2)_ are swapped on console.
-  [Is Reloading](/values/is-reloading/) always returns false for Lifeweaver.
-  As of Season 16 exporting code changes all hero settings that were previously On/Off to Enabled/Disabled. This can not be reimported into the game unless you manually change them back to On/Off
-  Using Set Ability Resource on Illari's secondary fire works in the opposite way: The percentage value represents the amount that is missing instead of the amount that is filled. For example, setting the resource to 1% will actually set the resource to 99%. Reading the ability resource will also be inverted.

### Workshop Text Changes

- As of update 2.1.0.2.106273, **HUDs work again!**. However, they are centered relative to other HUDs in the same position.
- [In-world texts](/actions/create-inworld-text/) are now centered lower than usual if given a position. Before, they would float above the position, now they float nearly or totally centered at the position.
- [Small Messages](/actions/small-message/) may not appear properly for some reason.
- The default font for small messages and in-world texts has been changed.

### Settings as Text Formatting Changes
- When copying a game mode as text, maps now have a number at the end, which represents the map variant (e.g. evening/morning). Omitting this number when pasting will enable all variants of the map.

### Maps

- Team Deathmatch can no longer be played on Havana.

### Values

- [Is Waiting For Players](/values/is-waiting-for-players/) does not evaluate client-side, meaning that visual elements (such as effects and texts) will evaluate this value as always being false.
	- **Workaround:** Dedicate a global variable to tracking this value and manually update it within a rule.

### Other
- Conditions checking for chased variables will not update until the chase has reached its destination. If chasing indefinitely (e.g. to `99999`), the rule will never fire.
  - This affects both rule conditions as well as actions like [Wait Until](/actions/wait-until/).
- [Disable Game Mode In-World UI](/actions/disable-game-mode-inworld-ui/) does not affect the icon over the Push robot.

### Setting ammo & max ammo
Last updated:  13 August 2026 (13/08/26)
==Heroes not in the table work fine==
Readable = value can be read from workshop, e.g. the max ammo value

| Hero | Set ammo works? | Set max ammo works? | Ammo readable? | Max ammo readable? | Notes |
| -------- |:--------:|:--------:|:--------:|:--------:|:--------:|
| Ana | ✅ | ❌  | ✅ | ✅|
| Anran | ✅ | ❌  | ✅ | ✅| Secondary Fire Does not read ammo or max ammo and cannot be set |
| Ashe | ✅ | ❌ | ✅ | ✅ |
| Bastion | ✅ | ❌  | ✅ | ✅| Set max ammo only works with Secondary Clip which isn't used |
| Cassidy | ✅ | ❌ | ✅ | ✅ |
| Junkerqueen | ✅ | ❌ | ✅ | ✅ |
| D.VA (Pilot Form) | ✅ | ❌ | ✅ | ✅|
| D.mon (Pilot Form) | ❌ | ❌ | ❌ | ❌ | Set Ammo will disable primary fire for both mech and pilot form, also disables Fusion Repeater Fire |
| Doomfist | ✅ | ❌ | ✅ | ✅ | Set Ammo works but due to the perks changes the animation is weird and the overfill ammo is shown all the time if over default max ammo (4)
| Domina | ✅ | ❌  | ✅ | ✅|
| Echo | ✅ | ❌ | ✅ | ✅ |
| Emre | ✅ | ❌ | ✅ | ✅ |
| Freja | ✅ | ❌ | ✅ | ✅ |
| Hazard | ✅ | ❌ | ✅ | ✅ |
| Illari | ✅ | ❌ | ✅ | ✅ |
| Jetpack Cat | ❌ | ❌ | ✅ | ✅ |
| Junker Queen | ✅ | ❌ | ✅ | ✅ |
| Juno | ✅ | ❌ | ❌ | ❌ |
| Kiriko | ✅ | ❌ | ❌ | ❌| Set Ammo for clip 0 (Ofuda) , affects clip 1 (Kunai). |
| Lifeweaver | ✅ | ❌  | ❌ | ❌|  Applies to both weapons |
| Mauga | ❌ | ❌ | ❌ | ❌ | Neither Clip Works |
| Mei | ✅ | ❌ | ✅ | ✅ |
| Mizuki | ✅ | ✅ | ❌ | ❌ |
| Orisa | ✅ | ❌  | ❌ | ❌| Orisa still has ammo, it's simply hidden from the player, and only shown as the heat meter. By using Set Ammo, you can set the heat level, and setting Max Ammo no longer works. Ammo regenerates at a constant rate. |
| Pharah | ✅ | ❌  | ✅ | ✅|
| Ramattra | ✅ | ❌  | ✅ | ✅|
| Reaper | ✅ | ❌  | ✅ | ✅|
| Roadhog | ✅ | ❌ | ✅ | ✅ |
| Shion | ✅ | ❌ | ❌ | ❌ |
| Sierra | ✅ | ❌ | ✅ | ✅ |
| Sojourn | ✅ | ❌ | ✅ | ✅ |
| Sombra | ✅ | ❌  | ✅ | ✅|
| Venture | ✅ | ✅ | ❌ | ❌ |
| Widowmaker | ✅ | ❌ | ✅ | ✅ |
| Wuyang | ❌ | ❌  | ✅ | ✅|
| Zarya | ✅ | ❌  | ✅ | ✅|


### Setting Ability Cooldown
Last updated: 27 May 2026
This table lists heroes who contain abilities that are unaffected by the `Set Ability Cooldown` action.
==Heroes not in the table work fine==
⏹️ means Not Applicable
⚠️ means under certain conditions

| Hero | Secondary Fire | Ability 1 | Ability 2 | Notes |
| -------- | -------- | -------- | -------- | -------- | -------- |
| Anran     | ⏹️      | ⚠️      | ✅      | Inferno Rush Cooldown can only be changed when there are less than 2 charges     |
| Brigitte     | ✅      | ✅      | ❌      | Repair Packs cooldown can’t be set but the charges can     |
| D.va     | ✅      | ✅      | ❌      |      |
| Emre     | ⏹️      | ✅      | ❌      |      |
| Freja     | ⏹️      | ⚠️      | ✅      |   Quick Dash Cooldown can only be changed when there are less than 2 charges   |
| Genji     | ⏹️      | ⚠️      | ✅      | Swift Strike cooldown cannot be changed unless it is currently on cooldown. Attempting to change it while off cooldown causes it to appear on cooldown but it is actually still usable.      |
| Junkrat     | ⏹️      | ❌      | ✅      |   Concussion Mine Charges can be set |
| Lifeweaver      | ✅     | ❌      | ✅     | Tested with "Manual Weapon Swap" control scheme. Ability 1 in this setting is Rejuvenating Dash  |
| Mercy      | ⏹️     | ✅      | ✅     | Flash Heal Cooldown cannot be set  |
| Mizuki      | ⚠️      | ✅      | ✅     | Healing Kasa will go on cooldown when on 2 charges, but it won’t display the cooldown |
| Ramattra      | ⚠️      | ✅      | ✅      | Secondary Fire cooldown cannot be changed unless it is currently on cooldown. Only applies to Omnic Form.      |
| Reinhardt      | ✅     | ✅      | ✅     | Setting Fire Strike cooldown works fine, despite being on a charge. Shield Slam cooldown is also able to be set    |
| Soldier: 76      | ⚠️      | ❌      | ✅      | Secondary Fire cooldown cannot be changed unless it is currently on cooldown. Attempting to change it while off cooldown causes it to appear on cooldown but it is actually still usable.      |
| Symmetra      | ⏹️     | ❌       | ⚠️     | Teleporter Cooldown cannot be changed while it is in use, this also applies to hovering barrier   |
| Zarya      | ⏹️     | ✅      | ✅     | Setting Barrier cooldown works fine, despite being on a charge.     |
| Zenyatta      | ⏹️     | ❌      | ❌     | Ability 1 & 2 don't have a cooldown normally so it cannot be changed.    |


### Setting Ability Resource
This table lists heroes who contain abilities that are unaffected by the `Set Ability Resource` action.
==Heroes not in the table work fine==

| Hero | Button |
| -------- | -------- |
| Doomfist     | Unknown (Possibly Secondary Fire or Ability 2)      |
| Orisa           | Primary Fire (works as ammo, see above)                |
| Sojourn       | Secondary Fire                                                         |
| Hazard        | Secondary Fire                                                         |
| Wuyang      | Secondary Fire                                                         |

### Reading Event Ability
Last updated: 07 October 2026
This table lists heroes whose Event Ability cannot be read for certain abilities and results in with null instead.
==Heroes not in the table work fine==

| Hero | Button(s) |
| -------- | -------- |
| Venture | Primary Fire |


### [Create Projectile](/actions/create-projectile/) and [Create Homing Projectile](/actions/create-homing-projectile/) issues
When the action's Player argument is not Null and the actual set owner (Bot or Player) leaves the game or is swapped around while the owner's projectile's lifetime did not expire, the following issues arises:
- Projectiles only visually disappear (ghost entity)
- Occupy a counter for [Entity Count](/values/entity-count/) without ever decreasing the entire match
- Due reaching the maximum allowed amount of Entities with this issue easily, it throws away the creativity and control over great projects.

==Attempted workarounds are==:
- Setting the Player(Owner) argument to Null
- Ask and beg any Players to not leave or deny moving requests
- Using [Create Projectile Effect](/actions/create-projectile-effect/) instead of the problematic and handle the logic with your own algorithmns


### Workshop UI & Season 3 - Specific issues
- When searching for a value, you have to click the search bar before typing. (When the dropdown appears you should be able to start typing directly)
- When arrays are present in the Inspector, they do not displace other values out of their visual space, resulting in overlap.
- Opening any other menu while the Inspector is open will show both the Inspector and the other menu simultaneously (such as pressing 'L' to open the lobby, or 'O' for the socials menu). Under some circumstances you will be unable to close the Inspector after changing menus.
- The game is prone to crashing with a "Unexpected error"-popup, like when editing (medium-large?) rules (example: https://discord.com/channels/570672959799164958/1074803292963622963 ).
- Under some (unknown?) circumstances when trying to paste code, you will recieve an error message about the Workshop settings not allowing certain letters, despite it not containing such letters. Exiting the lobby and creating a new one will allow you to paste the code without errors.

### Effects
- The Good Beam effect is still replaced by the Nemesis Mercy skin's damage boost beam. Its color cannot be changed.

(Outlines)
- Outlines do not work consistantly meaning they only tend to work correctly when charater is reloaded(Like by dying). Some Actions may cause it to fade.
