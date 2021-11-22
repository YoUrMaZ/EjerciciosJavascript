var dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

function printable(array, id) {
    let hola = ""
    for (var i = 0; i < array.length; i++) {
        hola += "<tr><td>" + array[i] + "</td></tr><br>";
    }
    document.getElementById(id).innerHTML = hola;
}