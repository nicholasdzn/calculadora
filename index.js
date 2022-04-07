let buttonNumbers = document.getElementsByClassName("number");
let buttonActions = document.getElementsByClassName("action");
let visor = document.getElementById('visor');
let buttonEqual = document.getElementById('equal');
let buttonClear = document.getElementById('clear');
let Valor;

buttonEqual.addEventListener('click', calculaResultado)
buttonClear.addEventListener('click', resetVisor)

function resetVisor () {
    visor.value = ''
}

function imprimiVisor (event) {
    let btn = event.target
    let texto = btn.innerText
    visor.value = visor.value + texto
}

function calculaResultado () {
    let result = eval(visor.value)
    visor.value = result
}

for (x in buttonNumbers) {
    if (Number(x) >= 0) {
        buttonNumbers[x].addEventListener("click", imprimiVisor)
    }
}

for (x in buttonActions) {
    if (Number(x) >= 0) {
        buttonActions[x].addEventListener("click", imprimiVisor)
    }
}

