// Setup Calculator View
let main = document.getElementById('main');

let displayArr = [];

// View
class Calculator {
    constructor(element, type, classList, value){
        this.element = element;
        this.type = type;
        this.classList = classList;
        this.value = value;
    }
}

class Button extends Calculator{
    constructor(element, type, classList, value, innerHTML) {
        super(element, type, classList, value)
        this.innerHTML = innerHTML;
    }

    //Method View
    create(){
        let button = document.createElement(this.element);
        button.setAttribute('type', this.type);
        button.setAttribute('class', this.classList);
        button.setAttribute('value', this.value);
        button.addEventListener('click', addNumber);
        button.innerHTML = this.innerHTML;
        main.appendChild(button);
    }

}

let button1 = new Button('button', 'button', 'btn btn-primary', '1', '1');

class Input extends Button {
    constructor(element, type, classList, value){
        super(element, type, classList, value)
    }

    create(){
        let input = document.createElement(this.element);
        input.setAttribute('type', this.type);
        input.setAttribute('class', this.classList);
        input.setAttribute('value', this.value);
        input.setAttribute('disabled', true);
        main.appendChild(input);
    }
}

let input = new Input('input', 'text', 'calculator-screen', '');

function init(){
    input.create();
    button1.create();
}

function updateDisplay(){
    let display = document.querySelector('.calculator-screen');
    display.value = result;
}

function addNumber(e){
    displayArr.push(e.target.value);
    result = displayArr.join('');
    updateDisplay();
    
}

init();