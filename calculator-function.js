var display = document.getElementById("screen");
var buttons = document.getElementsByClassName("button");

//Calling each button and function
Array.prototype.forEach.call(buttons, function(button) {
    button.addEventListener("click", function() {
        if (button.textContent != "=" &&
        button.textContent != "C" &&
        button.textContent != "x" &&
        button.textContent != "/" &&
        button.textContent != "√" &&
        button.textContent != "x ²" &&
        button.textContent != "<=" &&
        button.textContent != "±" &&
        button.textContent != "sin" &&
        button.textContent != "cos" &&
        button.textContent != "tan" &&
        button.textContent != "log" &&
        button.textContent != "ln" &&
        button.textContent != "%" &&
        button.textContent != "x^" &&
        button.textContent != "x !" &&
        button.textContent != "π" &&
        button.textContent != "e" &&
        button.textContent != "rad" &&
        button.textContent != "." ) {
            display.value += button.textContent;
        }else if (button.textContent === "=") {
            equals();
        }else if (button.textContent === "C") {
            clear();
        }else if (button.textContent === "x") {
            multiply();
        }else if (button.textContent === "/") {
            divide();
        }else if (button.textContent === "√") {
            squareRoot();
        }else if (button.textContent === "x ²") {
            square();
        }else if (button.textContent === "<=") {
            backspace();
        }else if (button.textContent === "%") {
            percent();
        }else if (button.textContent === "±") {
            plusMinus();
        }else if (button.textContent === "sin") {
            sin();
        }else if (button.textContent === "cos") {
            cos();
        }else if (button.textContent === "tan") {
            tan();
        }else if (button.textContent === "log") {
            log();
        }else if (button.textContent === "ln") {
            ln();
        }else if (button.textContent === "x^") {
            exponent();
        }else if (button.textContent === "x !") {
            factorial();
        }else if (button.textContent === "π") {
            pi();
        }else if (button.textContent === "e") {
            exp();
        }else if (button.textContent === "rad") {
            radians();
        }else if (button.textContent === ".") {
            degrees();
        }
    });
});
