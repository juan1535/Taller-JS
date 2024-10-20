import { sumarNumeros, contarPrimos, contarPares, promedioPrimos, promedioPares } from './operaciones.js';

// Én esta función se solicitan los números al usuario
function ingresoNumeros() {
    let numeros = [];
    let cantidad = parseInt(prompt("¿Cuántos números vas a ingresar?"));

    for (let i = 0; i < cantidad; i++) {
        let num = parseFloat(prompt(`Ingrese el número ${1 + i}:`));
        numeros.push(num);
    }

    let opcion = prompt(
        "¿Qué operación deseas realizar?\n" +
        "1.- Sumar los números\n" +
        "2.- Contar los números primos\n" +
        "3.- Contar los números pares\n" +
        "4.- Calcular el promedio de los números primos\n" +
        "5.- Calcular el promedio de los números pares\n"
    );

    switch (opcion) {
        case "1":
            alert("La suma de los números es: " + sumarNumeros(numeros));
            break;
        case "2":
            alert("La cantidad de números primos es: " + contarPrimos(numeros));
            break;
        case "3":
            alert("La cantidad de números pares es: " + contarPares(numeros));
            break;
        case "4":
            alert("El promedio de los números primos es: " + promedioPrimos(numeros));
            break;
        case "5":
            alert("El promedio de los números pares es: " + promedioPares(numeros));
            break;
        default:
            alert("Opción no válida.");
            break;
    }
}

ingresoNumeros();
