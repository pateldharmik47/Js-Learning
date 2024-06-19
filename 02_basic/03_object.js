const mySym = Symbol("add");

let Object = {
   "full name" : "Dharmik Ramani",
    name : "Dharmik",
    age : "23",
    [mySym] : "pluse",
    location : "Gandhinagar",
    email : "dharmik@google.com",
    isLoggedIn : false,
    lastLogginDays : ["Monday" , "Tuesday"]
};

console.log(Object.email);
console.log(Object["full name"]);
console.log(Object[mySym]); // for symbole dataType
console.log(Object.lastLogginDays);