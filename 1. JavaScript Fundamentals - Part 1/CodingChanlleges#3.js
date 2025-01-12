// Function to calculate average score
function calculateAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
  }
  
  // Function to determine the winner
  function determineWinner(avgDolphins, avgKoalas, minScore = 100) {
    if (avgDolphins >= minScore && avgDolphins > avgKoalas) {
      console.log(`Dolphins win the trophy with an average score of ${avgDolphins}!`);
    } else if (avgKoalas >= minScore && avgKoalas > avgDolphins) {
      console.log(`Koalas win the trophy with an average score of ${avgKoalas}!`);
    } else if (avgDolphins >= minScore && avgKoalas >= minScore && avgDolphins === avgKoalas) {
      console.log(`It's a draw! Both teams have an average score of ${avgDolphins}.`);
    } else {
      console.log("No team wins the trophy.");
    }
  }
  
  // Test Data
  // Data 1
  const avgDolphins1 = calculateAverage(96, 108, 89);
  const avgKoalas1 = calculateAverage(88, 91, 110);
  console.log("Data 1:");
  determineWinner(avgDolphins1, avgKoalas1);
  
  // Data Bonus 1
  const avgDolphinsBonus1 = calculateAverage(97, 112, 101);
  const avgKoalasBonus1 = calculateAverage(109, 95, 123);
  console.log("\nData Bonus 1:");
  determineWinner(avgDolphinsBonus1, avgKoalasBonus1);
  
  // Data Bonus 2
  const avgDolphinsBonus2 = calculateAverage(97, 112, 101);
  const avgKoalasBonus2 = calculateAverage(109, 95, 106);
  console.log("\nData Bonus 2:");
  determineWinner(avgDolphinsBonus2, avgKoalasBonus2);
  