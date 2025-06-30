// Basic Types
// 1. Number, String, Boolean
// 2. Arrays, Tuples
// 3. Any, Unknown, Never, Void
// 4. Enums

let a = 12;
let b: number;
let arr: number[] = [1, 23, 4];
let variable: Boolean = true;
let arr2: [Boolean, number, string] = [false, 12, "Ankit"];

console.log(a);
console.log(arr);
console.log(arr2);

function abcd(): never {
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
enum Direction {
    up = "UP",
    down = "DOWN",
    left = "LEFT",
    right = "RIGHT",
}
console.log(Direction.up); // "UP"

enum Color {
    Red,
    Green,
    Blue,
}
console.log(Color[0]); // "Red"

enum MousePosition {
    x = 10,
    y = 0,
}
console.log("Value of x is : ", MousePosition.x);
console.log("Value of y is : ", MousePosition.y);


// Type Inference
let x = 33;
let y = 'a';
let z = true;

// Union and Interscetion types
let d: string | null;
d = null;
d = "Ankit";

// Creating type 
type User = {
    name: string,
    email: string,
    username: string,
    age: number,
}

let User = {
    name: "Ankit",
    email: "ankit1233@gmail.com",
    username: "ankitshaw750",
    age: 21
}

type Dabba = {
    weight: number,
    color: string
}

let dabba: Dabba = {
    weight: 233,
    color: "#BBBBBB",
}

// Interface
interface User2 {
    name: string,
    username: string,
    age: number,
    email: string,
    password: string
}

const user1: User2 = {
    name: "Ankit Shaw",
    username: "ankit_99",
    age: 25,
    email: "ankit@example.com",
    password: "securepassword123"
};
getUser(user1);

function getUser(user: User2) {
    console.log(user.name);
    console.log(user.username);
    console.log(user.age);
    console.log(user.email);
    console.log(user.password);
}

interface Human {
    name: string;
}
interface Human {
    age: number;
}
const human1: Human = {
    name: "Ankit",
    age: 21
}
function abcd2(human: Human) {
    console.log(human.name);
    console.log(human.age);
}
abcd2(human1);

// class
class Airpod {
    price = 25000;
    image = "image/airpod";
    color = "black";

    playMusic() {
        console.log("Playing music...... ")
    }
    switchMode(mode: string) {
        console.log(mode);
    }
}

class Remote {
    color = "Black";
    category = "AC";
    company = "O-general";
    tonnes = 2;
    temperature = 21;

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
    price = 1200;
    eat() {
        console.log("Eating...");
    }
}

class Mithaai extends Food {
    name = "Rosogollaa";
}

const mithai = new Mithaai();
console.log(mithai.name);
console.log(mithai.price);
mithai.eat();

// Constructor
class Pendrive {
    public company: string;
    public price: number;
    public storage: string;

    constructor(name: string, price: number, storage: string) {
        console.log(this.company = name);
        console.log(this.price = price);
        console.log(this.storage = storage);
    }
}

let p1 = new Pendrive("Sandisk", 849, "32GB");
let p2 = new Pendrive("HP", 999, "64GB")