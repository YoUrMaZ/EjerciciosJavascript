var Flor = {
    constructor(){
        this.edad = 0;

    },
    edad: 0,
        fruta: false,
        init: function (){
        this.edad = 0;
        this.fruta = false;
    },
    madurar: function(){
        if (this.edad >= edadMaduracion){
            this.fruta = true;
        }
    },
    print: function (){
        return "Edad" + this.edad + "Fruta: " + this.fruta;
    }

}