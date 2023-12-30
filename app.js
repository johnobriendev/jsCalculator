///////////VARIABLES//////////////
let firstNumber = '';
let secondNumber ='';
let currentOperator = '';

const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const display = document.querySelector(".display");

const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const equalsBtn = document.querySelector('.equals');

display.textContent = '0';


////////////FUNCTIONS//////////////
const clearDisplay = () =>{
    display.textContent = '0';
    firstNumber = '';
    secondNumber = '';
    currentOperator = '';
}
const backSpace = () =>{
    display.textContent = display.textContent.slice(0,-1);
    if(display.textContent === ''){
        display.textContent = '0'
        firstNumber = '';
        secondNumber = '';
        currentOperator = '';
    }
   
}

const appendToDisplay = (number) =>{
    if (display.textContent === '0'){
        display.textContent = '';
    }
    if(currentOperator !== ''){
        display.textContent = '';
    }
    display.textContent += number;
}
const setOperator = (operator) =>{
    currentOperator = operator;
    console.log(currentOperator);
   
    firstNumber = display.textContent;
    console.log(firstNumber);
   
    //display.textContent = '0';
}

const calculate = () =>{
    secondNumber = display.textContent;
    operate(firstNumber,secondNumber,currentOperator);

}

const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => {
    if(b===0){
        alert("can't divide by zero");
    }else{
        return a / b;
    }
};

let answer = '';

const operate = (a, b, operation) =>{
    
    a = Number(a);
    b = Number(b);
    
    if (operation === '+'){
       answer =  add(a,b);
       display.textContent = answer;
    };
    if (operation === '-'){
       answer = subtract(a,b);
       display.textContent = answer;
    };
    if (operation === 'x'){
       answer = multiply(a,b);
       display.textContent = answer;
    };
    if (operation === '÷'){
        answer = divide(a,b);
        display.textContent = answer;
    };
}




//////////////EVENT LISTENERS/////////////////////
operatorBtns.forEach((button)=>
    button.addEventListener("click", () => setOperator(button.textContent))
);

numberBtns.forEach((button)=>
    button.addEventListener("click", () => appendToDisplay(button.textContent))
);

clearBtn.addEventListener("click", clearDisplay);
deleteBtn.addEventListener("click", backSpace);
equalsBtn.addEventListener("click", calculate);




