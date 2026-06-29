// Sum of two integers
"use strict";

function solution(n) {
    let first_num = Math.floor(n / 10);
    let modulo = n % 10;
    console.log(first_num);
    console.log(modulo);
    let sum = first_num + modulo;
    console.log("Sum of two integers = " + sum);

}

solution(34);

