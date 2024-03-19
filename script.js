var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");

function criptografar(){
    var texto = textInput.value;

    var resultCripto = texto.replace(/e/g, "wbbk").replace(/i/g, "lbb").replace(/a/g, "db")
    .replace(/o/g, "ric").replace(/u/g, "mor");

    document.getElementById("output").innerHTML = '<textarea readonly id="input-texto">' + resultCripto + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}


function descriptografar(){
    var texto = textInput.value;

    var resultDescripto = texto.replace(/wbbbk/g, "e").replace(/lbb/g, "i").replace(/db/g, "a")
    .replace(/ric/g, "o").replace(/mor/g, "u");

    document.getElementById("output").innerHTML = '<textarea readonly id="input-texto">' + resultDescripto + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}


function copiar() {
    var resultadoCopiar = document.querySelector("#output textarea");

    try {
        navigator.clipboard.writeText(resultadoCopiar.value);
        alert("Texto copiado: " + resultadoCopiar.value);
    } catch (err) {
        console.error('Erro ao copiar: ', err);
    }
}