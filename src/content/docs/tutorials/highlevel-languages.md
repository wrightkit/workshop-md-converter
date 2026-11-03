---
title: "High-level languages"
---

# Table of Contents
- [What is a High-Level Language?](#what-is-a-high-level-language)
- [Why use a High-Level Language?](#why-use-a-high-level-language)
- [List of High-Level Languages](#list-of-high-level-languages)
  - [OverPy](#overpy)
  - [OSTW](#ostw)
- [When Should I Use A High-Level Language, and Which One?](#when-should-i-use-a-high-level-language-and-which-one)

<span id="what-is-a-high-level-language"></span>

# What is a High-Level Language?

A high-level language (HLL for short) is a programming language made from scratch to suit the Workshop. These languages have source code which is written in an external file and compiled via an external program. The resulting Workshop native code is then pasted into the Workshop via the clipboard. As such, these languages can only be used on PC, but the resulting modes are functionally identical to normal Workshop modes, and thus can be played on any platform.

<span id="why-use-a-high-level-language"></span>

# Why use a High-Level Language?

Since source code is saved in an external file, and usually edited by external editors (usually Visual Studio Code), high-level languages gain a number of advantages over coding in-game (often referred to as UI coding). The advantages of working in external files include:

- Offline editing
- Much lower chance of overwriting work (looking at you, presets)
- Find & Replace to easily mass edit certain snippets of code
- Possibility of using version control systems such as Git
  - Version control systems allow developers to track changes, restore or retrieve previous versions of code, and manage working in teams.
- Syntax highlighting (via code editing software)
- Easier sub-expression manipulation
  - For example, if I put `x + 5` in as the argument for an action, then I realize I want `2 * (x + 5)`, in UI, I would have to rewrite the entire expression. In a text file, I only have to add the parentheses and write what I want to add. This example is fairly easy to redo in UI, but for things like raycasts or deeply nested expressions, this ability becomes much more useful.

High-Level Languages themselves offer many advantages as well, including:

- Multiple files
  - Code can be organized into logically separate files. For example, hero-specific logic could be separated into one file per hero.
- <details>
    <summary>Enums (click to expand)</summary>

    Enums are best explained with an example. Let's say I'm making a boss fight with three phases: normal, lava, and lasers, which I represent as a number stored in the global variable <code>bossPhase</code>. Whenever the boss reaches zero health, I can advance the phase just by adding 1 to <code>bossPhase</code>.
    <br /> <br />
    However, this now presents an issue: I have to remember that 0 is the "normal phase," 1 is the "lava phase," and so on. On top of that, if I later decide to insert a phase before the lava phase, I have to remember to change all the times where I check if <code>bossPhase == 1</code> or <code>bossPhase == 2</code>.
    <br /> <br />
    One might be tempted to solve this problem by storing <code>bossPhase</code> as a string and using something like <code>bossPhase = "normal"</code>. However, this presents another issue: typos. Even the most keen-eyed developers occasionally misspell something, and this can result in frustrating bugs where the main issue is that the code checks for if <code>bossPhase = "lazers"</code>.
    <br /> <br />
    Enums solve the clarity issue of using a number and the typo issue of strings by strictly defining a set of values (enums) which can be translated into normal Workshop objects (usually numbers). In my example, I would define an enum <code>BOSS_PHASE</code> which has members <code>NORMAL</code>, <code>LAVA</code>, and <code>LASERS</code>. It is very clear what I want now when I type <code>bossPhase == BOSS_PHASE.NORMAL</code>, and the compiler will throw an error if I make a typo like <code>bossPhase == BOSS_PHASE.LAVVA</code>, alerting me to the issue.
  </details>
- <details>
    <summary>Macros and function macros (click to expand)</summary>
    Too often, a complicated expression is difficult to copy-paste into all the locations it is needed. For example, if I want to fire a raycast which hits every single person in its path (not stopping at the first hit), I would have to repeat the expression for my raycast many times.
    <br /> <br />
    Macros and function macros enable Workshoppers to define a shorthand expression or pseudo-function which is easier to write multiple times, and as a bonus, the repeated code becomes much easier to read and understand the purpose of.
  </details>
- Switches
  - Switch statements enable different blocks of code to be run depending on the value of an expression. For example, depending on the hero a player is currently on, a switch could run different blocks of code. More information about switch statements, see [this Wikipedia page](https://en.wikipedia.org/wiki/Switch_statement).
- Automatic string splitting
  - By default, only 3 parameters can be inserted into any given string. Adding more requires splitting the string into multiple strings stuck together. This is very error-prone in UI, as it can be hard to remember which level or section a string belongs in. High-level languages can handle this split automatically.
- Automatic element count optimization
  - Many element-count-saving tricks, such as replacing `0` with `False`, unfortunately come at the cost of readability. High-level languages allow creators to utilize their element count as efficiently as possible while maintaining source-code readability.

<span id="list-of-high-level-languages"></span>

# List of High-Level Languages

Currently, only two HLLs are up to date: OverPy and OSTW.

Both HLLs have a decompiler, which instantly converts your existing UI modes into their respective languages.

<span id="overpy"></span>

## OverPy

OverPy's philosophy is to be a "wrapper around the workshop": as a user, you should be able to do the compilation "in your head", meaning you know exactly which code OverPy will generate.

This is to ensure trust in the user (when there is a bug, you don't have to check if the bug comes from OverPy, as you already have to check if it's not a workshop bug and a bug from your code).

As such, OverPy focuses easily on user-defined macros and preprocessing, rather than runtime modifications.

The features OverPy has over OSTW are:

- [Javascript macros](https://github.com/Zezombye/overpy/wiki/Preprocessing#javascript-macros) (write custom JS scripts to generate OverPy code) ;
- [Inline dictionaries](https://github.com/Zezombye/overpy/wiki/Advanced-constructs#dictionaries) ;
- [Special string modifiers](https://github.com/Zezombye/overpy/wiki/Strings#string-modifiers) ;
- Javascript/Typescript/CLI support
- Aggressive element optimization ;
- Stability ; there very rarely are mode-breaking bugs, and OverPy can even be used purely as an optimizer. It is common for users to decompile then compile without actually using OverPy, as it guarantees that decompiling then compiling results in the same effective gamemode.

Installation: https://github.com/Zezombye/overpy/wiki/General-usage

<span id="ostw"></span>

## OSTW

OSTW aims to be a fully fledged programming language which is compiled into a Workshop script, similar to how Kotlin compiles into Java code. OSTW boasts many features, some of which might be familiar to programmers from other "real" programming languages, such as

- Classes and Structs
- Fully functional language server, which provides, among other things,
  - Real-time compilation and compile-time error feedback
  - Intelligent auto-complete
  - Symbols, enabling intelligent renaming and jumping to definitions
  - Using variables, macros, and functions before they are declared in the file
- Built-in pathfinding utilities
- Named and optional parameters
- Ability to import animation data

Installation: https://github.com/ItsDeltin/Overwatch-Script-To-Workshop/wiki/Getting-Started

<span id="when-should-i-use-a-high-level-language-and-which-one"></span>

# When Should I Use A High-Level Language, and Which One?

In general, the more complex and/or the more permanent your gamemode is, the more you should consider using a high-level language. As for which one, in general, OverPy tends to be more popular with people who have never programmed outside of the Workshop due to its structural similarity to the Workshop UI and general one-to-one mapping. OSTW tends to be the favorite among Workshop power users, who need more layers of abstraction and find the intelligent autocomplete to be more useful.
