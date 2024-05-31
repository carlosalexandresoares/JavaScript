// 1 - variáveis
// let nome = "Carlos";

// console.log(nome);

// nome = "Carlos Alexandre";

// console.log(nome);

// const idade = 21;

// console.log(idade);

// console.log(typeof nome);

// console.log(typeof idade);

// 2 - mais sobre variáveis
// let 2test = "Invalido"
// let @test = "Invalido"

// let a = 10, b = 20, c =30;

// console.log(a, b, c);

// const nomecompleto = "Carlos Alexandre";
// const nomeCompleto = "Mariana Miranda";

// console.log(`${nomecompleto} e ${nomeCompleto}`);

// let _teste = "ok";
// let $teste = "ok";

// console.log(_teste);
// console.log($teste);

// 3 prompt

// const age = prompt("Qual é sua idade?");

// console.log(`Você tem ${age} anos`);

// 4 alert

// alert("Testando");

// 5funções do js: Math.x

// max encontra o maior número
// floor arredonda para baixo o número
// ceil arrendonda para cima o número

// console.log(Math.max(5, 2, 1, 10));

// console.log(Math.floor(5.15));

// console.log(Math.ceil(5.15));

// 6 console

// console.log("teste!");

// console.error("Erro!");

// console.warn("aviso!");


// 7 if

// const m = 10;

// if(m > 5){
//     console.log("M é maior que 5");
// }

// const user = "Carlos";

// if(user === "Carlos"){
//     console.log(`Seja bem vindo ${user}`);
// }else{
//     console.log("Ixi seu nome é nada a ver");
//}

// 8 else

// const loggdIn = false
// if(loggdIn){
//     console.log("Está autenticado");
// }else{
//     console.log("Não está autenticado")
// }

// const n1 = 10;
// const n2 = 15;

// if(n1 > 5 && n2 > 20){
//     console.log("Números mais altos");
// }else{

//     console.log("Os número não são mais altos");
//}

// 9 else if

// if (1 > 2) {
//     console.log("Teste");
// } else if (2 > 3) {
//     console.log("Teste 2");
// } else if (5 > 1) {
//     console.log("Agora sim!")
// }

// const userName = "Carlos";
// const userAge = 21;

// if (userName === "José") {
//     console.log("Bem vindo josé");
// } else if (userName === "Carlos" && userAge === 21) {
//     console.log("Bem vindo Carlos, você tem 21 anos");
// }else{
//     console.log("Nenhuma condição aceita!");
// }

// 10 while

// let p = 0

// while(p < 5){
//     console.log(`Repetindo ${p}`);
//     p = p + 1;
// }

// loop infinito

// let x = 10;

// while(x > 5){
//     console.log(`Imprimindo o ${x}`)
// }

// 11 do while

// let o = 10

// do{
//     console.log(`Valor de o: ${o}`)
//     o--
// }while(o > 1)

// 12 For

// for(let t = 0; t < 10; t++){
//     console.log("Repetindo algo..")
// }

// let r = 10

// for(r; r > 0; r = r - 1){
//     console.log(`o r esta diminuindo ${r}`)
// }

// 13 indentação

// for(let u = 0; u < 10; u++){
// if(u * 2 >10){
// console.log(`Maior que 10! ${u}`)    
// }else{
// if(u / 2 === 0){
// console.log("Deu 0")    
// }    
// }    
// }

// 14 break

// for(let g = 20; g > 10; g--){
//     console.log(`O valor de g é ${g}`);
//     if(g === 15){
//         console.log('O g é 15!');
//         break;
//     }
// }

// // 15 continue

// for(let s = 1; s < 10; s++){
//     //operador resto =%
//     if(s % 2 === 1){
//         console.log("Número par!");
//         continue;
//     }
//     console.log(s);
// }

// 16 switch

// const job ="Dev"

// switch(job){
//     case "Advogado":
//         console.log("Você é um advogado")
//         break
//     case "Dev":
//         console.log("Você é um dev")
//         break
//     default: 
//         console.log("Você é um desempregado")    
// }