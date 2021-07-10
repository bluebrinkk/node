function sumar(num1 = 0, num2 = 0) {
    return num1 + num2;
}

console.log(sumar(2, 4));

// Declaracion correcta
const imprime1 = function() {
    return 'Prueba impresion 1';
}
console.log(imprime1());

const imprime2 = () => {
    return 'Prueba impresion 2';
}
console.log(imprime2());

const imprime3 = () => 'Prueba impresion 3';
console.log(imprime3());

const imprime4 = (nombre) => `Saludos ${nombre}`;
console.log(imprime4('Esteban 1'));

const imprime5 = nombre => `Saludos ${nombre}`;
console.log(imprime5('Esteban 2'));

const imprime6 = (nombre, edad) => `Saludos ${nombre} Edad:  ${edad}`;
console.log(imprime6('Esteban 3', 28));

const imprime7 = (nombre, edad) => {
    let res = edad + 10;
    return `Saludos ${nombre} Edad:  ${res}`
};
console.log(imprime7('Esteban 3', 28));