class Persona {
  constructor(nombre, edad, profesion) {
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
  }
  saludar() {
    console.log(`Hola como te vá ${this.nombre}`);
  }
  despedirse() {
    console.log(`Hasta luego ${this.nombre}`);
  }
}
const persona1 = new Persona("Francisco", "20", "Estudiante");
const persona2 = new Persona("Jaime", "20", "Estudiante");
