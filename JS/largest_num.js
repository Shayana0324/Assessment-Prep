// Finding largest number
"use strict";

// Function to find the largest number among two numbers
function twoNum(a, b) {
    if (a > b) {
        console.log(a + "(a) is larger than " + b + "(b)");
    } else {
        console.log(b + "(b) is larger than " + a + "(a)");
    }
}

twoNum(3, 2)

// Function to find the largest number among three numbers
function threeNum(a, b, c) {
    if (a > b & a > c) {
        console.log(a + "(a) is the largest number among a, b, c")
    } else if(b > a & b > c) {
        console.log(b + "(b) is the largest number among a, b, c")
    } else {
        console.log(c + "(c) is the largest number among a, b, c")
    }
}

threeNum(9, 2 , 7)

// Function to find the largest number in an array
function arrayNum(){
    let arr = [2, 4, 6, 9, 4, 7, 36, 14]
    const max = Math.max(...arr)
    console.log("Largest number in the array: " + max)
}

arrayNum();