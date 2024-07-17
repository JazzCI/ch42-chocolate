// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./images/taco-negro.jpg"}, /* se modificaron las rutas de las imagenes */
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./images/taco-azul.jpg"},    /* para una mejor estructura en las carpetas  */
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./images/bota-negra.jpg"},     /* y un mejor orden de codigo */
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./images/bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./images/zapato-rojo.jpg"}
]

const li = document.querySelector("#lista-de-productos") /*  Se modifico el id y se cambia el getelementById por QuerySelector */
const infiltro = document.querySelector('input'); /* Se modificó el input, quitandole un punto demas, tambien se modifico el nombre del const */

for (let i = 0; i < productos.length; i++) {
  let d = document.createElement("div") /* Se cambión el tipo de variable*/
  d.classList.add("producto")

  let ti = document.createElement("p")
  ti.classList.add("titulo")
  ti.textContent = productos[i].nombre
  
  let imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti)
  d.appendChild(imagen)

  li.appendChild(d)
}
/* Se crea una función que se llama displayProductos para que se pueda crear la lista de productos */

function displayProductos(productos) {
  productos.forEach(producto => {
    let d = document.createElement("div");
    d.classList.add("producto");

    let ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = producto.nombre;

    let imagen = document.createElement("img");
    imagen.setAttribute('src', producto.img);

    d.appendChild(ti);
    d.appendChild(imagen);

    li.appendChild(d);
  });
}

displayProductos(productos)

const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = infiltro.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    let d = document.createElement("div")
    d.classList.add("producto")
  
    let ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    let imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  