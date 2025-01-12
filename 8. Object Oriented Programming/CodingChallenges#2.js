// 1. Define the ES6 class 'CarCl'
class CarCl {
    constructor(make, speed) {
        this.make = make;  // Car make (e.g., 'Ford')
        this.speed = speed;  // Current speed in km/h
    }

    // 2. Accelerate method to increase speed by 10 km/h
    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    // 3. Brake method to decrease speed by 5 km/h
    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    // 4. Getter for speed in miles per hour
    get speedUS() {
        return this.speed / 1.6;
    }

    // 5. Setter for speed in miles per hour
    set speedUS(speedInMiles) {
        this.speed = speedInMiles * 1.6;
    }
}

// 6. Create a new car object
const car1 = new CarCl('Ford', 120);

// Test accelerate and brake methods
car1.accelerate();  // Accelerate Ford
car1.brake();       // Brake Ford

// Test getter and setter for speedUS
console.log(`${car1.make} is going at ${car1.speedUS} mi/h`);  // Getter for speed in mi/h

car1.speedUS = 100;  // Setter for speed in mi/h
console.log(`${car1.make} is now going at ${car1.speed} km/h`);  // Checking the speed in km/h after setter
