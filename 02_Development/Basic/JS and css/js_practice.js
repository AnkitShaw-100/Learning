// 1. Write a JS program to check two numbers and return true if one of the numbers is 100 or if their sum is 100.
function numberchecker(num1, num2) {
    if (num1 === 100 || num2 === 100 || num1 + num2 === 100) {
        return true;
    }
    else {
        return false;
    }
}



// 2. Write a JS program to get the extension of a filename 
function extension(str) {
    return str.slice(str.lastIndexOf('.'));
}
console.log(extension("index.html"))



// 3. Write a JS program to replace every charactcer in a given string with the character following it in the alphabet
function nextCharacter(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i); // get Unicode value
        let nextChar = String.fromCharCode(charCode + 1); // next character
        result += nextChar;
    }
    return result;
}
console.log(nextCharacter('z')); // Output: 'bcde'

/* -------------------------------------------------------------------------- 
charCodeAt(index) -> Yeh function string ke kisi character ka Unicode number (ASCII code) return karta hai.
String.fromCharCode(code) -> Yeh function Unicode number se character banata hai.
  --------------------------------------------------------------------------  */



// 4.Write Js program to get the current date

// My code (error) 
// var t = .getTime();

var now = new Date()
console.log(now);

/* -------------------------------------------------------------------------- 
new Date() → ek Date object banata hai, jo current date & time ko represent karta hai.
.getTime() → us object ka timestamp (milliseconds since Jan 1, 1970) deta hai.
  --------------------------------------------------------------------------  */

const formatDate = (date = new Date()) => {
    const days = date.getDay();
    const months = date.getMonth();
    const years = date.getFullYear();
    return `${days}/${months}/${years}`
}

console.log(formatDate());



// 5. Write a JS program to create a new stirng adding "New!" in front of a given string. If the given string with "New!" already the return the original string.
/*
not fully completed the problem 

const addingNew = (str) =>{
    return "New!" + str;
}
console.log(addingNew("Hello")); 
*/

const addNew = (str) =>
    str.startsWith('New!') ? str : `New! ${str}`;

console.log(addNew("Hello Ankit"));
console.log(addNew("New! Ankit"));



// 6. Write a JS program to create a new String from a given string taking the first 3 characters and the last  3 characters  of a string and adding them together. The string length must be 3 or more, if not, the original string is returned.

/*
my code (errors)
function newWord(str){
    if(str.length() < 3){
        return str;
    }
    else{
        firstThree = str.subtring(0,3);
        lastThree = str.subtring(str.length()-3, str.length);
        return ${firstThree} + ${lastThree};
        }
    }
        newWord(console.log("Ankit"));
*/

function newWord(str) {
    if (str.length < 3) {
        return str;
    }
    else {
        let firstThree = str.substring(0, 3);
        let lastThree = str.substring(str.length - 3);
        return firstThree + lastThree;
    }
}
console.log(newWord("ABCDEFGH"));



// 7. Write a JS program to extract the first half of a string of even length.
/* 
my code (not complete)
function evenLength(str){
    return str.substring(0, str.length / 2);
}
console.log(evenLength("Anki"));
*/

function evenLength(str) {
    if (str.length % 2 !== 0) {
        return "String length is not even";
    }
    return str.substring(0, str.length / 2);
}

console.log(evenLength("Anki"));    // Output: "An"
console.log(evenLength("Hello"));   // Output: "String length is not even"



// 8. Write a JS program to concatenate 2 strings except their first character
function twoConcat(str1, str2) {
    var firststr = str1.substring(1, str1.length);
    var secondstr = str2.substring(1, str2.length);
    return firststr + secondstr;
}

console.log(twoConcat("Ankit", "Shaw"));



// 9. Given 2 values, write a JS program to find out which one is nearest to 100
function checkNumber(num1, num2) {
    if (100 - num1 < 100 - num2)
        return num1;
    else if (100 - num1 > 100 - num2)
        return num2;
    else
        return "Both are same";
}

