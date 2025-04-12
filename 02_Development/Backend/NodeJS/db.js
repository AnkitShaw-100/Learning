//-----------------------------command to run nodemon : nodemon db.js-------------------------

/*
1.
var add = function(a, b){
    return a + b;
}
*/

/*
2.
var add = (a, b) => { return a + b; }
*/

/*
3.
var result = add(444, 7);
console.log(result);
*/

/*
4.
(function(){
    console.log("Prince is added !!!");
})();
*/

//--------------------Nodemon crashes for this code----------------------------------------------

/*
5.
function callback(){
    console.log('Prince is calling a callback function');
}

const add = function(a, b, callback){
    var result = a + b;
    console.log('Result : ' + result);
    callback();
}

add(3, 4, callback);
*/

var fs = require('fs');
var os = require('os');

var user = os.userInfo();
console.log(user);
console.log(user.username);

fs.appendFile('Greeting.txt', 'Hii  ' + user.username + '!\n', () => {
    console.log('File is created...');
});

console.log(os);
