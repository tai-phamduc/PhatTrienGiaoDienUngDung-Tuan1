// Function to check the dogs
const checkDogs = (dogsJulia, dogsKate) => {
  // 1. Correct Julia's data by removing the first two and last two elements
  const correctedJulia = dogsJulia.slice(1, -2); // Create a shallow copy and remove the cats

  // 2. Combine the corrected Julia data with Kate's data
  const allDogs = correctedJulia.concat(dogsKate);

  // 3. For each dog, log whether it's an adult or a puppy
  allDogs.forEach((age, index) => {
    if (age >= 3) {
      console.log(`Dog number ${index + 1} is an adult, and is ${age} years old`);
    } else {
      console.log(`Dog number ${index + 1} is still a puppy 🐶`);
    }
  });
};

// Test data 1
const dogsJulia1 = [3, 5, 2, 12, 7];
const dogsKate1 = [4, 1, 15, 8, 3];

// Test data 2
const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];

// Running the function with both test datasets
console.log('Test Data 1:');
checkDogs(dogsJulia1, dogsKate1);

console.log('\nTest Data 2:');
checkDogs(dogsJulia2, dogsKate2);
