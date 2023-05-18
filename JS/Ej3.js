class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
  permietro(p) {
    p = this.alto * 2 + this.ancho * 2;
    console.log(p);
  }
  area(a) {
    a = this.alto * this.ancho;
    console.log(a);
  }
}
const valor1 = new Rectangulo(prompt("Alto"), prompt("Ancho"));
console.log(valor1);
