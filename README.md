# TypeScript Closure Issue with setTimeout

This repository demonstrates a common closure-related bug in JavaScript and TypeScript when using `setTimeout` within a loop.  The bug arises because the value of the loop variable is not captured correctly by the callback function.

## Bug Description
The `printNumbers1` function attempts to print numbers 1 to 5 with a 0ms delay using `setTimeout`. However, due to the asynchronous nature of `setTimeout`, by the time the callbacks execute, the loop has already completed, and the value of `i` is 6.  This results in all callbacks printing 6.

## Solution
The solution uses a closure within the loop to create a new scope for `i` in each iteration.  This ensures that each callback captures the correct value of `i` at the time it's created.