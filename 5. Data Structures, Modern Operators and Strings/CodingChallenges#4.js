// 1. Create the textarea and button
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// 2. Add text content to the button
const button = document.querySelector('button');
button.textContent = 'Convert';

// 3. Add an event listener to the button
button.addEventListener('click', function () {
  // Get input value from the textarea
  const text = document.querySelector('textarea').value;

  // Split the input into an array of lines
  const lines = text.split('\n');

  // Process each line to convert to camelCase
  for (const [index, line] of lines.entries()) {
    const [first, second] = line.toLowerCase().trim().split('_');
    const camelCase = first + second[0].toUpperCase() + second.slice(1);

    // Add checkmarks corresponding to the line index
    const checkmarks = '✅'.repeat(index + 1);

    // Log the result
    console.log(`${camelCase.padEnd(20)} ${checkmarks}`);
  }
});
