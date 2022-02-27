
let billAmount;
let billPerPerson;
let tipAmount;
let tipPerPerson;
let numberOfPerson;
let selectedTip = 5;
let current;

let btnSet = document.getElementById('btn-set');
let btns = btnSet.getElementsByClassName('btn');
document.getElementById('custom-input').style.display = 'none';
toggleTipButton();

function showCustomTipInput() {
    document.getElementById('custom-input').style.display = 'block';
}

function showCustomTipBtn() {
    document.getElementById('custom-input').style.display = 'none';
}

function calculateCustomTip(customTip) {
    calculateTip(customTip);
    current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");

}

function toggleTipButton() {
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
}

function init() {
    billAmount = document.getElementById("bill-amount").value;
    numberOfPerson = document.getElementById("number-people").value
}

function calculateTip(tip) {
    init();
    selectedTip = tip;
    tipAmount = billAmount * (tip / 100);
    tipPerPerson = tipAmount / numberOfPerson;
    document.getElementById("tip-per-person").innerText = tipPerPerson.toFixed(2);
    billPerPerson = billAmount / numberOfPerson;
    document.getElementById("amount-per-person").innerText = (billPerPerson + tipPerPerson).toFixed(2);
}

function resetAmount() {
    document.getElementById("tip-per-person").innerText = 0.0;
    document.getElementById("amount-per-person").innerText = 0.0;
    toggleTipButton();
    if (current.length === 0) {
        btns[0].className += " active";
        selectedTip = 5;
    }
    showCustomTipBtn();
}

function updateTipCalc() {
    if (selectedTip > 0) {
        calculateTip(selectedTip)
    }
}
