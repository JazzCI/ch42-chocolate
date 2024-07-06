/*
    For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
1.	Write a command that prints out all of the people in the list.
2.	Write the command to remove "Dani" from the array.
3.	Write the command to remove "Juan" from the array.
4.	Write the command to move "Luis" to the front of the array.
5.	Write the command to add your name to the end of the array.
6.	Using a loop, iterate through this array and after console.log "Maria", exit from the loop. (usar break)

*/
console.log("Resultados del Ejercicio 5");

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log(people);

// ========= 1 ==========

console.log(`Las personas que estan dentro de la cadena son: ${people.join()}`);

// ========= 2 ==========

people.splice(1, 1);
console.log(`Las personas que estan dentro de la cadena son: ${people}`);

// ========= 3 ==========

people.splice(2,1);
console.log(`Las personas que estan dentro de la cadena son: ${people}`);

// ========= 4 ==========

people[0]="Luis";
people[1]="Maria";
console.log(`Las personas que estan dentro de la cadena son: ${people}`);

// ========= 5 ==========

people.push("Jazz");
console.log(`Las personas que estan dentro de la cadena son: ${people}`);

// ========= 6 ==========

const buPeople = (num) => {
    let aux = 1
    for (let i = 0; aux > num.length; i++) {
        console.log(num[i]);
        break;
    }
    
}
buPeople(people);


