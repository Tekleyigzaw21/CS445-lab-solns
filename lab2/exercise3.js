var Car = /** @class */ (function () {
    // name: string;
    // acceleration: number;
    // constructor(name: string) {
    // this.name = name;
    // this.acceleration = 0;
    // }
    function Car(name, acceleration) {
        if (acceleration === void 0) { acceleration = 0; }
        this.name = name;
        this.acceleration = acceleration;
    }
    Car.prototype.honk = function () {
        console.log(" ".concat(this.name, " is saying: Toooooooooot!"));
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk(); // BMW is saying: Toooooooooot!
console.log(car.acceleration); // 0
car.accelerate(60);
console.log(car.acceleration); // 60
