var c = 234

if (true) {
    let a = 10;
    const b = 20;
    var c = 40;
}

// console.log(a); //  a is not defined
// console.log(b); // b is not defined
// console.log(c); // 40  thats why never use var

function one() {
    let userName = "Shivam Ramani";

    function two() {
        const website = "Youtube";
        console.log("User Name in two = ", userName);
    }
    // console.log("Website in One = ", website);  // website is not defined
    two()

}

one(); // User Name in two =  Shivam Ramani


console.log("addOne function = ",addOne(5));
function addOne(num1){
    return num1 + 1;
}
// OUTPUT of addOne is addOne function =  6


// OUTPUT of Two:  addTwo is not defined

console.log("addTwo function = ",addTwo(5));
const Two = function addTwo(num2){
    return num2 + 1;
}


// Falsy values : 
/* false , 0 , -0 , BrigInt 0n , " ,null , undefine,NaN */


// Truethy values : 
/* "0","false","",[],{},function(){}  */