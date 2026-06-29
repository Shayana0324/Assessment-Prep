// Reverse a positive number and a negative number 
"use strict";

function reverseNumber(n) {
    console.log (n.toString().split("").reverse().join(""));
}

function reverseNegNumber(n) {
    console.log (Number.parseFloat(n.toString().split("").reverse().join("")) * Math.sign(n));

}

reverseNumber(12345);
reverseNumber(35);
reverseNumber(10494931);

reverseNegNumber(-12);
reverseNegNumber(-123456789);