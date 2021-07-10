const productos = {
    nombre: 'Monitor gamer 20"',
    precio: 30000,
    informacion: {
        peso: '1kg',
        medida: '50cm'
    },
    disponibilidad: ['Los angeles', 'Chillan', 'Concepcion']
};

const bodega = {
    nombreBodega: "Los angeles",
    stockBodega: 450
}

// Unir dos objetos
const datosObjs = {...productos, ...bodega };
console.log(datosObjs);

// Obtiene las propiedades del objeto
console.log(Object.keys(bodega));
// Obtiene solo valores del objeto
console.log(Object.values(bodega));
// Separa los elementos en una array
console.log(Object.entries(bodega));

// Agrega un nuevo elemento al objeto
productos.stock = 60;
console.log(productos);

// Bloquea la modificacion del objeto
Object.freeze(productos);
// Permite modificar un elemento del objeto pero no eliminarlo 
Object.seal(productos);
// Elimina objeto de un objeto
delete productos.precio;

console.log(productos.precio);


/* let nombre = productos.nombre;
let precio = productos.precio;
let medida = productos.informacion.medida;
 */
// Desestructuracion de objetos
const { nombre, precio, informacion, informacion: { peso } } = productos;

function imprimir({ nombre, precio, informacion: { peso } }) {
    console.log(nombre, precio, peso);
}

imprimir(productos);

// console.log(peso);