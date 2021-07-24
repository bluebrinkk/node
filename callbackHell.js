let paises = [];

function agregarPais(pais, callback) {
    paises.push(pais);
    console.log(`Agregando : ${pais}`)
    callback();
}

function mostrarPaises() {
    console.log(paises);
}


function iniciarIngresoPaises() {
    setTimeout(() => {
        agregarPais('chile', mostrarPaises);
        setTimeout(() => {
            agregarPais('argentina', mostrarPaises);
            setTimeout(() => {
                agregarPais('peru', mostrarPaises);
                setTimeout(() => {
                    agregarPais('bolivia', mostrarPaises);
                }, 3000);
            }, 3000);
        }, 3000);
    }, 3000);
}

iniciarIngresoPaises();