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
    } else if (startingAmount.value === "" || annualAmount.value === "" || rate.value === "" || years.value === "" ) {
        alert("Please fill in all fields");
        return;
    } else {
        let result = parseFloat(startingAmount.value);
        let annualAddtion = parseFloat(annualAmount.value);
        let ratePercent = parseFloat(rate.value) / 100;

        for (let i = 0; i < years.value; i++) {
            result = result * (1 + ratePercent) + annualAddtion;
        };

        resultAmount.innerText = `Total: R ${result.toFixed(2)}`;
}})});