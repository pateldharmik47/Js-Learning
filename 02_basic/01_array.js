// array 

let arr = [1,2,3];
console.log("arr ",typeof arr); // object

let newArr = arr.join();

console.log("newArr = ", newArr); // 1,2,3
console.log("newArr ",typeof newArr); // string

// if element is not present in array than includes give false and present than true
console.log("includes fn= ", arr.includes(4)); // false
console.log("includes fn= ", arr.includes(2)); // true

// if element is not present in array than indexOf give -1 and present than give index of element
console.log("indexOf fn= ", arr.indexOf(4)); // -1
console.log("indexOf fn= ", arr.indexOf(3)); // 4
