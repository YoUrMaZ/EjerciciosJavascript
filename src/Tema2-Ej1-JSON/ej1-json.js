
function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
            if (xmlhttp.status === 200) {

                var respuesta = JSON.parse(xmlhttp.responseText);

                console.log(respuesta["body"]["Word"])
                console.log(respuesta["body"]["Definition"])

                document.getElementById("Word").innerHTML = respuesta["body"]["Word"];
                document.getElementById("Definition").innerHTML = unescape(respuesta["body"]["Definition"]);
                }

            } else if (xmlhttp.status == 400) {
                alert('There was an error 400');
            } else {
                alert('something else other than 200 was returned');
            }
        }


    xmlhttp.open("GET", "https://palabras-aleatorias-public-api.herokuapp.com/random", true);
    xmlhttp.send();



}

document.addEventListener("DOMContentLoaded", function (event) {
    loadXMLDoc();
});
