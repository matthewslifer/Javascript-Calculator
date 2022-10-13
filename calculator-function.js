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
        button.textContent != "∘" ) {
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
        } else if (button.textContent === "x^") {
            exponent();
        }else if (button.textContent === "x !") {
            factorial();
        }else if (button.textContent === "π") {
            pi();
        }else if (button.textContent === "e") {
            exp();
        }else if (button.textContent === "rad") {
            radians();
        }else if (button.textContent === "∘") {
            degrees();
        }
    });
});

//Syntax Error function
function syntaxError() {
    if (eval(display.value) == SyntaxError || eval(display.value) == ReferenceError || eval(display.value) == TypeError) {
        display.value == 'Syntax Error';
    }
};

//Equal function
function equals() {
    if ((display.value).indexOf("^") > -1) {
        var base = (display.value).slice(0, (display.value).indexOf("^"));
        var exponent = (display.value).slice((display.value).indexOf("^") + 1);
        display.value = eval("Math.pow(" + base + "," + exponent + ")");
    } else {
        display.value = eval(display.value)
        checkLengh()
        syntaxError()
    }
}

//Clear functuin
function clear() {
    display.value = "";
}

//Backspace function
function backspace() {
    display.value = display.value.substring(0, display.value.length - 1);
}

//Multiplication function
function multiply() {
    display.value += "*";
}

//Division function
function divide() {
    display.value += "/";
}

//Plus minus function
function plusMinus() {
    if (display.value.charAt(0) === "-") {
        display.value = display.value.slice(1);
    } else {
        display.value = "-" + display.value;
    }
}

//Factorial function
function factorial() {
    var number = 1;
    if (display.value === 0) {
      display.value = "1";
    } else if (display.value < 0) {
      display.value = "undefined";
    } else {
      var number = 1;
      for (var i = display.value; i > 0; i--) {
        number *=  i;
      }
      display.value = number;
    }
  }

//Pi function
function pi() {
    display.value = (display.value * Math.PI);
}

//Square function
function square() {
    display.value = eval(display.value * display.value);
}

//Square root function
function squareRoot() {
    display.value = Math.sqrt(display.value);
}

//Percent function
function percent() {
    display.value = display.value/100;
}

//Sin function
function sin() {
    display.value = Math.sin(display.value);
}

//cos function
function cos() {
    display.value = Math.cos(display.value);
}

//tan function
function tan() {
    display.value = Math.tan(display.value);
}

//Log function
function log() {
    display.value = Math.log10(display.value);
}

//Natural log function
function ln() {
    display.value = Math.log(display.value);
}

//Exponenet function
function exponent() {
    display.value += "^";
  }

//exp function
function exp() {
    display.value = Math.exp(display.value);
}

//Radian functuon
function radians() {
    display.value = display.value * (Math.PI/180);
}

//Degrees function
function degrees() {
    display.value = display.value * (180/Math.PI);
}
