// // 1 Arrays

// const lista = [1, 2, 3, 4, 5];

// console.log(lista);
// console.log(typeof lista);

// const itens = ["Carlos", 21, true];

// console.log(itens);

// // 2 Mais sobre arrays

// const arr = ['a', 'b', 'c']

// console.log(arr[0])

// // 3 Propriedades

// const numbers = [5, 6, 7]

// console.log(numbers.length)

// // 4 Métodos

// const ordensNum =[1, 2, 3]

// const allnum = ordensNum.concat(ordensNum);

// console.log(allnum);

// const tex = "carlos";

// console.log(tex.toUpperCase());

// console.log(typeof tex.toUpperCase);

// console.log(tex.indexOf('l'))

// // 5 objetos

// const person = {
//     name: "carlos",
//     age: 21,
//     sobrenome: 'Soares'
// }

// console.log(person);
// console.log(person.name);
// console.log(person.name.length);
// console.log(typeof person);

// // 6 criando e deletando propriedades

// const car = {
//     motor: 2.0,
//     marca: "vw",
//     modelo: "fox",
//     km:2000,
// }

// console.log(car)

// car.portas = 4;

// console.log(car);

// delete car.km

// console.log(car)

// // 7 mais sobre objetos

// const obj = {
//     a: "teste",
//     b: true
// }

// console.log(obj instanceof Object)

// const obj2 = {
//     c:[],
// }

// Object.assign(obj2, obj);

// console.log(obj2);

// console.log(obj);

// // 8 conhecendo melhor os objetos

// console.log(Object.keys(obj));
// console.log(Object.keys(obj2));
// console.log(Object.keys(car));

// console.log(Object.entries(car));

// // 10 Multação

// const a = {
//     name: "Carlos"
// }

// const b = a

// console.log(a)
// console.log(b)

// console.log(a === b)

// a.age = 21

// console.log(a)
// console.log(b)

// delete b.age;

// console.log(a);
// console.log(b);

// // 10 loop em array

// const num1 = [1, 5, 10, 3, 2, 50];
// for(let i = 0; i < num1.length; i++){

//     console.log(`Multiplicando os números do array ${num1[i] * 2}`)

// }

// 11 push e pop

const array = ["a", "b", "c"]

array.push("d")
console.log(array);
console.log(array.length);

array.pop();

console.log(array);

const itemRemovido = array.pop();

console.log(itemRemovido);

console.log(array)

// 12 shift e unshift

const array2 = [1, 4, 6, 7, 8]

console.log(array2)
array2.shift()
console.log(array2)

const resv = array2.shift()

console.log(resv)

console.log(array2)

array2.unshift(5)

console.log(array2)

// 13 indexOf e lastindexOf

const list = ["Morando", "Caju", "Maçã", "Morango"];

console.log(list.indexOf("Maçã"));
console.log(list.indexOf("Morango"));


console.log(list[2]);
console.log(list[list.indexOf("Morango")]);

console.log(list.lastIndexOf("Morango"))