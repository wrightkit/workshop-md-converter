---
title: "Markdown on Workshop.codes"
---

### Table of contents
- [Headers](#headers)
- [Emphasis](#emphasis)
- [Lists](#lists)
- [Links](#links)
- [Images](#images)
- [Code and Syntax Highlighting](#code-and-syntax-highlighting)
- [Tables](#tables)
- [Blockquotes](#blockquotes)
- [Inline HTML](#inline-html)
- [Horizontal Line](#horizontal-line)
- [Workshop.codes specific markdown](#workshopcodes-specific-markdown)
    - [YouTube Videos](#youtube-videos)
    - [Hero Icons](#hero-icons)
    - [Ability Icons](#ability-icons)
    - [Colors](#colors)

---

Markdown is used in both the Articles on this Wiki and the Workshop Items on the main website. It is used to style the content of your posts. This article is a list of all options Workshop.codes offer. Some of these options are generally available in Markdown, others are specific to Workshop.codes. This list was taken and adjusted accordingly from https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

## Headers

```
# H1
## H2
### H3
#### H4
##### H5
###### H6

Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======

Alt-H2
------
```

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Emphasis

```
Emphasis, aka italics, with *asterisks* or _underscores_.
Strong emphasis, aka bold, with **asterisks** or __underscores__.
Combined emphasis with **asterisks and _underscores_**.
Highlight uses two equal signs ==Highlight this==.
```
\
Emphasis, aka italics, with _asterisks_ or _underscores_.
Strong emphasis, aka bold, with **asterisks** or **underscores**.
Combined emphasis with **asterisks and _underscores_**.
Highlight uses two equal signs ==Highlight this==.

## Lists
(In this example, leading and trailing spaces are shown with with dots: ⋅)

```
1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.

⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅
⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses
```

1.  First ordered list item
2.  Another item

*   Unordered sub-list.

1.  Actual numbers don't matter, just that it's a number
  1.  Ordered sub-list
4.  And another item.
\
    You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).
\
    To have a line break without a paragraph, you will need to use two trailing spaces.\
    Note that this line is separate, but within the same paragraph.\
    (This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)


*   Unordered list can use asterisks

*   Or minuses

*   Or pluses

## Links
There are three ways to create links.

```
[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

Or leave it empty and use the simply use the link itself https://www.google.com.
```

[I'm an inline-style link](https://www.google.com)
[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

Or leave it empty and use the simply use the link itself https://www.google.com.

## Images
```
    Here's an image (hover to see the title text):

    Inline-style:
    ![alt text](https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-GrandmasterTier.png "Logo Title Text 1")

    ![logo](https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-GrandmasterTier.png "Logo Title Text 2")
```
Inline-style: ![alt text](https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-GrandmasterTier.png)

(hover to see the title text):
![logo](https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-GrandmasterTier.png "Logo Title Text 2")

## Code and Syntax Highlighting
Code blocks are part of the Markdown spec, but syntax highlighting isn't. However, many renderers -- like Github's and _Markdown Here_ -- support syntax highlighting. On Workshop.codes the syntax highlighting will be try to match Workshop keywords, but the highlighting is fairly limited.

`Inline `code` has `back-ticks around` it.`
\
Inline `code` has `back-ticks around` it.

Blocks of code are either fenced by lines with three back-ticks ` ``` `, or are indented with four spaces. I recommend only using the fenced code blocks -- they're easier and only they support syntax highlighting.

```
    ```
		rule("Each Player Rule") {
			...
		}
    ```
```

```
rule("Each Player Rule") {
	event	{
		Player Dealt Damage;
		All;
		All;
	}

	conditions {

	}

	actions  {
		Small Message(All Players(All Teams), Custom String("Dealt damage"));
	}
}
```

## Tables
Tables aren't part of the core Markdown spec, but they are part of GFM and _Workshop.codes_ supports them.

```
Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3
```


Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell. The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

## Blockquotes
```
> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.
```

> Blockquotes are very handy in email to emulate reply text. This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can _put_ **Markdown** into a blockquote.

## Inline HTML
<a href="/workshop-codes/inline-html/">This section has its own article now.</a>
\
## Horizontal Line
```
---

Hyphens

***

Asterisks

___

Underscores
```

All of these produce a line

---

# Workshop.codes specific markdown

## YouTube Videos

Adding videos cannot be done with regular Markdown. Workshop.codes has a specific syntax that will likely not work anywhere else. Currently we only support Youtube videos.

```
&#91;youtube VIDEO_ID]
&#91;youtube FqnKB22pOC0]
```
The VIDEO_ID can be found in the url of your Youtube video. https://www.youtube.com/watch?v=FqnKB22pOC0
After /watch?=, or usually at the end of the URL, depending on other parameters.

[youtube FqnKB22pOC0]

## Hero Icons

Hero icons can be inserted using:
```
&#91;hero Ana]
```
Ana can be replaced with any hero name. The name can be spelled using a simplified version. For example "Soldier 76" instead of "Soldier: 76" or "Lucio" instead of "Lúcio".
The image is displayed as 50x50 pixels.

[hero Ana]
[hero Reinhardt]

Larger icons can be displayed by specifying the "size" parameter.

```
&#91;hero Ana { size: "medium" }] // 100x100
```
```
&#91;hero Ana { size: "large" }] // 256x256
```
[hero Ana { size: "medium" }]
[hero Ana { size: "large" }]

## Ability Icons

Ability icons can be inserted using:
```
&#91;ability Fire Strike]
```
Any ability icon can be used, this includes special event ability and hero weapons.
The image is displayed as 50 pixels tall, but the width can vary.

[ability Fire Strike]
[ability Blizzard]
[ability Rune of Disguise]
[ability Widows Kiss]

## Colors
You can customize the color of your text <span style="color: orange">like this</span>

```
&lt;span style="color: orange"&gt;like this&lt;/span&gt;
```
You can define colors or use HEX for this.

Example using HEX: <span style="color: #e61ab1">COLOR</span>

```
&lt;span style="color: #e61ab1"&gt;COLOR&lt;/span&gt;
```
