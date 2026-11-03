---
title: "Event Ability"
---

## Description

The ability for the event currently being processed by this rule associated by button.
\
This works with the following events:

- Player Earned Elimination
- Player Dealt Final Blow
- Player Dealt Damage
- Player Took Damage
- Player Died
- Player Dealt Healing
- Player Received Healing
- Player Dealt Knockback
- Player Received Knockback

## Snippet

```
Event Ability;
```

## Properties

**Returns**: _<span style="color: #c678dd">Button</span>_
**Parameters**: _None_

## Bugged Abilities
These abilities do not work with `Event Ability` due to a bug where it returns with an incorrect value.
#### Abilities that return "Null"
* Symmetra's sentry turret
* Ramattra's primary fire
* Junker Queen's primary fire
* Mauga's primary and secondary fire
* Venture's primary fire
* Lifeweaver's primary and secondary fire
* Lifeweaver's Tree
* Lifeweaver's Life Grip
* Lifeweaver's Rejuvinating Dash
* Lifeweaver's everything, apparently. They just don't like him
* Illari's healing pylon
* Anran's primary fire
* Kiriko's primary and secondary fire
* Freja's take aim explosion
* Wuyang's primary fire
* Wuyang's secondary fire
* Jetpack Cat's primary fire
* Sombra's virus damage over time
  * Impact returns ability 1

#### Abilities that return as other abilities
* Junker Queen's melee while Gracie is equipped registers as her secondary fire
* Junker Queen's bleed damage returns the ability that intially triggered it
	* May be intended
* Illari's secondary fire returns primary fire
* Vendetta's projectiles returns primary fire
* Mei's ability 1 perk does not return null
