// Check if a number is odd or even
"use strict";

function checkNum(num) {
    if (num % 2 == 0){
        console.log(num + " is an even number");
    } else {
        console.log(num + " is an odd number");
    }
}

checkNum(5);
checkNum(25);
checkNum(74);
checkNum(1555832);