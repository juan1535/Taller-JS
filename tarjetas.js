export function america(numero) {
    let exp = /^3[4-7]\d{13}$/;
    return exp.test(numero);
}

export function dinners(numero) {
    let exp = /^3(?:0[0-5]|[6-8]\d)\d{11}$/;
    return exp.test(numero);
}

export function discover(numero) {
    let exp = /^6011\d{12}$/;
    return exp.test(numero);
}

export function mastercard(numero) {
    let exp = /^5[1-5]\d{14}$/;
    return exp.test(numero);
}

export function visa(numero) {
    let exp = /^4\d{15}$/;
    return exp.test(numero);
}

while (true) {
    
let numero = prompt = prompt("Ingrese el número de su tarjeta")

    try {
        if(isNaN(numero)) {
            throw new Error("Carácter no permitido");
        }
        if (numero.leght > 16) {
            throw new Error("Longitud no válida");
        }
        if (parseInt(numero) < 0) {
            throw new Error("No se permiten números negativos");
        }
        if (america(numero)) {
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
        break;
    } catch (error) {
            alert(error.message)
    }
}