const readline = require('readline'); // Importar el módulo readline
const rl = readline.createInterface({input: process.stdin, output: process.stdout}); // Configurar el input y output para la terminal

/*
OBJETIVO: Crear un menú donde presenten las opciones de cálculos con arrays y que el usuario pueda elegir una.
TODO: Teniendo en cuenta que próximamente se añadirán funciones para manejo de errores y validación de inputs.
*/
const menu = () => {
    console.log(`====================== CÁLCULOS CON ARRAYS ======================

        Escribe el número de la opción que deseas:
        1. Número más grande
        2. Número más pequeño
        3. Suma de los elementos
        4. Multiplicación de los elementos
        5. Promedio de los elementos

====================== PORCENTAJES ======================

        6. Porcentaje de una cantidad
        7. Añadir un porcentaje
        8. Restar un porcentaje
        9. Cambio porcentual
        10. Convertir a decimal
        11. Fracciones a porcentajes
        12. Total de un número
        13. Número total si se sabe un porcentaje

        Plataforma para porcentajes: https://porcentaje.org/

        14. Salir`);
    rl.question("", (numero) => {
        switch (numero) {
            case '1':
                Numero_Grande();
                break;
            case '2':
                Numero_Pequeño();
                break;
            case '3':
                sumOfElements();
                break;
            case '4':
                multiplicationOfElements();
                break;
            case '5':
                findAverage();
                break;
            case '6':
                de_una_Cantidad();
                break;
            case '7':
                add_porcentaje();
                break;
            case '8':
                restar_porcentaje();
                break;
            case '9':
                cambio_porcentual();
                break;            
            case '10':
                convertir_a_decimal();
                break;
            case '11':
                fracciones_a_porcentajes();
                break;
            case '12':
                total_de_un_numero();
                break;
            case '13':
                numero_total_si_se_sabe_un_porcentaje();
                break;
            case '14':
                rl.close();
                console.log("Saliendo del programa...");
                break;
            default:
                console.log("Opción no válida. Inténtalo de nuevo.\n");
                menu();
                break;
        };
    });
};
console.clear();
menu();

const Numero_Grande = () => {
    rl.question("Escribe tu array de números separados por comas: ", (input) => {
        const nums = input.split(',').map(Number);
        const max = Math.max(...nums);
        console.log(`El número más grande es: ${max}`);
        rl.close();
    });
};

const Numero_Pequeño = () => {
    rl.question("Escribe tu array de números separados por comas: ", (input) => {
        const nums = input.split(',').map(Number);
        const min = Math.min(...nums);
        console.log(`El número más pequeño es: ${min}`);
        rl.close();
    });
};

const sumOfElements = () => {
    rl.question("Escribe tu array de números separados por comas: ", (input) => {
        const nums = input.split(',').map(Number);
        const sum = nums.reduce((acc, el) => acc + el, 0);
        console.log(`La suma de los elementos es: ${sum}`);
        rl.close();
    });
};

const multiplicationOfElements = () => {
    rl.question("Escribe tu array de números separados por comas: ", (input) => {
        const nums = input.split(',').map(Number);
        const multiplication = nums.reduce((acc, el) => acc * el, 1);
        console.log(`La multiplicación de los elementos es: ${multiplication}`);
        rl.close();
    });
};

const findAverage = () => {
    rl.question("Escribe tu array de números separados por comas: ", (input) => {
        const nums = input.split(',').map(Number);
        const average = nums.reduce((acc, el) => acc + el, 0) / nums.length;
        console.log(`El promedio es: ${average}`);
        rl.close();
    });
};

/*
Porcentajes:
    - De una cantidad: (cantidad * porcentaje) / 100
    - Añadir un porcentaje: cantidad + (cantidad * porcentaje) / 100
    - Restar un porcentaje: cantidad - (cantidad * porcentaje) / 100
    - Cambio porcentual: (nuevo - viejo) / viejo * 100
    - Convertir a decimal: porcentaje / 100
    - Fracciones a porcentajes: (numerador / denominador) * 100
    - Total de un número: (porcentaje * total) / 100
    - Número total si se sabe un porcentaje: (cantidad * 100) / porcentaje
*/

const de_una_Cantidad = () => {
    rl.question("Escribe la cantidad: ", (cantidad) => {
        rl.question("Escribe el porcentaje de la cantidad: ", (porcentaje) => {
            const resultado = (cantidad * porcentaje) / 100;
            console.log(`El ${porcentaje}% de ${cantidad} es: ${resultado}`);
            rl.close();
        });
    });
};

const add_porcentaje = () => {
    rl.question("Escribe la cantidad: ", (cantidad) => {
        rl.question("Escribe el porcentaje a añadir: ", (porcentaje) => {
            const resultado = cantidad + (cantidad * porcentaje) / 100;
            console.log(`Si la cantidad inicial es ${cantidad} y quiere añadir el ${porcentaje}%, la cantidad final es: ${resultado}`);
            rl.close();
        });
    });
};

const restar_porcentaje = () => {
    rl.question("Escribe la cantidad: ", (cantidad) => {
        rl.question("Escribe el porcentaje a restar: ", (porcentaje) => {
            const resultado = cantidad - (cantidad * porcentaje) / 100;
            console.log(`Si la cantidad inicial es ${cantidad} y quiere restar el ${porcentaje}%, la cantidad final es: ${resultado}`);
            rl.close();
        });
    });
};

const cambio_porcentual = () => {
    rl.question("Escribe el valor viejo: ", (viejo) => {
        rl.question("Escribe el valor nuevo: ", (nuevo) => {
            const resultado = ((nuevo - viejo) / viejo) * 100;
            console.log(`El cambio porcental entre ${viejo} y ${nuevo}: ${resultado}%`);
            rl.close();
        });
    });
};

const convertir_a_decimal = () => {
    rl.question("Escribe el porcentaje: ", porcentaje => {
        const resultado = porcentaje / 100;
        console.log(`El porcentaje ${porcentaje}% en decimal es: ${resultado}`);
        rl.close();
    });
};

const fracciones_a_porcentajes = () => {
    rl.question("Escribe el numerador: ", (numerador) => {
        rl.question("Escribe el denominador: ", (denominador) => {
            const resultado = (numerador / denominador) * 100;
            console.log(`La fracción ${numerador}/${denominador} en porcentaje es: ${resultado}%`);
            rl.close();
        });
    });
};

const total_de_un_numero = () => {
    rl.question("Escribe el porcentaje: ", (porcentaje) => {
        rl.question("Escribe el total: ", (total) => {
            const resultado = (porcentaje * total) / 100;
            console.log(`Si ${total} es el total, ${porcentaje} es: ${resultado}%`);
            rl.close();
        });
    });
};

const numero_total_si_se_sabe_un_porcentaje = () => {
    rl.question("Escribe el porcentaje conocido: ", (porcentaje) => {
        rl.question("Escribe el numero conocido: ", (numero) => {
            const resultado = (numero * 100) / porcentaje;
            console.log(`Si el ${porcentaje}% es ${numero}, entonces el número total es: ${resultado}`);
            rl.close();
        });
    });
};