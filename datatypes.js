"use strict";
// Primitive datatypes
// 1. string
let userName = "Nure Aalam";
console.log(userName);
// 2. number
let age = 24;
console.log(age);
// 3. boolean
let isMarried = false;
console.log(isMarried);
// 4. null
let data = null;
console.log(data);
// 5. undefined
let undefinedValue = undefined;
console.log(undefinedValue);
// Object datatypes
// 1. Array
let names = ["Sohag", "Saymon"];
console.log(names);
let ages = [24, 23];
console.log(ages);
let isMarrieds = [false, false];
console.log(isMarrieds);
// 2. Object
let user = { name: "Nure Alam", age: 24 };
console.log(user);
// 3. Tuple
let person = ["Nure Alam", 24];
console.log(person);
// special datatypes
//1. enum
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
    Role["Moderator"] = "MODERATOR";
})(Role || (Role = {}));
console.log(Role.Admin);
//2. any
let anyValue = "Nure Alam";
anyValue = 24;
anyValue = false;
console.log(anyValue);
//unknown
let value = "Nure Alam";
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
//3. void   
function greet() {
    console.log("Hello, World!");
}
//4. never
function throwError() {
    throw new Error("Error");
}
