// 1. Create an array 'events' of the different game events (no duplicates)
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2. Remove the unfair yellow card event from minute 64
gameEvents.delete(64);
console.log(gameEvents);

// 3. Compute and log: "An event happened, on average, every 9 minutes"
const totalMinutes = 90; // duration of the game
const average = totalMinutes / gameEvents.size;
console.log(`An event happened, on average, every ${average.toFixed(2)} minutes`);

// 4. Log each event with half information
for (const [minute, event] of gameEvents) {
  const half = minute <= 45 ? '[FIRST HALF]' : '[SECOND HALF]';
  console.log(`${half} ${minute}: ${event}`);
}
