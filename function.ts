// function sayHi (person: string) {
//     console.log("Hi,", person)
// }
// sayHi("Nure Alam")

const sayHi = (person: string, age: number) => {
    console.log("Hi,", person, "You are", age, "years old")
}
sayHi("Nure Alam", 23);


const addNumber = (num1: number, num2: number): number => {
    return num1 + num2;
}
console.log(addNumber(10, 20));

const addNumber2 = (num1: number, num2: number): string => {
    return `Sum of ${num1} and ${num2} is ${num1 + num2}`;
}
console.log(addNumber2(10, 20));

const multiple = (a: number, b: number = 1) => {
    return a * b;
}
console.log(multiple(10, 20));
console.log(multiple(10));