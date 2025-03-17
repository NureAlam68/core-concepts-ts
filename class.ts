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
console.log(bottleOne);