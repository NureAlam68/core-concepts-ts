let userAge: number | string | boolean = 24;

userAge = '24';
userAge = true;


let numArr1: string[] | number[] = ['24', '25', '26', '27', '28', '29', '30'];
let numArr2: string[] | number[] = [24, 25, 26, 27, 28, 29, 30];


let ageArr: (number | string | boolean)[] = [24, 25, 26, '27', '28', '29', true];

let day: 'Friday' | 'Saturday' | 'Sunday' = "Friday";

day = "Sunday";
day = "Saturday";


//  ===================  Type narrowing  ===================

function sayDetailsMan(name: string, age: number | string): void {
    let currentAge;

    if(typeof age === "string") {
        currentAge = Number(age) - 2;
    }else {
        currentAge = age - 2;
    }

    console.log(`Name: ${name}, Age: ${currentAge}`);
}
sayDetailsMan('John', 24);