// 1. Constructor function for Car
function Car(make, speed) {
    this.make = make;  // Car make (e.g., 'BMW')
    this.speed = speed;  // Current speed in km/h
}

// 2. Method to accelerate the car (increase speed by 10 km/h)
Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

// 3. Method to brake the car (decrease speed by 5 km/h)
Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

// 4. Create 2 Car objects
const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

// Testing the methods
car1.accelerate();  // Accelerate BMW
car1.brake();       // Brake BMW
car1.accelerate();  // Accelerate BMW

car2.brake();       // Brake Mercedes
car2.accelerate();  // Accelerate Mercedes
car2.brake();       // Brake Mercedes
