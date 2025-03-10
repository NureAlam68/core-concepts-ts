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

//type aliases
type sankhya = number;
let a: sankhya = 43;
console.log(a)

type value = string | number | null;
let b: value = null;
console.log(b)

type arg = string | null;

function abcd(obj: arg) {

}
abcd("Sohag") 

// union type 
let newData: string | number;

newData = "Hello";
newData = 123;     

// intersection type 
type NewUser = {
    name: string,
    email: string,
}
type NewAdmin = NewUser & {
    status: string,
}
function newAdmin(a: NewAdmin) {
    a.status = "Admin"
}
