let currentValue = '';

function appendValue(value) {
  currentValue += value;
  document.getElementById('display').value = currentValue;
}

function clearDisplay() {
  currentValue = '';
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    currentValue = eval(currentValue).toString();
    document.getElementById('display').value = currentValue;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}