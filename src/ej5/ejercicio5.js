var nombre = prompt("como te llamas?");
var numero = prompt("Cuantos nombres deseas introducir")


if (nombre === undefined) {
    alert("Ha pulsado cancelar");
} else if (nombre === "") {
    alert("Ha pulsado aceptar con el campo vacio");
} else {
    for (var i = 0; i < numero.length; i++) {
        document.write(numero[i]);
    }
}
document.write(nombre1);

