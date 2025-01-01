let history = []; // Array to store the last three calculations

function appendValue(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculateResult() {
  try {
    const display = document.getElementById("display");
    const expression = display.value; // Capture the entire expression
    const result = eval(expression);
    display.value = result;

    // Add the full expression and result to history
    addToHistory(`${expression} = ${result}`);
  } catch (error) {
    display.value = "Error";
  }
}

function backspace() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1); // Remove the last character
}

// Function to add a calculation to history
function addToHistory(calculation) {
  if (history.length === 5) {
    history.shift(); // Remove the oldest calculation if there are already three
  }
  history.push(calculation);
  updateHistoryDisplay();
}

// Function to update the history display on the calculator
function updateHistoryDisplay() {
  document.getElementById("history1").innerText = history[4] || ""; //latest calculation
  document.getElementById("history2").innerText = history[3] || "";
  document.getElementById("history3").innerText = history[2] || ""; 
  document.getElementById("history4").innerText = history[1] || "";
  document.getElementById("history5").innerText = history[0] || ""; // Oldest calculation
}
