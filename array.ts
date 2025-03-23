let arr: number[] = [];

arr[0] = 1;
arr.push(2);
console.log(arr);

const nameOfFriends: string[] = ['Alice', 'Bob', 'Charlie'];
const ageOfFriends: number[] = [20, 21, 22];
const isMarriedAll: boolean[] = [false, true, false];

// two dimensional array
const friends: string[][] = [
    ['Alice', 'Bob'],
    ['Charlie', 'David']
]
console.log(friends);


// three dimensional array
const friends3D: string[][][] = [
    [
        ['Alice', 'Bob'],
        ['Charlie', 'David']
    ],
    [
        ['Eve', 'Frank'],
        ['Grace', 'Helen']
    ]
]
console.log(friends3D);