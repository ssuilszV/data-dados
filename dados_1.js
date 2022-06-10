//criando variavel simples

/*definindo e pegando uma variavel (nesse caso "quantidade, atribuindo o valor dela como 10") */

//podemos criar também variaveis com "let"
var nome = "Mouses", quantidade = 10, preco = 300, imposto = 23.2, precoFinal = preco + imposto, desconto = - 100;


console.log(nome, "\n");

//console.log(35); //Valor Literal (Valor definido)
console.log(quantidade, "é quantidade de mouses"); //
console.log("\nO valor do mouse é", preco);
console.log("\nO valor do imposto é ", imposto);
console.log("O valor total do mouse é ",preco + imposto);
console.log("\nSe você tem o desconto da loja, você pagará um total de: ", precoFinal + desconto);

//temos casos das frases em ordem, que se vc modificar uma variavel antes dela ser mostrada no código (hereditariamente) podemos alterar seu valor, sem mecher nos demais

nome = "Mouses RGBs"
console.log("Esse são nossos valores para os",nome);
