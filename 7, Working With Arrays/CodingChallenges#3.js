// Rewriting the calcAverageHumanAge function using an arrow function and chaining
const calcAverageHumanAge = (ages) => 
  ages
    .map(age => age <= 2 ? age * 2 : 16 + age * 4)    // Convert dog ages to human ages
    .filter(age => age >= 18)                          // Exclude dogs with less than 18 human years
    .reduce((sum, age, _, arr) => sum + age / arr.length, 0); // Calculate the average human age

// Test data 1
const dogsData1 = [5, 2, 4, 1, 15, 8, 3];

// Test data 2
const dogsData2 = [16, 6, 10, 5, 6, 1, 4];

// Running the function for both test datasets
console.log('Test Data 1 - Average Human Age:', calcAverageHumanAge(dogsData1));
console.log('Test Data 2 - Average Human Age:', calcAverageHumanAge(dogsData2));
