// Data 1
const markMass1 = 78; // kg
const markHeight1 = 1.69; // m
const johnMass1 = 92; // kg
const johnHeight1 = 1.95; // m

// Data 2
const markMass2 = 95; // kg
const markHeight2 = 1.88; // m
const johnMass2 = 85; // kg
const johnHeight2 = 1.76; // m

// BMI Calculation Function
function calculateBMI(mass, height) {
  return mass / (height ** 2);
}

// Compare BMIs and Print Result
function compareBMIs(markBMI, johnBMI) {
  if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI.toFixed(2)}) is higher than John's (${johnBMI.toFixed(2)})!`);
  } else if (markBMI < johnBMI) {
    console.log(`John's BMI (${johnBMI.toFixed(2)}) is higher than Mark's (${markBMI.toFixed(2)})!`);
  } else {
    console.log(`Mark and John have the same BMI (${markBMI.toFixed(2)})!`);
  }
}

// Data 1 BMIs
const markBMI1 = calculateBMI(markMass1, markHeight1);
const johnBMI1 = calculateBMI(johnMass1, johnHeight1);

// Data 2 BMIs
const markBMI2 = calculateBMI(markMass2, markHeight2);
const johnBMI2 = calculateBMI(johnMass2, johnHeight2);

// Results for Data 1
console.log("Data 1:");
compareBMIs(markBMI1, johnBMI1);

// Results for Data 2
console.log("\nData 2:");
compareBMIs(markBMI2, johnBMI2);
