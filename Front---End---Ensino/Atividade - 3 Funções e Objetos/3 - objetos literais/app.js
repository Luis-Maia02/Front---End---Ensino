const produto = {
    nome: "Produto",
    preco: 50,
    categoria: "Podecre",
    emEstoque: true
};

console.log (produto.nome);
console.log (produto.preco);
console.log (produto.categoria);
console.log (produto.emEstoque);
console.log("\n");

produto.nome = "Samsung S25";
produto.preco = 5600;
produto.categoria = "Celular";
produto.desconto = 0.1;
console.log("\n");

console.log (produto.nome);
console.log (produto.preco);
console.log (produto.categoria);
console.log (produto.emEstoque);
console.log("\n");


let precoFinal = produto.preco - (produto.preco * produto.desconto);
console.log(`Preço Final do ${produto.nome} com desconto fica no valor ${precoFinal}`);
