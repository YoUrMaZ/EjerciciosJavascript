var Coche = {

    matricula : "",
    gasolina : 0,
    dinero : 0,
    consumo : 0,

    init: function(matricula){
        this.matricula = matricula,
            this.gasolina = 50;
        this.dinero = 100
        this.consumo = 7;

        this.print();
    },

    print: function(){

        infoCoche = '<h1>Matricula</h1>'+ this.matricula+'<br/>';
        infoCoche += '<h2>Gasolina</h2>'+ this.gasolina+'<br/>';
        document.getElementById("coche").innerHTML = infoCoche;
    },



    viajar: function(distancia){
        consumido = (distancia*this.consumo)/100;
        this.gasolina -= consumido;
        this.print();
    },
}