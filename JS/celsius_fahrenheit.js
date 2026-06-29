// Converting celsius to fahrenheit and vice versa
"use strict";

// Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    let fahrenheit = celsius * 9 / 5 + 32;
    console.log(celsius + "°C = " + fahrenheit + "°F");
}

celsiusToFahrenheit(30);

// Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;
    console.log(fahrenheit + "°F = " + celsius + "°C");
}

fahrenheitToCelsius(86);