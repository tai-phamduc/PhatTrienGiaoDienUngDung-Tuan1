const poll = {
    question: "What is your favorite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    // This generates [0, 0, 0, 0]
    answers: new Array(4).fill(0),
  
    // 1. Create the registerNewAnswer method
    registerNewAnswer() {
      const input = Number(
        prompt(
          `${this.question}\n${this.options.join("\n")}\n(Write option number)`
        )
      );
  
      // Check if the input is valid
      if (typeof input === "number" && input >= 0 && input < this.answers.length) {
        this.answers[input]++;
      } else {
        alert("Invalid input! Please select a valid option.");
      }
  
      // Display results after registering the new answer
      this.displayResults();
      this.displayResults("string");
    },
  
    // 3. Create the displayResults method
    displayResults(type = "array") {
      if (type === "array") {
        console.log(this.answers);
      } else if (type === "string") {
        console.log(`Poll results are ${this.answers.join(", ")}`);
      }
    },
  };
  
  // 2. Attach registerNewAnswer to the button
  document.body.append(document.createElement("button"));
  const button = document.querySelector("button");
  button.textContent = "Answer poll";
  button.addEventListener("click", poll.registerNewAnswer.bind(poll));
  
  // 5. Bonus: Display test data using displayResults
  poll.displayResults.call({ answers: [5, 2, 3] }, "array");
  poll.displayResults.call({ answers: [5, 2, 3] }, "string");
  poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "array");
  poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
  