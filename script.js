let calculator = {


    //Data


    input: '',

    numberFirst: undefined,

    numberSecond: undefined,

    operatorStored: undefined,

    operatorUsed: undefined,

    decimalUsed: false,
    
    
    //Storing data


    storeInput(num){
        if (this.operatorStored == undefined) {
            this.numberFirst = undefined; 
        }
        
        this.input == '0' ?
            this.input = '' + num
            :
            this.input = this.input + num;
        
        this.operatorStored == undefined ?
            this.display(this.input) 
            :
            this.display(this.numberFirst, 
                this.operatorStored, this.input); // line 238
    },

    
    storeNumber(){
        this.numberFirst == undefined 
        ?
        this.numberFirst = parseFloat(this.input) 
        :
        this.numberSecond = parseFloat(this.input);
        this.input = '';
    },


    storeOperator(symbol) {        
        if (this.operatorStored == undefined) { 
            if (symbol == '=') return;
            this.operatorStored = symbol;
            this.storeNumber();
            this.display(this.numberFirst, this.operatorStored);
            this.decimalUsed = false;
        }
        
        else {
            this.operatorUsed = this.operatorStored;
            symbol == '=' ?     
                this.operatorStored = undefined
                :
                this.operatorStored = symbol;
            this.runOperation(this.operatorUsed);
        }
    },
    
    
    storeDecimal() {
        if (this.decimalUsed == false) {
            this.input = this.input + '.';
            this.operatorStored == undefined ?
                this.display(this.input)
                :
                this.display(this.numberFirst, 
                    this.operatorStored, this.input)
        }
        this.decimalUsed = true;
    },
    
    
    keyInput(e) {
        switch(e.key) {
            case '1':
                calculator.storeInput(1);
                break;
            case '2':
                calculator.storeInput(2);
                break;
            case '3':
                calculator.storeInput(3);
                break;
            case '4':
                calculator.storeInput(4);
                break;
            case '5':
                calculator.storeInput(5);
                break;
            case '6':
                calculator.storeInput(6);
                break;
            case '7':
                calculator.storeInput(7);
                break;
            case '8':
                calculator.storeInput(8);
                break;
            case '9':
                calculator.storeInput(9);
                break;
            case '0':
                calculator.storeInput(0);
                break;
            case '.':
                calculator.storeDecimal();
                break;
            case '+':
                calculator.storeOperator('+');
                break;
            case '-':
                calculator.storeOperator('-');
                break;
            case '*':
                calculator.storeOperator('*');
                break;
            case '/':
                calculator.storeOperator('/');
                break;
            case 'Backspace':
                calculator.backspace();
                break;
            case ' ':
                calculator.clear();
                break;
            case 'Enter':
                calculator.storeOperator('=');
                break;
            case '=':
                calculator.storeOperator('=');
                break;
        }
    },
    

    //Change Data


    add(num1, num2) {
        this.numberFirst = num1 + num2;
        this.display(this.numberFirst, this.operatorStored);
        this.input = '';
        
    },

    
    subtract(num1, num2) {
        this.numberFirst = num1 - num2;
        this.display(this.numberFirst, this.operatorStored);
        this.input = '';
    },

    
    divide(num1, num2) {
        if (num2 == 0) {
            this.display("Infinity?");
            this.input = '0';
            return;
        }
        this.numberFirst = num1 / num2;
        this.display(this.numberFirst, this.operatorStored);
        this.input = '';
    },

    
    multiply(num1, num2) {
        this.numberFirst = num1 * num2;
        this.display(this.numberFirst, this.operatorStored);
        this.input = '';
    },

    
    clear() {
        this.numberFirst = undefined;
        this.operatorStored = undefined;
        this.numberSecond = undefined;
        this.input = '';
        this.display(0);
    },


    backspace() {
        if (this.input.length > 0) {
            this.input = this.input.slice(0, -1)
            if (this.input == '') this.input = '0';
        }
        else if (this.operatorStored != undefined) {
            this.operatorStored = undefined;
            this.input = this.numberFirst.toString();
        }
        this.operatorStored == undefined ?
            this.display(this.input)
            :
            this.display(this.numberFirst, 
                this.operatorStored, this.input);
    },
    
    runOperation(operator) {
        this.storeNumber(this.input)
        switch(operator) {
            case '+':
                this.add(this.numberFirst, this.numberSecond);
                break;
            case '-':
                this.subtract(this.numberFirst, this.numberSecond);
                break;
            case '*':
                this.multiply(this.numberFirst, this.numberSecond);
                break;
            case '/':
                this.divide(this.numberFirst, this.numberSecond);
                break;
        }
    },


    //Display Data


    display(num1, operator='', num2='') {
            operator == '' ?
            document.getElementById('displayContent')
                .innerHTML = num1
            :
            document.getElementById('displayContent')
                .innerHTML = num1 + ' ' + operator 
                + ' ' + num2; 
    }
};


//Event listeners


document.getElementById('button7').addEventListener('click', e => {
    e.stopPropagation;
    calculator.storeInput(7)
});
document.getElementById('button8').addEventListener('click', e => {
    e.stopPropagation;
    calculator.storeInput(8);
});
document.getElementById('button9').addEventListener('click', e => {
    e.stopPropagation;
    calculator.storeInput(9);
});
document.getElementById('button/').addEventListener('click', e => {
    e.stopPropagation;
    calculator.storeOperator('/');
});
document.getElementById('button4').addEventListener('click', e => {
    e.stopPropagation;
    calculator.storeInput(4);
});
document.getElementById('button5').addEventListener('click', e => {
    e.stopPropagation;
    calculator.storeInput(5);
});
document.getElementById('button6').addEventListener('click', e => {
    e.stopPropagation;
    calculator.storeInput(6);
});
document.getElementById('button*').addEventListener('click', e => {
    e.stopPropagation;
    calculator.storeOperator('*');
});
document.getElementById('button1').addEventListener('click', e => {
    e.stopPropagation;
    calculator.storeInput(1);
});
document.getElementById('button2').addEventListener('click', e => {
    e.stopPropagation;
    calculator.storeInput(2);
});
document.getElementById('button3').addEventListener('click', e => {
    e.stopPropagation;
    calculator.storeInput(3);
});
document.getElementById('button-').addEventListener('click', e => {
    e.stopPropagation;
    calculator.storeOperator('-');
});
document.getElementById('button0').addEventListener('click', e => {
    e.stopPropagation;
    calculator.storeInput(0);
});
document.getElementById('button.').addEventListener('click', e => {
    e.stopPropagation;
    calculator.storeDecimal();
});
document.getElementById('button=').addEventListener('click', e => {
    e.stopPropagation;
    calculator.storeOperator('=');
});
document.getElementById('button+').addEventListener('click', e => {
    e.stopPropagation;
    calculator.storeOperator('+');
});
document.getElementById('buttonBackspace').addEventListener('click', e => {
    e.stopPropagation;
    calculator.backspace();
});
document.getElementById('buttonClear').addEventListener('click', e => {
    e.stopPropagation;
    calculator.clear();
});

window.addEventListener('keydown', calculator.keyInput)