// Test data
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 150, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 25, curFood: 500, owners: ['Michael'] },
    { weight: 6, curFood: 100, owners: ['Sarah'] },
];

// Step 1: Loop over the 'dogs' array and calculate the recommended food portion
dogs.forEach(dog => {
    dog.recommendedFood = dog.weight ** 0.75 * 28;
});

// Step 2: Find Sarah's dog and log whether it's eating too much or too little
const sarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));
if (sarahsDog.curFood > sarahsDog.recommendedFood) {
    console.log('Sarah\'s dog is eating too much!');
} else if (sarahsDog.curFood < sarahsDog.recommendedFood) {
    console.log('Sarah\'s dog is eating too little!');
} else {
    console.log('Sarah\'s dog is eating the exact recommended amount!');
}

// Step 3: Create arrays for dogs that eat too much or too little
const ownersEatTooMuch = dogs
    .filter(dog => dog.curFood > dog.recommendedFood)
    .flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs
    .filter(dog => dog.curFood < dog.recommendedFood)
    .flatMap(dog => dog.owners);

// Step 4: Log the strings for owners whose dogs eat too much or too little
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// Step 5: Log whether there is any dog eating exactly the recommended amount
const anyDogEatingExactly = dogs.some(dog => dog.curFood === dog.recommendedFood);
console.log('Any dog eating exactly the recommended amount:', anyDogEatingExactly);

// Step 6: Log whether there is any dog eating an okay amount (10% above or below)
const anyDogEatingOkay = dogs.some(dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1);
console.log('Any dog eating an okay amount:', anyDogEatingOkay);

// Step 7: Create an array of dogs eating an okay amount
const dogsEatingOkay = dogs.filter(dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1);
console.log('Dogs eating an okay amount:', dogsEatingOkay);

// Step 8: Create a shallow copy of the 'dogs' array and sort it by recommended food portion
const dogsSortedByFood = [...dogs].sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log('Dogs sorted by recommended food portion:', dogsSortedByFood);
