"use strict";
const teacherDetails = {
    name: 'John Doe',
    age: 30,
    subject: 'Math'
};
console.log(teacherDetails);
const channel = {
    chanelName: 'Codevolution',
    playlist: 1500,
    instructorDetails: {
        name: 'John Doe',
        age: 30
    }
};
console.log(channel);
const sayDetails = (obj) => {
    const { firstName, lastName, age } = obj;
    return `My name is ${firstName} ${lastName} and I am ${age} years old`;
};
const instructorDetails = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};
console.log(sayDetails(instructorDetails));
