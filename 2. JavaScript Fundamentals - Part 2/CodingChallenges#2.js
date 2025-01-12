// 1. Function to calculate the tip
const calcTip = (bill) => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);

// Testing calcTip function
console.log(`The tip for a bill of 100 is: ${calcTip(100)}`);

// 2. Create an array 'bills' with test data
const bills = [125, 555, 44];

// 3. Create an array 'tips' containing the tip for each bill
const tips = bills.map(calcTip);

// 4. Bonus: Create an array 'total' containing the total value (bill + tip)
const total = bills.map((bill, index) => bill + tips[index]);

// Output results
console.log('Bills:', bills);
console.log('Tips:', tips);
console.log('Total:', total);
