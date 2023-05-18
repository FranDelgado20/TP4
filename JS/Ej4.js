const productos = [];

class Productos {
constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
}
imprimirDatosDelProd() {
    console.log(`${this.nombre},${this.precio},${this.codigo}`);
}
imprimeDatosdelArray() {
    productos.forEach(function (product) {
console.log(`${product.nombre},${product.precio},${product.codigo}`);
    });
}
}
const objeto1 = new Productos("000", "Mouse", "500");
const objeto2 = new Productos("001", "monitor", "5900");
const objeto3 = new Productos("002", "Teclado", "600");
console.log(objeto1);
console.log(objeto2);
console.log(objeto3);

productos.push(objeto1, objeto2, objeto3);
console.log(productos);