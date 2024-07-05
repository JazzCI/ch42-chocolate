/*
    Realizar una función que realice el algoritmo de burbuja.
    Entrada [3, 6, 12, 5, 100, 1 ]
    Salida [1, 3, 5, 6, 12, 100]

*/

let entr = [3, 6, 12, 5, 100, 1];

const burEntr= ( lista ) => {
    let n, i, k, aux;
    n = lista.length;
    for (i = 1; i < n; i++) {
        for (j = 0; j < (n - i); j++) {
            if (lista[j] > lista[j + 1]) {
                aux = lista[j];
                lista[j] = lista[j + 1];
                lista[j + 1] = aux;
            }
        }
    }
}
    
console.log(burEntr(entr)); 
