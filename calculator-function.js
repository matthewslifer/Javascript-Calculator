

//Function that displays value
function display(val) {
    document.getElementById("textval").value+=val
};

//Function that performs the mathematical function
function evaluate() {
    let x = document.getElementById("textval").value;
    let y = eval(x);
    document.getElementById("textval").value = y;
};

//Function that clears value
function clr() {
    document.getElementById("textval").value = ""
};
