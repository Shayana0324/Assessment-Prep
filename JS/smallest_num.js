// To find the smallest number
"use strict";

// Function to find the smallest number among two numbers
function smallNum(a, b) {
    if (a < b) {
        console.log(a + "(a) is smaller than " + b + "(b)");
    } else {
        console.log(b + "(b) is smaller than " + a + "(a)");
    }

    // Alternate method to find the smallest number
    let arr = [a, b]
    const min = Math.min(...arr)
    console.log("Smallest number among a & b = ", min)
} 

smallNum(4, 3)

// Function to find the smallest number in an array
function arrNum() {
    let arr = [32, 4, 6, 9, 4, 7, 36, 14];
    const min = Math.min(...arr);
    console.log("The smallest number in the array = " + min);
}

arrNum();