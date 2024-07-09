const arr = [1, 2, 3, 4, 5];

for (const index of arr) {
    // console.log("Number of array ",index);    
}

const greetings = "Hello World!"

for (const greet of greetings) {
    // console.log(`Each Char is ${greet}`);

}

// MAPS 

const map = new Map();
map.set('IN', "India")
map.set('USA', "United State Of America")
map.set('FR', "France")

// console.log(map);

for (const [key, value] of map) {

    // console.log(`${key} :- ${value}`);

}

const myObj = {
    "game1": "Football",
    "game2": "Cricket"
}

// for (const [key,value] of myObj) {

//     console.log(`${key} :- ${value}`);

// } // myObj is not iterable


const Object = {
    js: "javascript",
    cpp: "C++",
    rb: "rubby"
}

for (const key in Object) {
    // console.log(`${key} is sortcut of ${Object[key]}`); 
}

const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "Js"
    },
    {
        languageName: "Java",
        languageFileName: "Java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]

// myCoding.forEach((item) => {
//     console.log(item.languageName);
//     console.log(item.languageFileName);
// })

const myNums = [1,2,3];

const myTotal = myNums.reduce((accu,cuurentVal) => {
    return accu + cuurentVal;
},0)

// console.log(myTotal);