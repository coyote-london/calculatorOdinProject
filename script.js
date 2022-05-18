function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}
function operate(num1, operand, num2) {
    const operationsSupported = ['+', '-', '*', '/']
    if (operand == '+' || operand == '-') {
        return operand == '+' ? add(num1, num2) : subtract(num1, num2);
    }
    else if (operand == '*' || operand == '/') {
         return operand == '*' ? multiply(num1, num2) : divide(num1, num2);
    } 
    else {
        return 'This is not supported';
    }
}
