/*O que são Objetos no JavaScript?*/
// Objetos em JavaScript funcionam semelhantes a Arrays//
//Só que ao invés de indices numericos, os objetos possuem *chaves* em forma de texto//
//São apropriados quando se quer armazenar um valor com várias características//
//O valor de um objeto pode ser acessado por meio da chave, usa-se nomedoobjeto.chave/nome da informação que voce quer acessar //
let gato = {
    nome:"Vetor", 
    raca: "Vira-lata",
    idade: "Cinco anos",
    gosta: ["Comer","dormir","caçar","carinho"],
    comida:{
        peixe:{
            preco: 5.00,
            tipo: "qualquer peixe"
        },
        racao:{
            marca: "Whiscas",
            valor: 11.50
        }
    },
    miar: () => "miau miau não consigo descer do telhado"

    }

    console.log(gato.miar)

