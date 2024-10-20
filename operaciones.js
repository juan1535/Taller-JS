// Función para verificar si un número es primo
export function esPrimo(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num !== 1;
}

export function sumarNumeros(nmr) {
    let suma = 0;
    for (let i = 0; i < nmr.length; i++) {
        suma += nmr[i];
    }
    return suma;
}

export function contarPrimos(nmr) {
    let contador = 0;
    for (let i = 0; i < nmr.length; i++) {
        if (esPrimo(nmr[i])) {
            contador++;
        }
    }
    return contador;
}

export function contarPares(nmr) {
    let contador = 0;
    for (let i = 0; i < nmr.length; i++) {
        if (nmr[i] % 2 === 0) {
            contador++;
        }
    }
    return contador;
}

export function promedioPrimos(nmr) {
    let suma = 0;
    let contador = 0;
    for (let i = 0; i < nmr.length; i++) {
        if (esPrimo(nmr[i])) {
            suma += nmr[i];
            contador++;
        }
    }
    return (contador === 0) ? 0 : suma / contador;  // Evitar división por 0
}

export function promedioPares(nmr) {
    let suma = 0;
    let contador = 0;
    for (let i = 0; i < nmr.length; i++) {
        if (nmr[i] % 2 === 0) {
            suma += nmr[i];
            contador++;
        }
    }
    return (contador === 0) ? 0 : suma / contador;
}
