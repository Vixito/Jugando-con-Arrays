/* Objetivo: Crear una función que reciba un array de números y devuelva el promedio de los elementos.
Promedio: Es la suma de todos los elementos dividido por la cantidad de elementos.
*/

const findAverage = nums => {
    return nums.reduce((acc, el) => acc + el, 0) / nums.length;
}
console.log(findAverage([1, 2, 3, 4, 5])); // Resultado: 3

/*
Porcentajes:
    - De una cantidad: (cantidad * porcentaje) / 100
    - Añadir un porcentaje: cantidad + (cantidad * porcentaje) / 100
    - Restar un porcentaje: cantidad - (cantidad * porcentaje) / 100
    - Cambio porcentual: (nuevo - viejo) / viejo * 100
    - Convertir a decimal: porcentaje / 100
    - Fracciones a porcentajes: (numerador / denominador) * 100
    - Total de un número: (porcentaje * total) / 100
    - Número total si se sabe un porcentaje: (porcentaje * total) / cantidad
*/

const de_una_Cantidad = (cantidad, porcentaje) => (cantidad * porcentaje) / 100;
const add_porcentaje = (cantidad, porcentaje) => cantidad + (cantidad * porcentaje) / 100;
const restar_porcentaje = (cantidad, porcentaje) => cantidad - (cantidad * porcentaje) / 100;
const cambio_porcentual = (nuevo, viejo) => (nuevo - viejo) / viejo * 100;
const convertir_a_decimal = porcentaje => porcentaje / 100;
const fracciones_a_porcentajes = (numerador, denominador) => (numerador / denominador) * 100;
const total_de_un_numero = (porcentaje, total) => (porcentaje * total) / 100;
const numero_total_si_se_sabe_un_porcentaje = (porcentaje, total, cantidad) => (porcentaje * total) / cantidad;