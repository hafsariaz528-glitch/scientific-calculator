const display = document.getElementById('display');

function appendValue(val) {
    display.value += val;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function scientific(func) {
    try {
        let val = parseFloat(eval(display.value));
        if (isNaN(val)) return;

        if (func === 'sin') display.value = Math.sin(val * Math.PI / 180);
        if (func === 'cos') display.value = Math.cos(val * Math.PI / 180);
        if (func === 'tan') display.value = Math.tan(val * Math.PI / 180);
        if (func === 'sqrt') display.value = Math.sqrt(val);
        if (func === 'log') display.value = Math.log10(val);
    } catch (e) {
        display.value = 'Error';
    }
}