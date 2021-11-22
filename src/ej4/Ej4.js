function recogerNumero(){
    var introducido = document.getElementById("texto").value;
    var arrays = introducido.split(";")

    sumar(arrays);
    mayor(arrays);
    menor(arrays);
    media(arrays);
}
function sumar(arrays){
    var contador = 0;
    for (var i = 0; i < arrays.length; i++) {
        contador = contador + parseInt(arrays[i]);
    }
    document.getElementById("resultadoSuma").innerHTML = contador;
}


function mayor(arrays){
    var max = 0;
    for (var i = 0; i < arrays.length; i++) {

        if (max < arrays[i]){
            max = parseInt(arrays[i])
        }
        document.getElementById("resultadoMayor").innerText = max;
    }
}
function menor(arrays){
    var min;

    for (let i = 0; i < arrays.length; i++) {

        min = arrays[i];
        if (min > arrays[i]){
            min = parseInt(arrays[i])
        }
        document.getElementById("resultadoMenor").innerText = min;
    }
}
function media(arrays){
    var contadorMedia = 0
    for (var i = 0; i < arrays.length; i++) {
        contadorMedia = contadorMedia + parseInt(arrays[i]);
    }
    var totalMedia = contadorMedia / arrays.length;

    document.getElementById("resultadoMedia").innerText = totalMedia;
}
function cambiar (){
    document.getElementById("texto").value = " ";
    document.getElementById("resultadoSuma").innerText = " ";
    document.getElementById("resultadoMayor").innerText = " ";
    document.getElementById("resultadoMenor").innerText = " ";
    document.getElementById("resultadoMedia").innerText = " ";
}
