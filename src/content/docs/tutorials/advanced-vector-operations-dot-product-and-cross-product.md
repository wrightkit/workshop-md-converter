---
title: "Advanced vector operations: Dot Product and Cross Product"
---

The goal here is to provide some very powerful uses for these operations that otherwise tend to be not well understood.
# Dot Product
The dot product is a number that is calculated by adding the products of two vectors' individual components. `Dot Product((a, b, c), (d, e, f)) = a * d + b * e + c * f`. It's a simple operation, but you don't need to remember how it's calculated, all you need is how to use it.

## Uses
Dot Product has two major uses in general.
1. Find the angle between two vectors (using a combination of dot product and some trigonometry). However, in the workshop we already have `Angle Between Vectors()`.
2. Find out how much of a vector is in a given direction. This one is the biggest use case for Dot Product in the workshop. Take a given vector `V` and a given normalized direction `D`. The return value of `Dot Product(V, D)` will be equal to how much of vector V is in the direction of D.

(Given the definition of dot product above, which uses only multiplication and addition, order doesn't matter, so `Dot Product(V, D)` = `Dot Product(D, V)`, so feel free to remember it in whatever way makes sense to you.)

Here's a visualization that you can play with:
- Move the black dot to define a direction D that is normalized internally.
- Move the green dot to define a vector V.
- The resulting blue line is the part of vector V that is in the direction of D.
- The red dotted line is the projection, or adjustment. It's the part of V that is NOT in the direction of D.

<iframe frameborder="0" height="500px" src="https://www.desmos.com/calculator/vmuhxbppc5?embed" style="border: 1px solid #ccc;" width="500px">
</iframe>

The blue vector is calculated by multiplying the direction D by the Dot Product of D and V. `B = D * Dot Product(D, V)`

As you can see, placing the direction D somewhere in the opposite direction of the vector V gives the same results as placing it in a correspending direction towards vector V. The actual Dot Product is negative when in the opposite direction of V, and positive otherwise.

This is behavior that you can handle yourself with 'If' and 'Else' statements or 'If-then-else' values that check if the Dot Product is negative. You can consider `Dot Product <= 0` as "The vector V is not at all in the direction of D". However, there are many cases where this works out fine without special handling, think about your use case and if a negative Dot Product would produce unintended results...

The red vector is also a very useful value. Since the blue line B is the part of V that is in the direction of D, `V - B = V - (D * (Dot Product(D, V))) = R`, (the red vector), which is the part of V that is NOT in the direction of D.

## Example workshop use case

These two values have many uses, but here's a good example using apply impulse. If we wanted to remove all of the motion that a player has that isn't in a given direction, its as simple as this.

`Apply Impulse(Event Player, -1 * R, Magnitude of(R), To World, Incorporate Contrary Motion)`

(We choose Incorporate Contrary Motion here because we're the ones doing the hard work of defining exactly how to handle contrary motion. Also, `Magnitude of()` returns the length of the vector, which you can think of as the "strength" of the vector.)

This function removes all momentum **that isn't along our intended direction**, whereas a normal impulse with Cancel Contrary Motion removes all momentum **that goes directly against our intended direction**.

So, substituting R with the definitions above gives us this, where D is whatever your normalized intended direction is.

`Apply Impulse(Event Player,
-1 * (Velocity of(Event Player) - (D * Dot Product(D, Velocity of(Event Player)))),
Magnitude of(Velocity of(Event Player) - (D * Dot Product(D, Velocity of(Event Player)))),
To World, Incorporate Contrary Motion)`

If you wanted to remove a percentage, say 50%, of the motion that isn't in the intended direction, simply multiply `Magnitude of(R) * 0.5`.

After this impulse, you can apply a second normal impulse with Incorporate Contrary Motion in your intended direction at whatever strength you like. Those two impulses together would effectively apply a knockback that makes sure that your velocity is **only** along the intended direction.

# Cross Product
The Cross Product has an even more complex calculation. `Cross Product((a, b, c), (d, e, f)) = Vector(b*f - c*e, c*d - a*f, a*e - b*d)`. Again, you don't need to remember the calculation, only its use. Know that since the Cross Product includes subtraction, the order of the input vectors does matter. However the effect of order is simple, flipping the order of the inputs only multiplies the output by -1. `Cross Product(A, B) == -1 * Cross Product(B, A)`. So if you find that your calculation is having the perfect opposite of its intended effect, try swapping the order of the inputs to the Cross Product or multiplying the Cross Product by -1.

## Use
The Cross Product only has one huge use that is obviously useful to the workshop. (Ignoring any math you may do for maths sake)

1. The Cross Product of two vectors gives you a vector that is perpendicular to both of them. Essentially this means it returns a vector that is of the direction that is not shared between the input vectors.

So, what is the cross product of **Forward** and **Right**? Well, what is the direction that is not at all shared between **Forward** and **Right**? That direction would be **Up**. Equivalently, what is the cross product of the Z axis and the X axis? It's the Y axis.

The length of the Cross Product return vector depends on how dissimilar the directions of the input vectors are, with input vectors in equivalent directions resulting in a Cross Product of length zero.

You can also know for certain the sign of the perpendicular direction the Cross Product returns if you remember this relationship:

In Cross Product(A, B), if the shortest rotation from A to B is **Counter-Clockwise**, then the direction will be **toward the viewer**. If it's **Clockwise**, then the direction will be **away from the viewer**. Think of tightening a screw.

(The direction depends on the viewer, because the clockwise direction depends on the viewer. Try it, make a clockwise circle while looking _down_ at your finger, then move your finger to where you have to look _up_ at it, and you'll notice that the clockwise direction switches.)

![](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Cross_product.gif/220px-Cross_product.gif)

## Example workshop use case

Cross Product is the only operation required to position an entity (effect, icon, text) at direct screen coordinates. There are other methods that use more operations, some of which can be seen in <a href="/tutorials/rendering-an-inworld-text-at-a-specific-onscreen-position/">this related tutorial</a>.

This method will have X\_POS, Y\_POS, and Z_POS. The center of the screen is (X,Y) = (0,0). Positive X is to the right, and positive Y is upward. The Z position is how far into the screen you want to position the entity.
- If you're trying to attach an effect to the first person animation of a character, use a small Z value such as 0.5 or so.
- If you're trying to make a HUD element such as text, make the Z value fairly large such as 50.
- The max X and Y values will be proportional to whatever you set the Z value.

In the position attribute of any entity you'd like to create, place an `Eye Position(Event Player) + Facing Direction Of(Event Player) * Z_POS`.

Now, how would we find the direction of the player's Right using the Cross Product? We choose two vectors that we know share no Rightward direction, **the player's facing direction** and **Up**. Then we normalize the vector to make sure that is a single standard unit.

So, Player's Right = `Normalize(Cross Product(Facing Direction Of(Event Player), Up))`

Now that we know this, what direction is the player's Up? The two vectors that we know share none of the player's Upward direction are **the Player's Right** and the **the player's facing direction**.

So, Player's Up = `Normalize(Cross Product(Cross Product(Facing Direction Of(Event Player), Up), Facing Direction Of(Event Player)))`

This gives us a final position value of -

```
Eye Position(Event Player) +
Facing Direction Of(Event Player) * Z_POS +
Normalize(Cross Product(Facing Direction Of(Event Player), Up)) * X_POS +
Normalize(Cross Product(Cross Product(Facing Direction Of(Event Player), Up), Facing Direction Of(Event Player))) * Y_POS
```

Here, you can see a visualization of these directions on a player:
Blue = Facing, Z
White = True Up
Red = Player's Right, X
Green = Player's Up, Y


<img src="https://i.imgur.com/9RlEc3c.png">

Of course, this is nowhere near the only use case. Any time you want a perpendicular vector, think of how you could do it with Cross Product.
