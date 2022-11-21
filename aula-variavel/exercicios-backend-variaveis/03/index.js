let dinheiroPossuido = 80,
    preco = 129.99;
let valor_do_desconto = dinheiroPossuido - preco;
let result = valor_do_desconto * 100 / preco;
console.log(`O desconto deverá ser de ${result}%`);