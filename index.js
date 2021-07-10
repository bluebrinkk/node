let nombre;
nombre = 'Pedro';

console.log(nombre);
let dato = ' texto 1 ';
let dato2 = 'texto 2';

console.log(dato.length)
console.log(dato.toUpperCase())
console.log(dato.toLowerCase())
console.log(dato.concat(dato2))
console.log(dato.indexOf('2'))
console.log(dato.includes('2'))
console.log(dato.trimStart())
console.log(dato.trimEnd())
console.log(dato.replace('1', '3'))
console.log(dato.repeat(3))
console.log(dato.substring(0, 3))

let palabra = dato2.split(' ')
console.log(palabra)

let num1 = 45;
let num2 = '45';

if (num1 === num2)
    console.log('Son Iguales');
else
    console.log('No son Iguales');


let resultado = Math.sqrt(45);
console.log(resultado);

/* concat++;
concat--;
++concat;
--concat; */

let numeroString = '456';
let numeroReal = Number.parseInt(numeroString);
let numeroReal2 = Number.parseFloat(numeroString);


if (Number.isInteger(numeroString))
    console.log('es un numero')

console.log(numeroReal.toString());
console.log(resultado);