function ingresoPalabras() {
    let palabras = [];
    let cantidad = parseInt(prompt("¿Cuántas palabras vas a ingresar?"));

    for (let i = 0; i < cantidad; i++) {
        let palabra = prompt(`Ingrese la palabra ${i + 1}:`);
        palabras.push(palabra);
    }
    
    console.log("Palabras ingresadas:", palabras);
    encontrarPalabraMayor(...palabras);
}

function encontrarPalabraMayor(...palabras) {
    if (palabras.length === 0) {
        console.log("No se ingresaron palabras.");
        return;
    }
    
    let palabraMayor = palabras[0];
    
    for (let i = 1; i < palabras.length; i++) {
        if (palabras[i].length > palabraMayor.length) {
            palabraMayor = palabras[i];
        }
    }
    
    console.log(`La palabra de mayor longitud es ${palabraMayor} con ${palabraMayor.length} letras. `);
}

ingresoPalabras();