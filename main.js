let bill = 0;
let tipPercentage = 0;
let numberOfPeople = 0;
let buttonSelected = null;

let billInput = document.querySelector("#bill");
billInput.addEventListener("input", receiveBillValue);

let numberOfPeopleInput = document.querySelector("#people");
numberOfPeopleInput.addEventListener("input", receiveNumberOfPeopleValue);

function receiveBillValue() {
    bill = billInput.valueAsNumber;
    calculate();
}

function receiveNumberOfPeopleValue() {  // Corrigido aqui, faltava os parênteses
    numberOfPeople = numberOfPeopleInput.valueAsNumber;
    calculate();
}

function receiveTipPercentageValue(value) {
    tipPercentage = value / 100;
    buttonSelected = document.querySelector(`#button-${value}`);
    buttonSelected.classList.add("button-selected");
    removeClassButtonSelected();  // Ajustado para remover a seleção anterior
    document.querySelector("#custom-tip").value = ""; // Limpa o campo de gorjeta personalizada
    calculate();
}

function receiveCustomTipPercentageValue() {
    tipPercentage = document.querySelector("#custom-tip").valueAsNumber / 100;
    removeClassButtonSelected();  // Remove a seleção dos botões de porcentagem fixa
    calculate();
}

function removeClassButtonSelected() {
    if (buttonSelected !== null) {
        buttonSelected.classList.remove("button-selected");
        buttonSelected = null;
    }
}

function calculate() {
    if (bill !== 0 && tipPercentage !== 0 && numberOfPeople !== 0) {  // Corrigido, faltava as chaves
        let tipAmountStrong = document.querySelector(".amount strong");
        let tipAmountPerson = (bill * tipPercentage) / numberOfPeople;
        tipAmountStrong.innerText = `$${tipAmountPerson.toFixed(2)}`;

        let totalStrong = document.querySelector(".total strong");
        let totalPerson = (bill / numberOfPeople) + tipAmountPerson;
        totalStrong.innerText = `$${totalPerson.toFixed(2)}`;
    }
}

function reset() {
    billInput.value = "";
    bill = 0;
    tipPercentage = 0;
    removeClassButtonSelected();
    document.querySelector("#custom-tip").value = "";

    numberOfPeopleInput.value = "";
    numberOfPeople = 0;

    document.querySelector(".amount strong").innerText = "$0.00";
    document.querySelector(".total strong").innerText = "$0.00";
}
