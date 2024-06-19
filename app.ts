// const soma = (a: number, b: number) => {
//     console.log(a + b);
// }

// soma(1, 2)
// soma(2, 8)
// aula 2 

var a = 'a' // escopo global 
let b = 'b' // eu posso alterar o valor dessa variavel

const c = '2' // é uma variavel imutavel

///////////////////////////////////////////////////////////////////////////

let m: any = 2 // o conceito eny recebe todos os tipos, mas não é orientado sair usando em tudo 

///////////////////////////////////////////
// objetos e interfaces 

interface Pessoa {
    nome: string,
    idade: number
}

const pessoa: Pessoa = {
    nome: 'thalita',
    idade: 25
}