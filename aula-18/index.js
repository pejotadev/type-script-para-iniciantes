"use strict";
/**
 * Exercicio
 *
 */
// 1 - Crie uma interface UserData para o formulário abaixo
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
// 3 - Adicione um evento de keyup ao formulário
// 4 - Quando o evento keyup ocorrer adicione a {[id]: value} ao UserData
// 5 - Salve UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData
window.UserData = {};
const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
form?.addEventListener('keyup', handleInput);
loadLocalStorage();
function validJSON(json) {
    try {
        JSON.parse(json);
    }
    catch (error) {
        return false;
    }
    return true;
}
function loadLocalStorage() {
    const localUserData = localStorage.getItem('userData');
    if (localUserData && validJSON(localUserData)) {
        const UserData = JSON.parse(localUserData);
        if (isUserData(UserData)) {
            console.log(UserData);
            Object.entries(UserData).forEach(([key, value]) => {
                const input = document.querySelector(`#${key}`);
                if (input instanceof HTMLInputElement) {
                    input.value = value;
                    window.UserData[key] = value;
                }
            });
        }
    }
}
function isUserData(userData) {
    if (userData && typeof userData === 'object' &&
        ("nome" in userData || "email" in userData || "cpf" in userData)) {
        return true;
    }
    return false;
}
function handleInput({ target }) {
    if (target instanceof HTMLInputElement) {
        window.UserData[target.id] = target.value;
        localStorage.setItem('userData', JSON.stringify(window.UserData));
    }
}
