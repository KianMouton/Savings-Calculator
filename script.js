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

let monthly = false;
let yearly = false;

monthlyBtn.addEventListener("click", () => {
    monthly = true;
    yearly = false;
    amountLabel.textContent = "Monthly Amount";
    yearlLabel.textContent = "Months";
});

annuallyBtn.addEventListener("click", () => {
    yearly = true;
    monthly = false;
    amountLabel.textContent = "Annual Amount";
    yearlLabel.textContent = "Years";
});

button.addEventListener("click", () => {
    if (yearly === false && monthly === false) {
        yearly = true;
    }
    if (rate === 1) {
        console.log("vark");
    }
    else if (startingAmount === "" || annualAmount === "" || rate === "" || years === "" ) {
        alert("Please fill in all fields");
        return;
    } else if (yearly === true) {
        const result = annualAmount.value * rate.value * years.value + parseFloat(startingAmount.value);
    resultAmount.innerText = "R " + result;
    console.log(result);
    } else if (monthly === true) {
        const result = annualAmount.value * rate.value * years.value + parseFloat(startingAmount.value);
        resultAmount.innerText = "R " + result;
        console.log(result);
    }
});
