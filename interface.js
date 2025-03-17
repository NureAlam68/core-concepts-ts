"use strict";
// interface
const userN = {
    name: "Nure Alam",
    age: 24
};
function getUser(obj) {
    const userName = obj.name;
    console.log(userName);
}
getUser(userN);
function getAdmin(obj) {
    const isAdmin = obj.admin;
    console.log(isAdmin);
}
const adminN = {
    name: "Nure Alam",
    age: 24,
    admin: true
};
getAdmin(adminN);
let a = 43;
console.log(a);
let b = null;
console.log(b);
function abcd(obj) {
}
abcd("Sohag");
// union type 
let newData;
newData = "Hello";
newData = 123;
function newAdmin(a) {
    a.status = "Admin";
}
