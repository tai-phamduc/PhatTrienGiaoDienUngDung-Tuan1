// 1. Function to print the forecast
const printForecast = (arr) => {
    let result = ''; // Initialize an empty string to store the forecast string
    for (let i = 0; i < arr.length; i++) {
      // Append the temperature and day information to the result string
      result += `... ${arr[i]}°C in ${i + 1} days `;
    }
    console.log(result + '...');
  };
  
  // 2. Test data
  const data1 = [17, 21, 23];
  const data2 = [12, 5, -5, 0, 4];
  
  // Call the function with test datasets
  printForecast(data1); // Output: "... 17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days ..."
  printForecast(data2); // Output: "... 12°C in 1 days ... 5°C in 2 days ... -5°C in 3 days ... 0°C in 4 days ... 4°C in 5 days ..."
  