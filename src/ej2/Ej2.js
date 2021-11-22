function Calcularfactorial (numero) {
    var total = 1;
    for (i = 1; i <= numero; i++) {
        total = total * i;
    }
    document.getElementById("parrafo").innerHTML = total;
    document.getElementById("name").value = " ";
}


