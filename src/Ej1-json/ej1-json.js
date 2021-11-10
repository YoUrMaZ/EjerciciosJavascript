
function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
            if (xmlhttp.status === 200) {
            let datos = JSON.parse(this.responseText);
                console.log(datos.body);
                let word = document.querySelector('#Word');
                word.innerHTML = '';
                for (let valor of datos.body){
                    word.innerHTML += '<p>${valor.Word}</p>';
                }

            } else if (xmlhttp.status == 400) {
                alert('There was an error 400');
            } else {
                alert('something else other than 200 was returned');
            }
        }
    }

    xmlhttp.open("GET", "https://palabras-aleatorias-public-api.herokuapp.com/random", true);
    xmlhttp.send();



}

document.addEventListener("DOMContentLoaded", function (event) {
    loadXMLDoc();
});
