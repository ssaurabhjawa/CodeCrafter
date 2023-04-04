let firstNumber = "";
let secondNumber = "";
let operation = "";
let displayValue = "0";

function numberPressed(number) {
  if (operation === "") {
    firstNumber += number;
    displayValue = firstNumber;
  } else {
    secondNumber += number;
    displayValue = secondNumber;
  }
  updateDisplay();
}

function operationPressed(op) {
  if (operation !== "") {
    calculate();
  }
  operation = op;
  updateDisplay();
}

function calculate() {
  let result;
  switch (operation) {
    case "+":
      result = parseFloat(firstNumber) + parseFloat(secondNumber);
      break;
    case "-":
      result = parseFloat(firstNumber) - parseFloat(secondNumber);
      break;
    case "*":
      result = parseFloat(firstNumber) * parseFloat(secondNumber);
      break;
    case "/":
      result = parseFloat(firstNumber) / parseFloat(secondNumber);
      break;
  }
  firstNumber = result.toString();
  secondNumber = "";
  operation = "";
  displayValue = firstNumber;
  updateDisplay();
}

function clearDisplay() {
  firstNumber = "";
  secondNumber = "";
  operation = "";
  displayValue = "0";
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").value = displayValue;
}
