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
let bottleTwo = new BottleMaker("Pep", 2000, "Red");
console.log(bottleOne);
console.log(bottleTwo);
// this
class Abc {
    constructor() {
        this.name = "Nur";
    }
    printName() {
        console.log(this.name);
    }
}
class Laptop {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
        this._ssd = 512;
        this.brand = brand;
        this.model = model;
        this.getDetails();
    }
    getDetails() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}`);
    }
    get ssd() {
        return this._ssd;
    }
}
let laptop = new Laptop("Dell", "Inspiron");
console.log(laptop);
console.log(laptop.ssd);
