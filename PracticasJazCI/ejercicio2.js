/*
    Write a function that:
•	Takes in an array of numbers.
•	Doubles the value of each number in the array.
•	Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]

 */
console.log("Resultados del Ejercicio 2");

let num = [1,2,4,5];

console.log(num);

let dobleNum = num.map(function(element){
    return element *3;
});

console.log(`El resultado del ejercicio 3 es ${dobleNum}`);