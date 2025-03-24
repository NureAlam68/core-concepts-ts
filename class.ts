// class
class Man {
    height: number = 5.7;
    weight: number = 65;
}
let manOne = new Man() 
let manTwo = new Man() 

console.log(manOne)
console.log(manTwo)


// constructor 
class BottleMaker {
    constructor(public brand: string, public price: number, public color: string) {

    }
}

let bottleOne = new BottleMaker("Ns", 1000, "Blue");
let bottleTwo = new BottleMaker("Pep", 2000, "Red");
console.log(bottleOne);
console.log(bottleTwo);


// this
class Abc {
    name = "Nur";
    printName() {
        console.log(this.name);
    }
}

class Laptop {
    private _ssd: number = 512;

    constructor(public brand: string, public model: string) {
        this.brand = brand;
        this.model = model;
        this.getDetails();
    }

    private getDetails(): void {
        console.log(`Brand: ${this.brand}, Model: ${this.model}`);
    }

    get ssd(): number {
        return this._ssd;
    }
}

let laptop = new Laptop("Dell", "Inspiron");
console.log(laptop);
console.log(laptop.ssd);

// interface in ts class

interface ComputerInterface {
    brand: string;
    model: string;
}

interface DetailsInterface {
    getDetails(): void;
}

class Computer implements ComputerInterface, DetailsInterface {
    constructor(public brand: string, public model: string) {}

    getDetails(): void {
        console.log(`Brand: ${this.brand}, Model: ${this.model}`);
    }
}

let computer = new Computer("HP", "14 u g6");
computer.getDetails();
