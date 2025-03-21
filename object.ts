const teacherDetails: { name: string, age: number, subject: string } = {
    name: 'John Doe',
    age: 30,
    subject: 'Math'
}
console.log(teacherDetails);

type chanelType = {
    chanelName: string,
    playlist: number,
    instructorDetails: {
        name: string,
        age: number,
    }
}

const channel: chanelType = {
    chanelName: 'Codevolution',
    playlist: 1500,
    instructorDetails: {
        name: 'John Doe',
        age: 30
    }
}
console.log(channel);


type NameType = {
    firstName: string,
    lastName: string
}
type AgeType = {
    age: number
}

type PersonType = NameType & AgeType;

const sayDetails =(obj: PersonType): string => {
    const {firstName, lastName, age} = obj;
    return `My name is ${firstName} ${lastName} and I am ${age} years old`;
}

const instructorDetails: PersonType = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
}
console.log(sayDetails(instructorDetails));