// let numbers = []
// numbers[0] = 1;
// console.log(numbers)

// const enum Size {Small = 1, medium, big}

// let mySize = Size.medium
// console.log(mySize);


// type Employee = {
//     id: number;
//     name: string;
//     retire(date: Date): void;
// }
// const employee: Employee = {
//     id: 1,
//     name: 'liya',
//     retire(date: Date) {
//         console.log(date);
//     }
// };



// union types

// type Employee2 = {
//     id: number;
//     name: string;
//     weight(weight: number | string): number;
// }
// const employee: Employee2 = {
//     id: 1,
//     name: 'liya',
//     weight(weight:number | string) {
//         if (typeof(weight) === 'string')
//             return parseInt(weight) * 2.2
//         else{
//             return weight * 2.2
//         }
//     }
// }

// let employee_weight = employee.weight(30);
// let employee_weight2 = employee.weight(15)
// console.log(employee_weight,employee_weight2)

// type draggable = {
//     drag():void
// }
// type resizable = {
//     resize():void
// }


// let UIwidget: draggable & resizable ={
//     drag() {},
//     resize() {}
// }

// literal types
// type Quantity = 10 | 100;

// let quantity: Quantity = 10;
// let metric_literal:  'inch' | 'cm'='cm';

//nullable types

// function greet(name:string | null | undefined){
//     console.log('hi' + name)
// }

// greet(null);
// greet(undefined);

// optional chaining

type Customer = {
    birthday?: Date;
}

function getCustomer(isIt: number) : Customer | null {
    return isIt === 0 ? null : {birthday:new Date()}
}

let customer = getCustomer(1);
//optional property access operator

// instead of (if customer !== null && customer !== undefined)
console.log(customer?.birthday)

console.log(customer?.birthday?.getFullYear)

//optional element access operator

// if customer[0] == null
// customer?.[0]

//optional call
// let log: any = null
// log?.('a')
