/*  Cuantas veces aparecen las siguientes palabras en el texto
Node
javascript
entorno
tiempo */

// Quitar puntos y parentecis en la busqueda

let texto = 'Node. js es un entorno de tiempo de ejecución de JavaScript (de ahí su terminación en . js haciendo alusión al lenguaje JavaScript). Este entorno de tiempo de ejecución en tiempo real incluye todo lo que se necesita para ejecutar un programa escrito en JavaScript.';
// Formatea texto
texto = texto.replace(/,/g, '').replace(/\./g, '').replace(/\)/g, '').replace(/\(/g, '').replace(/[ ]+/g, ' ').toLowerCase();
// Separa palabras retornando un arreglo
texto = texto.split(' ');

// -------------------------------------------------------------------------------------
console.log('Solucion 1');

let node = 0;
let javascript = 0;
let entorno = 0;
let tiempo = 0;

texto.forEach(element => {
    if (element == 'node') node++;
    else if (element == 'javascript') javascript++;
    else if (element == 'entorno') entorno++;
    else if (element == 'tiempo') tiempo++;
});

console.log(node);
console.log(javascript);
console.log(entorno);
console.log(tiempo);

// -------------------------------------------------------------------------------------
console.log('Solucion 2');

const nodeS = texto.filter(el => el == 'node');
const javaS = texto.filter(el => el == 'javascript');
const entoS = texto.filter(el => el == 'entorno');
const tiemS = texto.filter(el => el == 'tiempo');

console.log(nodeS.length);
console.log(javaS.length);
console.log(entoS.length);
console.log(tiemS.length);