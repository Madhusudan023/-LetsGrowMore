// calculator.js
let output = document.getElementById('output');
let result = 0;

function clearOutput() {
    output.innerText = '0';
    result = 0;
}

function appendToOutput(value) {
    if (output.innerText === '0' && value !== '.') {
        output.innerText = value;
    } else {
        output.innerText += value;
    }
}

function calculateResult() {
    try {
        result = eval(output.innerText);
        output.innerText = result;
    } catch (error) {
        output.innerText = 'Error';
    }
}
