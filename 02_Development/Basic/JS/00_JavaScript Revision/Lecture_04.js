// Synchronous programming means our code runs line by line 
// Each line must be completed before moving on the next one 
// In simple words Synchronous programming is like following a recipe step by step 

function bakeTheCake() {
    //for(let i  = 0; i < 1000000; i++){}
    setTimeout(() => {
        console.log("Line 5");
    }, 10000)
}

console.log("Line 1");
console.log("Line 2");
console.log("Line 3");
console.log("Line 4");
bakeTheCake();

// By default JavaScript code is Synchronous. bnut JavaScript provide sone methods by which we can make our code asynchronous for doing specific types of works 
// --->> By using Callback functions and using promises
// Asynchronous also run our code line by line
// But for moving forward we dont need to wait to finish that task
// In simple words, Asynchronous programming is like doing multiple things at once and not waiting for each line to finish before staring the next line 

// Callback function -> is a function that is passed as an argument to another function and is executed after a specific task is completed  
// Example : ordering Sandwich form sandwich shop with phone 
// #1 You call the sandwich shop and give your order (Staring the asynchronous task)
// #2 They tell, it will take 20 mins to prepare & deliver (delay in the asynchronous task)
// #3 Hang us & do others things while wait for sandwich (this is the non-blocking behaviour)
// #4 When sandwich arrive delivery person rings the doorbell (this is the callback function being executed when the task is complete) 

// Code : 

setTimeout(() => {
    console.log("This runs after 4 seconds !!");
}, 3000);


// In almost all array methods we pass Callback funciton 

number.forEach((num) => {
    console.log(num);
});

const squares = number.map((num) => num * num);

const evens = numbers.filter((num) => num % 2 == 0);

function manageStudent(callback) {
    setTimeout(() => {
        // Fetching the data from database
        callback();
    }, 3000);
}


manageStudent(() => {
    console.log("Updating the student Data !");
}
);


// Promises -> is an object which is able to holds the result of an asynchronous operation
// In other words, Promise os promise you to give you the result of the asynchronous operation or give you error 
// Promises help us to manage asynchronous tasks, like fetching data from a server or reading a file, in a more organized way  
const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        const student = { id: 1, name: "Harley" };
        const status = false;
        if (status) {
            resolve(student)
        }
        else {
            reject(new Error("This is an error"))
        }
    }, 4000);
});
pr.then((result) => console.log(result)).catch(error => console.log(error));


// async-await is a way to write asynchronous code as synchronous code
// by using aysnc-await we can consume promises in muc h easier way
// we can only use async-await in a function

async function getStudent() {
    try {
        const data = await pr;
        console.log(data);
    }
    catch (error){
        console.log(error);
    }
}

getStudent();
console.log("This is Asynchronous JavaScript");