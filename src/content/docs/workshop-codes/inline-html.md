---
title: "Inline HTML"
---

<span id="TOP"></span>
# In general

You can also use raw HTML in your Markdown, and it'll mostly work pretty well. It's great for simple customization, like changing `<span style="color: #e61ab1">`<span style="color: #e61ab1">the color</span>`</span>`.



<span>`<span>`**Markdown in HTML**  sometimes _work_.`</span>` </span>
<p><code class="microlight">&lt;p></code>However, **Markdown in HTML** sometimes _not_.<code class="microlight">&lt;/p></code></p>


In this case, you must use _HTML tags_ to reproduce the desired look. I recommend only use HTML when it's unavoidable so your page doesn’t become a spagetti. This article is about some use cases.


==Table of contents==
<ul>
	<li><a href="#CHARS">How to use certain characters inside Markdown</a></li>
 <li><a href="#SELFREFERENCE">Link to a specific part of the page</a></li>
	<li><a href="#EMBEDS">Embedded content</a></li>
	<li><a href="#COL">workshop.codes colors</a></li>
</ul>

<span id="CHARS"></span>

-----
## How to use certain characters inside Markdown
When you want to use a character inside a Markdown block that is a Markdown indicator, such as using `|` within a table, the result will be confusing, because the editor doesn't know it's not meant to be an indicator but as a character.
<p></p>
```
| Column | Column | Column |
| -------- | -------- | -------- |
| Text     | Text with a "|" symbol  | Text     |
```
| Column | Column | Column |
| -------- | -------- | -------- |
| Text     | Text with a "|" symbol  | Text     |
<p></p>
To make a distinction, you must specify the character as a HTML reference, like `&#UNICODE;`, where "UNICODE" is the character's code according to <a href="https://en.wikipedia.org/wiki/List_of_Unicode_characters">the standard.</a>
<p></p>
```
| Column  | Column  | Column  |
| -------- | -------- | -------- |
| Text     | Text with a "&&#35;124;" symbol  | Text     |
```
| Column  | Column  | Column  |
| -------- | -------- | -------- |
| Text     | Text with a "&#124;" symbol  | Text     |

<span id="SELFREFERENCE"></span>

-----

## Link to a specific part of the page
<p style="text-align: center"><span id="PRETTY_POINT_A" style="color: red">-</span></p>
==1. mark with an id the desired part/element like this==
`<span id="POINT_A">This is point A</span>`

<p style="text-align: center"><span id="POINT_A" style="color: red">This is point A </span></p>
When jumping, this will be at the top, so maybe better to hide the reference a few rows above, to be pleasing to the eye.

==2. set link to this id== <span style="font-size: small;">(don't miss the `#` sign)</span>
`<a href="#POINT_A">Go to point A</a>`

<a href="#POINT_A">Go to point A</a>
<a href="#PRETTY_POINT_A">Go to point A, but looks better => "-"</a>

<span id="EMBEDS"></span>

-----

## Embedded content

<iframe src="https://imgur.com/17FOzH4/embed" width="50%" height="350px" style="border:none;"></iframe><iframe src="https://www.desmos.com/calculator/2t5b5kc6vl?embed" width="50%" height="350px" style="border:none;"></iframe><iframe  allowfullscreen src="https://www.youtube.com/embed/FqnKB22pOC0" width="50%" height="350px" style="border:none;"></iframe><iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/377357942&visual=true" width="50%" height="350px" style="border:none;"></iframe>



==1. Get the code==
Usually platforms have a "copy embed" option, or something similar at the given content. This gives you a html code, which sometimes perfect for this website, sometimes no that much.

* In most cases (<span style="color: #128442">DESMOS</span>, <span style="color: #ff0000">YOUTUBE</span>, <span style="color: #ff5000">SOUNDCLOUD</span>, <span style="color: #00ff99">G</span><span style="color: #00cbff">I</span><span style="color: #9932ff">P</span><span style="color: #ff6666">H</span><span style="color: #fff45b">Y</span>), you only need to copy+paste the html code you get with the "copy embed" option.


* But, for a few special cases, like <span style="color: #1bb76e">IMGUR</span>, you need **the normal link** to the content (not the html code), complete it with `/embed` and put this into the html code below.
`https://imgur.com/17FOzH4 => "https://imgur.com/17FOzH4/embed"`


```
&lt;iframe src="https://imgur.com/17FOzH4/embed"
width="50%"
height="450px"
style="border:none;">
&lt;/iframe>
```


==2. Customize the _iframe_==
There are many attributes and style options you can play with, here are some notable ones.
* WIDTH: Your page's  width is constant, so better to define WIDTH in `%`.
* STYLE= BORDER:NONE: This helps the content to blend in without any ugly margin.
* ALLOWFULLSCREEN: If you want to make your youtube video handier to watch.


<span id="COL"></span>

-----

## workshop.codes colors

<div class="color_record">
	<div class="color_box" id="hightlight"></div>
	<div class="color_box" id="hightlight1"></div>
	<p>HIGHTLIGHT</p>
	<code class="microlight">var(--primary)</code>
</div>
<div class="color_record">
	<div class="color_box" id="text_major"></div>
	<p>TEXT (major)</p>
	<code class="microlight">var(--white)</code>
</div>
<div class="color_record">
	<div class="color_box" id="text_normal"></div>
	<p>TEXT (normal)</p>
	<code class="microlight">var(--text-color)</code>
</div>
<div class="color_record">
	<div class="color_box" id="text_minor"></div>
	<p>TEXT (minor)</p>
	<code class="microlight">var(--text-color-dark)</code>
</div>
<div class="color_record">
	<div class="color_box" id="background_general"></div>
	<p>BACKGROUND (general)</p>
	<code class="microlight">var(--body-bg)</code>
</div>
<div class="color_record">
	<div class="color_box" id="background_item"></div>
	<p>BACKGROUND (emphasized item in general)</p>
	<code class="microlight">var(--bg-dark)</code>
</div>
<div class="color_record">
	<div class="color_box" id="background_area"></div>
	<p>BACKGROUND (emphasized area in item)</p>
	<code class="microlight">var(--bg-darker)</code>
</div>
<div class="color_record">
	<div class="color_box" id="border"></div>
	<p>BORDER</p>
	<code class="microlight">var(--border-color)</code>
</div>



-----

<a href="#TOP">Go to top</a>
