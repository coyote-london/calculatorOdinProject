//Rewrite the logic on storing the numbers 
//and running equations
//Maybe work the logic to display the numbers first?
//may make testing easier that way if you get frusturated

let calculator = {
    input: ''
    ,
    numberFirst: undefined
    ,
    numberSecond: undefined
    ,
    operatorStored: undefined
    ,
    operatorUsed: undefined
    ,
    storeInput(num){
        if (this.operatorStored == undefined) this.numberFirst = undefined; 
        this.input = this.input + num;
        this.operatorStored == undefined ?
            this.display(this.input)
            :
            this.display(this.numberFirst, 
                this.operatorStored, this.input);
        console.log(this.input);
    }
    ,
    storeNumber(){
        this.numberFirst == undefined 
        ?
        this.numberFirst = parseInt(this.input) 
        :
        this.numberSecond = parseInt(this.input);
        this.input = '';
    }
    ,
    storeOperator(symbol) {
        
        if (this.operatorStored == undefined) { 
            this.operatorStored = symbol;
            this.storeNumber();
            this.display(this.numberFirst, this.operatorStored);
            console.log(this.operatorStored)
        }
        
        else {
            this.operatorUsed = this.operatorStored;
            symbol == '=' ?     
                this.operatorStored = undefined
                :
                this.operatorStored = symbol;
            this.runOperation(this.operatorUsed);
            console.log(this.operatorStored);
        }
    }
    ,
    runOperation(operator) {
        this.storeNumber(this.input)
        console.log(this.numberFirst + ' ' + this.operatorUsed + ' ' + this.numberSecond); 
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
    }
    ,
    add(num1, num2) {
        this.numberFirst = num1 + num2;
        console.log(this.numberFirst)
        this.display(this.numberFirst, this.operatorStored);
        this.input = '';
        
    }
    ,
    subtract(num1, num2) {
        this.numberFirst = num1 - num2;
        this.display(this.numberFirst, this.operatorStored);
        console.log(this.numberFirst)
        this.input = '';
    }
    ,
    divide(num1, num2) {
        this.numberFirst = num1 / num2;
        this.display(this.numberFirst, this.operatorStored);
        console.log(this.numberFirst)
        this.input = '';
    }
    ,
    multiply(num1, num2) {
        this.numberFirst = num1 * num2;
        this.display(this.numberFirst, this.operatorStored);
        console.log(this.numberFirst)
        this.input = '';
    }
    ,
    display(num1, operator='', num2='') {
            operator == '' ?
            document.getElementById('displayContent')
                .innerHTML = num1
            :
            document.getElementById('displayContent')
                .innerHTML = num1 + ' ' + operator 
                + ' ' + num2; 
    }
}

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
    calculator.storeOperator('.');
});
document.getElementById('button=').addEventListener('click', e => {
    e.stopPropagation;
    calculator.storeOperator('=');
});
document.getElementById('button+').addEventListener('click', e => {
    e.stopPropagation;
    calculator.storeOperator('+');
});