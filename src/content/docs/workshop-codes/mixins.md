---
title: "Mixins"
---

Mixins are a feature specific to the Workshop.codes editor and don't exist in-game in the Workshop.

Mixins allow you to re-use code anywhere you wish, however many times you wish, and with however many parameters you wish. This is very useful when writing code that is repeated in many places, either exactly or all with small changes.

```
@mixin multiplyValue(variable, multiplier)
{
	Mixin.variable = 2 * Mixin.multiplier;
}

rule("Some Rule")
{
   ...

	actions
	{
		@include multiplyValue(Global.someVar, 5);
		@include multiplyValue(Global.someOtherVar, 10);
	}
}
```
This example will be compiled as
```
rule("Some Rule")
{
   ...

	actions
	{
		Global.someVar = 2 * 5;
		Global.someOtherVar = 2 * 10;
	}
}
```

Mixins can be inserted anywhere, using any code you wish. They could contain entire rules, or simply contain a single value.

```
@mixin heroRule(hero)
{
	rule("Do as hero")?
	{
		event
		{
			Ongoing - Each Player;
			All;
			Mixin.hero;
		}

		...
	}
}

@include heroRule(Ana);
@include heroRule(Reinhardt);

@mixin simpleValue(multiplier)
{
	(2 + 2) * Mixin.multiplier
}

Vector(0, @include simpleValue(8), 0);
```

Parameters in mixins can be given default values.
```
@mixin someMixin(firstVar, secondVar = "Something")
{
  Mixin.firstVar;
  Mixin.someVar;
}

@include someMixin("Value for firstVar");
```
In this case the default value `"Something"` for `secondVar` will be used.

### @contents

You can add an option place for content of the include to go. This allows you to re-use large blocks of code that go around whatever content you might need.

```
@mixin mixinName()
{
  If (...);
    @contents
  End;
}

@include mixinName()
{
  Do Something();
}
```
`@contents` Will be replaced by whatever content you add in the include.
This could be used to construct more complex re-use able code blocks. For example you could replicate entire rules.
```
@mixin eachPlayer(ruleName, hero)
{
  rule(Mixin.ruleName)
	{
	  event
		{
		  Ongoing - Each Player;
			All;
			All;
		}

		conditions
		{
		  ...
		}

    actions
		{
			@contents;
		}
  }
}

@include eachPlayer("Rule Name")
{
  Do Something();
}
```
This could be especially useful when using rules with often repeated conditions.

You can mix `@contents` and mixin parameters, both ways. Either in the mixin itself or in the include.

```
@mixin someMixin(someVar)
{
	Mixin.someVar;
	@contents;
}

@include someMixin("Something")
{
  Mixin.someVar;
}
```

For more examples check out https://workshop.codes/editor?uuid=7013aa4b-4611-4f73-b1e1-6fca1bb2c771

### @if/@else
`@if` can be used to conditionally render some content.
`@if` isn't exclusive to only Mixins, but they are one of the few places where they make sense as they provide a way to check parameters that could be different in each `@include`.

`@if` is not a replacement for the Workshop `If` action. It simply fills in some of the gaps that the action can not do.

```
@mixin if(conditionOne, conditionTwo) {
	@if (Mixin.conditionOne == Mixin.conditionTwo) {
		// This will only render if both conditions are the same
		Do Something();
	}
}
```
`@else` can be used to render something if the conditions are not met.
```
@mixin else(conditionOne, conditionTwo) {
	@if (Mixin.conditionOne == Mixin.conditionTwo) {
		// This will only render if both conditions are the same
		Do Something();
	} @else {
		// This will only render if the above is not met
		Do Something Else();
	}
}
```

`@if` statements can be nested.
```
@mixin ifNesting(conditionOne, conditionTwo, conditionThree) {
	@if (Mixin.conditionOne == Mixin.conditionTwo) {
		Do Something();

		@if (Mixin.conditionTwo == Mixin.conditionThree) {
			Do Something More();
        }
	}
}
```

Other operators can be used to check the conditions in other ways.
```
@mixin otherOperators(conditionOne, conditionTwo) {
	// Not
	@if (Mixin.conditionOne != Mixin.conditionTwo) {
		// This only renders if the condition is not true
		Do Something();
	}

	// Contains
	@if (Mixin.conditionOne *= Mixin.conditionTwo) {
		// This will only render if the first condition contains the second.
		// For example "conditionOne = ABCDEF" and "conditionTwo = ABC".
		// ABC is found in ABCDEF, so it will be true.
		Do Something();
	}

	// Test (Regex)
	@if (Mixin.conditionOne ~= /[6-9]|[1-9]\d+/) {
		// This can accept any (javascript) Regex.
		// In this case the regex checks if the condition is higher than the number 5
		Do Something();
	}
}
```
