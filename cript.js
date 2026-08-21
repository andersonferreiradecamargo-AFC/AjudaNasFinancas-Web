[1mdiff --git a/script.js b/script.js[m
[1mindex 0a0fea0..7c79332 100644[m
[1m--- a/script.js[m
[1m+++ b/script.js[m
[36m@@ -1,998 +1,883 @@[m
[31m-document.addEventListener("DOMContentLoaded", function () {[m
[32m+[m[32mconst capital = document.getElementById("capital");[m
[32m+[m[32mconst taxa = document.getElementById("taxa");[m
[32m+[m[32mconst tempo = document.getElementById("tempo");[m
[32m+[m[32mconst juros = document.getElementById("juros");[m
[32m+[m[32mconst montante = document.getElementById("montante");[m
 [m
[32m+[m[32mconst calcular = document.getElementById("calcular");[m
[32m+[m[32mconst limpar = document.getElementById("limpar");[m
 [m
[31m-    // =====================================================[m
[31m-    // CAMPOS DA CALCULADORA[m
[31m-    // =====================================================[m
[32m+[m[32mconst simples = document.getElementById("simples");[m
[32m+[m[32mconst compostos = document.getElementById("compostos");[m
 [m
[31m-    const capital = document.getElementById("capital");[m
[31m-    const taxa = document.getElementById("taxa");[m
[31m-    const tempo = document.getElementById("tempo");[m
[31m-    const juros = document.getElementById("juros");[m
[31m-    const montante = document.getElementById("montante");[m
 [m
[31m-    const calcular = document.getElementById("calcular");[m
[31m-    const limpar = document.getElementById("limpar");[m
[32m+[m[32m// =====================================================[m
[32m+[m[32m// PRECISÃƒO INTERNA[m
[32m+[m[32m// =====================================================[m
 [m
[31m-    const simples = document.getElementById("simples");[m
[31m-    const compostos = document.getElementById("compostos");[m
[32m+[m[32m// Guarda o Ãºltimo resultado completo calculado.[m
[32m+[m[32m// O valor mostrado na tela pode estar arredondado,[m
[32m+[m[32m// mas o cÃ¡lculo seguinte pode usar o valor completo.[m
 [m
[32m+[m[32mlet memoria = {[m
[32m+[m[32m    capital: null,[m
[32m+[m[32m    taxa: null,[m
[32m+[m[32m    tempo: null,[m
[32m+[m[32m    juros: null,[m
[32m+[m[32m    montante: null[m
[32m+[m[32m};[m
 [m
[31m-    function vazio(campo) {[m
[31m-        return campo.value === "";[m
[31m-    }[m
[31m-[m
[31m-[m
[31m-    // =====================================================[m
[31m-    // LIMPAR CALCULADORA[m
[31m-    // =====================================================[m
 [m
[31m-    limpar.addEventListener("click", function () {[m
[32m+[m[32m// =====================================================[m
[32m+[m[32m// FUNÃ‡ÃƒO PARA MOSTRAR RESULTADOS[m
[32m+[m[32m// =====================================================[m
 [m
[31m-        capital.value = "";[m
[31m-        taxa.value = "";[m
[31m-        tempo.value = "";[m
[31m-        juros.value = "";[m
[31m-        montante.value = "";[m
[31m-[m
[31m-    });[m
[32m+[m[32mfunction arredondar(valor) {[m
[32m+[m[32m    return Number(valor.toFixed(2));[m
[32m+[m[32m}[m
 [m
 [m
[31m-    // =====================================================[m
[31m-    // CALCULADORA[m
[31m-    // =====================================================[m
[32m+[m[32m// =====================================================[m
[32m+[m[32m// FUNÃ‡ÃƒO PARA IDENTIFICAR VALORES[m
[32m+[m[32m// =====================================================[m
 [m
[31m-    calcular.addEventListener("click", function () {[m
[32m+[m[32mfunction numero(campo) {[m
 [m
[32m+[m[32m    if (campo.value === "") {[m
[32m+[m[32m        return null;[m
[32m+[m[32m    }[m
 [m
[31m-        // =================================================[m
[31m-        // JUROS SIMPLES[m
[31m-        // =================================================[m
[31m-[m
[31m-        if (simples.checked) {[m
[31m-[m
[31m-            let c = Number(capital.value);[m
[31m-            let i = Number(taxa.value) / 100;[m
[31m-            let t = Number(tempo.value);[m
[31m-            let j = Number(juros.value);[m
[31m-            let m = Number(montante.value);[m
[32m+[m[32m    return Number(campo.value);[m
[32m+[m[32m}[m
 [m
 [m
[31m-            // Capital + Taxa + Tempo[m
[31m-            if ([m
[31m-                capital.value !== "" &&[m
[31m-                taxa.value !== "" &&[m
[31m-                tempo.value !== "" &&[m
[31m-                vazio(juros)[m
[31m-            ) {[m
[32m+[m[32m// =====================================================[m
[32m+[m[32m// LIMPAR[m
[32m+[m[32m// =====================================================[m
 [m
[31m-                j = c * i * t;[m
[31m-                juros.value = j.toFixed(2);[m
[32m+[m[32mlimpar.addEventListener("click", function () {[m
 [m
[31m-            }[m
[32m+[m[32m    capital.value = "";[m
[32m+[m[32m    taxa.value = "";[m
[32m+[m[32m    tempo.value = "";[m
[32m+[m[32m    juros.value = "";[m
[32m+[m[32m    montante.value = "";[m
 [m
[32m+[m[32m    memoria.capital = null;[m
[32m+[m[32m    memoria.taxa = null;[m
[32m+[m[32m    memoria.tempo = null;[m
[32m+[m[32m    memoria.juros = null;[m
[32m+[m[32m    memoria.montante = null;[m
 [m
[31m-            // Capital + Taxa + Tempo[m
[31m-            // calcula também montante[m
[31m-            if ([m
[31m-                capital.value !== "" &&[m
[31m-                taxa.value !== "" &&[m
[31m-                tempo.value !== "" &&[m
[31m-                vazio(montante)[m
[31m-            ) {[m
[32m+[m[32m});[m
 [m
[31m-                j = c * i * t;[m
[31m-                m = c + j;[m
 [m
[31m-                montante.value = m.toFixed(2);[m
[32m+[m[32m// =====================================================[m
[32m+[m[32m// CALCULAR[m
[32m+[m[32m// =====================================================[m
 [m
[31m-            }[m
[32m+[m[32mcalcular.addEventListener("click", function () {[m
 [m
[32m+[m[32m    const cCampo = numero(capital);[m
[32m+[m[32m    const iCampo = numero(taxa);[m
[32m+[m[32m    const tCampo = numero(tempo);[m
[32m+[m[32m    const jCampo = numero(juros);[m
[32m+[m[32m    const mCampo = numero(montante);[m
 [m
[31m-            // Montante = Capital + Juros[m
[31m-            if ([m
[31m-                vazio(montante) &&[m
[31m-                capital.value !== "" &&[m
[31m-                juros.value !== ""[m
[31m-            ) {[m
[32m+[m[32m// =================================================[m
[32m+[m[32m// ATUALIZA A MEMÃ“RIA[m
[32m+[m[32m// MantÃ©m a precisÃ£o completa dos resultados.[m
[32m+[m[32m// =================================================[m
 [m
[31m-                c = Number(capital.value);[m
[31m-                j = Number(juros.value);[m
[32m+[m[32mfunction atualizarMemoria(valorCampo, valorMemoria, novoValor) {[m
 [m
[31m-                montante.value = (c + j).toFixed(2);[m
[32m+[m[32m    if (valorCampo === null) {[m
[32m+[m[32m        return valorMemoria;[m
[32m+[m[32m    }[m
 [m
[31m-            }[m
[32m+[m[32m    // Se o valor que estÃ¡ na tela Ã© exatamente o[m
[32m+[m[32m    // resultado arredondado anteriormente pelo programa,[m
[32m+[m[32m    // mantÃ©m o valor interno completo.[m
[32m+[m[32m    if ([m
[32m+[m[32m        valorMemoria !== null &&[m
[32m+[m[32m        valorCampo === arredondar(valorMemoria)[m
[32m+[m[32m    ) {[m
[32m+[m[32m        return valorMemoria;[m
[32m+[m[32m    }[m
 [m
[32m+[m[32m    return novoValor;[m
[32m+[m[32m}[m
 [m
[31m-            // Juros = Montante - Capital[m
[31m-            if ([m
[31m-                vazio(juros) &&[m
[31m-                capital.value !== "" &&[m
[31m-                montante.value !== ""[m
[31m-            ) {[m
 [m
[31m-                c = Number(capital.value);[m
[31m-                m = Number(montante.value);[m
[32m+[m[32mmemoria.capital =[m
[32m+[m[32m    atualizarMemoria([m
[32m+[m[32m        cCampo,[m
[32m+[m[32m        memoria.capital,[m
[32m+[m[32m        cCampo[m
[32m+[m[32m    );[m
 [m
[31m-                juros.value = (m - c).toFixed(2);[m
 [m
[31m-            }[m
[32m+[m[32mmemoria.taxa =[m
[32m+[m[32m    atualizarMemoria([m
[32m+[m[32m        iCampo,[m
[32m+[m[32m        memoria.taxa,[m
[32m+[m[32m        iCampo / 100[m
[32m+[m[32m    );[m
 [m
 [m
[31m-            // Tempo[m
[31m-            if ([m
[31m-                vazio(tempo) &&[m
[31m-                capital.value !== "" &&[m
[31m-                taxa.value !== "" &&[m
[31m-                juros.value !== ""[m
[31m-            ) {[m
[32m+[m[32mmemoria.tempo =[m
[32m+[m[32m    atualizarMemoria([m
[32m+[m[32m        tCampo,[m
[32m+[m[32m        memoria.tempo,[m
[32m+[m[32m        tCampo[m
[32m+[m[32m    );[m
 [m
[31m-                c = Number(capital.value);[m
[31m-                i = Number(taxa.value) / 100;[m
[31m-                j = Number(juros.value);[m
 [m
[31m-                if (c !== 0 && i !== 0) {[m
[32m+[m[32mmemoria.juros =[m
[32m+[m[32m    atualizarMemoria([m
[32m+[m[32m        jCampo,[m
[32m+[m[32m        memoria.juros,[m
[32m+[m[32m        jCampo[m
[32m+[m[32m    );[m
 [m
[31m-                    t = j / (c * i);[m
 [m
[31m-                    tempo.value = t.toFixed(2);[m
[32m+[m[32mmemoria.montante =[m
[32m+[m[32m    atualizarMemoria([m
[32m+[m[32m        mCampo,[m
[32m+[m[32m        memoria.montante,[m
[32m+[m[32m        mCampo[m
[32m+[m[32m    );[m
 [m
[31m-                }[m
 [m
[31m-            }[m
[32m+[m[32m    // =================================================[m
[32m+[m[32m    // JUROS SIMPLES[m
[32m+[m[32m    // =================================================[m
 [m
[32m+[m[32m    if (simples.checked) {[m
 [m
[31m-            // Taxa[m
[31m-            if ([m
[31m-                vazio(taxa) &&[m
[31m-                capital.value !== "" &&[m
[31m-                tempo.value !== "" &&[m
[31m-                juros.value !== ""[m
[31m-            ) {[m
[32m+[m[32m        let c = memoria.capital;[m
[32m+[m[32m        let i = memoria.taxa;[m
[32m+[m[32m        let t = memoria.tempo;[m
[32m+[m[32m        let j = memoria.juros;[m
[32m+[m[32m        let m = memoria.montante;[m
 [m
[31m-                c = Number(capital.value);[m
[31m-                t = Number(tempo.value);[m
[31m-                j = Number(juros.value);[m
 [m
[31m-                if (c !== 0 && t !== 0) {[m
[32m+[m[32m        // ---------------------------------------------[m
[32m+[m[32m        // C + i + t[m
[32m+[m[32m        // Descobrir J e M[m
[32m+[m[32m        // ---------------------------------------------[m
 [m
[31m-                    i = j / (c * t);[m
[32m+[m[32m        if ([m
[32m+[m[32m            cCampo !== null &&[m
[32m+[m[32m            iCampo !== null &&[m
[32m+[m[32m            tCampo !== null &&[m
[32m+[m[32m            jCampo === null &&[m
[32m+[m[32m            mCampo === null[m
[32m+[m[32m        ) {[m
 [m
[31m-                    taxa.value = (i * 100).toFixed(2);[m
[32m+[m[32m            j = c * i * t;[m
[32m+[m[32m            m = c + j;[m
 [m
[31m-                }[m
[32m+[m[32m            memoria.juros = j;[m
[32m+[m[32m            memoria.montante = m;[m
 [m
[31m-            }[m
[32m+[m[32m            juros.value = arredondar(j);[m
[32m+[m[32m            montante.value = arredondar(m);[m
 [m
[32m+[m[32m            return;[m
[32m+[m[32m        }[m
 [m
[31m-            // Capital[m
[31m-            if ([m
[31m-                vazio(capital) &&[m
[31m-                taxa.value !== "" &&[m
[31m-                tempo.value !== "" &&[m
[31m-                juros.value !== ""[m
[31m-            ) {[m
 [m
[31m-                i = Number(taxa.value) / 100;[m
[31m-                t = Number(tempo.value);[m
[31m-                j = Number(juros.value);[m
[32m+[m[32m        // ---------------------------------------------[m
[32m+[m[32m        // C + J + i + t[m
[32m+[m[32m        // Descobrir M[m
[32m+[m[32m        // ---------------------------------------------[m
 [m
[31m-                if (i !== 0 && t !== 0) {[m
[32m+[m[32m        if ([m
[32m+[m[32m            c !== null &&[m
[32m+[m[32m            j !== null &&[m
[32m+[m[32m            i !== null &&[m
[32m+[m[32m            t !== null &&[m
[32m+[m[32m            mCampo === null[m
[32m+[m[32m        ) {[m
 [m
[31m-                    c = j / (i * t);[m
[32m+[m[32m            m = c + j;[m
 [m
[31m-                    capital.value = c.toFixed(2);[m
[32m+[m[32m            memoria.montante = m;[m
 [m
[31m-                }[m
[32m+[m[32m            montante.value = arredondar(m);[m
 [m
[31m-            }[m
[32m+[m[32m            return;[m
[32m+[m[32m        }[m
 [m
 [m
[31m-            // Capital pelo montante[m
[31m-            if ([m
[31m-                vazio(capital) &&[m
[31m-                taxa.value !== "" &&[m
[31m-                tempo.value !== "" &&[m
[31m-                montante.value !== ""[m
[31m-            ) {[m
[32m+[m[32m        // ---------------------------------------------[m
[32m+[m[32m        // C + M[m
[32m+[m[32m        // Descobrir J[m
[32m+[m[32m        // ---------------------------------------------[m
 [m
[31m-                i = Number(taxa.value) / 100;[m
[31m-                t = Number(tempo.value);[m
[31m-                m = Number(montante.value);[m
[32m+[m[32m        if ([m
[32m+[m[32m            c !== null &&[m
[32m+[m[32m            m !== null &&[m
[32m+[m[32m            jCampo === null[m
[32m+[m[32m        ) {[m
 [m
[31m-                c = m / (1 + i * t);[m
[32m+[m[32m            j = m - c;[m
 [m
[31m-                capital.value = c.toFixed(2);[m
[32m+[m[32m            memoria.juros = j;[m
 [m
[31m-            }[m
[32m+[m[32m            juros.value = arredondar(j);[m
 [m
[32m+[m[32m            return;[m
         }[m
 [m
 [m
[31m-        // =================================================[m
[31m-        // JUROS COMPOSTOS[m
[31m-        // =================================================[m
[31m-[m
[31m-        if (compostos.checked) {[m
[31m-[m
[31m-            let c = Number(capital.value);[m
[31m-            let i = Number(taxa.value) / 100;[m
[31m-            let t = Number(tempo.value);[m
[31m-            let j = Number(juros.value);[m
[31m-            let m = Number(montante.value);[m
[32m+[m[32m        // ---------------------------------------------[m
[32m+[m[32m        // J + i + t[m
[32m+[m[32m        // Descobrir C e M[m
[32m+[m[32m        // ---------------------------------------------[m
 [m
[32m+[m[32m        if ([m
[32m+[m[32m            cCampo === null &&[m
[32m+[m[32m            j !== null &&[m
[32m+[m[32m            i !== null &&[m
[32m+[m[32m            t !== null[m
[32m+[m[32m        ) {[m
 [m
[31m-            // Capital + Taxa + Tempo[m
[31m-            if ([m
[31m-                capital.value !== "" &&[m
[31m-                taxa.value !== "" &&[m
[31m-                tempo.value !== ""[m
[31m-            ) {[m
[32m+[m[32m            c = j / (i * t);[m
[32m+[m[32m            m = c + j;[m
 [m
[31m-                c = Number(capital.value);[m
[31m-                i = Number(taxa.value) / 100;[m
[31m-                t = Number(tempo.value);[m
[32m+[m[32m            memoria.capital = c;[m
[32m+[m[32m            memoria.montante = m;[m
 [m
[31m-                m = c * Math.pow(1 + i, t);[m
[32m+[m[32m            capital.value = arredondar(c);[m
[32m+[m[32m            montante.value = arredondar(m);[m
 [m
[31m-                if (vazio(montante)) {[m
[32m+[m[32m            return;[m
[32m+[m[32m        }[m
 [m
[31m-                    montante.value = m.toFixed(2);[m
 [m
[31m-                }[m
[32m+[m[32m        // ---------------------------------------------[m
[32m+[m[32m        // C + J + t[m
[32m+[m[32m        // Descobrir i e M[m
[32m+[m[32m        // ---------------------------------------------[m
 [m
[31m-                if (vazio(juros)) {[m
[32m+[m[32m        if ([m
[32m+[m[32m            c !== null &&[m
[32m+[m[32m            j !== null &&[m
[32m+[m[32m            t !== null &&[m
[32m+[m[32m            iCampo === null[m
[32m+[m[32m        ) {[m
 [m
[31m-                    j = m - c;[m
[32m+[m[32m            i = j / (c * t);[m
[32m+[m[32m            m = c + j;[m
 [m
[31m-                    juros.value = j.toFixed(2);[m
[32m+[m[32m            memoria.taxa = i;[m
[32m+[m[32m            memoria.montante = m;[m
 [m
[31m-                }[m
[32m+[m[32m            taxa.value = arredondar(i * 100);[m
[32m+[m[32m            montante.value = arredondar(m);[m
 [m
[31m-            }[m
[32m+[m[32m            return;[m
[32m+[m[32m        }[m
 [m
 [m
[31m-            // Juros pelo montante[m
[31m-            if ([m
[31m-                vazio(juros) &&[m
[31m-                capital.value !== "" &&[m
[31m-                montante.value !== ""[m
[31m-            ) {[m
[32m+[m[32m        // ---------------------------------------------[m
[32m+[m[32m        // C + J + i[m
[32m+[m[32m        // Descobrir t e M[m
[32m+[m[32m        // ---------------------------------------------[m
 [m
[31m-                c = Number(capital.value);[m
[31m-                m = Number(montante.value);[m
[32m+[m[32m        if ([m
[32m+[m[32m            c !== null &&[m
[32m+[m[32m            j !== null &&[m
[32m+[m[32m            i !== null &&[m
[32m+[m[32m            tCampo === null[m
[32m+[m[32m        ) {[m
 [m
[31m-                j = m - c;[m
[32m+[m[32m            t = j / (c * i);[m
[32m+[m[32m            m = c + j;[m
 [m
[31m-                juros.value = j.toFixed(2);[m
[32m+[m[32m            memoria.tempo = t;[m
[32m+[m[32m            memoria.montante = m;[m
 [m
[31m-            }[m
[32m+[m[32m            tempo.value = arredondar(t);[m
[32m+[m[32m            montante.value = arredondar(m);[m
 [m
[32m+[m[32m            return;[m
[32m+[m[32m        }[m
 [m
[31m-            // Montante pelo capital + juros[m
[31m-            if ([m
[31m-                vazio(montante) &&[m
[31m-                capital.value !== "" &&[m
[31m-                juros.value !== ""[m
[31m-            ) {[m
[32m+[m[32m    }[m
 [m
[31m-                c = Number(capital.value);[m
[31m-                j = Number(juros.value);[m
 [m
[31m-                m = c + j;[m
[32m+[m[32m    // =================================================[m
[32m+[m[32m    // JUROS COMPOSTOS[m
[32m+[m[32m    // =================================================[m
 [m
[31m-                montante.value = m.toFixed(2);[m
[32m+[m[32m    else {[m
 [m
[31m-            }[m
[32m+[m[32m        let c = memoria.capital;[m
[32m+[m[32m        let i = memoria.taxa;[m
[32m+[m[32m        let t = memoria.tempo;[m
[32m+[m[32m        let j = memoria.juros;[m
[32m+[m[32m        let m = memoria.montante;[m
 [m
 [m
[31m-            // Capital pelo montante[m
[31m-            if ([m
[31m-                vazio(capital) &&[m
[31m-                montante.value !== "" &&[m
[31m-                taxa.value !== "" &&[m
[31m-                tempo.value !== ""[m
[31m-            ) {[m
[32m+[m[32m        // ---------------------------------------------[m
[32m+[m[32m        // C + i + t[m
[32m+[m[32m        // Descobrir J e M[m
[32m+[m[32m        // ---------------------------------------------[m
 [m
[31m-                m = Number(montante.value);[m
[31m-                i = Number(taxa.value) / 100;[m
[31m-                t = Number(tempo.value);[m
[32m+[m[32m        if ([m
[32m+[m[32m            cCampo !== null &&[m
[32m+[m[32m            iCampo !== null &&[m
[32m+[m[32m            tCampo !== null &&[m
[32m+[m[32m            jCampo === null &&[m
[32m+[m[32m            mCampo === null[m
[32m+[m[32m        ) {[m
 [m
[31m-                c = m / Math.pow(1 + i, t);[m
[32m+[m[32m            m = c * Math.pow(1 + i, t);[m
[32m+[m[32m            j = m - c;[m
 [m
[31m-                capital.value = c.toFixed(2);[m
[32m+[m[32m            memoria.montante = m;[m
[32m+[m[32m            memoria.juros = j;[m
 [m
[31m-            }[m
[32m+[m[32m            montante.value = arredondar(m);[m
[32m+[m[32m            juros.value = arredondar(j);[m
 [m
[32m+[m[32m            return;[m
[32m+[m[32m        }[m
 [m
[31m-            // Capital pelos juros[m
[31m-            if ([m
[31m-                vazio(capital) &&[m
[31m-                juros.value !== "" &&[m
[31m-                taxa.value !== "" &&[m
[31m-                tempo.value !== ""[m
[31m-            ) {[m
 [m
[31m-                j = Number(juros.value);[m
[31m-                i = Number(taxa.value) / 100;[m
[31m-                t = Number(tempo.value);[m
[32m+[m[32m        // ---------------------------------------------[m
[32m+[m[32m        // M + C[m
[32m+[m[32m        // Descobrir J[m
[32m+[m[32m        // ---------------------------------------------[m
 [m
[31m-                let divisor =[m
[31m-                    Math.pow(1 + i, t) - 1;[m
[32m+[m[32m        if ([m
[32m+[m[32m            c !== null &&[m
[32m+[m[32m            m !== null &&[m
[32m+[m[32m            jCampo === null[m
[32m+[m[32m        ) {[m
 [m
[31m-                if (divisor !== 0) {[m
[32m+[m[32m            j = m - c;[m
 [m
[31m-                    c = j / divisor;[m
[32m+[m[32m            memoria.juros = j;[m
 [m
[31m-                    capital.value = c.toFixed(2);[m
[32m+[m[32m            juros.value = arredondar(j);[m
 [m
[31m-                }[m
[32m+[m[32m            return;[m
[32m+[m[32m        }[m
 [m
[31m-            }[m
 [m
[32m+[m[32m        // ---------------------------------------------[m
[32m+[m[32m        // J + i + t[m
[32m+[m[32m        // Descobrir C e M[m
[32m+[m[32m        // ---------------------------------------------[m
 [m
[31m-            // Taxa[m
[31m-            if ([m
[31m-                vazio(taxa) &&[m
[31m-                capital.value !== "" &&[m
[31m-                montante.value !== "" &&[m
[31m-                tempo.value !== ""[m
[31m-            ) {[m
[32m+[m[32m        if ([m
[32m+[m[32m            cCampo === null &&[m
[32m+[m[32m            j !== null &&[m
[32m+[m[32m            i !== null &&[m
[32m+[m[32m            t !== null[m
[32m+[m[32m        ) {[m
 [m
[31m-                c = Number(capital.value);[m
[31m-                m = Number(montante.value);[m
[31m-                t = Number(tempo.value);[m
[32m+[m[32m            c =[m
[32m+[m[32m                j /[m
[32m+[m[32m                (Math.pow(1 + i, t) - 1);[m
 [m
[31m-                if (c !== 0 && t !== 0) {[m
[32m+[m[32m            m =[m
[32m+[m[32m                c *[m
[32m+[m[32m                Math.pow(1 + i, t);[m
 [m
[31m-                    i = Math.pow(m / c, 1 / t) - 1;[m
[32m+[m[32m            memoria.capital = c;[m
[32m+[m[32m            memoria.montante = m;[m
 [m
[31m-                    taxa.value = (i * 100).toFixed(2);[m
[32m+[m[32m            capital.value = arredondar(c);[m
[32m+[m[32m            montante.value = arredondar(m);[m
 [m
[31m-                }[m
[32m+[m[32m            return;[m
[32m+[m[32m        }[m
 [m
[31m-            }[m
 [m
[32m+[m[32m        // ---------------------------------------------[m
[32m+[m[32m        // M + i + t[m
[32m+[m[32m        // Descobrir C e J[m
[32m+[m[32m        // ---------------------------------------------[m
 [m
[31m-            // Tempo[m
[31m-            if ([m
[31m-                vazio(tempo) &&[m
[31m-                capital.value !== "" &&[m
[31m-                montante.value !== "" &&[m
[31m-                taxa.value !== ""[m
[31m-            ) {[m
[32m+[m[32m        if ([m
[32m+[m[32m            cCampo === null &&[m
[32m+[m[32m            m !== null &&[m
[32m+[m[32m            i !== null &&[m
[32m+[m[32m            t !== null[m
[32m+[m[32m        ) {[m
 [m
[31m-                c = Number(capital.value);[m
[31m-                m = Number(montante.value);[m
[31m-                i = Number(taxa.value) / 100;[m
[32m+[m[32m            c =[m
[32m+[m[32m                m /[m
[32m+[m[32m                Math.pow(1 + i, t);[m
 [m
[31m-                if ([m
[31m-                    c !== 0 &&[m
[31m-                    i !== 0 &&[m
[31m-                    m > 0 &&[m
[31m-                    c > 0[m
[31m-                ) {[m
[32m+[m[32m            j = m - c;[m
 [m
[31m-                    t =[m
[31m-                        Math.log(m / c) /[m
[31m-                        Math.log(1 + i);[m
[32m+[m[32m            memoria.capital = c;[m
[32m+[m[32m            memoria.juros = j;[m
 [m
[31m-                    tempo.value = t.toFixed(2);[m
[32m+[m[32m            capital.value = arredondar(c);[m
[32m+[m[32m            juros.value = arredondar(j);[m
 [m
[31m-                }[m
[32m+[m[32m            return;[m
[32m+[m[32m        }[m
 [m
[31m-            }[m
 [m
[31m-        }[m
[32m+[m[32m        // ---------------------------------------------[m
[32m+[m[32m        // C + M + t[m
[32m+[m[32m        // Descobrir i e J[m
[32m+[m[32m        // ---------------------------------------------[m
 [m
[31m-    });[m
[32m+[m[32m        if ([m
[32m+[m[32m            c !== null &&[m
[32m+[m[32m            m !== null &&[m
[32m+[m[32m            t !== null &&[m
[32m+[m[32m            iCampo === null[m
[32m+[m[32m        ) {[m
 [m
[32m+[m[32m            i =[m
[32m+[m[32m                Math.pow(m / c, 1 / t) - 1;[m
 [m
[31m-    // =====================================================[m
[31m-    // AJUDA DOS CAMPOS[m
[31m-    // =====================================================[m
[32m+[m[32m            j = m - c;[m
 [m
[31m-    document.getElementById("labelCapital").addEventListener([m
[31m-        "click",[m
[31m-        function () {[m
[32m+[m[32m            memoria.taxa = i;[m
[32m+[m[32m            memoria.juros = j;[m
 [m
[31m-            alert([m
[31m-                "CAPITAL\n\n" +[m
[31m-                "É o valor inicial de uma aplicação ou empréstimo.\n\n" +[m
[31m-                "Exemplo: se você aplicar R$ 600,00, o capital é R$ 600,00."[m
[31m-            );[m
[32m+[m[32m            taxa.value = arredondar(i * 100);[m
[32m+[m[32m            juros.value = arredondar(j);[m
 [m
[32m+[m[32m            return;[m
         }[m
[31m-    );[m
 [m
 [m
[31m-    document.getElementById("labelTaxa").addEventListener([m
[31m-        "click",[m
[31m-        function () {[m
[32m+[m[32m        // ---------------------------------------------[m
[32m+[m[32m        // C + M + i[m
[32m+[m[32m        // Descobrir t e J[m
[32m+[m[32m        // ---------------------------------------------[m
 [m
[31m-            alert([m
[31m-                "TAXA DE JUROS\n\n" +[m
[31m-                "É a porcentagem usada para calcular os juros.\n\n" +[m
[31m-                "Exemplo: uma taxa de 2% ao mês significa que a cada mês os juros são calculados usando 2%."[m
[31m-            );[m
[32m+[m[32m        if ([m
[32m+[m[32m            c !== null &&[m
[32m+[m[32m            m !== null &&[m
[32m+[m[32m            i !== null &&[m
[32m+[m[32m            tCampo === null[m
[32m+[m[32m        ) {[m
 [m
[31m-        }[m
[31m-    );[m
[32m+[m[32m            t =[m
[32m+[m[32m                Math.log(m / c) /[m
[32m+[m[32m                Math.log(1 + i);[m
 [m
[32m+[m[32m            j = m - c;[m
 [m
[31m-    document.getElementById("labelTempo").addEventListener([m
[31m-        "click",[m
[31m-        function () {[m
[32m+[m[32m            memoria.tempo = t;[m
[32m+[m[32m            memoria.juros = j;[m
 [m
[31m-            alert([m
[31m-                "TEMPO\n\n" +[m
[31m-                "É o período durante o qual o dinheiro fica aplicado ou emprestado.\n\n" +[m
[31m-                "Pode ser contado em meses, anos, dias ou outro período definido na questão."[m
[31m-            );[m
[32m+[m[32m            tempo.value = arredondar(t);[m
[32m+[m[32m            juros.value = arredondar(j);[m
 [m
[32m+[m[32m            return;[m
         }[m
[31m-    );[m
[31m-[m
 [m
[31m-    document.getElementById("labelJuros").addEventListener([m
[31m-        "click",[m
[31m-        function () {[m
 [m
[31m-            alert([m
[31m-                "JUROS\n\n" +[m
[31m-                "É o valor que representa o ganho ou o custo gerado pelo dinheiro durante o período da aplicação ou empréstimo.\n\n" +[m
[31m-                "Exemplo: se você aplicou R$ 600,00 e recebeu R$ 60,00 de juros, o valor dos juros é R$ 60,00."[m
[31m-            );[m
[32m+[m[32m        // ---------------------------------------------[m
[32m+[m[32m        // C + J + i + t[m
[32m+[m[32m        // Descobrir M[m
[32m+[m[32m        // ---------------------------------------------[m
 [m
[31m-        }[m
[31m-    );[m
[32m+[m[32m        if ([m
[32m+[m[32m            c !== null &&[m
[32m+[m[32m            j !== null &&[m
[32m+[m[32m            i !== null &&[m
[32m+[m[32m            t !== null &&[m
[32m+[m[32m            mCampo === null[m
[32m+[m[32m        ) {[m
 [m
[32m+[m[32m            m =[m
[32m+[m[32m                c *[m
[32m+[m[32m                Math.pow(1 + i, t);[m
 [m
[31m-    document.getElementById("labelMontante").addEventListener([m
[31m-        "click",[m
[31m-        function () {[m
[32m+[m[32m            memoria.montante = m;[m
 [m
[31m-            alert([m
[31m-                "MONTANTE\n\n" +[m
[31m-                "É o valor total obtido ao final da aplicação ou empréstimo.\n\n" +[m
[31m-                "O montante é formado pelo Capital + Juros."[m
[31m-            );[m
[32m+[m[32m            montante.value = arredondar(m);[m
 [m
[32m+[m[32m            return;[m
         }[m
[31m-    );[m
 [m
 [m
[31m-    // =====================================================[m
[31m-    // AJUDA JUROS SIMPLES[m
[31m-    // =====================================================[m
[32m+[m[32m        // ---------------------------------------------[m
[32m+[m[32m        // C + J + t[m
[32m+[m[32m        // Descobrir i e M[m
[32m+[m[32m        // ---------------------------------------------[m
 [m
[31m-    simples.addEventListener("click", function () {[m
[32m+[m[32m        if ([m
[32m+[m[32m            c !== null &&[m
[32m+[m[32m            j !== null &&[m
[32m+[m[32m            t !== null &&[m
[32m+[m[32m            iCampo === null[m
[32m+[m[32m        ) {[m
 [m
[31m-        alert([m
[31m-            "JUROS SIMPLES\n\n" +[m
[31m-            "Nos juros simples, os juros são calculados sempre sobre o capital inicial."[m
[31m-        );[m
[32m+[m[32m            m = c + j;[m
 [m
[31m-    });[m
[32m+[m[32m            i =[m
[32m+[m[32m                Math.pow(m / c, 1 / t) - 1;[m
 [m
[32m+[m[32m            memoria.montante = m;[m
[32m+[m[32m            memoria.taxa = i;[m
 [m
[31m-    // =====================================================[m
[31m-    // AJUDA JUROS COMPOSTOS[m
[31m-    // =====================================================[m
[32m+[m[32m            montante.value = arredondar(m);[m
[32m+[m[32m            taxa.value = arredondar(i * 100);[m
 [m
[31m-    compostos.addEventListener("click", function () {[m
[32m+[m[32m            return;[m
[32m+[m[32m        }[m
 [m
[31m-        alert([m
[31m-            "JUROS COMPOSTOS\n\n" +[m
[31m-            "Nos juros compostos, os juros de cada período são incorporados ao valor acumulado.\n\n" +[m
[31m-            "É o famoso sistema de juros sobre juros."[m
[31m-        );[m
 [m
[31m-    });[m
[32m+[m[32m        // ---------------------------------------------[m
[32m+[m[32m        // C + J + i[m
[32m+[m[32m        // Descobrir t e M[m
[32m+[m[32m        // ---------------------------------------------[m
 [m
[32m+[m[32m        if ([m
[32m+[m[32m            c !== null &&[m
[32m+[m[32m            j !== null &&[m
[32m+[m[32m            i !== null &&[m
[32m+[m[32m            tCampo === null[m
[32m+[m[32m        ) {[m
 [m
[31m-    // =====================================================[m
[31m-    // INFORMAÇÕES[m
[31m-    // =====================================================[m
[32m+[m[32m            m = c + j;[m
 [m
[31m-    document.getElementById("info").addEventListener([m
[31m-        "click",[m
[31m-        function () {[m
[32m+[m[32m            t =[m
[32m+[m[32m                Math.log(m / c) /[m
[32m+[m[32m                Math.log(1 + i);[m
 [m
[31m-            alert([m
[31m-                "AJUDA NAS FINANÇAS\n\n" +[m
[31m-                "Como usar a calculadora:\n\n" +[m
[31m-                "1. Escolha entre Juros Simples ou Juros Compostos.\n\n" +[m
[31m-                "2. Digite os valores que você já conhece.\n\n" +[m
[31m-                "3. Deixe vazio o valor que deseja descobrir.\n\n" +[m
[31m-                "4. Clique em CALCULAR.\n\n" +[m
[31m-                "A calculadora pode descobrir Capital, Taxa, Tempo, Juros ou Montante."[m
[31m-            );[m
[32m+[m[32m            memoria.montante = m;[m
[32m+[m[32m            memoria.tempo = t;[m
 [m
[31m-        }[m
[31m-    );[m
[32m+[m[32m            montante.value = arredondar(m);[m
[32m+[m[32m            tempo.value = arredondar(t);[m
 [m
[32m+[m[32m            return;[m
[32m+[m[32m        }[m
 [m
[31m-    // =====================================================[m
[31m-    // QUESTIONÁRIO[m
[31m-    // =====================================================[m
[32m+[m[32m    }[m
 [m
[31m-    const botaoQuestoes =[m
[31m-        document.getElementById("questoes");[m
[32m+[m[32m});[m
 [m
[31m-    const areaQuestionario =[m
[31m-        document.getElementById("areaQuestionario");[m
 [m
[31m-    const todasQuestoes =[m
[31m-        document.querySelectorAll(".questao");[m
 [m
[31m-    const numeroQuestao =[m
[31m-        document.getElementById("numeroQuestao");[m
[32m+[m[32m// =====================================================[m
[32m+[m[32m// QUESTIONÃRIO[m
[32m+[m[32m// =====================================================[m
 [m
[31m-    const resultadoFinal =[m
[31m-        document.getElementById("resultadoFinal");[m
[32m+[m[32mconst botaoQuestoes = document.getElementById("questoes");[m
[32m+[m[32mconst areaQuestionario = document.getElementById("areaQuestionario");[m
[32m+[m[32mconst questoes = document.querySelectorAll(".questao");[m
[32m+[m[32mconst botoesVerificar = document.querySelectorAll(".verificarQuestao");[m
[32m+[m[32mconst botoesProxima = document.querySelectorAll(".proximaQuestao");[m
[32m+[m[32mconst resultadoFinal = document.getElementById("resultadoFinal");[m
[32m+[m[32mconst textoResultadoFinal = document.getElementById("textoResultadoFinal");[m
[32m+[m[32mconst mensagemFinal = document.getElementById("mensagemFinal");[m
[32m+[m[32mconst reiniciarQuestionario = document.getElementById("reiniciarQuestionario");[m
[32m+[m[32mconst numeroQuestao = document.getElementById("numeroQuestao");[m
 [m
[31m-    const textoResultadoFinal =[m
[31m-        document.getElementById("textoResultadoFinal");[m
[32m+[m[32mlet questaoAtual = 1;[m
[32m+[m[32mlet acertos = 0;[m
 [m
[31m-    const mensagemFinal =[m
[31m-        document.getElementById("mensagemFinal");[m
 [m
[31m-    const reiniciarQuestionario =[m
[31m-        document.getElementById("reiniciarQuestionario");[m
[32m+[m[32m// =====================================================[m
[32m+[m[32m// ABRIR QUESTIONÃRIO[m
[32m+[m[32m// =====================================================[m
 [m
[32m+[m[32mbotaoQuestoes.addEventListener("click", function () {[m
 [m
[31m-    // =====================================================[m
[31m-    // RESPOSTAS CORRETAS[m
[31m-    // =====================================================[m
[32m+[m[32m    areaQuestionario.style.display = "block";[m
 [m
[31m-    const respostasCorretas = {[m
[32m+[m[32m    questaoAtual = 1;[m
[32m+[m[32m    acertos = 0;[m
 [m
[31m-        1: "b",[m
[31m-        2: "b",[m
[31m-        3: "b",[m
[31m-        4: "b",[m
[31m-        5: "b",[m
[31m-        6: "b",[m
[31m-        7: "b",[m
[31m-        8: "b",[m
[31m-        9: "b",[m
[31m-        10: "c"[m
[32m+[m[32m    resultadoFinal.style.display = "none";[m
 [m
[31m-    };[m
[32m+[m[32m    questoes.forEach(function (questao) {[m
[32m+[m[32m        questao.classList.remove("ativa");[m
[32m+[m[32m    });[m
 [m
[32m+[m[32m    document.querySelector('[data-questao="1"]').classList.add("ativa");[m
 [m
[31m-    // =====================================================[m
[31m-    // MENSAGENS[m
[31m-    // =====================================================[m
[32m+[m[32m    numeroQuestao.textContent = "1";[m
 [m
[31m-    const mensagensCorretas = {[m
[32m+[m[32m    areaQuestionario.scrollIntoView({[m
[32m+[m[32m        behavior: "smooth"[m
[32m+[m[32m    });[m
 [m
[31m-        1: "Os juros são R$ 30,00.",[m
[32m+[m[32m});[m
 [m
[31m-        2: "O montante é R$ 1.040,40.",[m
 [m
[31m-        3: "Os juros são R$ 96,00.",[m
[32m+[m[32m// =====================================================[m
[32m+[m[32m// VERIFICAR RESPOSTA[m
[32m+[m[32m// =====================================================[m
 [m
[31m-        4: "O montante é R$ 540,80.",[m
[32m+[m[32mbotoesVerificar.forEach(function (botao) {[m
 [m
[31m-        5: "Os juros são R$ 60,00.",[m
[32m+[m[32m    botao.addEventListener("click", function () {[m
 [m
[31m-        6: "O montante é R$ 1.060,90.",[m
[32m+[m[32m        const numero = Number(botao.dataset.numero);[m
 [m
[31m-        7: "Os juros são R$ 100,00.",[m
[32m+[m[32m        const questao = document.querySelector([m
[32m+[m[32m            '[data-questao="' + numero + '"]'[m
[32m+[m[32m        );[m
 [m
[31m-        8: "O montante é aproximadamente R$ 520,20.",[m
[32m+[m[32m        const respostaSelecionada = questao.querySelector([m
[32m+[m[32m            'input[name="q' + numero + '"]:checked'[m
[32m+[m[32m        );[m
 [m
[31m-        9: "O montante é R$ 440,00.",[m
[32m+[m[32m        const resultado = questao.querySelector([m
[32m+[m[32m            "#resultadoQ" + numero[m
[32m+[m[32m        );[m
 [m
[31m-        10: "O montante é aproximadamente R$ 1.061,21."[m
[32m+[m[32m        const proxima = questao.querySelector(".proximaQuestao");[m
 [m
[31m-    };[m
 [m
[32m+[m[32m        if (!respostaSelecionada) {[m
 [m
[31m-    // =====================================================[m
[31m-    // CONTROLE[m
[31m-    // =====================================================[m
[32m+[m[32m            resultado.textContent =[m
[32m+[m[32m                "Selecione uma resposta.";[m
 [m
[31m-    let questaoAtual = 1;[m
[32m+[m[32m            return;[m
[32m+[m[32m        }[m
 [m
[31m-    let acertos = 0;[m
 [m
[31m-    const primeiraResposta = new Set();[m
[32m+[m[32m        // Respostas corretas[m
[32m+[m[32m        const respostasCorretas = {[m
[32m+[m[32m            1: "b",[m
[32m+[m[32m            2: "b",[m
[32m+[m[32m            3: "b",[m
[32m+[m[32m            4: "b",[m
[32m+[m[32m            5: "b",[m
[32m+[m[32m            6: "b",[m
[32m+[m[32m            7: "b",[m
[32m+[m[32m            8: "b",[m
[32m+[m[32m            9: "b",[m
[32m+[m[32m            10: "c"[m
[32m+[m[32m        };[m
 [m
 [m
[31m-    // =====================================================[m
[31m-    // MOSTRAR QUESTÃO[m
[31m-    // =====================================================[m
[32m+[m[32m        if (respostaSelecionada.value === respostasCorretas[numero]) {[m
 [m
[31m-    function mostrarQuestao(numero) {[m
[32m+[m[32m            resultado.textContent = "Resposta correta!";[m
 [m
[31m-        todasQuestoes.forEach(function (questao) {[m
[32m+[m[32m            acertos++;[m
 [m
[31m-            const numeroDaQuestao =[m
[31m-                Number(questao.dataset.questao);[m
[32m+[m[32m        } else {[m
 [m
[31m-            if (numeroDaQuestao === numero) {[m
[32m+[m[32m            resultado.textContent = "Resposta incorreta.";[m
 [m
[31m-                questao.classList.add("ativa");[m
[32m+[m[32m        }[m
 [m
[31m-            } else {[m
 [m
[31m-                questao.classList.remove("ativa");[m
[32m+[m[32m        // Impede mudar a resposta depois da verificaÃ§Ã£o[m
[32m+[m[32m        questao.querySelectorAll([m
[32m+[m[32m            'input[type="radio"]'[m
[32m+[m[32m        ).forEach(function (radio) {[m
 [m
[31m-            }[m
[32m+[m[32m            radio.disabled = true;[m
 [m
         });[m
 [m
 [m
[31m-        numeroQuestao.textContent = numero;[m
[32m+[m[32m        // Esconde o botÃ£o verificar[m
[32m+[m[32m        botao.style.display = "none";[m
 [m
[32m+[m[32m        // Mostra o botÃ£o prÃ³xima[m
[32m+[m[32m        proxima.style.display = "inline-block";[m
 [m
[31m-        const questao =[m
[31m-            document.querySelector([m
[31m-                '.questao[data-questao="' + numero + '"]'[m
[31m-            );[m
[31m-[m
[31m-[m
[31m-        if (questao) {[m
[32m+[m[32m    });[m
 [m
[31m-            questao.scrollIntoView({[m
[31m-                behavior: "smooth",[m
[31m-                block: "start"[m
[31m-            });[m
[32m+[m[32m});[m
 [m
[31m-        }[m
 [m
[31m-    }[m
[32m+[m[32m// =====================================================[m
[32m+[m[32m// PRÃ“XIMA QUESTÃƒO[m
[32m+[m[32m// =====================================================[m
 [m
[32m+[m[32mbotoesProxima.forEach(function (botao) {[m
 [m
[31m-    // =====================================================[m
[31m-    // VERIFICAR RESPOSTA[m
[31m-    // =====================================================[m
[32m+[m[32m    botao.addEventListener("click", function () {[m
 [m
[31m-    function verificarResposta(numero) {[m
[32m+[m[32m        const proxima = Number(botao.dataset.proxima);[m
 [m
[31m-        const resposta =[m
[31m-            document.querySelector([m
[31m-                'input[name="q' + numero + '"]:checked'[m
[31m-            );[m
[32m+[m[32m        // Esconde questÃ£o atual[m
[32m+[m[32m        questoes.forEach(function (questao) {[m
[32m+[m[32m            questao.classList.remove("ativa");[m
[32m+[m[32m        });[m
 [m
 [m
[31m-        const resultado =[m
[31m-            document.getElementById([m
[31m-                "resultadoQ" + numero[m
[31m-            );[m
[32m+[m[32m        // Se ainda existem questÃµes[m
[32m+[m[32m        if (proxima <= 10) {[m
 [m
[32m+[m[32m            questaoAtual = proxima;[m
 [m
[31m-        const questao =[m
[31m-            document.querySelector([m
[31m-                '.questao[data-questao="' + numero + '"]'[m
[32m+[m[32m            const novaQuestao = document.querySelector([m
[32m+[m[32m                '[data-questao="' + proxima + '"]'[m
             );[m
 [m
[32m+[m[32m            novaQuestao.classList.add("ativa");[m
 [m
[31m-        const botaoProxima =[m
[31m-            questao.querySelector(".proximaQuestao");[m
[31m-[m
[31m-[m
[31m-        // ---------------------------------------------[m
[31m-        // NENHUMA RESPOSTA[m
[31m-        // ---------------------------------------------[m
[31m-[m
[31m-        if (!resposta) {[m
[31m-[m
[31m-            resultado.textContent =[m
[31m-                "⚠️ Escolha uma alternativa.";[m
[32m+[m[32m            numeroQuestao.textContent = proxima;[m
 [m
[31m-            resultado.style.color = "#f44336";[m
[31m-[m
[31m-            return;[m
[32m+[m[32m            novaQuestao.scrollIntoView({[m
[32m+[m[32m                behavior: "smooth"[m
[32m+[m[32m            });[m
 [m
         }[m
 [m
[32m+[m[32m        // QuestionÃ¡rio terminou[m
[32m+[m[32m        else {[m
 [m
[31m-        // ---------------------------------------------[m
[31m-        // PRIMEIRA TENTATIVA[m
[31m-        // ---------------------------------------------[m
[31m-[m
[31m-        if (!primeiraResposta.has(numero)) {[m
[31m-[m
[31m-            primeiraResposta.add(numero);[m
[31m-[m
[31m-            if ([m
[31m-                resposta.value ===[m
[31m-                respostasCorretas[numero][m
[31m-            ) {[m
[31m-[m
[31m-                acertos++;[m
[31m-[m
[31m-            }[m
[32m+[m[32m            numeroQuestao.textContent = "10";[m
 [m
[31m-        }[m
[32m+[m[32m            resultadoFinal.style.display = "block";[m
 [m
[32m+[m[32m            textoResultadoFinal.textContent =[m
[32m+[m[32m                "Você acertou " +[m
[32m+[m[32m                acertos +[m
[32m+[m[32m                " de 10 questÃµes.";[m
 [m
[31m-        // ---------------------------------------------[m
[31m-        // RESPOSTA CORRETA[m
[31m-        // ---------------------------------------------[m
[32m+[m[32m            if (acertos === 10) {[m
 [m
[31m-        if ([m
[31m-            resposta.value ===[m
[31m-            respostasCorretas[numero][m
[31m-        ) {[m
[32m+[m[32m                mensagemFinal.textContent =[m
[32m+[m[32m                    " Parabéns! Você acertou todas as questes!";[m
 [m
[31m-            resultado.textContent =[m
[31m-                "✅ Correto! " +[m
[31m-                mensagensCorretas[numero];[m
[32m+[m[32m            } else if (acertos >= 7) {[m
 [m
[31m-            resultado.style.color = "#2e7d32";[m
[32m+[m[32m                mensagemFinal.textContent =[m
[32m+[m[32m                    " Muito bem! Você teve um timo resultado!";[m
 [m
[32m+[m[32m            } else if (acertos >= 5) {[m
 [m
[31m-            // Desabilita as alternativas[m
[31m-            const alternativas =[m
[31m-                document.querySelectorAll([m
[31m-                    'input[name="q' + numero + '"]'[m
[31m-                );[m
[32m+[m[32m                mensagemFinal.textContent =[m
[32m+[m[32m                    "Bom trabalho! Continue estudando para melhorar ainda mais.";[m
 [m
[32m+[m[32m            } else {[m
 [m
[31m-            alternativas.forEach(function (input) {[m
[32m+[m[32m                mensagemFinal.textContent =[m
[32m+[m[32m                    " Continue estudando! Você pode tentar novamente.";[m
 [m
[31m-                input.disabled = true;[m
[32m+[m[32m            }[m
 [m
[32m+[m[32m            resultadoFinal.scrollIntoView({[m
[32m+[m[32m                behavior: "smooth"[m
             });[m
 [m
[31m-[m
[31m-            // Esconde botão verificar[m
[31m-            const botaoVerificar =[m
[31m-                questao.querySelector([m
[31m-                    ".verificarQuestao"[m
[31m-                );[m
[31m-[m
[31m-            botaoVerificar.style.display = "none";[m
[31m-[m
[31m-[m
[31m-            // Mostra botão próxima[m
[31m-            botaoProxima.style.display = "block";[m
[31m-[m
         }[m
 [m
[31m-[m
[31m-        // ---------------------------------------------[m
[31m-        // RESPOSTA ERRADA[m
[31m-        // ---------------------------------------------[m
[31m-[m
[31m-        else {[m
[31m-[m
[31m-            resultado.textContent =[m
[31m-                "❌ Ainda não. Tente novamente!";[m
[31m-[m
[31m-            resultado.style.color = "#f44336";[m
[31m-[m
[31m-        }[m
[31m-[m
[31m-    }[m
[31m-[m
[31m-[m
[31m-    // =====================================================[m
[31m-    // BOTÕES VERIFICAR[m
[31m-    // =====================================================[m
[31m-[m
[31m-    const botoesVerificar =[m
[31m-        document.querySelectorAll(".verificarQuestao");[m
[31m-[m
[31m-[m
[31m-    botoesVerificar.forEach(function (botao) {[m
[31m-[m
[31m-        botao.addEventListener("click", function () {[m
[31m-[m
[31m-            const numero =[m
[31m-                Number(botao.dataset.numero);[m
[31m-[m
[31m-            verificarResposta(numero);[m
[31m-[m
[31m-        });[m
[31m-[m
     });[m
 [m
[32m+[m[32m});[m
 [m
[31m-    // =====================================================[m
[31m-    // BOTÕES PRÓXIMA QUESTÃO[m
[31m-    // =====================================================[m
[31m-[m
[31m-    const botoesProxima =[m
[31m-        document.querySelectorAll(".proximaQuestao");[m
[31m-[m
[31m-[m
[31m-    botoesProxima.forEach(function (botao) {[m
[31m-[m
[31m-        botao.addEventListener("click", function () {[m
[31m-[m
[31m-            const proxima =[m
[31m-                Number(botao.dataset.proxima);[m
[31m-[m
[31m-[m
[31m-            // -----------------------------------------[m
[31m-            // SE TERMINOU[m
[31m-            // -----------------------------------------[m
[31m-[m
[31m-            if (proxima === 11) {[m
[31m-[m
[31m-                mostrarResultadoFinal();[m
 [m
[31m-                return;[m
[32m+[m[32m// =====================================================[m
[32m+[m[32m// REFAZER QUESTIONÃRIO[m
[32m+[m[32m// =====================================================[m
 [m
[31m-            }[m
[32m+[m[32mreiniciarQuestionario.addEventListener("click", function () {[m
 [m
[32m+[m[32m    questaoAtual = 1;[m
[32m+[m[32m    acertos = 0;[m
 [m
[31m-            // -----------------------------------------[m
[31m-            // PRÓXIMA[m
[31m-            // -----------------------------------------[m
 [m
[31m-            questaoAtual = proxima;[m
[32m+[m[32m    // Limpa respostas[m
[32m+[m[32m    document.querySelectorAll([m
[32m+[m[32m        '#areaQuestionario input[type="radio"]'[m
[32m+[m[32m    ).forEach(function (radio) {[m
 [m
[31m-            mostrarQuestao(questaoAtual);[m
[31m-[m
[31m-        });[m
[32m+[m[32m        radio.checked = false;[m
[32m+[m[32m        radio.disabled = false;[m
 [m
     });[m
 [m
 [m
[31m-    // =====================================================[m
[31m-    // MOSTRAR QUESTIONÁRIO[m
[31m-    // =====================================================[m
[32m+[m[32m    // Limpa resultados[m
[32m+[m[32m    document.querySelectorAll([m
[32m+[m[32m        ".resultadoQuestao"[m
[32m+[m[32m    ).forEach(function (resultado) {[m
 [m
[31m-    botaoQuestoes.addEventListener("click", function () {[m
[32m+[m[32m        resultado.textContent = "";[m
 [m
[31m-        areaQuestionario.style.display = "block";[m
[32m+[m[32m    });[m
 [m
[31m-        resultadoFinal.style.display = "none";[m
 [m
[31m-        mostrarQuestao(questaoAtual);[m
[32m+[m[32m    // Esconde todos os botÃµes prÃ³xima[m
[32m+[m[32m    document.querySelectorAll([m
[32m+[m[32m        ".proximaQuestao"[m
[32m+[m[32m    ).forEach(function (botao) {[m
 [m
[31m-        areaQuestionario.scrollIntoView({[m
[31m-            behavior: "smooth"[m
[31m-        });[m
[32m+[m[32m        botao.style.display = "none";[m
 [m
     });[m
 [m
 [m
[31m-    // =====================================================[m
[31m-    // RESULTADO FINAL[m
[31m-    // =====================================================[m
[32m+[m[32m    // Mostra todos os botÃµes verificar[m
[32m+[m[32m    document.querySelectorAll([m
[32m+[m[32m        ".verificarQuestao"[m
[32m+[m[32m    ).forEach(function (botao) {[m
 [m
[31m-    function mostrarResultadoFinal() {[m
[32m+[m[32m        botao.style.display = "inline-block";[m
 [m
[31m-        todasQuestoes.forEach(function (questao) {[m
[32m+[m[32m    });[m
 [m
[31m-            questao.classList.remove("ativa");[m
 [m
[31m-        });[m
[32m+[m[32m    // Esconde resultado final[m
[32m+[m[32m    resultadoFinal.style.display = "none";[m
 [m
 [m
[31m-        areaQuestionario.style.display = "block";[m
[32m+[m[32m    // Mostra questÃ£o 1[m
[32m+[m[32m    questoes.forEach(function (questao) {[m
 [m
[31m-        resultadoFinal.style.display = "block";[m
[32m+[m[32m        questao.classList.remove("ativa");[m
 [m
[32m+[m[32m    });[m
 [m
[31m-        const porcentagem =[m
[31m-            (acertos / 10) * 100;[m
 [m
[32m+[m[32m    document.querySelector([m
[32m+[m[32m        '[data-questao="1"]'[m
[32m+[m[32m    ).classList.add("ativa");[m
 [m
[31m-        textoResultadoFinal.innerHTML =[m
[31m-            "Você acertou <strong>" +[m
[31m-            acertos +[m
[31m-            " de 10 questões</strong> na primeira tentativa.<br><br>" +[m
[31m-            "Aproveitamento: <strong>" +[m
[31m-            porcentagem +[m
[31m-            "%</strong>.";[m
 [m
[32m+[m[32m    numeroQuestao.textContent = "1";[m
 [m
[31m-        if (acertos === 10) {[m
 [m
[31m-            mensagemFinal.textContent =[m
[31m-                "🏆 Excelente! Você acertou todas as questões!";[m
[32m+[m[32m    areaQuestionario.scrollIntoView({[m
[32m+[m[32m        behavior: "smooth"[m
[32m+[m[32m    });[m
 [m
[31m-        } else if (acertos >= 8) {[m
[32m+[m[32m});[m
 [m
[31m-            mensagemFinal.textContent =[m
[31m-                "👏 Muito bem! Parabéns pelo seu empenho!";[m
[32m+[m[41m   [m
 [m
[31m-        } else if (acertos >= 5) {[m
 [m
[31m-            mensagemFinal.textContent =[m
[31m-                "👍 Bom trabalho! Continue praticando e você vai melhorar cada vez mais!";[m
[32m+[m[32m// =====================================================[m
[32m+[m[32m// INFORMAÇÕES[m
[32m+[m[32m// =====================================================[m
 [m
[31m-        } else {[m
[32m+[m[32mconst botaoInfo = document.getElementById("info");[m
[32m+[m[32mconst areaInformacoes = document.getElementById("areaInformacoes");[m
 [m
[31m-            mensagemFinal.textContent =[m
[31m-                "💪 Parabéns pelo seu empenho! Continue praticando. Você está aprendendo!";[m
[32m+[m[32mbotaoInfo.addEventListener("click", function () {[m
 [m
[31m-        }[m
[32m+[m[32m    if (areaInformacoes.style.display === "none") {[m
 [m
[32m+[m[32m        areaInformacoes.style.display = "block";[m
 [m
[31m-        resultadoFinal.scrollIntoView({[m
[31m-            behavior: "smooth",[m
[31m-            block: "center"[m
[32m+[m[32m        areaInformacoes.scrollIntoView({[m
[32m+[m[32m            behavior: "smooth"[m
         });[m
 [m
[31m-    }[m
[31m-[m
[32m+[m[32m    } else {[m
 [m
[31m-    // =====================================================[m
[31m-    // REINICIAR QUESTIONÁRIO[m
[31m-    // =====================================================[m
[32m+[m[32m        areaInformacoes.style.display = "none";[m
 [m
[31m-    reiniciarQuestionario.addEventListener([m
[31m-        "click",[m
[31m-        function () {[m
[31m-[m
[31m-            acertos = 0;[m
[31m-[m
[31m-            questaoAtual = 1;[m
[31m-[m
[31m-            primeiraResposta.clear();[m
[31m-[m
[31m-[m
[31m-            // Limpa respostas[m
[31m-            document[m
[31m-                .querySelectorAll([m
[31m-                    '#areaQuestionario input[type="radio"]'[m
[31m-                )[m
[31m-                .forEach(function (input) {[m
[31m-[m
[31m-                    input.checked = false;[m
[31m-[m
[31m-                    input.disabled = false;[m
[31m-[m
[31m-                });[m
[31m-[m
[31m-[m
[31m-            // Limpa mensagens[m
[31m-            document[m
[31m-                .querySelectorAll(".resultadoQuestao")[m
[31m-                .forEach(function (resultado) {[m
[31m-[m
[31m-                    resultado.textContent = "";[m
[31m-[m
[31m-                });[m
[31m-[m
[31m-[m
[31m-            // Mostra novamente os botões[m
[31m-            document[m
[31m-                .querySelectorAll(".verificarQuestao")[m
[31m-                .forEach(function (botao) {[m
[31m-[m
[31m-                    botao.style.display = "block";[m
[31m-[m
[31m-                });[m
[31m-[m
[31m-[m
[31m-            // Esconde todos os botões próximos[m
[31m-            document[m
[31m-                .querySelectorAll(".proximaQuestao")[m
[31m-                .forEach(function (botao) {[m
[31m-[m
[31m-                    botao.style.display = "none";[m
[31m-[m
[31m-                });[m
[31m-[m
[31m-[m
[31m-            resultadoFinal.style.display = "none";[m
[31m-[m
[31m-[m
[31m-            mostrarQuestao(1);[m
[31m-[m
[31m-        }[m
[31m-    );[m
[31m-[m
[31m-[m
[31m-    // =====================================================[m
[31m-    // INÍCIO[m
[31m-    // =====================================================[m
[31m-[m
[31m-    todasQuestoes.forEach(function (questao) {[m
[31m-[m
[31m-        questao.classList.remove("ativa");[m
[31m-[m
[31m-    });[m
[32m+[m[32m    }[m
 [m
[31m-});[m
\ No newline at end of file[m
[32m+[m[32m});[m
