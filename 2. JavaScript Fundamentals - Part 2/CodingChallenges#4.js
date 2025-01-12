// 1. Bills array with 10 test values
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// 2. Empty arrays for tips and totals
const tips = [];
const totals = [];

// 3. Function to calculate tip based on the bill value
const calcTip = (bill) => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);

// Loop through bills array and calculate tips and totals
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]); // Calculate the tip
  tips.push(tip); // Add the tip to the tips array
  totals.push(bills[i] + tip); // Add the total (bill + tip) to the totals array
}

// Log the results
console.log('Bills:', bills);
console.log('Tips:', tips);
console.log('Totals:', totals);

// 4. Bonus: Function to calculate the average of an array
const calcAverage = (arr) => {
  let sum = 0; // Start with sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // Add each element to the sum
  }
  return sum / arr.length; // Return the average (sum divided by array length)
};

// Calculate the average for the totals array and log it
const averageTotal = calcAverage(totals);
console.log('Average Total:', averageTotal);
