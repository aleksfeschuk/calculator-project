document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("user-input");
    const buttons = document.querySelectorAll("symbol_number");
    const operator = document.querySelectorAll("symbol_operator");
    const decimal = document.querySelector("decimal");
    const allClear = document.querySelector("allclear");
    const clear = document.querySelector("clear");

    let userInput = '';
    let calcResult = '';
    let actions = '';
    let num1 = '';
    let num2 = '';


    // Calculating

    function divide (a, b) {
        if (b === 0) {
            return 'No';
        }
        return a / b;
    }

    function multiply (arr) {
        let answer = 1; 
        for (let i = 0; i < arr.length; i += 1) {
            answer *= arr[i];
        }
        return answer;
    }

    function subtract (a, b) {
        return a - b;
    }

    function add(a, b) {
        return a + b;
    }

    



});