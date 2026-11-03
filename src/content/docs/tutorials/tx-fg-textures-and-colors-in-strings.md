---
title: "TX / FG: Textures and Colors in Strings"
---

> _In Overwatch, textures and colored text are represented by a special code known as a \<TX> code and \<FG> code respectively. Normally, these codes are sanitized in strings by the Workshop. This article will go over a method of bypassing this check to allow for the use of any texture / color within strings._
>
> _Credits to **==Zezombye==** for discovering this method!_

==**Contents**==
- [Mechanism](#mechanism)
- [Implementation](#implementation)
- [Use Cases](#use-cases)
	- [TX Codes](#tx-codes)
	- [FG Codes](#fg-codes)
- [Trivia](#trivia)
- [References](#references)

<a id="implementation"></a>
# **Implementation**
The following code snippet allows for the use of a escaped `<` character stored in a variable. [==\[1\]==](#references)

```
variables {
    global:
        0: bracket
}
rule ("<tx0C0000000001F70D> <fgFFFF00FF>Setup <­tx> / <­fg> Code</fg>") {
    event {
        Ongoing - Global;
    }
    actions {
        "Script Created By Zezombye.\nMore Info: https://workshop.codes/wiki/articles/tx-reference-sheet"
        Create Dummy Bot(All Heroes, If-Then-Else(Number Of Slots(Team 1), Team 1, If-Then-Else(Number Of Slots(Team 2), Team 2, True)), False, Null, Null);
        Start Forcing Dummy Bot Name(Last Created Entity, Custom String("­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­〼", Null, Null, Null));
        Set Global Variable(bracket, String Split(First Of(Last Created Entity), Empty Array));
        Start Forcing Dummy Bot Name(Last Created Entity, Custom String("­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­ࡀ", Null, Null, Null));
        Set Global Variable(bracket, String Slice(String Replace(Custom String("­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­­〼", Null, Null, Null), Global.bracket, First Of(Last Created Entity)), 63, True));
        Destroy All Dummy Bots;
        "<fgF0FF00FF>Hello <tx0C00000000005A0B> <fg00FFF0FF>World"
        Create HUD Text(Local Player, Custom String("{0}fgF0FF00FF>Hello {0}tx0C00000000005A0B> {0}fg00FFF0FF>World", Global.bracket, Null, Null), Null, Null, Left, Null, Color(White), Null, Null, Visible To, Visible Always);
    }
}
```
> A rule that stores the escaped `<` character in a variable by using a dummy bot. A HUD Text is then created using the character as part of a `<TX>` and `<FG>` code.

<a id="mechanism"></a>
# **Mechanism**
To prevent the use of \<TX> and \<FG> codes, strings are sanitized in the workshop with backslashes, where `<` gets replaced by `\<`. This is how the engine distinguishes text from an actual texture. [==\[2\]==](#references)

Dummy bot names have a limit of 127 bytes, and cuts off the string indiscriminately. [==\[1\]==](#references) We can change the name of a dummy bot via the [Start Forcing Dummy Bot Name](/actions/start-forcing-dummy-bot-name/) action.

<a id="use-cases"></a>
# **Use Cases**
<a id="tx-codes"></a>
## \<TX> Codes
\<tx> codes can be used in strings to show textures such as icons.
A \<tx> code is in the format `<tx[0C]>` where `[0C]` is a 16 character hexadecimal string (e.g. `<tx0C0000000002DD5D>`).

View a reference for codes:
 [TX Reference Sheet](/references/tx-reference-sheet/)

View in-game all codes:
[TX Browser](https://workshop.codes/8B9H1)

<a id="fg-codes"></a>
## \<FG> Codes
\<fg> codes can be used in strings to change the color of text (e.g. `"<fg6C48C5FF>Hello World!"`)
A \<fg> code is in the format `<fg[RR][GG][BB][AA]>` where `[RR][GG][BB][AA]` is the color in hexadecimal with four channels of color. (e.g. `<fg6C48C5FF>` corresponds to the color `(108, 72, 197, 255)` as RGBA values).

<a id="trivia"></a>
# **Trivia**
- This method has not been patched as of August 8, 2025 _(version 2.17.1.1 - 140729)_.
- \<tx> and \<fg> codes were originally patched to prevent abuse from players crashing the game with it. [==\[3\]==](#references)
- A similar bug appeared globally with the introduction of Season 17, where the game stopped sanitizing the codes properly. This was patched with the August 5, 2025 patch.

<a id="references"></a>
# **References**
1. ["\<TXC00000000000003> shenanigans"][1] Zezombye on Discord, September 2024
2. ["\<tx> was a big problem tho. now there's a whole string sanitization system that scans like every string that can be input from a user"][2] Magzie on Discord, March 2022
3. ["people were crashing the game with it"][3] Magzie on Discord, May 2020

[1]: https://discord.com/channels/570672959799164958/1280745526257647689
[2]: https://discord.com/channels/570672959799164958/570672959799164964/956638540320624700
[3]: https://discord.com/channels/570672959799164958/570672959799164964/706575501875085313
