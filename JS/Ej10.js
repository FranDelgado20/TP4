const arrayAviones = [];
class Aeropuerto {
  constructor(nombreAeropuerto, listaDeAviones = []) {
    this.nombreAeropuerto = nombreAeropuerto;
    this.listaDeAviones = listaDeAviones;
  }
  agregarAvion() {
    let n = parseInt(prompt("Ingrese la cantidad de aviones "));
    for (let i = 0; i < n; i++) {
      let agregarAvion = prompt("Ingrese el avion");
      this.listaDeAviones.push(agregarAvion);
      arrayAviones.push(agregarAvion);
    }
    console.log(
      `En el ${this.nombreAeropuerto} se encuentra ${this.listaDeAviones}`
    );
    console.log(arrayAviones);
  }
  buscarAvion() {
    let avion = prompt("Ingrese el avion a buscar");
    for (let i = 0; i < this.listaDeAviones.length; i++) {
      if (this.listaDeAviones[i] === avion) {
        console.log(`El avion ${avion} si existe`);
      }
    }
  }
}
const aeropuerto1 = new Aeropuerto("Aeropuerto el Dorado");
// const aeropuerto2 = new Aeropuerto("Aeropuerto Ezeiza ");
// const aeropuerto3 = new Aeropuerto("Aeroparque");
// const aeropuerto4 = new Aeropuerto("Aeropuerto Benjamin Matienzo");
class Aviones {
  constructor(nombre = "", capacidad = "", destino = "", pasajeros = []) {
    this.nombre = nombre;
    this.capacidad = capacidad;
    this.destino = destino;
    this.pasajeros = pasajeros;
  }
  abordar() {
    let nombreAvion = prompt("Ingrese el nombre del avion");
    this.nombre = nombreAvion;
    let capacidadAvion = parseInt(prompt("Ingrese la capacidad del avion"));
    this.capacidad = capacidadAvion;
    let destinoAvion = prompt("Ingrese el destino del avion");
    this.destino = destinoAvion;
    do {
      let pasajerosAvion = prompt("Ingrese los pasajeros");
      if (this.pasajeros.length >= this.capacidad) {
        console.log("AVION LLENO");
        break;
      } else {
        this.pasajeros.push(pasajerosAvion);
        console.log("SI HAY LUGAR");
      }
    } while (confirm("¿Quiere agregar mas pasajeros?"));

    console.log(avion1);
  }
}
const avion1 = new Aviones();
console.log(avion1);
const avion2 = new Aviones();
console.log(avion2);
const avion3 = new Aviones();
console.log(avion3);


//   buscarAvion(nombre) {
//     const avionExistente = this.listaDeAviones.find(function (itemAvion) {
//       return nombre === itemAvion;
//     });console.log(avionExistente)
//     if (avionExistente) {
//       console.log("el avion si existe");
//       return true;
//     } else {
//       console.log("el avion no existe");
//       return false;
//     }
//   }
