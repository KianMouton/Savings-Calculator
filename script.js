document.addEventListener("DOMContentLoaded", () => {
    const startingAmount = document.getElementById("amount");
const annualAmount = document.getElementById("annual-amount");
const rate = document.getElementById("rate");
const years = document.getElementById("years");
const button = document.getElementById("calculate");
const monthlyBtn = document.getElementById("monthly");
const annuallyBtn = document.getElementById("annually");
const resultAmount = document.getElementById("result-amount");
const amountLabel = document.getElementById("x-amount");
const yearlLabel = document.getElementById("year-label");
const compoundBtn = document.getElementById("compound");

let monthly = false;
let yearly = false;
let compound = false;

monthlyBtn.addEventListener("click", () => {
    monthly = true;
    yearly = false;
    amountLabel.textContent = "Monthly Amount";
    yearlLabel.textContent = "Months";
});

compoundBtn.addEventListener("click", () => {
    if (compound) {
        compound = false;
        compoundBtn.value = "compound";
        compoundBtn.style.backgroundColor = "orange";
    } else {
        compound = true;
        compoundBtn.value = "non-compound";
        compoundBtn.style.backgroundColor = "rgb(212, 138, 0)";
    };
});

annuallyBtn.addEventListener("click", () => {
    yearly = true;
    monthly = false;
    amountLabel.textContent = "Annual Amount";
    yearlLabel.textContent = "Years";
});

button.addEventListener("click", () => {
    console.log(compound);
    if (yearly === false && monthly === false) {
        yearly = true;
    } else if (startingAmount.value === "" || annualAmount.value === "" || rate.value === "" || years.value === "" ) {
        alert("Please fill in all fields");
        return;
    } else if (compound) {
        console.log("compounding brev");
        let result = 0;
        for (let i = 0; i < years; i++) {
            result = result + annualAmount.value * (rate.value / 100);
            console.log(result);
        };
        result += parseFloat(startingAmount.value);
        resultAmount.innerText = `Total: R ${result}`;
    } else {
        const result = annualAmount.value * (rate.value / 100) * years.value + parseFloat(startingAmount.value);
        resultAmount.innerText = `Total: R ${result}`;             
    };
});
});

