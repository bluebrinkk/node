const numeros = [1, 20, 3];
console.log(numeros[2]);

const nombres = ['esteban', 'diego', 'juan'];
console.log(nombres);

const cualquiercosa = [1, 'hola', 2.3, true, { numero: 1, nombre: 'esteban' }];
console.log(cualquiercosa);

console.log(numeros.length);


// Agregar elementos a un array
numeros.push(200);
// Agrega un elemento al principio de array
numeros.unshift(300);
// elimina el ultimo elemento del array
numeros.pop();
console.log(numeros);

// Recorrer array
// el for es mas rapido
for (let i = 0; i < numeros.length; i++)
    console.log(`valor: ${numeros[i]}`);
// Estas son nuevas
for (const iterator of numeros)
    console.log(`valor Iterator: ${iterator}`);

numeros.forEach(element => {
    console.log(element);
});

// Traspasa array a otro array con otro nombre (dentro se puede manejar cada elemento)
const result = numeros.map(element => {
    // Multiplica los elementos
    return element * 2;
});
console.log(result);

// Filtra solo elementos mayores a 10
const numerosMayores = numeros.filter(el => el > 10);
console.log(numerosMayores);

// Suma el total de todo el array y lo almacena en total el cual inicializa en 0
const numerosSumados = numeros.reduce((total, el) => total + el, 0);
console.log(numerosSumados);