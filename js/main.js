console.log("Javascript Running...");

// Parent Div
let wrapper = document.getElementById("wrapper");

// Addition button
let add = document.querySelector(".add");

// Subtraction Button
let subtract = document.querySelector(".subtract");

// Adding
function addition() {
    let x = document.getElementById("help");
    let y = document.getElementById("num").value;
    x.textContent = parseInt(x.textContent) + Number(y);
}

add.addEventListener("click", addition);

// Subtracting
function subtraction() {
    let x = document.getElementById("help");
    let y = document.getElementById("num").value;
    x.textContent = parseInt(x.textContent) - Number(y);
} 

subtract.addEventListener("click", subtraction);
