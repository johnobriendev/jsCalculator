const firstNumber = '';
const secondNumber ='';
const operator = '';

const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const display = document.querySelector(".display");

const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");

display.textContent = '0';

const clearDisplay = () =>{
    display.textContent = '0';
}
const backSpace = () =>{
    display.textContent = display.textContent.slice(0,-1);
    if(display.textContent === ''){
        display.textContent = '0'
    }
   
}

const appendToDisplay = (number) =>{
    if (display.textContent === '0'){
        display.textContent = '';
    }
    display.textContent += number;
}


operatorBtns.forEach((button)=>
    button.addEventListener("click", () => appendToDisplay(button.textContent))
);

numberBtns.forEach((button)=>
    button.addEventListener("click", () => appendToDisplay(button.textContent))
);

clearBtn.addEventListener("click", clearDisplay);
deleteBtn.addEventListener("click", backSpace);





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



const operate = (a, b, operation) =>{
    if (operation === '+'){
        add(a,b);
    };
    if (operation === '-'){
        subtract(a,b);
    };
    if (operation === '*'){
        multiply(a,b);
    };
    if (operation === '/'){
        divide(a,b);
    };
}