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



// 17. Write a JS function that returns a passed string with letters in alphabetical order. Example string : "webmaster" expected output : "abemrstw"
/* 
my code (error)
function alphabeticalOrder(str){
    var min = 0;
    var arr2 = [];
    for(var i = 0; i < str.length; i++){
        if(str.charCodeAt(i) > str.charCodeAt(min));
            arr2 = str(i); 
    }
    return arr2;
}
console.log(alphabeticalOrder("aksjksjksn"));
*/

function alphabeticalOrder(str) {
    return str.split('').sort().join('');
}

console.log(alphabeticalOrder("aksjksjksn")); // Output: "aijkkkkknss"



// 18. Write a JS function that accepts a string as a parameter and counts the number of vowels within the string.
const countVowels = (str) => {
    var temp = str.split('');
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (temp[i] === 'a' || temp[i] === 'A' || temp[i] === 'e' || temp[i] === 'E' || temp[i] === 'i' || temp[i] === 'I' || temp[i] === 'o' || temp[i] === 'O' || temp[i] === 'u' || temp[i] === 'U')
            count++;
    }
    return count;
}

console.log(countVowels("Anit"));



// 19. Write a Js function to convert and amount to coins. Possile coins given are 25,10,5,2,1
function coins(num) {
    var count25 = 0;
    var count10 = 0;
    var count5 = 0;
    var count2 = 0;
    var count1 = 0;

    if (num > 25) {
        num -= 25;
        count25++;
    }
    else if (num < 25 && num > 10) {
        num -= 10;
        count10++;
    }
    else if (num < 10 && num > 5) {
        num -= 5;
        count5++;
    }

    else if (num < 5 && num > 2) {
        num -= 2;
        count2++;
    }
    else {
        num -= 1;
        count1++;
    }
    console.log("we got 25's coin : ", count25);
    console.log("we got 10's coin : ", count10);
    console.log("we got 5's coin : ", count5);
    console.log("we got 2's coin : ", count2);
    console.log("we got 1's coin : ", count1);

}
coins(118);




