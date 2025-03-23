"use strict";
const nure = {
    name: 'Nure Alam',
    age: 25,
    isStudent: true,
    getName: function () {
        return `My name is ${this.name}`;
    }
};
console.log(nure.getName());
const employee = {
    name: 'Nure Alam',
    age: 25,
    isStudent: false,
    salary: 10000,
    designation: 'Software Engineer',
    getName: function () {
        return `My name is ${this.name}`;
    },
    isMarried: false
};
console.log(employee.designation);
