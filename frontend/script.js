document.addEventListener("DOMContentLoaded", () => {
    
    const calcAllButtons = document.querySelectorAll(".all_buttons");
    const input = document.querySelector(".user-input");
    const calculator = document.querySelector(".calc");
    const displayResults = document.querySelector(".result")

    let hasEqualsBeenPressed = false;
    let result = 0;
    let shouldCheckForDecimal = false; 

    // Calculating
   
    function handleButtonClick(event) {
        const buttonValue = event.target.textContent;

        switch(buttonValue) {
            case '=':
                if (!hasEqualsBeenPressed) {
                    try {
                        result = eval(input.textContent);
                        displayResult.textContent = isNaN(result) ? "Error" : result;
                    } catch (error) {
                        displayResult.textContent = "Error";
                    }
                }
                hasEqualsBeenPressed = true;
                break;
            case 'C':
                input.textContent = '';
                displayResult.textContent = '';
                result = 0;
                hasEqualsBeenPressed = false;
                break;
            case '/':
            case '*':
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

    calcAllButtons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
});