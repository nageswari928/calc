import { evaluateExpression } from './src/calculator.js';

const display = document.getElementById('display');
const buttons = Array.from(document.querySelectorAll('button'));
let currentExpression = '';

function updateDisplay(value) {
  display.textContent = value;
}

function handleButtonClick(buttonValue) {
  if (buttonValue === 'C') {
    currentExpression = '';
    updateDisplay('0');
    return;
  }

  if (buttonValue === '=') {
    const result = evaluateExpression(currentExpression);
    currentExpression = result;
    updateDisplay(result);
    return;
  }

  if (buttonValue === '()') {
    const openCount = currentExpression.split('(').length - 1;
    const closeCount = currentExpression.split(')').length - 1;
    currentExpression += openCount > closeCount ? ')' : '(';
    updateDisplay(currentExpression || '0');
    return;
  }

  if (buttonValue === '%') {
    currentExpression = currentExpression ? `${currentExpression}/100` : '';
    updateDisplay(currentExpression || '0');
    return;
  }

  currentExpression += buttonValue;
  updateDisplay(currentExpression || '0');
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    handleButtonClick(button.dataset.value);
  });
});
