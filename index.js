//Zadanie 1

const hello = "Hello";
const world = "World";
const sayHallo = () => `${hello} + ${world}`;

//Zadanie 2

const multiply = (a = 1, b = 1) => a * b;
;

//Zadanie 3

const average = (...arr) => arr.reduce((a, b) => a + b, 0) / arr.length

//zadanie 4 

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

//zadanie 5

const names = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstName, , secondName] = names
console.log(firstName, secondName)
