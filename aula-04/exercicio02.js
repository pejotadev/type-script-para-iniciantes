"use strict";
const input = document.querySelector('input');
const total = localStorage.getItem('total');
if (total && input) {
    input.value = total;
    calcularGanho(Number(input.value));
}
function calcularGanho(value) {
    const p = document.querySelector('p');
    if (!p)
        return;
    p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
}
function totalMudou() {
    if (input) {
        localStorage.setItem('total', input.value);
        calcularGanho(Number(input.value));
    }
}
if (input) {
    input.addEventListener('keyup', totalMudou);
}
