const userN = {
    name: "Nure Alam",
    age: 24
};

interface User {
    name: string;
    age: number;
    email?: string;
}

function getUser(obj: User) {
    const userName = obj.name;
    console.log(userName)
}
getUser(userN)