/*
    Create a program that loops over 
    the 2 arrays; if there are any 
    common courses print them out to the console.
 

    let student1Courses = ['Math', 'English', 'Programming'];
    let student2Courses = ['Geography', 'Spanish', 'Programming'];

*/
//Metodo filter() e includes()
console.log("Resultados del Ejercicio 4");

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

const cursos = student1Courses.filter((curso) =>
    student2Courses.includes(curso)
);

console.log(`El resultado de los arreglos propuestos es: ${cursos}`);