// Normal function
function sayHello() {
    console.log("Hello JavaScript World");
}
sayHello();


// Arrow function
const greet = () => {
    console.log("Hello Javascript World")
}
greet();


// For each

const numbers = [10, 20, 30, 40, 50];

numbers.forEach((value, index) => {
    console.log(value);
});

// forEach
// array.forEach(element => {

// });

const newArray = numbers.map(updated);

function updated(n) {
    return n * 10;
}
console.log(newArray);

// Map method 
// - used to update an array 
// - and fetch array form exsisting array **(Map always return new array, it will not change original array)** 
// - Map is not same as for-each loop it works for each item/element

// filter method 
const ages = [5, 10, 15, 20, 30];
console.log(ages);

const adults = ages.filter((age) => {
    return age > 18; // always return a new array
})

console.log(adults);

const marks = [89, 78, 67, 89, 90, 81];
let sum = 0;
for (const n of marks) {
    sum += n;
}

console.log(sum);

marks.reduce((total, currentValue) => {
    console.log(`Total ${total}, CV ${currentValue}`);
    return total + currentValue;
}, 0)

// setTimeOut
console.log("First line");
function greeting() {
    console.log("Good morning, have a nice day");
}
setTimeout(greeting, 5000);
console.log("Last line");

let num = 0;
function printTime() {
    num++;
    let time = new Date().toLocaleTimeString();
    console.log(time);
    if (num >= 3) {
        clearInterval(printer);
    }
}

const printer = setInterval(printTime, 1000);

// Fetch api is the easiest way to make any http request in JavaScript 
// Otherways -> AJX, XMLHttpRequest

fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (res) {
        console.log(res);
    })
    .then((res) => console.log(data));

const data = {
    title: "This is title",
    body: "This is post body",
    userId: 2
}
fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify(data),
    headers:{
        "Content-type": "application/json"
    }
}).then(res => res.json()).then(data => console.log(data))