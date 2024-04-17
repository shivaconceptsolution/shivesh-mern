let s = "welcome in shiva concept solution"
let arr = s.split(" ")
console.log(arr)
let s1 ='ramnavami'
let sarr = Array.from(s1)
console.log(sarr)
const numbers = [1, 2, 3];
const moreNumbers = [4, 5, 6];

Array.prototype.push.apply(numbers, moreNumbers);
console.log(numbers); // Outputs: [1, 2, 3, 4, 5, 6]

function greet(name, age) {
    console.log(`Hello, ${name}. You are ${age} years old.`);
}

const person = ["John", 30];
greet.apply(null, person);