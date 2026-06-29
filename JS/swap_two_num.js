// Swap two numbers without a third variable
"use strict";

function swapTwoNumbers(a, b) {
    [a, b] = [b, a];
    console.log("After swapping: a = " + a + ", b = " + b);
}

swapTwoNumbers(5, 10);