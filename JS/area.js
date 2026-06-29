// Area of rectangle, triangle and circle
"use strict";

// Area of rectangle
function areaRectangle(length, breadth) {
    let area = length * breadth;
    console.log("Area of rectangle = " + area)
}
areaRectangle(3, 4)

// Area of triangle
function areaTriangle(length, breadth) {
    let area = 0.5 * length * breadth;
    console.log("Area of triangle = " + area)
}
areaTriangle(6, 7)

// Area of circle
function areaCircle(radius) {
    let area = Math.PI * radius**2;
    console.log(area);
}
areaCircle(4);