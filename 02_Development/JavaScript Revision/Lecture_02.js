"use strict" // treats all JS Code as newer version

//alert("Hello Ankit") -> terminal pe kaam nhi karega  browser pe sirf kaam karega

let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;


// dataTypes 7 main primitive -> are stored in stack

// 1. number -> 2^53
// 2. String -> " "
// 3. boolean -> true/false
// 4. undefined -> 
// 5. null -> standalone value 
// 6. bigInt
// 7. symbol -> unique


// Non Primiive (3) -> are stored in heap

// Array
// Objects
// Functions


console.log(typeof null); // -> object
console.log(typeof undefined); // -> undefined


const heros = ["Shaktiman", "Spiderman", "Ankit"]
let myObj = {
    name: "Ankit",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

