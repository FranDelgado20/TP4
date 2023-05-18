class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  emitirSonido() {}
}

class Perro extends Animal {
  constructor(nombre, edad, sonido) {
    super(nombre, edad);
    this.sonido = sonido;
  }

  emitirSonido() {
    console.log(this.sonido);
  }
}
class Gato extends Animal {
  constructor(nombre, edad, sonido) {
    super(nombre, edad);
    this.sonido = sonido;
  }
  emitirSonido() {
    console.log(this.sonido);
  }
}

const perro = new Perro("Thor", "6", "ladrido");
const gato = new Gato("mishi", "6", "maulla");
