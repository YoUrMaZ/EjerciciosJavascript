function mayormenor (){
    var uno = document.getElementById("op1").value;
    var dos = document.getElementById("op2").value;

    if (uno > dos){
        document.getElementById("resultado").innerHTML = uno;
    } else {
        document.getElementById("resultado").innerHTML = dos;
    }
}