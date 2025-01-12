// 1. Arrow function to calculate the average score
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// 2. Function to check the winner
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins!');
  }
}

// Test Data 1
const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);
console.log("Data 1:");
checkWinner(avgDolphins1, avgKoalas1);

// Test Data 2
const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);
console.log("\nData 2:");
checkWinner(avgDolphins2, avgKoalas2);
