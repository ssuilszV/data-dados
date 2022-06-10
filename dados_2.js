let preco = 23.3, desconto = 0.4, precoComDesconto = preco * (1 - desconto);
//temos que dar prioridades matematicas também, como no exemplo acima, onde precisamos priorizar a conta 1 - desconto

//esse 1, seria 100% como quero calcular o valor de 40%, preciso subtrair de 100%, 40% pra assim, dar os 60% que irei multiplicar com o preço.
console.log("Preço com desconto, ulitilizando a conta no meio do console",preco * (1 - desconto),"\n");

//Aqui temos um exemplo de como seria mais facil implementar no codigo, colocanto a conta preco * (1 - desconto) como let de precoComDesconto

console.log("Preço com desconto, ultilizando a conta apenas no let ",precoComDesconto);

//Agora, ultilizarei palavras para fazer a mesma coisa de armazenamento de dados.


let nome = "Mouse", categoria = "Periféricos";

console.log(
    "\nProduto = ",nome,
    "\nCategoria = ",categoria,
    "\nPreço = ",preco,
    "\nPreço com descontinho = ",precoComDesconto
);
