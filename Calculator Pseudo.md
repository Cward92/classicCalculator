// How a calculator works:
// 3 main functions: input, calculate, display:
    // input = readInput();
    // result = doCalculations(input);
    // displayResult(result);

// PROGRAM EXAMPLE:

// let holdNumber;
// let holdOperator;
// let input;
// let superInput;
// let First Number;
// let Second Number = 0;

// readInput()
//  Enter First Number
    // IF(First Number === Undefined)
    <!-- First Number = ''; -->
    // Press Button with class = Number
        // read button.value
        // First Number = `${First Number}${button.value}`
        // displayResults(First Number);
        <!-- // First Number += button.value -->
//  Enter Operator
    // Press Button with class = Operator
        // read button.id AND button.value
        // Operator1_id = button.id
        // Operator1 = button.value
//  Enter Second Number
    // Press Button with class = Number
        // read button.value
        // Second Number = `${Second Number}${button.value}`

// Enter Other Operator OR Equals 
    // ON Equals
        // input = First Number + Operator1 + Second Number
        // result = doCalculation(input)
        // displayResult(result)
        // First Number = Result
    // ON Operator
        // read button.id AND button.value
        // IF(Operator_1.id == 'Add/Sub' AND Operator1.id !== button.id)
            // hN = First Number
            // First Number = Second Number
            // hO = Operator1
            // Operator1 = button.value
            // displayResults(First Number) 
            // highOperator();
        // Else
            // (See ON Equals);


// highOperator()
// Enter Second Number  
    // Press Button with class = Number
    // read button.value
    // Second Number = `${Second Number}${button.value}`
// Enter Third Operator OR Equals
    // ON Operator OR Equals
    // input = First Number + Operator + Second Number
    // result = doCalculations(input)
    // superInput = holdNumber + holdOperator + result
    // result = doCalculation(superInput)
    // displayResult(result)
    // First Number = result
    // IF Operator
        // read button.id AND button.value
        // Operator1_id = button.id
        // Operator1 = button.value 


// doCalculations(input)
//  if Operator == '+', result = First Number + Second Number
//  if Operator == '-', result = First Number - Second Number
//  if Operator == '/', result = First Number / Second Number
//  if Operator == '*', result = First Number * Second Number
//  return result


// displayResult(result)
    // print result







// View
class Button {
    constructor(type, id, classList){
        this.shape = this.shape;
       
       //Method VIEW
       function shape(type, id, classList) {
        let newElement = document.createElement(type);
        newElement.id = id;
        newElement.setAttribute('class', classList);
        return newElement;
        };
       }
    }
}

let button = new Button(div, id, classList);
