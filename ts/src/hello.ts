console.log('hi')
interface User { name: string, age:number};
const myobj =  { name: "string", age:0, gender : 19}
const myUserAccount = myobj as User;
myUserAccount;
function jsonParserUnknown(arg0: string): unknown {
    return JSON.parse(arg0);
}

let a: number = 10;
