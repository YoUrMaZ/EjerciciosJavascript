var arbol = {
    nombre: " ",
    edad: 0,
    agua: 0,
    vida: 0,
    dia: 0,
    hora: 0,
    flores: [],

    cambioImagen: function () {
        switch (this.vida) {
            case  0:
                this.imagen = "ArbolAdulto.jpg";
                break;
            case 10:
                this.imagen = "arbol.jpg";
                break;
        }
    },
    init: function (nombre) {
        this.nombre = nombre;
        this.vida = 0;
        this.edad = 0;
        this.agua = 100;
        this.flores = [];

        this.print();
    },
    print: function () {


        var representacionArbol = "<h1>" + this.nombre + "</h1>";
        representacionArbol += "<img src=\"arbol.jpg\" width=\"100px\"/>";
        representacionArbol +=
        representacionArbol += "<h1> Edad: " + this.edad + "</h1>";
        representacionArbol += "<h1> Agua: " + this.agua + "</h1>";
        representacionArbol += "<h1> Vida: " + this.vida + "</h1>";
        representacionArbol += "<h1>Dia " + this.dia + " Hora: " + this.hora + "</h1>";

        document.getElementById("arbol").innerHTML = representacionArbol;
    },
    crece: function () {
        this.edad++;
        if (this.agua <= 0) {
            this.vida--;

        } else {
            this.agua -= 10;
        }
        this.print();

    },

    regar: function () {
        this.agua += 20;

    },
    pasarDia: function () {
        this.dia++;
        this.crece();
    },
    pasarHora: function () {
        this.hora++;
        if (this.hora >= 24) {
            this.hora = 0;
            this.pasarDia();
        }
        this.print();
    },
    florecer: function () {
        if (this.flores.length === 0) {
            var numeroFlores = Math.random() * 100;
            for (let i = parseInt(numeroFlores); i >= 0; i--) {
                this.flores[i] = Object.create();
            }
        }

    },

    estaVivo: function () {
        this.vida = 0;

    }
}