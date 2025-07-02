// Basic Types
// 1. Number, String, Boolean
// 2. Arrays, Tuples
// 3. Any, Unknown, Never, Void
// 4. Enums
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a = 12;
var b;
var arr = [1, 23, 4];
var variable = true;
var arr2 = [false, 12, "Ankit"];
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
var upDirection = "UP";
var downDirection = "DOWN";
var leftDirection = "LEFT";
var rightDirection = "RIGHT";
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
var x = 33;
var y = 'a';
var z = true;
// Union and Interscetion types
var d;
d = null;
d = "Ankit";
var User = {
    name: "Ankit",
    email: "ankit1233@gmail.com",
    username: "ankitshaw750",
    age: 21
};
var dabba = {
    weight: 233,
    color: "#BBBBBB",
};
var user1 = {
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
var human1 = {
    name: "Ankit",
    age: 21
};
function abcd2(human) {
    console.log(human.name);
    console.log(human.age);
}
abcd2(human1);
// class
var Airpod = /** @class */ (function () {
    function Airpod() {
        this.price = 25000;
        this.image = "image/airpod";
        this.color = "black";
    }
    Airpod.prototype.playMusic = function () {
        console.log("Playing music...... ");
    };
    Airpod.prototype.switchMode = function (mode) {
        console.log(mode);
    };
    return Airpod;
}());
var Remote = /** @class */ (function () {
    function Remote() {
        this.color = "Black";
        this.category = "AC";
        this.company = "O-general";
        this.tonnes = 2;
        this.temperature = 21;
    }
    Remote.prototype.turnOn = function () {
        console.log("Turning on....!");
        console.log("Turned on");
    };
    Remote.prototype.turnOff = function () {
        console.log("Truning off...");
        console.log("Turned off");
    };
    Remote.prototype.raiseTemperatue = function () {
        console.log("Raised the temperature by 1: ".concat(this.temperature + 1));
    };
    Remote.prototype.decreaseTemperature = function () {
        console.log("Decreased the temperature by 1: ".concat(this.temperature - 1));
    };
    return Remote;
}());
var remote = new Remote();
remote.raiseTemperatue();
var Food = /** @class */ (function () {
    function Food() {
        this.price = 1200;
    }
    Food.prototype.eat = function () {
        console.log("Eating...");
    };
    return Food;
}());
var Mithaai = /** @class */ (function (_super) {
    __extends(Mithaai, _super);
    function Mithaai() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Rosogollaa";
        return _this;
    }
    return Mithaai;
}(Food));
var mithai = new Mithaai();
console.log(mithai.name);
console.log(mithai.price);
mithai.eat();
// Constructor
var Pendrive = /** @class */ (function () {
    function Pendrive(name, price, storage) {
        console.log(this.company = name);
        console.log(this.price = price);
        console.log(this.storage = storage);
    }
    return Pendrive;
}());
var p1 = new Pendrive("Sandisk", 849, "32GB");
var p2 = new Pendrive("HP", 999, "64GB");
