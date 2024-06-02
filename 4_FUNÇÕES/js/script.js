// // 1 - Criando uma função
// function minhaFuncao(){
//     console.log("Testando");
// }

// minhaFuncao();
// minhaFuncao();

// const minhaFuncaoEmVariavel = function(){
//     console.log("Função em variavel");
// }

// minhaFuncaoEmVariavel();

// function funcaoComParametro(txt){
//     console.log(`Imprimindo: ${txt}`);
// }

// funcaoComParametro("Imprimindo alguma coisa");

// funcaoComParametro("Outra função");

// // 2 - return

// const a = 19;
// const b = 20;

// function somaAB(n1, n2){
//     return n1 + n2
// }

// const resultado = somaAB(a, b);

// console.log(resultado);

// // 3 - escopo da função

// let y = 10;

// function testandoEscopo(){
//     let y = 100;
//     console.log(`Y dentro da função é: ${y}`);
// }

// testandoEscopo();

// console.log(`Y fora da função é: ${y}`);

// testandoEscopo();

// //  4 - escopo aninhado

// let m = 10;

// function escopoAninhado(){
//     let m = 20;

//     if(true){
//         let m = 30;

//         if(true){
//             let m = 40;
//             console.log(m);
//         }
//         console.log(m);
//     }
//     console.log(m);
// }

// escopoAninhado();

// console.log(m);

// // 5 - Arrow function

// const testeArrow = () =>{
//     console.log("Está é uma arrow functoin");
// }

// testeArrow();

// const parOuImpar = (n) =>{
//     if(n % 2 === 0){
//         console.log("Par");
//         return;
//     }
//     console.log("Impar");
// }

// parOuImpar(5);
// parOuImpar(10);

// // 6 - mais sobre arrow

// const raizQuadrada = (x) =>{
//     return x * x;
// };

// console.log(raizQuadrada(4));

// const raizQuadrada2 = (x) => x * x

// console.log(raizQuadrada2(5));
// console.log(raizQuadrada2(12));

// // 7 - parametro opcional

// const mult = function(m,n){
//     if(n === undefined){
//         return m * 2
//     } else{
//         return m * n
//     }
// }

// console.log(mult(5));

// console.log(mult(2, 4));

// const greetin = (name) =>{
//     if(!name){
//         console.log("Olá")
//         return
//     }
//     console.log(`Olá ${name}!`);
// }

// greetin();

// greetin("Carlos")

// // valor default

// const customGreetin = (name, greet = "Óla") => {
//     return` ${greet}, ${name}`;
// }

// console.log(customGreetin("Carlos"));

// console.log(customGreetin("Carlos", "Bom dia"));

// const repeatText = (text, reepeat = 2)=>{
//     for(let i = 0; i< reepeat; i++){
//         console.log(text);
//     }
// };

// repeatText("Testando");
// repeatText("Carlos", 7)

// 9 - closure

// function someFunction(){
//     let txt = "Alguma coisa";

//     function display(){
//         console.log(txt);
//     }
//     display();
// }

// someFunction();

// // 10 mais sobre closure

// multiplicationClosure = (n) => {
//     return (m) =>{
//         return n * m;
//     };
// };

// const n1 = multiplicationClosure(5);
// const n2 = multiplicationClosure(10);

// console.log(n1(5));
// console.log(n2(10));

// // 11 - recusion

// const untilTen = (n, m) =>{
//     if(n<10){
//         console.log("A funçãoparou de funcionar");
//     }else{
//         const x = n - m;
//         console.log(x);

//         untilTen(x, m);
//     }

// }

// untilTen(100, 7);

// function factorial(x){
//     if(x === 0){
//         return 1
//     }else{
//         return x * factorial(x - 1)
//     }
// }

// const num = 6

// const result = factorial(num);

// console.log(`O fatorial do número ${num} é ${result}`);