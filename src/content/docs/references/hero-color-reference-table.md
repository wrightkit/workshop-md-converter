---
title: "Hero color reference table"
---

==**Sort order** as they are in the <a href="/values/all-heroes/">`All Heroes`</a> array. Let's hope they don't mess this up later. **Please update** when a new hero is being released.==

<a href="#TABLE">Show me the table</a>
## QUICK COPY
* set up

```
actions
{
Global.A = Array(
Custom Color(124, 62, 82, 255),//REAPER
Custom Color(214, 145, 65, 255),//TRACER
Custom Color(236, 233, 189, 255),//MERCY
Custom Color(185, 179, 137, 255),//HANZO
Custom Color(191, 115, 110, 255),//TORBJÖRN
Custom Color(148, 161, 165, 255),//REINHARDT
Custom Color(60, 126, 204, 255),//PHARAH
Custom Color(160, 169, 186, 255),//WINSTON
Custom Color(157, 105, 166, 255),//WIDOWMAKER
Custom Color(124, 143, 122, 255),//BASTION
Custom Color(45, 187, 209, 255),//SYMMETRA
Custom Color(236, 229, 128, 255),//ZENYATTA
Custom Color(149, 239, 66, 255),//GENJI
Custom Color(179, 139, 80, 255),//ROADHOG
Custom Color(173, 90, 95, 255),//CASSIDY
Custom Color(236, 190, 82, 255),//JUNKRAT
Custom Color(231, 130, 184, 255),//ZARYA
Custom Color(109, 121, 149, 255),//SOLDIER: 76
Custom Color(132, 201, 81, 255),//LÚCIO
Custom Color(237, 147, 199, 255),//D.VA
Custom Color(09, 171, 235, 255),//MEI
Custom Color(118, 93, 189, 255),//SOMBRA
Custom Color(131, 83, 76, 255),//DOOMFIST
Custom Color(110, 137, 177, 255),//ANA
Custom Color(69, 139, 66, 255),//ORISA
Custom Color(139, 98, 94, 255),//BRIGITTE
Custom Color(151, 113, 228, 255),//MOIRA
Custom Color(219, 147, 66, 255),//WRECKING BALL
Custom Color(198, 28, 65, 255),//SOJOURN
Custom Color(105, 105, 104, 255),//ASHE
Custom Color(154, 202, 243, 255),//ECHO
Custom Color(85, 178, 204, 255),//BAPTISTE
Custom Color(212, 135, 143, 255),//KIRIKO
Custom Color(142, 181, 215, 255),//JUNKER QUEEN
Custom Color(148, 160, 165, 255),//SIGMA
Custom Color(157, 140, 208, 255),//RAMATTRA
Custom Color(224, 182, 198, 255),//LIFEWEAVER
Custom Color(220, 132, 125, 255),//MAUGA
Custom Color(183, 168, 142, 255),//ILLARI
Custom Color(54, 127, 221, 255),//FREJA
Custom Color(121, 97, 78, 255),//VENTURE
Custom Color(173, 143, 203, 255),//HAZARD
Custom Color(114, 31, 163, 255),//JUNO
Custom Color(67, 111, 210, 255),//WUYANG
Custom Color(131, 25, 30, 255)//VENDETTA
);
}
```
* indirection

```
actions
{
	Event Player.A = Global.A[Index Of Array Value(All Heroes, Hero Of(Event Player))];
}
```
<span id="TABLE"> </span>
## TABLE

| Hero | RGB || HEX |
| -------- | -------- | -------- | -------- |
|REAPER|124,62,82||#7c3e52|
|TRACER|214,145,65||#d69141|
|MERCY|236,233,189||#ece9bd|
|HANZO|185,180,137||#b9b489|
|TORBJÖRN|191,115,110||#bf736e|
|REINHARDT|148,161,165||#94a1a5|
|PHARAH|60,126,204||#3c7ecc|
|WINSTON|160,169,186||#a0a9ba|
|WIDOWMAKER|157,105,166||#9d69a6|
|BASTION|124,143,122||#7c8f7a|
|SYMMETRA|145,187,209||#91bbd1|
|ZENYATTA|236,229,128||#ece580|
|GENJI|149,239,66||#95ef42|
|ROADHOG|179,139,80||#b38b50|
|CASSIDY|173,90,95||#ad5a5f|
|JUNKRAT|236,190,82||#ecbe52|
|ZARYA|231,130,184||#e782b8|
|SOLDIER: 76|109,121,149||#6d7995|
|LÚCIO|132,201,81||#84c951|
|D.VA|237,147,199||#ed93c7|
|MEI|109,171,235||#6dabeb|
|SOMBRA|118,93,189||#765dbd|
|DOOMFIST|131,83,76||#83534c|
|ANA|110,137,177||#6e89b1|
|ORISA|69,139,66||#458b42|
|BRIGITTE|139,98,94||#8b625e|
|MOIRA|151,113,228||#9771e4|
|WRECKING BALL|219,147,66||#db9342|
|SOJOURN|198,28,65||#C61C41|
|ASHE|105,105,104||#696968|
|ECHO|154,202,243||#9acaf3|
|BAPTISTE|85,178,204||#55b2cc|
|KIRIKO|212,135,143||#d4878f|
|JUNKER QUEEN|142,181,215||#8eb5d7|
|SIGMA|148,160,165||#94a0a5|
|RAMATTRA|157,140,208||#9d8cd0|
|LIFEWEAVER|224,182,198||#e0b6c6|
|MAUGA|220,132,125||#dc847d|
|ILLARI|183,168,142||#b7a88e|
|FREJA|54,127,221||#367fdd|
|VENTURE|121,97,78||#79614e|
|HAZARD|173,143,203||#ad8fcb|
|JUNO|114,31,163||#721fa3|
|WUYANG|67,111,210||#436fd2|
|VENDETTA|131,25,30||#83191e|
|DOMINA|105,222,239||#69deef|
|EMRE|199,12,12||#c70c0c|
|ANRAN|232,26,5||#e81a05|
|MIZUKI|154,255,199||#9affc7|
|JETPACK CAT|170,179,192||#aab3c0|
