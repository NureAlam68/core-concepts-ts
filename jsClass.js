class Computer {
    constructor(name, ram) {
        this.name = name;
        this.ram = ram;
        console.log(this);
    }

    aboutComputer() {
        console.log(`This is ${this.name} computer and it has ${this.ram} GB of RAM`);
    }
}

let hp = new Computer("HP", 16);

hp.aboutComputer();
console.log(hp); 


class Student {
    constructor(name, roll) {
        this.name = name;
        this.roll = roll;
    }

    aboutStudent() {
        console.log(`This is ${this.name} and his roll number is ${this.roll}`);
    }
}

let student1 = new Student("John", 101);
console.log(student1);
student1.aboutStudent();