const capital = document.getElementById("capital");
const taxa = document.getElementById("taxa");
const tempo = document.getElementById("tempo");
const juros = document.getElementById("juros");
const montante = document.getElementById("montante");

const calcular = document.getElementById("calcular");
const limpar = document.getElementById("limpar");

const simples = document.getElementById("simples");
const compostos = document.getElementById("compostos");


// Verifica se um campo está vazio
function vazio(campo) {
    return campo.value === "";
}


// Verificações para juros simples

function temCapitalJurosTempo() {
    return capital.value !== "" &&
           juros.value !== "" &&
           tempo.value !== "";
}


function temCapitalTaxaTempo() {
    return capital.value !== "" &&
           taxa.value !== "" &&
           tempo.value !== "";
}


function temCapitalJurosTaxa() {
    return capital.value !== "" &&
           juros.value !== "" &&
           taxa.value !== "";
}


function temJurosTaxaTempo() {
    return juros.value !== "" &&
           taxa.value !== "" &&
           tempo.value !== "";
}



// Limpar dados

limpar.addEventListener("click", function () {

    capital.value = "";
    taxa.value = "";
    tempo.value = "";
    juros.value = "";
    montante.value = "";

});



// Calcular

calcular.addEventListener("click", function () {


    let c = Number(capital.value);
    let i = Number(taxa.value) / 100;
    let t = Number(tempo.value);
    let j = Number(juros.value);
    let m = Number(montante.value);



    // ==========================
    // JUROS SIMPLES
    // ==========================

    if (simples.checked) {


        // Calcular juros
        if (vazio(juros) && temCapitalTaxaTempo()) {

            j = c * i * t;
            juros.value = j.toFixed(2);

        }


       


        // Calcular taxa
        else if (vazio(taxa) && temCapitalJurosTempo()) {

            i = j / (c * t);
            taxa.value = (i * 100).toFixed(2);

        }


        // Calcular tempo
        else if (vazio(tempo) && temCapitalJurosTaxa()) {

            t = j / (c * i);
            tempo.value = t.toFixed(2);

        }


        // Calcular capital
        else if (vazio(capital) && temJurosTaxaTempo()) {

            c = j / (i * t);
            capital.value = c.toFixed(2);

        }

        // Calcular montante
        else if (vazio(montante) && capital.value !== "" && juros.value !== "") {

            m = c + j;
            montante.value = m.toFixed(2);

        }


    }



    // ==========================
    // JUROS COMPOSTOS
    // ==========================

    else {


        // Calcular montante
        if (vazio(montante) && capital.value !== "" && taxa.value !== "" && tempo.value !== "") {

            m = c * Math.pow(1 + i, t);
            montante.value = m.toFixed(2);

        }


        // Calcular juros
        else if (vazio(juros) && capital.value !== "" && montante.value !== "") {

            j = m - c;
            juros.value = j.toFixed(2);

        }


    }


});