"use strict";
function somar(a, b) {
    return a + b;
}
somar(5, 10);
// somar("10", "10");
const nintendo = {
    nome: 'Nintendo',
    preco: '2000',
};
function transformarPreco(produto) {
    produto.preco = 'R$ ' + produto.preco;
    return produto;
}
const produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo);
