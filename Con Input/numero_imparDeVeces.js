const readline = require('readline'); // Importar el módulo readline
const rl = readline.createInterface({input: process.stdin, output: process.stdout}); // Configurar el input y output para la terminal

/*
OBJETIVO: Dada una matriz de números enteros, encuentra el que aparece un número impar de veces.
Siempre habrá un único número entero que aparezca un número impar de veces.

EJEMPLOS:
[7] debería devolver 7, porque aparece 1 vez (que es impar).
[0] debería devolver 0, porque aparece 1 vez (que es impar).
[1,1,2] debería devolver 2, porque aparece 1 vez (lo cual es impar).
[0,1,0,1,0] debería devolver 0, porque ocurre 3 veces (lo cual es impar).
[1,2,2,3,3,3,4,3,3,3,2,2,1] debería devolver 4, porque aparece 1 vez (lo cual es impar).
*/

const findOdd = () => {
    rl.question('Ingrese los números separados por coma: ', (input) => {
        const lista_numeros = input.split(',').map(Number); // Convertir el input en una lista de números
        const resultado = lista_numeros.find(num => lista_numeros.filter(n => n === num).length % 2 !== 0);
        console.log(resultado);
        rl.close();
    });
};
findOdd(); // Invocar a la función findOdd

/*
Voy a explicar la variable "resultado", porque es clave para cumplir con el objetivo del código:

    Paso 1. El filter() se encarga de filtrar los elementos iguales a "num" en "lista_numeros".
    Paso 2. Verifica si la cantidad de ocurrencias del filter es impar.
    
    Ejemplo:
        lista_numeros = [1, 2, 3, 2, 3, 1, 3]
            Paso 1: Para cada `num` en `lista_numeros`, filtra los elementos iguales a `num`:
                - Para `num = 1` → [1, 1] → length = 2 → 2 % 2 === 0 (No cumple)
                - Para `num = 2` → [2, 2] → length = 2 → 2 % 2 === 0 (No cumple)
                - Para `num = 3` → [3, 3, 3] → length = 3 → 3 % 2 !== 0 (Cumple)
            Paso 2: Retorna el primer `num` que cumple la condición (en este caso, 3).
*/