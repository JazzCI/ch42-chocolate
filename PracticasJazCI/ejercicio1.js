/*
Copy the code below into your workspace:
let arr = ["This", "is", "a", "sentence."];
function printOutString() {
  // your code here
}
printOutString();
Complete the function to print out the string: This is a sentence.
*/

console.log("Resultados del Ejercicio 1");

let arr = ["This", "is", "a", "sentence."];
function printOutString(arr){
    return arr.join(" ");
}

console.log(` El resultado del ejercicio 1 es ${printOutString(arr)} `  );
