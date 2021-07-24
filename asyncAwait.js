let paises = [];


const agregarPais = pais => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (pais == 'Canada')
            reject(`El pais ${pais} no es de Latina America`)
        paises.push(pais);
        resolve(`Agregando: ${pais}`);
    }, 3000);
});

// Espera a que se ejecute el proceso anterior para ejecutar el siguente
async function iniciarProceso() {
    try {
        await agregarPais('Chile');
        await agregarPais('Argentina');
        await agregarPais('Canada');
        await agregarPais('Bolivia');
        console.log(paises);
    } catch (error) {
        console.log(error);
    }

}

iniciarProceso();