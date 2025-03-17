"use strict";
// class
class Man {
    constructor() {
        this.height = 5.7;
        this.weight = 65;
    }
}
let manOne = new Man();
let manTwo = new Man();
console.log(manOne);
console.log(manTwo);
// constructor 
class BottleMaker {
    constructor(brand, price, color) {
        this.brand = brand;
        this.price = price;
        this.color = color;
    }
}
let bottleOne = new BottleMaker("Ns", 1000, "Blue");
console.log(bottleOne);