const people = [
    { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
    { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
    { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
    { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
    { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
    { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
    { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
    { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
    { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
    { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
    { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
    { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/2005', department: 'Development', salary: '39000' }
];


// 20. What is the average income of all the people in teh array ? 
// 21. Who are the people that are currently older than 30 ?
// 22. Print firstname and lastname of person in array?

// 20.
const totalIncome = people.reduce((sum, person) => sum + parseInt(person.salary), 0);
const averageIncome = totalIncome / people.length;
console.log("Average income is: ₹" + averageIncome.toFixed(2));

/*
my code (error)
const age = people.reduce((person) => 
    parseInt(person.age);
    var count = 0;
    if(age > 30){
        count++;
    });
console.log(count);
*/

// 21.
people.filter(person => new Date().getFullYear() - new Date(person.DOB).getFullYear() > 30)
people.forEach(person => {
    console.log(`${person.firstName} ${person.lastName}`);
});

// 22.
people.sort((personA, personB) => new Date(personA.DOB) - new Date(personB.DOB));
people.forEach(person => {
    console.log(`${person.firstName} ${person.lastName} - ${person.DOB}`);
});



const orders = [
    { orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [{ productId: '123', price: 55 }, { productId: '234', price: 30 },] },
    { orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: [{ productId: '234', price: 30 },] },
    { orderId: "345", customerId: '234', deliveryDate: '05-01-2020', delivered: true, items: [{ productId: '567', price: 30 }, { productId: '678', price: 80 },] },
    { orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [{ productId: '789', price: 12 }, { productId: '890', price: 90 },] },
    { orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [{ productId: '901', price: 43 }, { productId: '123', price: 55 },] }
];

// 23. Get a list of the orders for the customer with the Id 234 that have not been not been delivered.  
// 24. Create a new property on each order with the total piece of items ordered.
// 25. Have all orders been deliverd ?
// 26. Has the coustomer with Id '123' made nay order?
// 27. Have any products with an Id 123 been sold

// 23.
/*
my code(error)
const getProducts = () => {
    orders.filter(person) => {
        if(person.customerId === '234')
            console.log(person.items);
    }
}
*/
const getProducts = () => {
    return orders.filter(order => order.customerId === '234');
}
console.log(getProducts());

// 24.
const newProp = () => {
    orders.forEach(order => { order.totalItems = order.items.length })
    return orders;
}
console.log(newProp());
// 25.
const checkDelivery = () => {
    return orders.filter(order => order.delivered === true)
}
console.log(checkDelivery());
// 26.
const checkOrder = () => {
    const e = orders.filter(order => order.customerId === '123' && order.delivered === true)
    return e.length > 0;
}
console.log(checkOrder());
// 27.

/*
my code (error)
const checkProduct = () =>{
    const e = orders.filter(order => order.productId === '123');
    return e.length > 0; 
} 
*/

const checkProduct = () => {
    return orders.some(order =>
        order.items.some(item => item.productId === '123')
    );
};

console.log(checkProduct());



const users = [
    { id: '88f24bea-3825-4237-a0d1-efb6b92d37a4', firstName: 'Sam', lastName: 'Hughes' },
    { id: '2a35032d-e02b-4508-b3b5-6393aff75a53', firstName: 'Terri', lastName: 'Bishop' },
    { id: '7f053852-7440-4e44-838c-ddac24611050', firstName: 'Jar', lastName: 'Burke' },
    { id: 'd456e3af-596a-4224-b1dc-dd990a34c9cf', firstName: 'Julio', lastName: 'Miller' },
    { id: '58a1e37b-4b15-47c1-b95b-11fe016f7b64', firstName: 'Chester', lastName: 'Flores' },
    { id: 'b4a306cb-8b95-4f85-b9f8-434dbe010985', firstName: 'Madison', lastName: 'Marshall' },
    { id: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', firstName: 'Ava', lastName: 'Pena' },
    { id: '7f0ce45a-bdca-4067-968b-d908e79276ce', firstName: 'Gabriella', lastName: 'Steward' },
    { id: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', firstName: 'Charles', lastName: 'Campbell' },
    { id: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be', firstName: 'Madison', lastName: 'Lambert' },
];

const comments = [
    { userId: '88f24bea-3825-4237-a0d1-efb6b92d37a4', text: 'Great Job!' },
    { userId: '7f053852-7440-4e44-838c-ddac24611050', text: 'Well done, I think I understand now!' },
    { userId: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be', text: 'How do you do that? 😲' },
    { userId: '7f053852-7440-4e44-838c-ddac24611050', text: 'OK great thanks' },
    { userId: 'b4a306cb-8b95-4f85-b9f8-434dbe010985', text: 'Cool, thanks!' },
    { userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', text: 'Nice one 😉' },
    { userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', text: 'Got it.' },
    { userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', text: 'Thanks!' },
    { userId: '58a1e37b-4b15-47c1-b95b-11fe016f7b64', text: 'Cool 😀' },
    { userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', text: 'Great stuff!' },
];

// 28. What is Madison Marshall's user id?
// 29. Who wrote the first comment (assuming the first comment is in position 0 of the comments array)
// 30. Which user commented 'OK great thanks'?
// 31. Add the user's first and last name to each comment in the comments array
// 32. Get a list of the users who haven't commented

// 28.
const userPos = () => {
    return users.findIndex(person => person.firstName === 'Madison' && person.lastName === 'Marshall');
} 
// console.log(userPos());

var position = userPos();
const getuserId = () => {
    return comments[position].userId;
}
console.log(getuserId());



// 29.
const firstCommentuserID = () => {
    return comments[0].userId;
}
// console.log(firstCommentuserID());

var user = firstCommentuserID();
const gettingUser = () => {
    var index = users.findIndex(person => person.id === user); 
    return users[index].firstName + " " +users[index].lastName; 
}
console.log(gettingUser());



// 30.
const getUserWhoCommented = () => {
    return comments.findIndex(comment => comment.text === 'OK great thanks');
}

var index = getUserWhoCommented();
const getUser = () =>{
    return users[index].firstName+ " " + users[index].lastName;
}
console.log(getUser());

// 31.
const commentsWithUserNames = comments.map(comment => {
    const user = users.find(user => user.id === comment.userId);
    return {
        ...comment,
        firstName: user?.firstName || '',
        lastName: user?.lastName || ''
    };
});

console.log(commentsWithUserNames);

// 32.
const usersWhoCommented = comments.map(comment => comment.userId);
const usersWhoDidNotComment = users.filter(user => !usersWhoCommented.includes(user.id));

console.log(usersWhoDidNotComment);
