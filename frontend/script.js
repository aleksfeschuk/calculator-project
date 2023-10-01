
document.addEventListener("DOMContentLoaded", () => {
    
    const calcAllButtons = document.querySelectorAll(".all_buttons");
    const input = document.querySelector(".user-input");
    const calculator = document.querySelector(".calc");
    const displayResults = document.querySelector(".result")

    let hasEqualsBeenPressed = false;
    let result = 0;
    let shouldCheckForDecimal = false; 
    let num1 = 0;
    let num2 = 0;
    let action = ''

    // Calculating
   
    function handleButtonClick(event) {
        const buttonValue = event.target.textContent;

        switch(buttonValue) {
            case '=':
                if (!hasEqualsBeenPressed) {
                    try {
                        result = eval(input.textContent);
                        result = roundNumber(result);
                        displayResults.textContent = isNaN(result) ? "Error" : result;
                    } catch (error) {
                        displayResults.textContent = "Error";
                    }
                }
                hasEqualsBeenPressed = true;
                break;
            case 'C':
                input.textContent = '';
                displayResults.textContent = '';
                result = 0;
                hasEqualsBeenPressed = false;
                break;
            case 'AC':
                input.textContent = '';
                displayResults.textContent = '';
                result = 0;
                hasEqualsBeenPressed = false;
                break;
            case '÷':
            case '×':
            case '-':
            case '+':
            case '%':
                input.textContent += buttonValue;
                hasEqualsBeenPressed = false;
                break;
            default: 
            input.textContent += buttonValue;
            hasEqualsBeenPressed = false;
                break;
        }
    }

    function displayCalculator(toCalc) {
        const currentInput = input.textContent;

        if(toCalc === 'add') {
            calc.textContent += '+';
        } else if(toCalc === 'subtract') {
            calc.textContent += '-';
        } else if(toCalc === 'remainder') {
            calc.textContent += '%';
        } else if(toCalc === 'multiply') {
            calc.textContent += '×';
        } else if(toCalc === 'divide') {
            calc.textContent += '÷';
        } else {
            calc.textContent += `${toCalc}`;
        }
        input.textContent = currentInput + toCalc;
    }

    function roundNumber(calculation) {
        const rounded = Math.round(calculation * 1000) / 1000;
        return rounded;
    }

    const calc = (operation, firstNum, secondNum) => {
        switch(operation) {
            case 'clear':
                return firstNum;
            case 'divide': 
                if (secondNum === 0) {
                    return 'Error: Division by zero';
                }
                return firstNum / secondNum;
            case 'multiply':
                return firstNum * secondNum;
            case 'subtract': 
                return firstNum - secondNum;
            case 'add':
                return firstNum + secondNum;
            case 'remainder':
                if (secondNum === 0) {
                    return 'Error: Division by zero';
                }
                return firstNum % secondNum;
            default:
                return firstNum;
        }
    }

    function showCalculation(symbolOperation) {
        const operationSymbols = {
            'divide': '÷',
            'multiply': '×',
            'subtract': '-',
            'add': '+',
            'remainder': '%'
        };

        if(operationSymbols.hasOwnProperty(symbolOperation)) {
            const symbol = operationSymbols[symbolOperation];
            const calculation = calc(action, num1, num2);
            const calculationResult = `${num1}${symbol}${num2}=${calculation}`;
            displayResults.textContent = calculationResult;
        }
    }

    function setOperatorState(state) {
        calcAllButtons.forEach((operator) => {
            operator.disabled = (state === 'disabled' || calcAnswer === 'No' || calcAnswer === Infinity);
        })
    }

    calcAllButtons.forEach((button) => {
        button.addEventListener("click", handleButtonClick);
      });

});