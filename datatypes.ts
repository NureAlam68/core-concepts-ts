// Primitive datatypes
// 1. string
let userName: string = "Nure Aalam";
console.log(userName);
// 2. number
let age: number = 24;
console.log(age);
// 3. boolean
let isMarried: boolean = false;
console.log(isMarried);
// 4. null
let data: null = null;
console.log(data);
// 5. undefined
let undefinedValue: undefined = undefined;
console.log(undefinedValue);

// Object datatypes
// 1. Array
let names: string[] = ["Sohag", "Saymon"];
console.log(names);
let ages: number[] = [24, 23];
console.log(ages);
let isMarrieds: boolean[] = [false, false];
console.log(isMarrieds);
// 2. Object
let user: { name: string, age: number} = { name: "Nure Alam", age: 24};
console.log(user);
// 3. Tuple
let person: [string, number] = ["Nure Alam", 24];
console.log(person);

// special datatypes
//1. enum
enum Role {
    Admin = "ADMIN",
    User = "USER",
    Moderator = "MODERATOR"
}
console.log(Role.Admin);
//2. any
let anyValue: any = "Nure Alam";
anyValue = 24;
anyValue = false;
console.log(anyValue);
//unknown
let value: unknown = "Nure Alam";
if(typeof value === "string") {
    console.log(value.toUpperCase());
}
//3. void   
function greet(): void {
    console.log("Hello, World!");
}
//4. never
function throwError(): never {
    throw new Error("Error");
}

// type inference
let userName1 = "Nure Alam";
console.log(userName1);
// type annotation
let userName2: string = "Nure Alam";
console.log(userName2);