const readline = require('readline');
rl = readline.createInterface({input: process.stdin, output: process.stdout});

/*
OBJETIVO: Convertir las palabras delimitadas por guiones/guiones bajos en mayúsculas y minúsculas.
La primera palabra dentro de la salida debe estar en mayúsculas sólo si la palabra original estaba en mayúsculas
(conocido como Upper Camel Case, también a menudo referido como Pascal case).
Las palabras siguientes deben ir siempre en mayúsculas.
*/

const toCamelCase = () => {
    rl.question("Escribe una frase: ", str => {
        console.log(str.replace(/[_-]\w/gi, ch => ch[1].toUpperCase()));
        rl.close();
    });
};
toCamelCase();