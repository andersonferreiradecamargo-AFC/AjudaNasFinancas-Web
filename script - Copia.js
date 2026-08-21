const capital = document.getElementById("capital");
const taxa = document.getElementById("taxa");
const tempo = document.getElementById("tempo");
const juros = document.getElementById("juros");
const montante = document.getElementById("montante");

const calcular = document.getElementById("calcular");
const limpar = document.getElementById("limpar");

const simples = document.getElementById("simples");
const compostos = document.getElementById("compostos");


// =====================================================
// FUNÇÃO PARA MOSTRAR O RESULTADO
// O cálculo interno mantém toda a precisão.
// O arredondamento acontece somente na apresentação.
// =====================================================

function mostrar(valor) {
    return Number(valor.toFixed(2));
}


// =====================================================
// BOTÃO LIMPAR
// =====================================================

limpar.addEventListener("click", function () {

    capital.value = "";
    taxa.value = "";
    tempo.value = "";
    juros.value = "";
    montante.value = "";

});


// =====================================================
// BOTÃO CALCULAR
// =====================================================

calcular.addEventListener("click", function () {

    let c = capital.value === "" ? null : Number(capital.value);
    let i = taxa.value === "" ? null : Number(taxa.value) / 100;
    let t = tempo.value === "" ? null : Number(tempo.value);
    let j = juros.value === "" ? null : Number(juros.value);
    let m = montante.value === "" ? null : Number(montante.value);


    // =================================================
    // JUROS SIMPLES
    // =================================================

    if (simples.checked) {


        // ---------------------------------------------
        // DESCOBRIR JUROS
        // J = C × i × t
        // ---------------------------------------------

        if (
            j === null &&
            c !== null &&
            i !== null &&
            t !== null
        ) {

            j = c * i * t;

            juros.value = mostrar(j);

        }


        // ---------------------------------------------
        // DESCOBRIR MONTANTE
        // M = C + J
        // ---------------------------------------------

        else if (
            m === null &&
            c !== null &&
            j !== null
        ) {

            m = c + j;

            montante.value = mostrar(m);

        }


        // ---------------------------------------------
        // DESCOBRIR TAXA
        // i = J / (C × t)
        // ---------------------------------------------

        else if (
            i === null &&
            c !== null &&
            j !== null &&
            t !== null
        ) {

            i = j / (c * t);

            taxa.value = mostrar(i * 100);

        }


        // ---------------------------------------------
        // DESCOBRIR TEMPO
        // t = J / (C × i)
        // ---------------------------------------------

        else if (
            t === null &&
            c !== null &&
            j !== null &&
            i !== null
        ) {

            t = j / (c * i);

            tempo.value = mostrar(t);

        }


        // ---------------------------------------------
        // DESCOBRIR CAPITAL
        // C = J / (i × t)
        // ---------------------------------------------

        else if (
            c === null &&
            j !== null &&
            i !== null &&
            t !== null
        ) {

            c = j / (i * t);

            capital.value = mostrar(c);

        }


        // ---------------------------------------------
        // DESCOBRIR CAPITAL A PARTIR DO MONTANTE
        // C = M - J
        // ---------------------------------------------

        else if (
            c === null &&
            m !== null &&
            j !== null
        ) {

            c = m - j;

            capital.value = mostrar(c);

        }


        // ---------------------------------------------
        // DESCOBRIR MONTANTE A PARTIR DE CAPITAL + TAXA + TEMPO
        // ---------------------------------------------

        else if (
            m === null &&
            c !== null &&
            i !== null &&
            t !== null
        ) {

            j = c * i * t;
            m = c + j;

            juros.value = mostrar(j);
            montante.value = mostrar(m);

        }

    }


    // =================================================
    // JUROS COMPOSTOS
    // =================================================

    else {


        // ---------------------------------------------
        // DESCOBRIR MONTANTE
        //
        // M = C × (1 + i)^t
        // ---------------------------------------------

        if (
            m === null &&
            c !== null &&
            i !== null &&
            t !== null
        ) {

            m = c * Math.pow(1 + i, t);

            // O valor completo permanece em "m".
            // Só mostramos arredondado.

            montante.value = mostrar(m);


            // Juros = Montante - Capital
            j = m - c;

            juros.value = mostrar(j);

        }


        // ---------------------------------------------
        // DESCOBRIR JUROS
        //
        // J = M - C
        // ---------------------------------------------

        else if (
            j === null &&
            m !== null &&
            c !== null
        ) {

            j = m - c;

            juros.value = mostrar(j);

        }


        // ---------------------------------------------
        // DESCOBRIR CAPITAL
        //
        // J = C[(1+i)^t - 1]
        //
        // C = J / [(1+i)^t - 1]
        // ---------------------------------------------

        else if (
            c === null &&
            j !== null &&
            i !== null &&
            t !== null
        ) {

            c = j / (Math.pow(1 + i, t) - 1);

            capital.value = mostrar(c);


            // Recupera o montante usando o valor
            // completo do cálculo.

            m = c * Math.pow(1 + i, t);

            montante.value = mostrar(m);

        }


        // ---------------------------------------------
        // DESCOBRIR CAPITAL A PARTIR DO MONTANTE
        //
        // M = C(1+i)^t
        //
        // C = M/(1+i)^t
        // ---------------------------------------------

        else if (
            c === null &&
            m !== null &&
            i !== null &&
            t !== null
        ) {

            c = m / Math.pow(1 + i, t);

            capital.value = mostrar(c);


            j = m - c;

            juros.value = mostrar(j);

        }


        // ---------------------------------------------
        // DESCOBRIR TAXA A PARTIR DO MONTANTE
        //
        // M = C(1+i)^t
        //
        // i = (M/C)^(1/t) - 1
        // ---------------------------------------------

        else if (
            i === null &&
            c !== null &&
            m !== null &&
            t !== null
        ) {

            i = Math.pow(m / c, 1 / t) - 1;

            taxa.value = mostrar(i * 100);


            j = m - c;

            juros.value = mostrar(j);

        }


        // ---------------------------------------------
        // DESCOBRIR TEMPO
        //
        // t = log(M/C) / log(1+i)
        // ---------------------------------------------

        else if (
            t === null &&
            c !== null &&
            m !== null &&
            i !== null
        ) {

            t = Math.log(m / c) / Math.log(1 + i);

            tempo.value = mostrar(t);


            j = m - c;

            juros.value = mostrar(j);

        }


        // ---------------------------------------------
        // DESCOBRIR TAXA A PARTIR DOS JUROS
        //
        // M = C + J
        //
        // i = (M/C)^(1/t) - 1
        // ---------------------------------------------

        else if (
            i === null &&
            c !== null &&
            j !== null &&
            t !== null
        ) {

            m = c + j;

            i = Math.pow(m / c, 1 / t) - 1;

            taxa.value = mostrar(i * 100);

            montante.value = mostrar(m);

        }


        // ---------------------------------------------
        // DESCOBRIR TEMPO A PARTIR DOS JUROS
        // ---------------------------------------------

        else if (
            t === null &&
            c !== null &&
            j !== null &&
            i !== null
        ) {

            m = c + j;

            t = Math.log(m / c) / Math.log(1 + i);

            tempo.value = mostrar(t);

            montante.value = mostrar(m);

        }

    }

});