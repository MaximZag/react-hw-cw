interface IUser {
    name: string;
    age: number;
    gender: string;
}

const user={
    name:'Max',
    age:22,
    gender:'male'
}

function sum(a: number, b: number): number {
    return a + b
}

function showSum(a: number, b: number): void {
    console.log(a + b);
}

function incAge(someUser:IUser, inc:number):IUser {
    someUser.age += inc
    return someUser
}

console.log(sum(1, 2));
showSum(2, 3)
console.log(incAge(user, 2))