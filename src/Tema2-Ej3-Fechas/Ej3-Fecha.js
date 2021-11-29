

// calendario 1 de septiembre de 2021 al 31 de diciembre de 2021

var fechaIni = new Date('2021-09-01');
var fechaFin = new Date('2021-12-31');

var matrizDias = [];

var eventos = [new Date('2021-10-11'), new Date('2021-10-12'), new Date('2021-11-01'),
    new Date('2021-12-06'), new Date('2021-12-07'), new Date('2021-12-08'),
    new Date('2021-12-23'), new Date('2021-12-24'), new Date('2021-12-25'),
    new Date('2021-12-26'), new Date('2021-12-27'), new Date('2021-12-28'),
    new Date('2021-12-29'), new Date('2021-12-30'), new Date('2021-12-31')];
for (var i = 0; i < eventos.length; i ++) {
    eventos[i].setHours(0,0,0,0);
}

for (var fecha = fechaIni; fecha <= fechaFin; fecha.setDate(fecha.getDate() + 1)) {

    var evento = "";
    var arrayDia = [];
    fecha.setHours(0,0,0,0);

    //if (eventos[0].getTime() === fecha.getTime() || eventos[1].getTime() === fecha.getTime()) {
    if (fecha.getDay() === 0 || fecha.getDay() === 6) {
        evento = "finde";
    }  else if (esFestivo(eventos, fecha)) {
        evento = "festivo";
    }

    arrayDia.push("day", fecha);
    arrayDia.push("event", evento);
    console.log(arrayDia);
    matrizDias.push(arrayDia);

};

function esFestivo (festivos, fecha) {
    return festivos.some(function(f) {
        return f.getTime() === fecha.getTime();
    })
}
