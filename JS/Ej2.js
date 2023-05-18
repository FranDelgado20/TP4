let cuenta = {
titular: "alex",
saldo: 0,
ingresar: function (dinero) {
    this.saldo = this.saldo + dinero;
    console.log(this.saldo);
},
extraer: function (dinero) {
    let resta = this.saldo - dinero;
    if (resta < 0) {
    console.log(`No podes extraer porque tenes ${this.saldo}`);
    } else {
    this.saldo = this.saldo - dinero;
    }
},
informar: function () {
    console.log(`El saldo de tu cuenta es ${this.saldo}`);
},

informar: function () {
    console.log(`El saldo de tu cuenta es ${this.saldo}`);
},
};
cuenta.ingresar(parseInt(prompt("Ingrese dinero")));
cuenta.extraer(parseInt(prompt("Extraiga dinero")));
cuenta.informar();

