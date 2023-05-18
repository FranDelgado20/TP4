class Persona {
  constructor(nombre, edad, DNI, sexo, peso, altura, nacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.DNI = "";
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.nacimiento = nacimiento;
  }
  mostrarGeneracion() {
    switch (true) {
      case this.nacimiento >= 1994 && this.nacimiento <= 2010:
        console.log("Gen Z");
        break;
      case this.nacimiento >= 1981 && this.nacimiento <= 1993:
        console.log("Gen Y");
        break;
      case this.nacimiento >= 1969 && this.nacimiento <= 1980:
        console.log("Gen X");
        break;
      case this.nacimiento >= 1949 && this.nacimiento <= 1968:
        console.log("Gen Baby Boom");
        break;
      case this.nacimiento >= 1930 && this.nacimiento <= 1948:
        console.log("Gen Z");
        break;
    }
  }
  esMayorDeEdad() {
    switch (true) {
      case this.edad >= 18:
        console.log("Eres mayor de edad");
        break;
      case this.edad < 18:
        console.log("Eres menor de edad");
        break;
    }
  }
  mostrarDatos() {
    console.log(
      this.nombre,
      this.edad,
      this.DNI,
      this.sexo,
      this.peso,
      this.altura,
      this.nacimiento
    );
  }
  generarDNI() {
    this.DNI = Math.floor(Math.random() * Math.pow(10, 8))
      .toString()
      .padStart(8, "0");
    console.log(this.DNI);
  }
}
const persona1 = new Persona(
  "Francisco",
  "20",
  "",
  "M",
  "80",
  "1,70",
  "2003"
);
console.log(persona1);
