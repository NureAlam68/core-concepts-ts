type People1 = {
    name: string;
    age: number;
}
// not work like this

// type People1 = {
//     isStudent: boolean;   
// }



// ======interface========

interface People {
    name: string;
    age: number;
}

interface People {
    isStudent: boolean;
    getName(): string;
}

const nure: People = {
    name: 'Nure Alam',
    age: 25,
    isStudent: true,
    getName: function() {
        return `My name is ${this.name}`;
    }
}
console.log(nure.getName());

// interface can be extended

interface Family {
    isMarried: boolean;
}

interface Employee extends People, Family {
    salary: number;
    designation: string;
}

const employee: Employee = {
    name: 'Nure Alam',
    age: 25,
    isStudent: false,
    salary: 10000,
    designation: 'Software Engineer',
    getName: function() {
        return `My name is ${this.name}`;
    },
    isMarried: false
}
console.log(employee.designation);