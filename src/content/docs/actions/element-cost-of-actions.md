---
title: "element cost of actions"
---

This includes all actions with stock values, so nothing is modified for these examples.
empty rule also includes all event types as they are all 1.

| syntax | element count |
| -------- | -------- |
| empty rule     | 1    |
| abort     | 1    |
| abort if     | 6    |
| abort if false     | 1    |
| abort if true     | 1    |
| add healthpool to player     | 2    |
| allow button    | 2    |
| apply impulse     | 8    |
| attach players     | 7    |
| big message     | 7    |
| break     | 1    |
| call subroutine     | 1    |
| cancel primary action     | 1    |
| chase global variable at rate     | 3    |
| chase global variable over time     | 3    |
| chase player variable at rate     | 3   |
| chase player variable over time     | 3    |
| clear status     | 1    |
| communicate     | 1    |
| continue     | 1    |
|  create beam effect    | 4    |
|  create dummy bot    | 16    |
|  create effect    | 5    |
| create homing projectile     | 11    |
|  create hud text    | 11    |
|  create icon    |  4   |
|  create in world text    | 9    |
| create progress bar HUD text     | 11    |
|  create progress bar in world text    | 11    |
|  create projectile    | 11    |
| create projectile effect     | 10    |
|  damage    | 2    |
|  declare match draw    | 1    |
|  declare player victory    | 1    |
|  declare round draw    | 1    |
|  declare round victory    | 2    |
|  declare team victory    | 2    |
| destroy all dummy bots     | 1    |
|  destroy all effects    | 1    |
|  destroy all hud text    | 1    |
| destroy all icons     | 1    |
|  destroy all inworld text    | 1    |
| destroy all progress bar hud text     | 1    |
|  destroy all progress bar inworld text    | 1    |
|  destroy dummy bot    | 3    |
|  destroy effect    | 1    |
|  destroy hud text    | 1    |
|   destroy icon   | 1    |
|   destroy in world text   | 1    |
|  destroy progress bar hud text    | 1    |
|  destroy progress bar in world text   | 1    |
|  detach players    | 1    |
|  disable built in game mode announcer    | 1    |
|  disable built in game mode compleation    | 1    |
|  disable built in game mode music    | 1    |
|  disable built in game mode respawning    | 1    |
|  disable built in game mode scoring    | 1    |
|  disable death spectate all players    | 1    |
|  disable death spectate target hud   | 1    |
|  disable gamemode hud    | 1    |
|  disable hero hud    | 1    |
| disable inspector recording     | 1    |
|  disable kill feed    | 1    |
|  disable messages    | 1    |
|  disable movement collision with environment    | 1    |
|  disable movement collision with players    | 1    |
|  disable nameplates    | 3    |
|  disable scoreboard    | 1    |
|  disable text chat    | 1    |
|  disable voice chat    | 1    |
|  disallow button    | 2    |
|  else    | 1    |
|   else if   | 6    |
|  enable built n game mode announcer    | 1    |
|   enable built in game mode completion   | 1    |
|  enable built n game mode music    | 1    |
|  enable built in game mode respawning    | 1    |
|  enable built in game mode scoring    | 1    |
| enable death spectate target hud     | 1    |
|  enable gamemode hud    | 1    |
|  enable gamemode in world ui    | 1    |
|  enable hero hud    | 1    |
| enable inspector recording     | 1    |
|  enable kill feed    | 1    |
|  enable messages    | 1    |
|  enable movement collision with environment    | 1    |
|   enable movement collision with players   | 1    |
|  enable nameplates    | 3    |
|  enable scoreboard    | 1    |
|  enable text chat    | 1    |
|  enable voice chat    | 1    |
|  end    | 1    |
| for global variable     | 5    |
|  for player variable    | 5    |
|  go to assemble heros    | 1    |
|  heal    | 2    |
|  if    | 6    |
|  kill    | 1    |
| log to inspector     | 5    |
|  loop    | 1    |
|  loop if    | 6    |
|  loop if condition is false    | 1    |
|  loop if condition is true    | 1    |
|   modify global variable   | 2    |
|  modify global variable at index    | 3    |
|  modify player score    | 2    |
|   modify player variable   | 2    |
|  modify player variable at index    | 3    |
|  modify team score     | 3   |
|   move player to team   | 3   |
|  pause match time    | 1    |
|  play effect     | 5    |
|  preload hero    | 2    |
|  press button    | 2    |
|  remove all health pools from player    | 1    |
|   remove health pools from player   | 1    |
|  remove player    | 1    |
|   reset player hero availability   | 1    |
|  respawn    | 1    |
|  restart match    | 1    |
|   resurrect   | 1    |
|  return to lobby    | 1    |
|    set ability 1 enabled  | 1    |
|  set ability 2 enabled    | 1    |
|   set ability charge   | 3    |
|   set ability cooldown   | 3    |
|  set ability resource    | 3    |
|  set aim speed     | 2   |
|  set ammo    | 3    |
|  set crouch enabled    | 1    |
|  set damage dealt    | 2    |
|   set damage received   | 2    |
|  set environment credit player    | 1    |
| set facing     | 7    |
|  set global variable     | 2    |
|   set global variable at index   | 3    |
|   set gravity   | 2    |
|  set healing dealt    | 2    |
|  set healing recieved    | 2    |
|  set invsible    | 1    |
|  set jump enabled    | 1    |
|  set jump vertical speed    | 2    |
|  set knockback dealt    | 2    |
|  set knockback received    | 2    |
|  set match time    | 2    |
|  set max ammo    | 3    |
|   set max health   | 2    |
|  set melee enabled    | 1    |
|   set move speed   | 2    |
|  set objective description    | 7    |
|  set player allowed heroes    | 2    |
|  set player health    | 2    |
|  set player score    | 2    |
|  set player variable    | 2    |
|  set player variable at index    | 3    |
|  set primary fire enabled    | 1    |
|  set projectile gravity    | 2    |
|  set projectile speed    | 2    |
|  set reload enabled    | 1    |
|  set respawn max time    | 1    |
|   set secondary fire enabled   | 1    |
|  set slow motion    | 2    |
|   set status   | 2    |
|  set team score    | 3    |
|  set ultimate ability enabled     | 1    |
|  set ultimate charge    | 2   |
|  set weapon    | 2    |
|  skip    | 2    |
|  skip if    | 7   |
|   small message   | 7    |
|   start accelerating   | 9   |
|  start assist    | 3    |
|  start camera    | 14    |
|  start damage modification    | 4    |
|  start damage over time    | 3    |
|   start facing   | 8    |
|  start forcing dummy bot name    | 5    |
|  start forcing player outlines    | 4    |
|   start forcing player position   | 7    |
|  start forcing player to be hero    | 2    |
|   start forcing spawn room   | 3    |
|  start forcing throttle    | 7    |
|  start gamemode    | 1    |
|   start heal over time   | 3    |
|  start healing modification    | 4    |
|  start holding button    | 2    |
|  start modifying hero voice lines    | 2    |
|   start rule   | 1    |
|  start scaling barriers    | 2    |
|   start scaling player   | 2    |
|   start throttle in direction   | 8    |
|  start transforming throttle    | 9    |
|  stop accelerating    | 1    |
|  stop all assist    | 1    |
|   stop all damage modifications   | 1    |
|   stop all damage over time   | 1    |
|   stop all heal over time   | 1    |
|  stop all healing modifications    | 1    |
|   stop assist   | 1    |
|   stop camera   | 1    |
|   stop chasing global variable   | 1    |
|   stop chasing player variable   | 1    |
|  stop damage modification    | 1    |
|  stop damage over time    | 1    |
|  stop facing    | 1    |
|  stop forcing dummy bot name    | 1    |
|  stop forcing player outlines    | 3    |
|   stop forcing player position   | 1    |
|  stop forcing player to be hero    | 1    |
|  stop forcing spawn room    | 2    |
|  stop forcing throttle    | 1    |
|  stop heal over time    | 1    |
|  stop healing modification    | 1    |
|  stop holding button    | 2    |
|  stop modifying hero voice lines    | 1    |
|  stop scaling barriers    | 1    |
|  stop scaling player    | 1    |
|  stop throttle in direction    | 1    |
|  stop transforming throttle    | 1    |
|  teleport     | 7    |
| unpause match    | 1    |
|  wait    | 2    |
|  wait until    | 2    |
|  while    | 6    |
