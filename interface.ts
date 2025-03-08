// interface
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

// interface extends
interface Admin extends User {
    admin: boolean;
}

function getAdmin(obj: Admin) {
    const isAdmin = obj.admin;
    console.log(isAdmin)
}
const adminN = {
    name: "Nure Alam",
    age: 24,
    admin: true
}
getAdmin(adminN)