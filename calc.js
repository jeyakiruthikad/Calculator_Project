let result = document.getElementById("result");
let history = document.getElementById("history");

let currentInput = "";
let firstNumber = null;
let operator = null;

/* Add number */
function append(value) {
  currentInput += value;
  result.innerText = currentInput;
}

/* Clear everything */
function clearAll() {
  currentInput = "";
  firstNumber = null;
  operator = null;
  result.innerText = "0";
  history.innerText = "";
}

/* Delete last */
function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  result.innerText = currentInput || "0";
}

/* Operator logic */
function appendOperator(op) {
  if (currentInput === "") return;

  if (firstNumber === null) {
    firstNumber = parseFloat(currentInput);
  } else {
    firstNumber = operate(firstNumber, parseFloat(currentInput), operator);
  }

  operator = op;
  history.innerText = firstNumber + " " + operator;
  currentInput = "";
}

/* Calculate result */
function calculate() {
  if (operator === null || currentInput === "") return;

  let secondNumber = parseFloat(currentInput);
  let output = operate(firstNumber, secondNumber, operator);

  history.innerText = firstNumber + " " + operator + " " + secondNumber;
  result.innerText = output;

  currentInput = output.toString();
  firstNumber = null;
  operator = null;
}

/* Core operations */
function operate(a, b, op) {
  switch (op) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return b !== 0 ? a / b : "Error";
    case "%": return a % b;
    default: return b;
  }
}