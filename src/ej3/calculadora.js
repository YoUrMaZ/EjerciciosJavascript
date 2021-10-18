var calculadora = calculadora || {};
calculadora = function (){
    var version = '1.0';

    function init(){
    }
    function suma(a,b){
        return parseInt(a) + parseInt(b)
    }
    function printButtons(){
        return '<button onclick="' +
            'document.getElementById(\'resultado\').innerHTML = ' +
            'Calculadora.suma(document.getElementById(\'op1\').value ' +
            ', document.getElementById(\'op2\').value' +
            '">SUMA</button>';

    }
    init()

    return {
        version: function (){
            return version;
        }
            ,init: init
            ,suma: suma
            ,prinButtons:printButtons
    }
}