document.addEventListener("DOMContentLoaded", function () {

    const capital = document.getElementById("capital");
    const taxa = document.getElementById("taxa");
    const tempo = document.getElementById("tempo");
    const juros = document.getElementById("juros");
    const montante = document.getElementById("montante");

    const calcular = document.getElementById("calcular");
    const limpar = document.getElementById("limpar");

    const simples = document.getElementById("simples");
    const compostos = document.getElementById("compostos");


    // ==================================
    // VERIFICA SE O CAMPO ESTÁ VAZIO
    // ==================================

    function vazio(campo) {
        return campo.value === "";
    }


    // ==================================
    // LIMPAR
    // ==================================

    limpar.addEventListener("click", function () {

        capital.value = "";
        taxa.value = "";
        tempo.value = "";
        juros.value = "";
        montante.value = "";

    });


    // ==================================
    // CALCULAR
    // ==================================

    calcular.addEventListener("click", function () {


        // ==================================
        // JUROS SIMPLES
        // ==================================

        if (simples.checked) {


            // ==================================
            // CASO 1
            // JUROS E MONTANTE VAZIOS
            // ==================================

            if (
                vazio(juros) &&
                vazio(montante) &&
                capital.value !== "" &&
                taxa.value !== "" &&
                tempo.value !== ""
            ) {

                let c = Number(capital.value);
                let i = Number(taxa.value) / 100;
                let t = Number(tempo.value);

                let j = c * i * t;
                let m = c + j;

                juros.value = j.toFixed(2);
                montante.value = m.toFixed(2);

                return;
            }


            // ==================================
            // MONTANTE + TEMPO VAZIOS
            // CALCULA TEMPO E DEPOIS MONTANTE
            // ==================================

            if (
                vazio(montante) &&
                vazio(tempo) &&
                capital.value !== "" &&
                taxa.value !== "" &&
                juros.value !== ""
            ) {

                let c = Number(capital.value);
                let i = Number(taxa.value) / 100;
                let j = Number(juros.value);

                if (c !== 0 && i !== 0) {

                    let t = j / (c * i);
                    let m = c + j;

                    tempo.value = t.toFixed(2);
                    montante.value = m.toFixed(2);

                }

                return;
            }


            // ==================================
            // MONTANTE + TAXA VAZIOS
            // CALCULA TAXA E DEPOIS MONTANTE
            // ==================================

            if (
                vazio(montante) &&
                vazio(taxa) &&
                capital.value !== "" &&
                tempo.value !== "" &&
                juros.value !== ""
            ) {

                let c = Number(capital.value);
                let t = Number(tempo.value);
                let j = Number(juros.value);

                if (c !== 0 && t !== 0) {

                    let i = j / (c * t);
                    let m = c + j;

                    taxa.value = (i * 100).toFixed(2);
                    montante.value = m.toFixed(2);

                }

                return;
            }


            // ==================================
            // MONTANTE + CAPITAL VAZIOS
            // CALCULA CAPITAL E DEPOIS MONTANTE
            // ==================================

            if (
                vazio(montante) &&
                vazio(capital) &&
                taxa.value !== "" &&
                tempo.value !== "" &&
                juros.value !== ""
            ) {

                let i = Number(taxa.value) / 100;
                let t = Number(tempo.value);
                let j = Number(juros.value);

                if (i !== 0 && t !== 0) {

                    let c = j / (i * t);
                    let m = c + j;

                    capital.value = c.toFixed(2);
                    montante.value = m.toFixed(2);

                }

                return;
            }


            // ==================================
            // JUROS + TEMPO VAZIOS
            // CALCULA TEMPO E DEPOIS JUROS
            // ==================================

            if (
                vazio(juros) &&
                vazio(tempo) &&
                capital.value !== "" &&
                taxa.value !== "" &&
                montante.value !== ""
            ) {

                let c = Number(capital.value);
                let i = Number(taxa.value) / 100;
                let m = Number(montante.value);

                let j = m - c;

                if (c !== 0 && i !== 0) {

                    let t = j / (c * i);

                    juros.value = j.toFixed(2);
                    tempo.value = t.toFixed(2);

                }

                return;
            }


            // ==================================
            // JUROS + TAXA VAZIOS
            // CALCULA TAXA E DEPOIS JUROS
            // ==================================

            if (
                vazio(juros) &&
                vazio(taxa) &&
                capital.value !== "" &&
                tempo.value !== "" &&
                montante.value !== ""
            ) {

                let c = Number(capital.value);
                let t = Number(tempo.value);
                let m = Number(montante.value);

                let j = m - c;

                if (c !== 0 && t !== 0) {

                    let i = j / (c * t);

                    juros.value = j.toFixed(2);
                    taxa.value = (i * 100).toFixed(2);

                }

                return;
            }


            // ==================================
            // JUROS + CAPITAL VAZIOS
            // CALCULA CAPITAL E DEPOIS JUROS
            // ==================================

            if (
                vazio(juros) &&
                vazio(capital) &&
                taxa.value !== "" &&
                tempo.value !== "" &&
                montante.value !== ""
            ) {

                let i = Number(taxa.value) / 100;
                let t = Number(tempo.value);
                let m = Number(montante.value);

                let c = m / (1 + i * t);
                let j = m - c;

                capital.value = c.toFixed(2);
                juros.value = j.toFixed(2);

                return;
            }


            // ==================================
            // CALCULAR JUROS
            // ==================================

            if (
                vazio(juros) &&
                capital.value !== "" &&
                taxa.value !== "" &&
                tempo.value !== ""
            ) {

                let c = Number(capital.value);
                let i = Number(taxa.value) / 100;
                let t = Number(tempo.value);

                let j = c * i * t;

                juros.value = j.toFixed(2);

                return;
            }


            // ==================================
            // CALCULAR TAXA
            // ==================================

            if (
                vazio(taxa) &&
                capital.value !== "" &&
                juros.value !== "" &&
                tempo.value !== ""
            ) {

                let c = Number(capital.value);
                let j = Number(juros.value);
                let t = Number(tempo.value);

                if (c !== 0 && t !== 0) {

                    let i = j / (c * t);

                    taxa.value = (i * 100).toFixed(2);

                }

                return;
            }


            // ==================================
            // CALCULAR TEMPO
            // ==================================

            if (
                vazio(tempo) &&
                capital.value !== "" &&
                juros.value !== "" &&
                taxa.value !== ""
            ) {

                let c = Number(capital.value);
                let j = Number(juros.value);
                let i = Number(taxa.value) / 100;

                if (c !== 0 && i !== 0) {

                    let t = j / (c * i);

                    tempo.value = t.toFixed(2);

                }

                return;
            }


            // ==================================
            // CALCULAR CAPITAL
            // ==================================

            if (
                vazio(capital) &&
                juros.value !== "" &&
                taxa.value !== "" &&
                tempo.value !== ""
            ) {

                let j = Number(juros.value);
                let i = Number(taxa.value) / 100;
                let t = Number(tempo.value);

                if (i !== 0 && t !== 0) {

                    let c = j / (i * t);

                    capital.value = c.toFixed(2);

                }

                return;
            }


            // ==================================
            // CALCULAR MONTANTE
            // ==================================

            if (
                vazio(montante) &&
                capital.value !== "" &&
                juros.value !== ""
            ) {

                let c = Number(capital.value);
                let j = Number(juros.value);

                let m = c + j;

                montante.value = m.toFixed(2);

                return;
            }

        }


        // ==================================
        // JUROS COMPOSTOS
        // ==================================

        if (compostos.checked) {


            // ==================================
            // JUROS E MONTANTE VAZIOS
            // ==================================

            if (
                vazio(juros) &&
                vazio(montante) &&
                capital.value !== "" &&
                taxa.value !== "" &&
                tempo.value !== ""
            ) {

                let c = Number(capital.value);
                let i = Number(taxa.value) / 100;
                let t = Number(tempo.value);

                let m = c * Math.pow(1 + i, t);
                let j = m - c;

                montante.value = m.toFixed(2);
                juros.value = j.toFixed(2);

                return;
            }


            // ==================================
            // MONTANTE + TEMPO VAZIOS
            // CALCULA TEMPO E DEPOIS MONTANTE
            // ==================================

            if (
                vazio(montante) &&
                vazio(tempo) &&
                capital.value !== "" &&
                taxa.value !== "" &&
                juros.value !== ""
            ) {

                let c = Number(capital.value);
                let i = Number(taxa.value) / 100;
                let j = Number(juros.value);

                if (c !== 0 && i !== 0) {

                    let m = c + j;
                    let t = Math.log(m / c) / Math.log(1 + i);

                    tempo.value = t.toFixed(2);
                    montante.value = m.toFixed(2);

                }

                return;
            }


            // ==================================
            // MONTANTE + TAXA VAZIOS
            // CALCULA TAXA E DEPOIS MONTANTE
            // ==================================

            if (
                vazio(montante) &&
                vazio(taxa) &&
                capital.value !== "" &&
                tempo.value !== "" &&
                juros.value !== ""
            ) {

                let c = Number(capital.value);
                let t = Number(tempo.value);
                let j = Number(juros.value);

                let m = c + j;

                if (c !== 0 && t !== 0) {

                    let i = Math.pow(m / c, 1 / t) - 1;

                    taxa.value = (i * 100).toFixed(2);
                    montante.value = m.toFixed(2);

                }

                return;
            }


            // ==================================
            // MONTANTE + CAPITAL VAZIOS
            // CALCULA CAPITAL E DEPOIS MONTANTE
            // ==================================

            if (
                vazio(montante) &&
                vazio(capital) &&
                taxa.value !== "" &&
                tempo.value !== "" &&
                juros.value !== ""
            ) {

                let i = Number(taxa.value) / 100;
                let t = Number(tempo.value);
                let j = Number(juros.value);

                let c = j / (Math.pow(1 + i, t) - 1);
                let m = c + j;

                capital.value = c.toFixed(2);
                montante.value = m.toFixed(2);

                return;
            }


            // ==================================
            // JUROS + TEMPO VAZIOS
            // CALCULA TEMPO E DEPOIS JUROS
            // ==================================

            if (
                vazio(juros) &&
                vazio(tempo) &&
                capital.value !== "" &&
                taxa.value !== "" &&
                montante.value !== ""
            ) {

                let c = Number(capital.value);
                let i = Number(taxa.value) / 100;
                let m = Number(montante.value);

                if (c !== 0 && i !== 0) {

                    let j = m - c;
                    let t = Math.log(m / c) / Math.log(1 + i);

                    juros.value = j.toFixed(2);
                    tempo.value = t.toFixed(2);

                }

                return;
            }


            // ==================================
            // JUROS + TAXA VAZIOS
            // CALCULA TAXA E DEPOIS JUROS
            // ==================================

            if (
                vazio(juros) &&
                vazio(taxa) &&
                capital.value !== "" &&
                tempo.value !== "" &&
                montante.value !== ""
            ) {

                let c = Number(capital.value);
                let t = Number(tempo.value);
                let m = Number(montante.value);

                let j = m - c;

                if (c !== 0 && t !== 0) {

                    let i = Math.pow(m / c, 1 / t) - 1;

                    juros.value = j.toFixed(2);
                    taxa.value = (i * 100).toFixed(2);

                }

                return;
            }


            // ==================================
            // JUROS + CAPITAL VAZIOS
            // CALCULA CAPITAL E DEPOIS JUROS
            // ==================================

            if (
                vazio(juros) &&
                vazio(capital) &&
                taxa.value !== "" &&
                tempo.value !== "" &&
                montante.value !== ""
            ) {

                let i = Number(taxa.value) / 100;
                let t = Number(tempo.value);
                let m = Number(montante.value);

                let c = m / Math.pow(1 + i, t);
                let j = m - c;

                capital.value = c.toFixed(2);
                juros.value = j.toFixed(2);

                return;
            }


            // ==================================
            // CALCULAR MONTANTE
            // ==================================

            if (
                vazio(montante) &&
                capital.value !== "" &&
                taxa.value !== "" &&
                tempo.value !== ""
            ) {

                let c = Number(capital.value);
                let i = Number(taxa.value) / 100;
                let t = Number(tempo.value);

                let m = c * Math.pow(1 + i, t);

                montante.value = m.toFixed(2);

                if (vazio(juros)) {

                    let j = m - c;

                    juros.value = j.toFixed(2);

                }

                return;
            }


            // ==================================
            // CALCULAR CAPITAL
            // ==================================

            if (
                vazio(capital) &&
                montante.value !== "" &&
                taxa.value !== "" &&
                tempo.value !== ""
            ) {

                let m = Number(montante.value);
                let i = Number(taxa.value) / 100;
                let t = Number(tempo.value);

                let c = m / Math.pow(1 + i, t);

                capital.value = c.toFixed(2);

                return;
            }


            // ==================================
            // CAPITAL PELO JUROS
            // ==================================

            if (
                vazio(capital) &&
                juros.value !== "" &&
                taxa.value !== "" &&
                tempo.value !== ""
            ) {

                let j = Number(juros.value);
                let i = Number(taxa.value) / 100;
                let t = Number(tempo.value);

                let c = j / (Math.pow(1 + i, t) - 1);

                capital.value = c.toFixed(2);

                return;
            }


            // ==================================
            // CALCULAR TAXA
            // ==================================

            if (
                vazio(taxa) &&
                capital.value !== "" &&
                montante.value !== "" &&
                tempo.value !== ""
            ) {

                let c = Number(capital.value);
                let m = Number(montante.value);
                let t = Number(tempo.value);

                if (c !== 0 && t !== 0) {

                    let i = Math.pow(m / c, 1 / t) - 1;

                    taxa.value = (i * 100).toFixed(2);

                }

                return;
            }


            // ==================================
            // CALCULAR TEMPO
            // ==================================

            if (
                vazio(tempo) &&
                capital.value !== "" &&
                montante.value !== "" &&
                taxa.value !== ""
            ) {

                let c = Number(capital.value);
                let m = Number(montante.value);
                let i = Number(taxa.value) / 100;

                if (c !== 0 && i !== 0) {

                    let t = Math.log(m / c) / Math.log(1 + i);

                    tempo.value = t.toFixed(2);

                }

                return;
            }


            // ==================================
            // CALCULAR JUROS
            // ==================================

            if (
                vazio(juros) &&
                capital.value !== "" &&
                montante.value !== ""
            ) {

                let c = Number(capital.value);
                let m = Number(montante.value);

                let j = m - c;

                juros.value = j.toFixed(2);

                return;
            }

        }

    });

});