console.log(checkNumber(70, 70));
console.log(checkNumber(7, 70));
console.log(checkNumber(71, 70));
console.log(checkNumber(90, 10));



// 10. Write a JS program to find the number of even digits in an array of integrs
/*
my method (basic)
function findEven() {
    const arr = [1, 2];
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            count++;
        }
    }
    return count;
}
console.log(findEven()); 
*/

const findEven = (arr) => {
    return arr.filter(num => num % 2 === 0).length;
}
console.log(findEven([1, 23, 4, 5, 5, 6, 5, 5, 4, 4, 43, 3, , 3, 3, 3, 3]));
console.log(findEven([1, 3, 3]));
console.log(findEven([4, 6, 4, 4, 4]));



// 11. Write a JS program to check a given array of integer is sorted in ascending order
const isAscending = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return "No";
        }
    }
    return "Yes";
};

console.log(isAscending([1, 2, 3, 4, 5, 6])); // Yes
console.log(isAscending([0, 6, 7, 3, 2, 1])); // No



// 12. Write a JS program to get the largest even number from an array of integers
const evenLargest = (arr) => {
    let elem = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            elem.push(arr[i]);
        }
    }

    var largest = elem[0];
    for (var i = 1; i < elem.length; i++) {
        if (elem[i] > largest) {
            largest = elem[i];
        }
    }

    return largest;
}

console.log(evenLargest([2, 34, 5, 6, 7, 8]));



// 13. Write a JS program to replace the first digits in a String (which should at least conatians at least digits) with $ character.
const replaceFristDigit = (str) => {
    if (str.length < 2) {
        return "Invalid input";
    }
    else {
        return "$" + str.substring(1);
    }
}

console.log(replaceFristDigit("AN"));



// 14. Write a Js program to compare 2 objects to determine is the first one conatains the same properties as the second one(which may also have additional properties)

/* 
my code(error)
function compareObj(obj1, obj2){
    if(obj1.name === obj2.name)

    if()
}

console.log(compareObj(obj1{name= "Ankit", age="19"}, obj2 ={name= "Ankit", age="19", class = 12}))
}
*/

function compareObj(obj1, obj2) {
    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return {
                isSubset: false,
                message: "obj1 and obj2 are not same"
            };
        }
    }

    let len1 = Object.keys(obj1).length;
    let len2 = Object.keys(obj2).length;

    let message = "Both have the same number of properties.";
    if (len1 > len2) {
        message = "obj1 has more properties.";
    } else if (len1 < len2) {
        message = "obj2 has more properties.";
    }

    return {
        isSubset: true,
        message: message
    };
}

// Example
const obj1 = { name: "Ankit", age: "19" };
const obj2 = { name: "Ankit", age: "20", class: 12 };

console.log(compareObj(obj1, obj2));



// 15. Write a JS program to convert a comma-seperated values (CSV) string to a 2D array. A new line indicates a new row in the array.

function csvToArray(csv) {
    const rows = csv.trim().split('\n');           // Split by newline
    return rows.map(row => row.split(','));        // Split each row by comma
}

const csvData = `name,age,city
Ankit,19,Delhi
John,22,New York
Alice,25,London`;

console.log(csvToArray(csvData));



// 16. Write a JS program to generate a random hexadecimal color code.
/*
my code (error)
function codeGenerator(){
    var str = "";
    var temp1 = "",temp2 = "";
    for(var i = 0; i < 6; i++){
        temp1 = str.charCodeAt(Math.random('a'-'z'));
        temp2 = str.charCodeAt(Math.random('0'-'9'));
        str = String.fromCharCode(temp1) + temp2;
    }
    return "#" + str;
}
console.log(codeGenerator());
*/

function codeGenerator() {
    const hexChars = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * 16);
        color += hexChars[randomIndex];
    }
    return color;
}

console.log(codeGenerator());