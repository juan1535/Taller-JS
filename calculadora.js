export class Calculadora {
   suma(a, b) {
       this.validarNumeros(a, b);
       return a + b;
   }
   
   resta(a, b) {
       this.validarNumeros(a, b);
       return a - b;
   }
   
   multiplicacion(a, b) {
       this.validarNumeros(a, b);
       return a * b;
   }
   
   division(a, b) {
       this.validarNumeros(a, b);
       if (b === 0) {
           throw new Error("Error: No se puede dividir por cero.");
       }
       return a / b;
   }
   
   validarNumeros(a, b) {
       if (isNaN(a) || isNaN(b)) {
           throw new Error("Error: Ambos números deben ser válidos.");
       }
   }
}

export function matematicas() {
   const calculadora = new Calculadora();
   
   let continuar = true;
   
   while (continuar) {
       const opcion = prompt(
           "¿Qué operación deseas realizar?\n" +
           "1.- Sumar\n" +
           "2.- Restar\n" +
           "3.- Multiplicación\n" +
           "4.- División\n" +
           "5.- Salir"
       );
       
       if (opcion === '5' || opcion === null) {
           console.log("¡Adiós!");
           continuar = false;
           break;
       }
       
       if (!'1234'.includes(opcion)) {
           console.error("Opción no válida. Por favor, elige una opción del 1 al 4, o 5 para salir.");
           continue;
       }
       
       const a = parseFloat(prompt("Ingrese el primer número:"));
       const b = parseFloat(prompt("Ingrese el segundo número:"));
       
       try {
           let resultado;
           switch (opcion) {
               case '1':
                   resultado = calculadora.suma(a, b);
                   break;
               case '2':
                   resultado = calculadora.resta(a, b);
                   break;
               case '3':
                   resultado = calculadora.multiplicacion(a, b);
                   break;
               case '4':
                   resultado = calculadora.division(a, b);
                   break;
           }
           alert(`El resultado es: ${resultado}`);
       } catch (error) {
           console.error(error.message);
       }
   }
}
