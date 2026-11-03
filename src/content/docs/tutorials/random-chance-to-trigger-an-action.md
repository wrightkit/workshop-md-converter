---
title: "Random chance to trigger an action"
---

In this short tutorial we will go over a very simple way to have an action (or multiple actions) trigger with a random chance.

Essentially all we need is an If action. `If` statements are used to compare 2 values, and if they are the same the action(s) inside of the `If` statement are executed.

For the first value in the `Compare` inside the `If` we set Random Integer. An integer is a number without decimals. The first value will be set to 1, the second value is set to chance we want it to occur. Set it to 4 for a 1 in 4 chance. the higher the value, the lower the chance of it happening.
For the second value in the `Compare` we can set it to any number between 1 and the value you chose. But for the sake of simplicity lets just set it to 1.

[![](https://i.imgur.com/ENPzX6P.png)](https://i.imgur.com/ENPzX6P.png)

And that's all!

```
	If(Random Integer(1, 4) == 1);
```

Make sure to close off the `If` action with `End` to indicate which values are inside of the `If` statement.

```
	If(Random Integer(1, 4) == 1);
		// Your actions
	End;
```

[![](https://i.imgur.com/VhOJTQU.png)](https://i.imgur.com/VhOJTQU.png)
