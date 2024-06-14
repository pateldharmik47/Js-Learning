let score = "true";

// console.log("score type is =",typeof score);

let valueNum = Number(score); // Number function return NaN when there is not a number type variable
// console.log("valueNum =",valueNum);
// console.log("valueNum type is =",typeof valueNum);


let num = 2;
let boolean = Boolean(num);
// console.log("boolean",boolean);

let str = {};
let string = String(str) // typeof String function is string eventhough value is number
console.log("string=",string);
console.log("type of str value",typeof string);

/*
33 => 33;
"33" => 33;
"12ads" => NaN;
true => 1,
false => 0 

Boolean : 
boolean of null , undefine , "" , 0=> false ,
boolean of {} , [], 1, "any thing" => trues

String:

5 => string

*/


/* 

    Stack and Heap :
    
    Stack (Premative)  and Heap (Non Premative)
    Premative: Number , boolean , string all are Premative.
    Non Premative : Array , Object and Function are Non Premative. 

    Other than ARRAY , OBJECT AND FUNCTION ALL ARE PREMATIVE TYPE.

    Stack create a copy of memory and Heap create refrense for that variable.
    
*/

let Name = "Dharmik Patel";
let anotherName = Name;

anotherName = "Shivam Ramani"

console.log("Name=",Name); // outPut : Dharmik Patel (Stack)
console.log("anotherName=",anotherName); // outPut : Shivam Ramani (Stack);

let obj = {
    email : "abc@test.com",
    name : "ABC"
}

let obj2 = obj;

obj2.email = "dharmik@learn.com";


console.log("obj=",obj);
console.log("obj2=",obj2);