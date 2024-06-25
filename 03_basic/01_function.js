function addNumberNoReturn (num1 , num2){
    // console.log(num1 + num2);
}
let val = addNumberNoReturn(6161,68433)
console.log("val",val); // undefined

// without return value function not return any value in this example val value is undefine.

function addNumber (num1 , num2){
   let value = num1 + num2 ;
   return value
}
let result = addNumber(6161,68433)
console.log(result); // 74594

function loginUserMessage (userName = "Shivam"){

    if(!userName){
        console.log("Please Enter Valide User Name");
        return 
    }
   return `Hello ${userName}!!`

}

console.log(loginUserMessage());// Hello Shivam!!
console.log(loginUserMessage("Dharmik"));// Hello Dharmik!!
console.log(loginUserMessage(123));// Hello 123!!

/* in this ex. parameter has intial value so userName never be undefine if I pass something in argument it takes argument as parameter and give ans according to it */


// Rest Operator : 

function addToCart(...Number){
    return Number;
}

console.log(addToCart(undefined,2,333,null,3,3232)); // [ undefined, 2, 333, null, 3, 3232 ]