---
title: "Editor control directives: @if, @for, and @each"
---

> <span style="color: red">‼️ This page is very much still a work in progress. Please come back later. ‼️</span>

### Table of Contents

- [What are they?](#what-are-they)
- [@if](#if)
  - [Syntax](#if__syntax)
    - [Condition](#if__syntax__condition)
  - [Examples](#if__examples)
- [@for](#for)
  - [Syntax](#for__syntax)
  - [Examples](#for__examples)
- [@each](#each)
  - [Syntax](#each__syntax)
  - [Examples](#each__examples)

## What are they?
Control directives are pieces of code that change what the output of the Editor will be. They are similar in functionality to macros in C, Rust, or other compiled programming languages.

Directives can be used, together with [Mixins](/workshop-codes/mixins/), to avoid impacting performance, the variable or element count, or having to maintain things manually.

<code class="directive">@if</code>, <code class="directive">@for</code>, and <code class="directive">@each</code> are **not** replacements for the Workshop's [`If()`](/actions/if/), [`For Global Variable()`](/actions/for-global-variable/)/[`For Player Variable()`](/actions/for-player-variable/) and other control Actions. One important distinction is that these directives evaluate before reaching the in-game Workshop. This means:

- The in-game Workshop only gets the output of the directives.
- The output of the directives doesn't get updated with game updates. You have to change or recompile your mode for new features to take effect.

With that said, let's look at some directives:

# <span class="directive">@if</span>

If the condition is true, replace the directive with the contents of the "true" block in the output; otherwise replace it with the contents of the "false" block in the output, or with nothing if there is no false block.

<div id="if__syntax"></div>
## Syntax

```
@if (condition) {
  true block
}

@if (condition one) {
  condition one is true
} @else if (condition two) {
  condition two is true
} @else {
  both conditions are false
}
```

<div id="if__syntax__condition"></div>
### Condition

The condition can contain expressions similar to the ones in the [Compare()](/values/compare/) Workshop Action, but with some additions.

TODO:
- Supported operations table
- Complex/nested operations

<div id="if__examples"></div>
## Examples

> If anyone can come up with a good, real world example that stands on its own (e.g. doesn't use <span class="directive">@mixin</span>s), please let me know
> \- Netux

TODO:
- Better basic example
- Example for checking empty mixin values

# <span class="directive">@for</span>
Repeat the contents of the directive a certain amount of times, from a starting number to a end number. Use `For.(control variable name)` to access the current iteration number.

<div id="for__syntax"></div>
## Syntax

```
// Exclusive: current will go form start to end - 1 (excluding end)
@for (current from start to end) {
  Current value: For.current
}

// Inclusive: current will go form start to end (including end)
@for (current from start through end) {
  Current value: For.current
}

// Control variable defaults to `i`.
// The "from" at the start is also optional.
@for (start to end) {
  Current value: For.i
}
```

<div id="for__examples"></div>
## Examples

```
@for (countdown from 10 through 1) {
	Small Message(For.countdown);
	Wait(1, Ignore Condition);
}
```
Renders as:
```
	Small Message(10);
	Wait(1, Ignore Condition);
	Small Message(9);
	Wait(1, Ignore Condition);
// ...
	Small Message(2);
	Wait(1, Ignore Condition);
	Small Message(1);
	Wait(1, Ignore Condition);
```

# <span class="directive">@each</span>
Repeat the contents of the directive for each possible value of a workshop Constant or a custom list. Use `Each.(control variable name)` to access the current value, and `Each.(control variable index name)` to access the index of that value in the given iterable (similar to <span class="directive">@for</span>).

<div id="each__syntax"></div>
## Syntax

```
// Iterate over a Constant from the Wiki. E.g. Constant.Button.
@each (value, index in Constant.Workshop Constant) {
  Each.index : Each.value
}

// Iterate over a custom list. E.g. [1, Custom String("Hello"), Hero(Lúcio), Button(Ability 1)]
@each (value, index in [comma separated list of values]) {
  Each.index : Each.value
}

// Index control variable is optional. Defaults to `i`.
@each (value in someIterableAsShownAbove) {
  Each.i : Each.value
}
```

<div id="each__examples"></div>
## Examples

```
@each (button from Constant.Button) {
	Disallow Button(Event Player, Button(Button.button));
}
```
Renders as:
```
	Disallow Button(Event Player, Button(Ability 1));
	Disallow Button(Event Player, Button(Ability 2));
	Disallow Button(Event Player, Button(Crouch));
// ...
	Disallow Button(Event Player, Button(Secondary Fire));
	Disallow Button(Event Player, Button(Ultimate));
```

TODO:
- Example with custom iterable (\[a, b, c, ...])
- Nesting example
