/*
    Write a program to compute the sum 
    and product (multiplication) of an array of numbers. 
    Print out the sum and the product.
    Example: Given an array [1, 2, 3, 4] 
    The sum is 10. The product is 24.
*/

console.log("Resultados del Ejercicio 3");

let cad = [1, 2, 3, 4];
console.log(cad);

const sumaCad = cad.reduce((total, cad) => total + cad, 0);
const prodCad = cad.reduce((total, cad) => total * cad, 1);

console.log(`La suma de la cadena es: ${sumaCad} y el Producto es: ${prodCad}`);