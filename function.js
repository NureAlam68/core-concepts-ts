"use strict";
// function sayHi (person: string) {
//     console.log("Hi,", person)
// }
// sayHi("Nure Alam")
const sayHi = (person, age) => {
    console.log("Hi,", person, "You are", age, "years old");
};
sayHi("Nure Alam", 23);
const addNumber = (num1, num2) => {
    return num1 + num2;
};
console.log(addNumber(10, 20));
const addNumber2 = (num1, num2) => {
    return `Sum of ${num1} and ${num2} is ${num1 + num2}`;
};
console.log(addNumber2(10, 20));
const multiple = (a, b = 1) => {
    return a * b;
};
console.log(multiple(10, 20));
console.log(multiple(10));
