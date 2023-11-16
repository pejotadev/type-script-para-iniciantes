/** 
 * Exercicio
 * 
 */
// Crie uma função que arredonda um valor passado para cima.
// A função pode receber string ou number.
// A função deve retornar o mesmo tipo que ela receber.

function arredondarParaCima(value: number): number;
function arredondarParaCima(value: string): string;
function arredondarParaCima(value: number | string): number | string {
  if (typeof value === 'number') return Math.ceil(value);
  return Math.ceil(parseFloat(value)).toString();
}

arredondarParaCima(5.2);
arredondarParaCima('5.2');
