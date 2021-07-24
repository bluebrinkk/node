let paises = ['chile', 'argentina', 'peru', 'bolibia'];

function agregarPais(pais, callback) {
    setTimeout(() => {
        paises.push(pais);
        callback();
    }, 2000);

}

function mostrarPaises() {
    console.log(paises);
}

agregarPais('ecuador', mostrarPaises);
// mostrarPaises();