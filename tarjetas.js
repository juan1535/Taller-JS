export function america(numero) {  
    let exp = /^3[4-7]\d{13}$/;     //Con esta expresión permite ingresar el 3 y luego 4 o 7 y 13 dígitos más
    return exp.test(numero);
}

export function dinners(numero) {
    let exp = /^3(?:0[0-5]|[6-8]\d)\d{11}$/; //Con esta expresión permite ingresar el 3 y luego 0, después puede ser el 0 o el 5, o iniciar con el 6 u 8. Luego se deben agregar 11 dígitos
    return exp.test(numero);
}

export function discover(numero) {
    let exp = /^6011\d{12}$/; //Inicia con 6011 y luego se agregan 12 dígitos
    return exp.test(numero);
}

export function mastercard(numero) {
    let exp = /^5[1-5]\d{14}$/; // Inicia en 5 y puede ser 1 o 5, luego se agregar 14 dígitos
    return exp.test(numero);
}

export function visa(numero) {
    let exp = /^4\d{15}$/; // Inicia en 4 y luego se pueden agregar 15 dígitos
    return exp.test(numero);
}

while (true) { 
    
let numero = prompt = prompt("Ingrese el número de su tarjeta")

    try { // Utilizamos el try catch para el manejo de errores
        if(isNaN(numero)) { //verifica que sea un número
            throw new Error("Carácter no permitido"); // Nuevo mensaje de error 
        }
        if (numero.leght > 16) { // Cuenta las posiciones de "numero"
            throw new Error("Longitud no válida"); // Nuevo mensaje de error 
        }
        if (parseInt(numero) < 0) {
            throw new Error("No se permiten números negativos"); // Nuevo mensaje de error 
        }
        if (america(numero)) { // Se confirma cuál es la tarjeta
            alert(`El número que ingresó es de una tarjeta American`);
            break;
        } else if (dinners(numero)) {
            alert(`El número que ingresó es de una tarjeta Dinners`);
            break;
        } else if (discover(numero)) {
            alert(`El número que ingresó es de una tarjeta Discover`);
            break;
        } else if (mastercard(numero)) {
            alert(`El número que ingresó es de una tarjeta MasterCard`);
            break;
        } else if (visa(numero)) {
            alert(`El número que ingresó es de una tarjeta Visa`);
            break;
        }
        break; // Sale del ciclo
    } catch (error) {
            alert(error.message)
    }
}