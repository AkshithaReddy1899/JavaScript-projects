let form = document.getElementById('jsForm');
let billError = document.getElementById('bill-error');
let tipError = document.getElementById('tip-error');
let peopleError = document.getElementById('people-error');
let tipPercentage = document.getElementById('select');
let resultTip = document.getElementById('resultTip');
let resultAmount = document.getElementById('resultAmount');
let totalTip;
let total;
let customTipPercentage;
let tipPercentageValue = tipPercentage.value;


form.addEventListener("click", (event) => {
    event.preventDefault();
});

document.getElementById('submit').addEventListener('click', () => {

    //form validation

    //bill
    if (bill.value === "") {
        billError.textContent = "Enter your bill amount";
    } else if (bill.value !== "") {
        billError.textContent = "";
    }

    //number of people
    if (people.value === "") {
        peopleError.textContent = 'Enter the number of people';
    } else if (people.value !== "") {
        peopleError.textContent = "";
    }

    //tip percentage

    if (tipPercentage.value === "") {
        tipError.textContent = 'Select tip percentage';
    } else if (tipPercentage.value !== "") {
        tipError.textContent = "";
    }

    if (tipPercentage.value === 'custom') {
        customTipPercentage = prompt('Please enter your desired tip percentage');
        tipPercentageValue = customTipPercentage / 100;

    }

    totalTip = (bill.value * tipPercentageValue) / people.value;
    totalTip = totalTip.toFixed(2);

    let totalTipPerPerson = parseInt(totalTip);


    resultTip.textContent = totalTip;

    total = bill.value / people.value;
    total = total.toFixed(2);

    let totalPerPerson = parseInt(total);

    resultAmount.textContent = totalPerPerson + totalTipPerPerson;


})