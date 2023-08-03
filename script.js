document.getElementById('convertBtn').addEventListener('click', convertNumber);

function convertNumber() {
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  const inputValue = document.getElementById('inputValue').value;

  if (from === to) {
    document.getElementById('result').innerHTML = "Please select different number systems.";
    document.getElementById('steps').innerHTML = "";
    return;
  }

  let resultValue;
  let explanation;

  switch (from) {
    case 'binary':
      resultValue = parseInt(inputValue, 2);
      explanation = `Step 1: Convert ${inputValue} from binary to decimal = ${resultValue}`;
      break;
    case 'decimal':
      resultValue = parseInt(inputValue, 10);
      explanation = `Step 1: Convert ${inputValue} from decimal to decimal = ${resultValue}`;
      break;
    case 'octal':
      resultValue = parseInt(inputValue, 8);
      explanation = `Step 1: Convert ${inputValue} from octal to decimal = ${resultValue}`;
      break;
    case 'hexadecimal':
      resultValue = parseInt(inputValue, 16);
      explanation = `Step 1: Convert ${inputValue} from hexadecimal to decimal = ${resultValue}`;
      break;
  }

  let convertedValue;
  let conversionStep;

  switch (to) {
    case 'binary':
      convertedValue = resultValue.toString(2);
      conversionStep = `Step 2: Convert ${resultValue} from decimal to binary = ${convertedValue}`;
      break;
    case 'decimal':
      convertedValue = resultValue.toString(10);
      conversionStep = `Step 2: Convert ${resultValue} from decimal to decimal = ${convertedValue}`;
      break;
    case 'octal':
      convertedValue = resultValue.toString(8);
      conversionStep = `Step 2: Convert ${resultValue} from decimal to octal = ${convertedValue}`;
      break;
    case 'hexadecimal':
      convertedValue = resultValue.toString(16).toUpperCase();
      conversionStep = `Step 2: Convert ${resultValue} from decimal to hexadecimal = ${convertedValue}`;
      break;
  }

  document.getElementById('result').innerHTML = `Result: ${convertedValue}`;
  document.getElementById('steps').innerHTML = explanation + '<br>' + conversionStep;
}
