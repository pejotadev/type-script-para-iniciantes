/**
 * Exercicio
 *
 */
// Crie uma função que arredonda um valor passado para cima.
// A função pode receber string ou number.
// A função deve retornar o mesmo tipo que ela receber.
function arredondarParaCima(value) {
    if (typeof value === 'number')
        return Math.ceil(value);
    return Math.ceil(parseFloat(value)).toString();
}
arredondarParaCima(5.2);
arredondarParaCima('5.2');
