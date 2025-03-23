"use strict";
let userAge = 24;
userAge = '24';
userAge = true;
let numArr1 = ['24', '25', '26', '27', '28', '29', '30'];
let numArr2 = [24, 25, 26, 27, 28, 29, 30];
let ageArr = [24, 25, 26, '27', '28', '29', true];
let day = "Friday";
day = "Sunday";
day = "Saturday";
//  ===================  Type narrowing  ===================
function sayDetailsMan(name, age) {
    let currentAge;
    if (typeof age === "string") {
        currentAge = Number(age) - 2;
    }
    else {
        currentAge = age - 2;
    }
    console.log(`Name: ${name}, Age: ${currentAge}`);
}
sayDetailsMan('John', 24);
