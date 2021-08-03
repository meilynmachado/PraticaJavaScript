/* O que é uma array(lista) no javaScript? */

// Uma array é uma variável composta, ok, mas o que isso significa? //
//Imagine que voce possui uma caixa, mas nessa caixa voce pode guardar uma coisa só por vez, isso é uma variável simples//
//A variável simples pode armazenar apenas um dado por vez, seja ele uma string(texto), numero, ou valor booleano(logico)//
//Agora, vamos pensar nas variáveis compostas como sendo um baú mágico onde você pode armazenar muitas muitas coisas de diferentes tipos todas juntas //
//Essas coisas(valores) que você armazena nesse baú mágico(array) recebem uma numeração indicando sua posicão dentro da array, a isso chamamos índice ou index//
//E esses índices/index da array começam a partir do zero, sendo assim, o primeiro elemento da array/lista que voce criou será identificado pelo indice 0//

/*Exemplo*/
let coisas = ["Corais", 1, ["mamão","banana","maçã"], "salada"];

//console.log(coisas[0]);

/*Como saber o tamanho de uma array no JavaScript?*/

//Para saber o tamanho de uma array no JS usamos a função length, sua sintaxe é: nomedaarray.length//
/*Exemplo*/
//console.log(coisas.length);

/*Como adicionar e retirar um elemento de uma array? */
//Para adicionar um elemento em uma array usamos a funcão push, sua sintaxe é: nomedaarray.push(elementoAdicionado)//
/*Exemplo*/
coisas.push("Discord");

//console.log(coisas);

//Para retirar um elemento da array usamos a função pop, sua sintaxe é: nomedaarray.pop()//
coisas.pop()

console.log(coisas)

//as funções push e pop apenas adicionam e retiram elementos ao final da array.//
