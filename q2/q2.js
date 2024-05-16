function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operator = document.getElementById('operator').value;
    var result = 0;
   
    if (isNaN(num1) || isNaN(num2)) {
        if (isNaN(num1) && isNaN(num2)) {
            alert('Please enter no.s for both operands');
        } else if (isNaN(num1)) {
            alert('Please enter a number for the first operand');
        } else {
            alert('Please enter a number for the second operand');
        }
        return;
    }
    switch (operator) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;

        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                alert('Cannot divide by zero');
                return;
            }
            break;
        case 'modulus':
                result = num1 % num2;
                break;
        default:
            alert('Choose an operator');
            return;
    }

    document.getElementById('result').value = result;
}

function reset() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').value = '';
}