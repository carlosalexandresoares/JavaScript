// 1 Arrays

const lista = [1, 2, 3, 4, 5];

console.log(lista);
console.log(typeof lista);

const itens = ["Carlos", 21, true];

console.log(itens);

// 2 Mais sobre arrays

const arr = ['a', 'b', 'c']

console.log(arr[0])

// 3 Propriedades

const numbers = [5, 6, 7]

console.log(numbers.length)

// 4 Métodos

const ordensNum =[1, 2, 3]

const allnum = ordensNum.concat(ordensNum);

console.log(allnum);

const tex = "carlos";

console.log(tex.toUpperCase());

console.log(typeof tex.toUpperCase);

console.log(tex.indexOf('l'))

// 5 objetos

const person = {
    name: "carlos",
    age: 21,
    sobrenome: 'Soares'
}

console.log(person);
console.log(person.name);
console.log(person.name.length);
console.log(typeof person);

// 6 criando e deletando propriedades

const car = {
    motor: 2.0,
    marca: "vw",
    modelo: "fox",
    km:2000,
}

console.log(car)

car.portas = 4;

console.log(car);

delete car.km

console.log(car)

// 7 mais sobre objetos

const obj = {
    a: "teste",
    b: true
}

console.log(obj instanceof Object)

const obj2 = {
    c:[],
}

Object.assign(obj2, obj);

console.log(obj2)

console.log(obj)