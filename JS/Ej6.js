class Libro {
  constructor(Titulo, ISBN, Autor, NumPaginas) {
    this.Titulo = Titulo;
    this.ISBN = ISBN;
    this.Autor = Autor;
    this.NumPaginas = NumPaginas;
  }
  mostrarLibro() {
    console.log(
      `El libro ${this.Titulo} con ISBN ${this.ISBN} creado por el autor ${this.Autor} tiene ${this.NumPaginas} paginas`
    );
  }
}

const libro1 = new Libro("Luna de Pluton", "155435", "Dross", 1000);
const libro2 = new Libro("Farmacologia Humana", "654632", "Florez", 3000);
if (libro1.NumPaginas > libro2.NumPaginas) {
  console.log("El libro 1 tiene mas paginas");
} else if (libro2.NumPaginas > libro1.NumPaginas) {
  console.log("El libro 2 tiene mas paginas");
} else {
  console.log("tienen las mismas paginas");
}


