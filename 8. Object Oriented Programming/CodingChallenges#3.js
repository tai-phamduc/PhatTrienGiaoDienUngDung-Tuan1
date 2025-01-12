// Parent Car class
class Car {
    constructor(make, speed) {
        this.make = make;  // Car make (e.g., 'Tesla')
        this.speed = speed;  // Current speed in km/h
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
}

// Child class Electric Car (EV) inheriting from Car
class EV extends Car {
    constructor(make, speed, charge) {
        super(make, speed);  // Call parent constructor
        this.charge = charge;  // Battery charge in percentage
    }

    // Method to charge the battery
    chargeBattery(chargeTo) {
        this.charge = chargeTo;
        console.log(`${this.make}'s battery charged to ${this.charge}%`);
    }

    // Override accelerate method
    accelerate() {
        this.speed += 20;
        this.charge -= 1;
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
    }
}

// Create an Electric Car object
const myEV = new EV('Tesla', 120, 23);

// Experiment with methods
myEV.accelerate();      // Accelerate Tesla
myEV.brake();           // Brake Tesla
myEV.chargeBattery(90); // Charge battery to 90%

// Output:
