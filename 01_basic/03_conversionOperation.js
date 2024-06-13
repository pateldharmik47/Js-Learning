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