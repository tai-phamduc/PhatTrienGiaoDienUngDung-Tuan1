// Function to calculate the average human age of adult dogs
const calcAverageHumanAge = (ages) => {
    // 1. Convert dog age to human age
    const humanAges = ages.map(age => {
      if (age <= 2) {
        return age * 2;
      } else {
        return 16 + age * 4;
      }
    });
  
    // 2. Exclude all dogs that are less than 18 human years old
    const adultDogs = humanAges.filter(age => age >= 18);
  
    // 3. Calculate the average human age
    const averageAge = adultDogs.reduce((sum, age) => sum + age, 0) / adultDogs.length;
  
    return averageAge;
  };
  
  // Test data 1
  const dogsData1 = [5, 2, 4, 1, 15, 8, 3];
  
  // Test data 2
  const dogsData2 = [16, 6, 10, 5, 6, 1, 4];
  
  // Running the function for both test datasets
  console.log('Test Data 1 - Average Human Age:', calcAverageHumanAge(dogsData1));
  console.log('Test Data 2 - Average Human Age:', calcAverageHumanAge(dogsData2));
  