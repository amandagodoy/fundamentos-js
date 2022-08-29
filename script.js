//var - o fato dela ser declarada e depois usada, ou substituida não tem muitas regras solta. 
//Isso acaba que certos comportamentos não previseis acabe acontecendo.

//var altura = 5;
//var comprimento = 7;

//area = altura * comprimento;
//console.log(area);
//var area;
//Let
//let forma = 'retangulo';
//let altura = 5;
//let comprimento = 7;
//let area;

/*if(forma === 'retangulo'){
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}*/

//console.log(area);

/*
dentro do nosso programa tem varios blocos de código, e esses blocos são definidos pelas chaves
como por exemplo o caso do if. Não é interessante termos uma variavel mexer no valor dela dentros 
dos blocos, pelos não com um certo controle.
O var é muito solto para o programa, pode acontecer de usarmos esse nome de variavel em alguns outros
locais de bloco de código, por segurança seria manter pelo "let".
*/

//A const é uma constante quando colocamos ela no programa não conseguimos alterar.

//Const

const forma = 'triangulo';
const altura = 5;
const comprimento = 7;
let area;

if(forma === 'quadrado') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area);