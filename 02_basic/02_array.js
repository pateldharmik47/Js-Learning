let marvel_heros = ["IronMan","Thor","Caption America"];
let dc_heros = ["Batman","SuperMan","Joker"];

// WITH push 

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);  
/* OutPut  : 

[
  'IronMan',
  'Thor',
  'Caption America',
  [ 'Batman', 'SuperMan', 'Joker' ] // because array take any type 
]

*/


// WITH CONCAT 

let hero_assemble = marvel_heros.concat(dc_heros)
// console.log(hero_assemble);

/* OutPut  : 

[ 'IronMan', 'Thor', 'Caption America', 'Batman', 'SuperMan', 'Joker' ]

concat return new array

*/

// WITH spred opertor 

let heros = [...marvel_heros , ...dc_heros]
// console.log(heros);

/* OutPut  : 

[ 'IronMan', 'Thor', 'Caption America', 'Batman', 'SuperMan', 'Joker' ]

spred operator give each element of array 

*/


// flat function

let arrOfArr = [1,2,3,[6,7],8,9,[2,3,[5,6,[8,88],67]]];

let flatArr = arrOfArr.flat(Infinity)
// console.log(flatArr);

/* OutPut  : 

[
   1,  2, 3, 6, 7, 8,
   9,  2, 3, 5, 6, 8,
  88, 67
]

*/

console.log(Array.isArray("Dharmik"));  // check whether is array or not  // output : false 
console.log(Array.from("Dharmik"));  // Creates an array from an iterable object. // output : ["D","h","r","m","i","k"]
console.log(Array.from({name:"Dharmik"}));  // specify for whether make array of key or value if not specify than it gives us []. // output : []  

// create array from any multiple variable

let score1 = 12;
let score2 = 42;
let score3 = 34;

console.log(Array.of(score1,score2,score3)); // of function is use for create an array // output : [ 12, 42, 34 ]