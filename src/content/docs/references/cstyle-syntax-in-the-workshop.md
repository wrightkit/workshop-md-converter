---
title: "C-style Syntax in the Workshop"
---

On April 23, 2020, an update was released on the Overwatch PTR. Alongside the new communication options and the ability to update share codes, it also changed the way certain actions and values were shown in order to make them use C-style syntax. This article shows all the actions and values that are changed.

## Actions


| Original Syntax | C-Style Syntax |
| -------- | -------- |
| ```Modify Global Variable(A, Add, B)``` | ```Global.A += B``` |
| ```Modify Global Variable(A, Divide, B)``` | ```Global.A /= B``` |
| ```Modify Global Variable(A, Modulo, B)``` | ```Global.A %= B``` |
| ```Modify Global Variable(A, Multiply, B)``` | ```Global.A *= B``` |
| ```Modify Global Variable(A, Raise To Power, B)``` | ```Global.A ^= B``` |
| ```Modify Global Variable(A, Subtract, B)``` | ```Global.A -= B``` |
| ```Modify Global Variable At Index(A, 0, Add, B)``` | ```Global.A[0] += B``` |
| ```Modify Global Variable At Index(A, 0, Divide, B)``` | ```Global.A[0] /= B``` |
| ```Modify Global Variable At Index(A, 0, Modulo, B)``` | ```Global.A[0] %= B``` |
| ```Modify Global Variable At Index(A, 0, Multiply, B)``` | ```Global.A[0] *= B``` |
| ```Modify Global Variable At Index(A, 0, Raise To Power, B)``` | ```Global.A[0] ^= B``` |
| ```Modify Global Variable At Index(A, 0, Subtract, B)``` | ```Global.A[0] -= B``` |
| ```Modify Player Variable(Event Player, A, Add, B)``` | ```Event Player.A += B``` |
| ```Modify Player Variable(Event Player, A, Divide, B)``` | ```Event Player.A /= B``` |
| ```Modify Player Variable(Event Player, A, Modulo, B)``` | ```Event Player.A %= B``` |
| ```Modify Player Variable(Event Player, A, Multiply, B)``` | ```Event Player.A *= B``` |
| ```Modify Player Variable(Event Player, A, Raise To Power, B)``` | ```Event Player.A ^= B``` |
| ```Modify Player Variable(Event Player, A, Subtract, B)``` | ```Event Player.A -= B``` |
| ```Modify Player Variable At Index(Event Player, A, 0, Add, B)``` | ```Event Player.A[0] += B``` |
| ```Modify Player Variable At Index(Event Player, A, 0, Divide, B)``` | ```Event Player.A[0] /= B``` |
| ```Modify Player Variable At Index(Event Player, A, 0, Modulo, B)``` | ```Event Player.A[0] %= B``` |
| ```Modify Player Variable At Index(Event Player, A, 0, Multiply, B)``` | ```Event Player.A[0] *= B``` |
| ```Modify Player Variable At Index(Event Player, A, 0, Raise To Power, B)``` | ```Event Player.A[0] ^= B``` |
| ```Modify Player Variable At Index(Event Player, A, 0, Subtract, B)``` | ```Event Player.A[0] -= B``` |
| ```Set Global Variable(A, B)``` | ```Global.A = B``` |
| ```Set Global Variable At Index(A, 0, B)``` | ```Global.A[0] = B``` |
| ```Set Player Variable(Event Player, A, B)``` | ```Event Player.A = B``` |
| ```Set Player Variable At Index(Event Player, A, 0, B)``` | ```Event Player.A[0] = B``` |


## Values


| Original Syntax | C-Style Syntax |
| -------- | -------- |
| ```Add(A, B)``` | ```A + B``` |
| ```And(A, B)``` | ```A && B``` |
| ```Compare(A, operator, B)``` | ```A operator B``` |
| ```Divide(A, B)``` | ```A / B``` |
| ```Global Variable(A)``` | ```Global.A``` |
| ```If-Then-Else(A, B, C)``` | ```A ? B : C``` |
| ```Modulo(A, B)``` | ```A % B``` |
| ```Multiply(A, B)``` | ```A * B``` |
| ```Not(A)``` | ```!A``` |
| ```Or(A, B)``` |  ```A ││ B``` |
| ```Player Variable(Event Player, A)``` | ```Event Player.A``` |
| ```Raise To Power(A, B)``` | ```A ^ B``` |
| ```Subtract(A, B)``` | ```A - B``` |
| ```Value In Array(A, B)``` | ```A[B]``` |
