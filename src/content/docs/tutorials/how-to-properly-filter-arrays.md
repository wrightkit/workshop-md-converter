---
title: "How to Properly Filter Arrays"
---

Most likely, **`Filtered Array`** will be one of the most used values in your workshop journey, but most new developers make a simple mistake that makes their code clunkier and harder to read. Let’s say you want to apply **3 filters** to an array:

* **F1**: `Is Using Ultimate(Current Array Element)`
* **F2**: `Is Jumping(Current Array Element)`
* **F3**: `Is Firing Primary(Current Array Element)`

It should be obvious, right?

```
Filtered Array(Filtered Array(Filtered Array(array, F1), F2), F3)
```

Well, that works. But it looks silly, because you’re stacking filters on top of filters. If you want a silly script, go ahead! But we’d rather have a professional, streamlined script, with parallel filters. This is where you get to know two very handy operators:

- **`&&`** (AND)
- **`||`** (OR)

Below are some example filtered arrays with explanations on what they actually are:

```
1. Filtered Array(array, F1 && F2 && F3)
2. Filtered Array(array, (F1 && F2) || F3)
3. Filtered Array(array, F1 || F2 || F3)
```

1. Elements that satisfy all **F**s (is ulting, jumping and firing).
2. Elements that satisfy both **F1** and **F2**, or just **F3** (is ulting and jumping, or just firing). Pay attention to the parenthesis.
3. Elements that satisfy any **F** (is either ulting, jumping or firing).

This looks much cleaner, don’t you think? These operators correspond to the **`And`** and **`Or`** values in the in-game workshop editor, but we recommend that you use an external editor, which enables you to replace them with the symbols above, making your life a bit easier.
