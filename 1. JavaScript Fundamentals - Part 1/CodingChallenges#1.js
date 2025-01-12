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

// Data 1 BMIs
const markBMI1 = calculateBMI(markMass1, markHeight1);
const johnBMI1 = calculateBMI(johnMass1, johnHeight1);

// Data 2 BMIs
const markBMI2 = calculateBMI(markMass2, markHeight2);
const johnBMI2 = calculateBMI(johnMass2, johnHeight2);

// Compare BMIs
const markHigherBMI1 = markBMI1 > johnBMI1;
const markHigherBMI2 = markBMI2 > johnBMI2;

// Results
console.log("Data 1:");
console.log(`Mark's BMI: ${markBMI1.toFixed(2)}, John's BMI: ${johnBMI1.toFixed(2)}`);
console.log(`Does Mark have a higher BMI than John? ${markHigherBMI1}`);

console.log("\nData 2:");
console.log(`Mark's BMI: ${markBMI2.toFixed(2)}, John's BMI: ${johnBMI2.toFixed(2)}`);
console.log(`Does Mark have a higher BMI than John? ${markHigherBMI2}`);
