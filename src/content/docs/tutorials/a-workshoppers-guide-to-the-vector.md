---
title: "A Workshopper's Guide to the Vector"
---

# What is a Vector?

A vector is a set of 3 numbers: X, Y, and Z, that can represent a position or a direction. To get the X, Y, or Z as a single number, use the values [X Component Of](/values/x-component-of/), [Y Component Of](/values/y-component-of/), and [Z Component Of](/values/z-component-of/).

# Vectors as Locations

A vector can represent a location that is either relative to the world (global), or relative to a player's location and facing direction (local). When a vector is used as a location, the Y component represents the vertical height of the location, and the X and Z components represent where the location is on the horizontal plane.

Note that using the Live Capture (Camera) button to generate a location vector selects the player's current eye location (about 1.5m above the foot position of the player).

## Global Locations

Global locations are fixed to the map and do not change. To obtain the global location of an entity or player at any time, one can use [Position Of](/values/position-of/).

## Local Locations

Global locations can be transformed to be defined relative to a player's location and facing direction via the value `Local Vector Of`. In local coordinates, the player’s foot position is always \[0, 0, 0\]. The X becomes how far left or right of the player the position is, relative to the horizontal direction the player is facing, with positive X being to the left. The Y becomes how far up or down the position is relative to the player, with positive Y being up. Finally, the Z becomes how far forward or backwards the position is relative to where the player is and which horizontal direction they are facing, with positive Z being forward. If that’s confusing, hopefully an example will help. Let’s say that we have a location at (105, 16, -104) and a player at (100, 10, -100) facing towards positive Z (facing direction \[0, 0, 1\]). If we use `Local Vector Of` to transform our location to local coordinates relative to the player, the X will be 5, since the location is 5 meters to the left of our player. The Y will be 6, because the location is 6 meters above our player, and the Z will be -4, because the location is 4 meters behind the player, making the final result \[5, 6, -4\]. When translating a location to local coordinates, the `Transformation` mode should be set to `Rotation and Translation` for correct results. Local locations are useful for keeping something in a certain position relative to a given player (for example, an effect that follows a player).

# Vectors as Directions

Vectors can also represent directions, either the direction a player is facing, or the direction from one location to another. Vectors which represent directions are always unit length, which means the length of the vector is equal to 1. This makes it easier to work with in math. (See Normalization)

## Player Facing Direction

When a vector is representing the direction a player is facing, the Y component (second number) of the vector represents how far up or down the player is looking, with -1.0 being looking straight down and 1.0 looking straight up. The X and Z components will represent how far along the respective world axes the player is looking.

## A-to-B Direction

A vector can also represent the direction from Point A to Point B. To obtain a direction from Point A to Point B, take the location of Point B and subtract the location of Point A (see Vector Math > Addition and Subtraction below).

# Working With Vectors

## Defining vectors

Here’s a vector that we have labelled **u**.

