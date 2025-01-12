// 1. Define the 'CarCl' ES6 class
class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    // Method to accelerate
    accelerate() {
        this.speed += 10;
        console.log(`${this.make} going at ${this.speed} km/h`);
        return this;  // Enable method chaining
    }

    // Method to brake
    brake() {
        this.speed -= 5;
        console.log(`${this.make} going at ${this.speed} km/h`);
        return this;  // Enable method chaining
    }
}

// 2. Define the 'EVCl' (Electric Car) class as a child of 'CarCl'
class EVCl extends CarCl {
    #charge;  // Private property for charge

    constructor(make, speed, charge) {
        super(make, speed);  // Call the parent class constructor
        this.#charge = charge;  // Set private charge property
    }

    // Method to charge the battery
    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        console.log(`${this.make}'s battery is charged to ${this.#charge}%`);
        return this;  // Enable method chaining
    }

    // Overriding the accelerate method
    accelerate() {
        this.speed += 20;
        this.#charge -= 1;
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
        return this;  // Enable method chaining
    }
}

// 3. Create an Electric Car object
const myEV = new EVCl('Rivian', 120, 23);

// Test method chaining
myEV.accelerate().brake().chargeBattery(90).accelerate().brake();
