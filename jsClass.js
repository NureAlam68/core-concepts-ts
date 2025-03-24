class Computer {
    #ssd = 512;     //privet property
    camera = "50px";
    constructor(name, ram) {
        this.name = name;
        this.ram = ram;
        console.log(this);
    }

    aboutComputer() {
        console.log(`This is ${this.name} computer and it has ${this.ram} GB of RAM and ${this.#ssd} GB of SSD`);
        this.#ssdInfo();
    }

    #ssdInfo() {
        console.log(`This computer has ${this.#ssd} GB of SSD`);
    }

    get cameraDetails() {   // get method can be access property like a object property
        return this.camera;
    }

    set cameraDetails(px) {
        this.camera = px;
    }
}

let hp = new Computer("HP", 16);

hp.aboutComputer();
console.log(hp); 
console.log(hp.cameraDetails);  //get method can be access property like a object property
hp.cameraDetails = "100px";     //set method can be access property like a object property
console.log(hp.cameraDetails);  //get method can be access property like a object property
console.log(hp.ssd);      //privet property can't be accessed outside the class


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