![](https://i.imgur.com/b2koUYN.png)

The vector **u** begins at point A and ends at point B. We can see that **u** has a length, the distance from A to B. We can also see that **u** has a direction, the direction from A to B. This is essentially what a vector is.

More formally, we can say that a vector is a _geometric object_ with both _magnitude_ and _direction_. Magnitude is interchangeable with length in this context. We’ll use magnitude moving forward.

Note that _the position of a standard vector isn’t important_. That is, we could move **u** anywhere in our diagram and as long as we preserved its magnitude and direction it wouldn’t matter.

Let’s define some concepts, which we’ll use to simplify following topics:

*   As you may have noticed, we will denote vectors in bold lower-case and points in regular upper-case.
*   We will denote the length of **u** by writing |**u**|.
*   If **u** is a vector from A to B, we can also write it as **AB**. Note that this is different from **BA**, which would be the vector from B to A. Direction matters!
*   If **u** is a vector from A to B, we say that A is the tail of **u** and B is the head of **u**.
*   A vector with no magnitude is called the zero vector and is denoted by **O**. The zero vector also has no direction.
\
## Defining position vectors
\
Let’s move into a 3D space to replicate Overwatch’s environment. Here’s a different **u**.

![](https://i.imgur.com/Ye60ujC.png)

Firstly, the x axis is red, the y axis is green and the z axis is blue.


A _position vector_ in 3D space is a vector from O = (0, 0, 0) to some point P. By definition, all position vectors start from O. A position vector can therefore be identified just by the coordinates of its destination point P.

In this case, we have a position vector **u** that we could write as **OP** or just as the coordinates of P, that is **u** = (-1, 2, 3).

In other words, the notation **u** = (x, y, z) is shorthand for a position vector **u** from O = (0, 0, 0) to the point at (x, y, z).

In the previous section we established that position isn’t important for standard vectors. However, _position is important for position vectors_ - we can’t just move **u** because it’s fixed between coordinates O and P. We will soon see the significance of this.

For now, let’s define some more notation.

*   The point O = (0, 0, 0) is called the _origin_.
*   Suppose we have a vector **u** = (1, 2, 3).
*   The x component of **u** is 1.
*   The y component of **u** is 2.
*   The z component of **u** is 3.

All global vectors in the Overwatch workshop are position vectors. We can now understand why the [Vector](/values/vector/) value takes three arguments - they correspond to the X, Y and Z components of the vector.

Furthermore the values [X Component Of](/values/x-component-of/), [Y Component Of](/values/y-component-of/), and [Z Component Of](/values/z-component-of/) each take one argument that’s a vector and returns the relevant component.

## Defining scalars

A _scalar_ is essentially just another name for a regular number. For example, suppose we have a vector **u** = (-2, 1.5, π). Then **u** is a vector and not a scalar, but each of its components is a scalar.

## Multiplying vectors by scalars

Suppose we have some scalar λ (lambda) and some vector **u**. Then multiplying **u** by λ scales the magnitude of **u** by λ.

If λ is negative, the direction of **u** is flipped and then λ scales the magnitude of **u** as if λ were positive.

The following diagram illustrates this concept with standard vectors.

![](https://i.imgur.com/vwCsk94.png)

Note that -**u** gives **u** in the opposite direction.

Also note that two vectors **u** and **v** are parallel, or rather are in the same direction forwards or backwards, when there exists a scalar λ such that **u** = λ**v**.

But what happens if we multiply a vector with another vector? There are multiple ways to do this, which we will explore later.

## Addition and subtraction

We will return to standard vectors to begin talking about addition and subtraction. Here are two vectors **u** and **v**.

![](https://i.imgur.com/oHQUvqq.png)

We can add **u** to **v** by moving **v** so that the tail of **v** touches the head of **u**. That is, so that C is on B. Then **u** + **v** is the vector from A to D.

![](https://i.imgur.com/K6N8JcJ.png)

We can draw **v** + **u** to observe that it produces the same vector.

![](https://i.imgur.com/hn959HS.png)

Hence we can conclude that the addition of vectors produces another vector and is commutative, that is **u** + **v** = **v** + **u**.

Note that adding or subtracting a scalar to a vector, or the other way around, is an undefined operation. Don’t do it and don’t worry about it!

## Calculating magnitude

The magnitude of a vector is a scalar which can be interpreted as the vector’s “length” or “size”. For instance, the magnitude of a player’s velocity vector is a scalar which represents the player’s speed. To get a vector’s magnitude, use the [Magnitude Of](/values/magnitude-of/) value.

## Normalization

While every vector possesses both magnitude and direction, oftentimes only the direction is relevant to the user. In cases such as these, it can be useful to set the vector’s magnitude equal to 1 while preserving its direction. This process is called _normalization_, and the resulting vector is called a _unit vector_.

To normalize a vector, use the [Normalize](/values/normalize/) value.
