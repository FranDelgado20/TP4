const agenda = [];
let limite = 10;
class Agenda {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }

  aniadirContacto() {
    agenda.push(this);
    limite--;
  }
  existeContacto() {
    if (agenda.includes(this)) {
      console.log(`El contacto ${this.nombre} si existe`);
    } else {
      console.log(`El contacto ${this.nombre} no existe`);
    }
  }
  listarContactos() {
    console.log(agenda);
  }
  buscarContacto(nombre) {
    agenda.filter(function (persona) {
      if (persona.nombre.toLowerCase().includes(nombre.toLowerCase())) {
        console.log(persona.telefono);
      }
    });
  }
  eliminarContacto(nombre) {
    agenda.forEach(function (persona, i) {
      if (persona.nombre.toLowerCase() === nombre.toLowerCase()) {
        agenda.splice(i, 1);
        limite++;
        console.log("Contacto eliminado");
      } else {
        console.log("No se encontro el contacto");
      }
    });
  }
  agendaLlena() {
    if (limite === 0) {
      console.log("Agenda llena");
    } else {
      console.log("La agenda no esta llena");
    }
  }
  huecosLibres() {
    console.log(`Quedan ${limite} espacios en la agenda`);
  }
}

const contacto1 = new Agenda("Jaime", "11111111");
const contacto2 = new Agenda("Franci", "222222222");
const contacto3 = new Agenda("Bude", "44444444");
const contacto4 = new Agenda("Bacha", "33333333");
