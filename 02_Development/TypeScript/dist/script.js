"use strict";
// Basic Types
// 1. Number, String, Boolean
// 2. Arrays, Tuples
// 3. Any, Unknown, Never, Void
// 4. Enums
let a = 12;
let b;
let arr = [1, 23, 4];
let variable = true;
let arr2 = [false, 12, "Ankit"];
console.log(a);
console.log(arr);
console.log(arr2);
function abcd() {
    while (true) {
        console.log("Infinite Run");
    }
}
// abcd();
console.log("Heyyyy");
let upDirection = "UP";
let downDirection = "DOWN";
let leftDirection = "LEFT";
let rightDirection = "RIGHT";
var Direction;
(function (Direction) {
    Direction["up"] = "UP";
    Direction["down"] = "DOWN";
    Direction["left"] = "LEFT";
    Direction["right"] = "RIGHT";
})(Direction || (Direction = {}));
console.log(Direction.up); // "UP"
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log(Color[0]); // "Red"
var MousePosition;
(function (MousePosition) {
    MousePosition[MousePosition["x"] = 10] = "x";
    MousePosition[MousePosition["y"] = 0] = "y";
})(MousePosition || (MousePosition = {}));
console.log("Value of x is : ", MousePosition.x);
console.log("Value of y is : ", MousePosition.y);
// Type Inference
let x = 33;
let y = 'a';
let z = true;
// Union and Interscetion types
let d;
d = null;
d = "Ankit";
let User = {
    name: "Ankit",
    email: "ankit1233@gmail.com",
    username: "ankitshaw750",
    age: 21
};
let dabba = {
    weight: 233,
    color: "#BBBBBB",
};
const user1 = {
    name: "Ankit Shaw",
    username: "ankit_99",
    age: 25,
    email: "ankit@example.com",
    password: "securepassword123"
};
getUser(user1);
function getUser(user) {
    console.log(user.name);
    console.log(user.username);
    console.log(user.age);
    console.log(user.email);
    console.log(user.password);
}
const human1 = {
    name: "Ankit",
    age: 21
};
function abcd2(human) {
    console.log(human.name);
    console.log(human.age);
}
abcd2(human1);
// class
class Airpod {
    constructor() {
        this.price = 25000;
        this.image = "image/airpod";
        this.color = "black";
    }
    playMusic() {
        console.log("Playing music...... ");
    }
    switchMode(mode) {
        console.log(mode);
    }
}
class Remote {
    constructor() {
        this.color = "Black";
        this.category = "AC";
        this.company = "O-general";
        this.tonnes = 2;
        this.temperature = 21;
    }
    turnOn() {
        console.log("Turning on....!");
        console.log("Turned on");
    }
    turnOff() {
        console.log("Truning off...");
        console.log("Turned off");
    }
    raiseTemperatue() {
        console.log(`Raised the temperature by 1: ${this.temperature + 1}`);
    }
    decreaseTemperature() {
        console.log(`Decreased the temperature by 1: ${this.temperature - 1}`);
    }
}
const remote = new Remote();
remote.raiseTemperatue();
class Food {
    constructor() {
        this.price = 1200;
    }
    eat() {
        console.log("Eating...");
    }
}
class Mithaai extends Food {
    constructor() {
        super(...arguments);
        this.name = "Rosogollaa";
    }
}
const mithai = new Mithaai();
console.log(mithai.name);
console.log(mithai.price);
mithai.eat();
// Constructor
class Pendrive {
    constructor(name, price, storage) {
        console.log(this.company = name);
        console.log(this.price = price);
        console.log(this.storage = storage);
    }
}
let p1 = new Pendrive("Sandisk", 849, "32GB");
let p2 = new Pendrive("HP", 999, "64GB");
