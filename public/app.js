import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
// get form and inputs
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
// Generics
// Function in normal way
// function printData(data: number | string | boolean) {
//     console.log("Data: ", data);
// }
// printData(80);
// printData("Hello, good morning");
// printData(true);
// function printData<T>(data: T) {
//     console.log("Data", data);
// }
// printData(80);
// printData("Hello, good morning");
// printData(true);
// printData({ name: "Ali", age: 20, phone: "0787509653" });
// printData([1, 2, 3, 4]);
// printData([1, 2, 3, "Book"]);
// function getData<x, y>(v1: x, v2: y) {
// return v1 + ' ' + v2;
// }
// console.log(getData<number, number>(32, 42));
// console.log(getData<string, string>("Ali", "Good Bye!"));
// Generic with interface
// interface UserData<X, Y> {
//     name: X;
//     rollNo: Y;
// }
// // Teacher is an object
// const teacher: UserData<string, number> = {
//     name: "Kazim Hussaini",
//     rollNo: 1,
// }
// console.log('Teacher: ', teacher);
// teacher.name = "Hamid";
// teacher.rollNo = 780;
// console.log('Teacher updated: ', teacher);
// const user: UserData<string, string> = {
//     name: "Ghafor Sabury",
//     rollNo: '00987'
// }
// console.log('User: ', user);
// user.name = "Sayed Mohammad";
// user.rollNo = '1200';
// console.log('User Updated: ', user);
// class GenericClass<T> {
//     private _value: T | undefined;
//     constructor(private name: string) { }
//     // Set Value
//     public setValue(value: T) {
//         this._value = value;
//     }
//     // Return value
//     // public getValue(): T | undefined {
//     //     return this._value;
//     // }
//     // Print
//     public toString(): string {
//         return `${this.name}: ${this._value}`;
//     }
// }
// let myNumber = new GenericClass<number>('My Number');
// myNumber.setValue(10);
// console.log(myNumber.toString()); 
// let myString = new GenericClass<string>("My String");
// myString.setValue("Hello");
// console.log(myString.toString());
