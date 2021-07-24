let paises = [];


const agregarPais = pais => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (pais == 'Canada')
            reject(`El pais ${pais} no es de Latina America`)
        paises.push(pais);
        resolve(`Agregando: ${pais}`);
    }, 3000);
});

agregarPais('Chile')
    .then(result => {
        console.log(result);
        console.log(paises);
        return agregarPais('Argentina');
    })
    .then(result => {
        console.log(result);
        console.log(paises);
        return agregarPais('Canada');
    })
    .then(result => {
        console.log(result);
        console.log(paises);
        return agregarPais('Bolivia');
    })
    .then(result => {
        console.log(result);
        console.log(paises);
    })
    .catch(error => console.log(error))