---
title: "Reverse an array"
---

Reversing an array is incredibly easy. There is a [Sorted Array](/values/sorted-array/) function in Workshop that will take in an array and return a sorted version of it according to some value, like so:

`Global.X = Sorted Array(Global.YourArray, Current Array Element)`

How can this help us reverse an array? Well, if it sorts by number, then what if we sorted by the indexes of the array?
(An "index" means the position of an item inside of its array. For example, array\[0\] will get you the first item, array\[1\] will get you the second, and so on.)

There are two values available to us when we use functions like Sorted Array, [Mapped Array](/values/mapped-array/), and [Filtered Array](/values/filtered-array/): [Current Array Element](/values/current-array-element/) and Current Array Index. `Current Array Element` is the value of the part of the array that the function is currently looking at; `Current Array Index` is that value's index in the array.

Great, so with this new knowledge we can do:

`Global.X = Sorted Array(Global.YourArray, Current Array Index)`

You might see this and think "Well that's not going to work," and you'd be right. This will give us back the same array that we started with, because `Sorted Array` goes in ascending order, which means that because the first value in the array will have an index lower than the second and so on, it'll already be sorted.

What we need to do instead is somehow make it so that the last element in the array's index is smaller than the rest. That's actually very easy:

`Global.X = Sorted Array(Global.YourArray, Current Array Index * -1)`
^^^ **This is the answer, for those who want to skip ahead!** ^^^

By multiplying by -1, we make it so that the index is flipped around, and starts counting down instead of up. If you try the above code, you'll see that it gives you a reversed array!
