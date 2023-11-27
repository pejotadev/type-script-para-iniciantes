// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
// 2 - Defina o tipo/interface de cada venda (tuple)
// 3 - Some o total das vendas e mostre na tela

async function fetchVendas() {
  const response = await fetch('https://api.origamid.dev/json/vendas.json');
  const data = await response.json();
  return data;
}

interface ProdutoDetalhes { 
  marca: string;
  cor: string;
}
type Venda = [string, number, string, ProdutoDetalhes];

async function init() {
  const vendas = await fetchVendas();
  const vendasParsed = vendas as Venda[];
  const totalVendas = somarVendas(vendasParsed);
  console.log(totalVendas);
}

function somarVendas(vendas: Venda[]) {
  let total = 0;
  for (const venda of vendas) {
    total += venda[1];
  }
  return total;
}

init();