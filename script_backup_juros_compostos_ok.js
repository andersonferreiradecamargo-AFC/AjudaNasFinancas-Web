const capital = document.getElementById("capital");
const taxa = document.getElementById("taxa");
const tempo = document.getElementById("tempo");
const juros = document.getElementById("juros");
const montante = document.getElementById("montante");

const calcular = document.getElementById("calcular");
const limpar = document.getElementById("limpar");

const simples = document.getElementById("simples");
const compostos = document.getElementById("compostos");


// Verifica se campo está vazio
function vazio(campo) {
    return campo.value === "";
}


// Limpar

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

        if (vazio(juros) && capital.value !== "" && taxa.value !== "" && tempo.value !== "") {

            j = c * i * t;
            juros.value = j.toFixed(2);

        }


        // Calcular taxa

        else if (vazio(taxa) && capital.value !== "" && juros.value !== "" && tempo.value !== "") {

            j = Number(juros.value);
            c = Number(capital.value);
            t = Number(tempo.value);

            i = j / (c * t);
            taxa.value = (i * 100).toFixed(2);

        }


        // Calcular tempo

        else if (vazio(tempo) && capital.value !== "" && juros.value !== "" && taxa.value !== "") {

            c = Number(capital.value);
            j = Number(juros.value);
            i = Number(taxa.value) / 100;

            t = j / (c * i);
            tempo.value = t.toFixed(2);

        }


        // Calcular capital

        else if (vazio(capital) && juros.value !== "" && taxa.value !== "" && tempo.value !== "") {

            j = Number(juros.value);
            i = Number(taxa.value) / 100;
            t = Number(tempo.value);

            c = j / (i * t);
            capital.value = c.toFixed(2);

        }


        // Calcular montante

        else if (vazio(montante) && capital.value !== "" && juros.value !== "") {

            c = Number(capital.value);
            j = Number(juros.value);

            m = c + j;
            montante.value = m.toFixed(2);

        }

    }
        
    // ==========================
    // JUROS COMPOSTOS
    // ==========================
// ==========================
// JUROS COMPOSTOS
// ==========================

else {


    // ==================================
    // 1 - CALCULAR MONTANTE PRIMEIRO
    // ==================================

    if (vazio(montante)) {


        // Capital + taxa + tempo

        if (capital.value !== "" && taxa.value !== "" && tempo.value !== "") {

            c = Number(capital.value);
            i = Number(taxa.value) / 100;
            t = Number(tempo.value);

            m = c * Math.pow(1 + i, t);

            montante.value = m.toFixed(2);

        }


        // Capital + juros

        else if (capital.value !== "" && juros.value !== "") {

            c = Number(capital.value);
            j = Number(juros.value);

            m = c + j;

            montante.value = m.toFixed(2);

        }

    }



    // Atualiza valores

    c = Number(capital.value);
    i = Number(taxa.value) / 100;
    t = Number(tempo.value);
    j = Number(juros.value);
    m = Number(montante.value);



    // ==================================
    // 2 - CALCULAR CAPITAL
    // ==================================


    // Montante + taxa + tempo

    if (vazio(capital) && montante.value !== "" && taxa.value !== "" && tempo.value !== "") {

        m = Number(montante.value);
        i = Number(taxa.value) / 100;
        t = Number(tempo.value);

        c = m / Math.pow(1 + i, t);

        capital.value = c.toFixed(2);

    }



    // Juros + taxa + tempo

    else if (vazio(capital) && juros.value !== "" && taxa.value !== "" && tempo.value !== "") {

        j = Number(juros.value);
        i = Number(taxa.value) / 100;
        t = Number(tempo.value);

        c = j / (Math.pow(1 + i, t) - 1);

        capital.value = c.toFixed(2);

    }



    // ==================================
    // 3 - CALCULAR TAXA
    // ==================================

    if (vazio(taxa) && capital.value !== "" && montante.value !== "" && tempo.value !== "") {

        c = Number(capital.value);
        m = Number(montante.value);
        t = Number(tempo.value);

        i = Math.pow(m / c, 1 / t) - 1;

        taxa.value = (i * 100).toFixed(2);

    }



    // ==================================
    // 4 - CALCULAR TEMPO
    // ==================================

    if (vazio(tempo) && capital.value !== "" && montante.value !== "" && taxa.value !== "") {

        c = Number(capital.value);
        m = Number(montante.value);
        i = Number(taxa.value) / 100;

        t = Math.log(m / c) / Math.log(1 + i);

        tempo.value = t.toFixed(2);

    }



    // ==================================
    // 5 - CALCULAR JUROS POR ÚLTIMO
    // ==================================

    if (vazio(juros) && capital.value !== "" && montante.value !== "") {

        c = Number(capital.value);
        m = Number(montante.value);

        j = m - c;

        juros.value = j.toFixed(2);

    }


}
    

    });