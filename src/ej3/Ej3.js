function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}
function rellenaArray(max, intentos){
    var results = [];
    for (var i = 0; i < intentos; i++) {
        results.push(getRandomInt(0,max))
    }
    return results;
}
var numeroIntentos = 50;
var numeroMaximo = 32;

resultados = rellenaArray(numeroMaximo, numeroIntentos);
console.log(resultados);

var resultados = [1, 5, 3, 3, 3]
var numeroocurrencias = [];
for (var i = 0; i < resultados.length; i++) {
    var indice  = resultados[i];
    if (numeroocurrencias[indice] = undefined){
        numeroocurrencias[indice] = 1
    } else {
        numeroocurrencias[indice] =
            numeroocurrencias[indice] = 1
    }
}
console.log(resultados);
console.log(numeroocurrencias);