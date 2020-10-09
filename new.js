//generate top div and button holder
let main = document.getElementById('main');
let calculatorCard = document.createElement('div');
calculatorCard.setAttribute('class', 'calculator card');
main.appendChild(calculatorCard);

let calculatorKeys = document.createElement('div');
calculatorKeys.setAttribute('class', 'calculator-keys');

//initialize display array
let isSecondOperand = false;
let operator = null;
let displayArr = [];
let opArr = ['+', '-', '/', '*'];
let numArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']
let btn_N_Arr = [];
let btn_O_Arr = [];

//class for calculation functions
class Calculator {
    constructor(){
        this.firstOperand = '';
        this.secondOperand = null;
        this.result = null;
    }
    generateNumbers(){
        for(let i = 0; i < numArr.length; i++){
            let number = new Number(numArr[i], 'btn btn-light', numArr[i]);
            btn_N_Arr.push(number);
            number.shape();
        }
    }
    generateOperators(){
        for(let i = 0; i < opArr.length; i++){
            let operator = new Operator(opArr[i], 'operator btn btn-info', opArr[i]);
            btn_O_Arr.push(operator);
            operator.shape();
        }
    }    
}

let calculator = new Calculator();

//buttons
class Button {
    constructor(value, classList){
        this.element = 'button';
        this.type = 'button';
        this.value = value;
        this.classList = classList;
    }
}

//specific to Numbers
class Number extends Button {
    constructor(value, classList, innerHTML){
        super(value, classList);
        this.innerHTML = innerHTML;
        this.addNumber = this.addNumber.bind(this);
    }
    shape(){
        let btn = document.createElement(this.element);
        btn.setAttribute('type', this.type);
        btn.setAttribute('class', this.classList);
        btn.setAttribute('value', this.value);
        btn.innerHTML = this.innerHTML;
        btn.addEventListener('click', this.addNumber);
        calculatorKeys.appendChild(btn);
    }
    addNumber(){
        this.registerKey();
        // displayArr.push(this.value);
        // this.result = displayArr.join('');
        // updateDisplay(this.result);
        
    }
    registerKey(){
        if(this.value === 'Clear_All') {
            displayArr = [];
            updateDisplay('0');
            return;
        }
        if(typeof parseInt(this.value) === 'number'){
            this.getCurrentOperand();
            this.result = displayArr.join('');
            updateDisplay(this.result);
        }
        if(this.classList.includes('operator')){
            
        }
    }
    getCurrentOperand(){
        if(isSecondOperand == false){
            console.log(this.firstOperand);
            this.firstOperand += this.value;
            displayArr.push(this.value);
            console.log(this.value);
        } else if(isSecondOperand == true){
            this.secondOperand = this.value;
            displayArr.push(this.secondOperand);
        }
    }
    
}

let clear = new Number('Clear_All', 'btn btn-danger', 'AC')

//specific to operators
class Operator extends Number {
    constructor(value, classList, innerHTML){
        super(value, classList, innerHTML);
    }
}

let equals = new Operator('Equals', 'equal-sign btn btn-success', '=');

//Display
class Input {
    constructor(classList, value){
        this.element = 'input';
        this.type = 'text';
        this.classList = classList;
        this.value = value;
    }

    shape(){
        let input = document.createElement(this.element);
        input.setAttribute('type', this.type);
        input.setAttribute('class', this.classList);
        input.setAttribute('value', this.value);
        input.setAttribute('disabled', true);
        calculatorCard.appendChild(input);

    }
}

let input = new Input('calculator-screen', '');


function init(){
    input.shape();        
    calculatorCard.appendChild(calculatorKeys);
    calculator.generateOperators();
    calculator.generateNumbers();
    clear.shape();
    equals.shape();
}

function updateDisplay(result){
    let display = document.querySelector('.calculator-screen');
    display.value = result;
}

init();