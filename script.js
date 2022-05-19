const operationsSupported = ['+', '-', '*', '/']

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
let input=[]
let value1;
let value2;
function storeInput(num) {
    if(isNaN(num)) {
        isNaN(value1) ? value1 = parseInt(input.join('').toString()) : value2 = parseInt(input.join('').toString());
        input =[];
    }
    else input.push(num);
}

document.getElementById('button7').addEventListener('click', e => {
    e.stopPropagation;
    storeInput(7);
});
document.getElementById('button8').addEventListener('click', e => {
    e.stopPropagation;
    storeInput(8);
});
document.getElementById('button9').addEventListener('click', e => {
    e.stopPropagation;
    storeInput(9);
});
document.getElementById('button/').addEventListener('click', e => {
    e.stopPropagation;
    storeInput('/');
});
document.getElementById('button4').addEventListener('click', e => {
    e.stopPropagation;
    storeInput(4);
});
document.getElementById('button5').addEventListener('click', e => {
    e.stopPropagation;
    storeInput(5);
});
document.getElementById('button6').addEventListener('click', e => {
    e.stopPropagation;
    storeInput(6);
});
document.getElementById('button*').addEventListener('click', e => {
    e.stopPropagation;
    storeInput('*');
});
document.getElementById('button1').addEventListener('click', e => {
    e.stopPropagation;
    storeInput(1);
});
document.getElementById('button2').addEventListener('click', e => {
    e.stopPropagation;
    storeInput(2);
});
document.getElementById('button3').addEventListener('click', e => {
    e.stopPropagation;
    storeInput(3);
});
document.getElementById('button-').addEventListener('click', e => {
    e.stopPropagation;
    storeInput('-');
});
document.getElementById('button0').addEventListener('click', e => {
    e.stopPropagation;
    storeInput(0);
});
document.getElementById('button.').addEventListener('click', e => {
    e.stopPropagation;
    storeInput('.');
});
document.getElementById('button=').addEventListener('click', e => {
    e.stopPropagation;
    storeInput('=');
});
document.getElementById('button+').addEventListener('click', e => {
    e.stopPropagation;
    storeInput('+');
});