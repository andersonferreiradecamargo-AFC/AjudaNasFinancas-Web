document.addEventListener("DOMContentLoaded", function () {


    // =====================================================
    // CAMPOS DA CALCULADORA
    // =====================================================

    const capital = document.getElementById("capital");
    const taxa = document.getElementById("taxa");
    const tempo = document.getElementById("tempo");
    const juros = document.getElementById("juros");
    const montante = document.getElementById("montante");

    const calcular = document.getElementById("calcular");
    const limpar = document.getElementById("limpar");

    const simples = document.getElementById("simples");
    const compostos = document.getElementById("compostos");


    function vazio(campo) {
        return campo.value === "";
    }


    // =====================================================
    // LIMPAR CALCULADORA
    // =====================================================

    limpar.addEventListener("click", function () {

        capital.value = "";
        taxa.value = "";
        tempo.value = "";
        juros.value = "";
        montante.value = "";

    });


    // =====================================================
    // CALCULADORA
    // =====================================================

    calcular.addEventListener("click", function () {


        // =================================================
        // JUROS SIMPLES
        // =================================================

        if (simples.checked) {

            let c = Number(capital.value);
            let i = Number(taxa.value) / 100;
            let t = Number(tempo.value);
            let j = Number(juros.value);
            let m = Number(montante.value);


            // Capital + Taxa + Tempo
            if (
                capital.value !== "" &&
                taxa.value !== "" &&
                tempo.value !== "" &&
                vazio(juros)
            ) {

                j = c * i * t;
                juros.value = j.toFixed(2);

            }


            // Capital + Taxa + Tempo
            // calcula também montante
            if (
                capital.value !== "" &&
                taxa.value !== "" &&
                tempo.value !== "" &&
                vazio(montante)
            ) {

                j = c * i * t;
                m = c + j;

                montante.value = m.toFixed(2);

            }


            // Montante = Capital + Juros
            if (
                vazio(montante) &&
                capital.value !== "" &&
                juros.value !== ""
            ) {

                c = Number(capital.value);
                j = Number(juros.value);

                montante.value = (c + j).toFixed(2);

            }


            // Juros = Montante - Capital
            if (
                vazio(juros) &&
                capital.value !== "" &&
                montante.value !== ""
            ) {

                c = Number(capital.value);
                m = Number(montante.value);

                juros.value = (m - c).toFixed(2);

            }


            // Tempo
            if (
                vazio(tempo) &&
                capital.value !== "" &&
                taxa.value !== "" &&
                juros.value !== ""
            ) {

                c = Number(capital.value);
                i = Number(taxa.value) / 100;
                j = Number(juros.value);

                if (c !== 0 && i !== 0) {

                    t = j / (c * i);

                    tempo.value = t.toFixed(2);

                }

            }


            // Taxa
            if (
                vazio(taxa) &&
                capital.value !== "" &&
                tempo.value !== "" &&
                juros.value !== ""
            ) {

                c = Number(capital.value);
                t = Number(tempo.value);
                j = Number(juros.value);

                if (c !== 0 && t !== 0) {

                    i = j / (c * t);

                    taxa.value = (i * 100).toFixed(2);

                }

            }


            // Capital
            if (
                vazio(capital) &&
                taxa.value !== "" &&
                tempo.value !== "" &&
                juros.value !== ""
            ) {

                i = Number(taxa.value) / 100;
                t = Number(tempo.value);
                j = Number(juros.value);

                if (i !== 0 && t !== 0) {

                    c = j / (i * t);

                    capital.value = c.toFixed(2);

                }

            }


            // Capital pelo montante
            if (
                vazio(capital) &&
                taxa.value !== "" &&
                tempo.value !== "" &&
                montante.value !== ""
            ) {

                i = Number(taxa.value) / 100;
                t = Number(tempo.value);
                m = Number(montante.value);

                c = m / (1 + i * t);

                capital.value = c.toFixed(2);

            }

        }


        // =================================================
        // JUROS COMPOSTOS
        // =================================================

        if (compostos.checked) {

            let c = Number(capital.value);
            let i = Number(taxa.value) / 100;
            let t = Number(tempo.value);
            let j = Number(juros.value);
            let m = Number(montante.value);


            // Capital + Taxa + Tempo
            if (
                capital.value !== "" &&
                taxa.value !== "" &&
                tempo.value !== ""
            ) {

                c = Number(capital.value);
                i = Number(taxa.value) / 100;
                t = Number(tempo.value);

                m = c * Math.pow(1 + i, t);

                if (vazio(montante)) {

                    montante.value = m.toFixed(2);

                }

                if (vazio(juros)) {

                    j = m - c;

                    juros.value = j.toFixed(2);

                }

            }


            // Juros pelo montante
            if (
                vazio(juros) &&
                capital.value !== "" &&
                montante.value !== ""
            ) {

                c = Number(capital.value);
                m = Number(montante.value);

                j = m - c;

                juros.value = j.toFixed(2);

            }


            // Montante pelo capital + juros
            if (
                vazio(montante) &&
                capital.value !== "" &&
                juros.value !== ""
            ) {

                c = Number(capital.value);
                j = Number(juros.value);

                m = c + j;

                montante.value = m.toFixed(2);

            }


            // Capital pelo montante
            if (
                vazio(capital) &&
                montante.value !== "" &&
                taxa.value !== "" &&
                tempo.value !== ""
            ) {

                m = Number(montante.value);
                i = Number(taxa.value) / 100;
                t = Number(tempo.value);

                c = m / Math.pow(1 + i, t);

                capital.value = c.toFixed(2);

            }


            // Capital pelos juros
            if (
                vazio(capital) &&
                juros.value !== "" &&
                taxa.value !== "" &&
                tempo.value !== ""
            ) {

                j = Number(juros.value);
                i = Number(taxa.value) / 100;
                t = Number(tempo.value);

                let divisor =
                    Math.pow(1 + i, t) - 1;

                if (divisor !== 0) {

                    c = j / divisor;

                    capital.value = c.toFixed(2);

                }

            }


            // Taxa
            if (
                vazio(taxa) &&
                capital.value !== "" &&
                montante.value !== "" &&
                tempo.value !== ""
            ) {

                c = Number(capital.value);
                m = Number(montante.value);
                t = Number(tempo.value);

                if (c !== 0 && t !== 0) {

                    i = Math.pow(m / c, 1 / t) - 1;

                    taxa.value = (i * 100).toFixed(2);

                }

            }


            // Tempo
            if (
                vazio(tempo) &&
                capital.value !== "" &&
                montante.value !== "" &&
                taxa.value !== ""
            ) {

                c = Number(capital.value);
                m = Number(montante.value);
                i = Number(taxa.value) / 100;

                if (
                    c !== 0 &&
                    i !== 0 &&
                    m > 0 &&
                    c > 0
                ) {

                    t =
                        Math.log(m / c) /
                        Math.log(1 + i);

                    tempo.value = t.toFixed(2);

                }

            }

        }

    });


    // =====================================================
    // AJUDA DOS CAMPOS
    // =====================================================

    document.getElementById("labelCapital").addEventListener(
        "click",
        function () {

            alert(
                "CAPITAL\n\n" +
                "É o valor inicial de uma aplicação ou empréstimo.\n\n" +
                "Exemplo: se você aplicar R$ 600,00, o capital é R$ 600,00."
            );

        }
    );


    document.getElementById("labelTaxa").addEventListener(
        "click",
        function () {

            alert(
                "TAXA DE JUROS\n\n" +
                "É a porcentagem usada para calcular os juros.\n\n" +
                "Exemplo: uma taxa de 2% ao mês significa que a cada mês os juros são calculados usando 2%."
            );

        }
    );


    document.getElementById("labelTempo").addEventListener(
        "click",
        function () {

            alert(
                "TEMPO\n\n" +
                "É o período durante o qual o dinheiro fica aplicado ou emprestado.\n\n" +
                "Pode ser contado em meses, anos, dias ou outro período definido na questão."
            );

        }
    );


    document.getElementById("labelJuros").addEventListener(
        "click",
        function () {

            alert(
                "JUROS\n\n" +
                "É o valor que representa o ganho ou o custo gerado pelo dinheiro durante o período da aplicação ou empréstimo.\n\n" +
                "Exemplo: se você aplicou R$ 600,00 e recebeu R$ 60,00 de juros, o valor dos juros é R$ 60,00."
            );

        }
    );


    document.getElementById("labelMontante").addEventListener(
        "click",
        function () {

            alert(
                "MONTANTE\n\n" +
                "É o valor total obtido ao final da aplicação ou empréstimo.\n\n" +
                "O montante é formado pelo Capital + Juros."
            );

        }
    );


    // =====================================================
    // AJUDA JUROS SIMPLES
    // =====================================================

    simples.addEventListener("click", function () {

        alert(
            "JUROS SIMPLES\n\n" +
            "Nos juros simples, os juros são calculados sempre sobre o capital inicial."
        );

    });


    // =====================================================
    // AJUDA JUROS COMPOSTOS
    // =====================================================

    compostos.addEventListener("click", function () {

        alert(
            "JUROS COMPOSTOS\n\n" +
            "Nos juros compostos, os juros de cada período são incorporados ao valor acumulado.\n\n" +
            "É o famoso sistema de juros sobre juros."
        );

    });


    // =====================================================
    // INFORMAÇÕES
    // =====================================================

    document.getElementById("info").addEventListener(
        "click",
        function () {

            alert(
                "AJUDA NAS FINANÇAS\n\n" +
                "Como usar a calculadora:\n\n" +
                "1. Escolha entre Juros Simples ou Juros Compostos.\n\n" +
                "2. Digite os valores que você já conhece.\n\n" +
                "3. Deixe vazio o valor que deseja descobrir.\n\n" +
                "4. Clique em CALCULAR.\n\n" +
                "A calculadora pode descobrir Capital, Taxa, Tempo, Juros ou Montante."
            );

        }
    );


    // =====================================================
    // QUESTIONÁRIO
    // =====================================================

    const botaoQuestoes =
        document.getElementById("questoes");

    const areaQuestionario =
        document.getElementById("areaQuestionario");

    const todasQuestoes =
        document.querySelectorAll(".questao");

    const numeroQuestao =
        document.getElementById("numeroQuestao");

    const resultadoFinal =
        document.getElementById("resultadoFinal");

    const textoResultadoFinal =
        document.getElementById("textoResultadoFinal");

    const mensagemFinal =
        document.getElementById("mensagemFinal");

    const reiniciarQuestionario =
        document.getElementById("reiniciarQuestionario");


    // =====================================================
    // RESPOSTAS CORRETAS
    // =====================================================

    const respostasCorretas = {

        1: "b",
        2: "b",
        3: "b",
        4: "b",
        5: "b",
        6: "b",
        7: "b",
        8: "b",
        9: "b",
        10: "c"

    };


    // =====================================================
    // MENSAGENS
    // =====================================================

    const mensagensCorretas = {

        1: "Os juros são R$ 30,00.",

        2: "O montante é R$ 1.040,40.",

        3: "Os juros são R$ 96,00.",

        4: "O montante é R$ 540,80.",

        5: "Os juros são R$ 60,00.",

        6: "O montante é R$ 1.060,90.",

        7: "Os juros são R$ 100,00.",

        8: "O montante é aproximadamente R$ 520,20.",

        9: "O montante é R$ 440,00.",

        10: "O montante é aproximadamente R$ 1.061,21."

    };


    // =====================================================
    // CONTROLE
    // =====================================================

    let questaoAtual = 1;

    let acertos = 0;

    const primeiraResposta = new Set();


    // =====================================================
    // MOSTRAR QUESTÃO
    // =====================================================

    function mostrarQuestao(numero) {

        todasQuestoes.forEach(function (questao) {

            const numeroDaQuestao =
                Number(questao.dataset.questao);

            if (numeroDaQuestao === numero) {

                questao.classList.add("ativa");

            } else {

                questao.classList.remove("ativa");

            }

        });


        numeroQuestao.textContent = numero;


        const questao =
            document.querySelector(
                '.questao[data-questao="' + numero + '"]'
            );


        if (questao) {

            questao.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    }


    // =====================================================
    // VERIFICAR RESPOSTA
    // =====================================================

    function verificarResposta(numero) {

        const resposta =
            document.querySelector(
                'input[name="q' + numero + '"]:checked'
            );


        const resultado =
            document.getElementById(
                "resultadoQ" + numero
            );


        const questao =
            document.querySelector(
                '.questao[data-questao="' + numero + '"]'
            );


        const botaoProxima =
            questao.querySelector(".proximaQuestao");


        // ---------------------------------------------
        // NENHUMA RESPOSTA
        // ---------------------------------------------

        if (!resposta) {

            resultado.textContent =
                "⚠️ Escolha uma alternativa.";

            resultado.style.color = "#f44336";

            return;

        }


        // ---------------------------------------------
        // PRIMEIRA TENTATIVA
        // ---------------------------------------------

        if (!primeiraResposta.has(numero)) {

            primeiraResposta.add(numero);

            if (
                resposta.value ===
                respostasCorretas[numero]
            ) {

                acertos++;

            }

        }


        // ---------------------------------------------
        // RESPOSTA CORRETA
        // ---------------------------------------------

        if (
            resposta.value ===
            respostasCorretas[numero]
        ) {

            resultado.textContent =
                "✅ Correto! " +
                mensagensCorretas[numero];

            resultado.style.color = "#2e7d32";


            // Desabilita as alternativas
            const alternativas =
                document.querySelectorAll(
                    'input[name="q' + numero + '"]'
                );


            alternativas.forEach(function (input) {

                input.disabled = true;

            });


            // Esconde botão verificar
            const botaoVerificar =
                questao.querySelector(
                    ".verificarQuestao"
                );

            botaoVerificar.style.display = "none";


            // Mostra botão próxima
            botaoProxima.style.display = "block";

        }


        // ---------------------------------------------
        // RESPOSTA ERRADA
        // ---------------------------------------------

        else {

            resultado.textContent =
                "❌ Ainda não. Tente novamente!";

            resultado.style.color = "#f44336";

        }

    }


    // =====================================================
    // BOTÕES VERIFICAR
    // =====================================================

    const botoesVerificar =
        document.querySelectorAll(".verificarQuestao");


    botoesVerificar.forEach(function (botao) {

        botao.addEventListener("click", function () {

            const numero =
                Number(botao.dataset.numero);

            verificarResposta(numero);

        });

    });


    // =====================================================
    // BOTÕES PRÓXIMA QUESTÃO
    // =====================================================

    const botoesProxima =
        document.querySelectorAll(".proximaQuestao");


    botoesProxima.forEach(function (botao) {

        botao.addEventListener("click", function () {

            const proxima =
                Number(botao.dataset.proxima);


            // -----------------------------------------
            // SE TERMINOU
            // -----------------------------------------

            if (proxima === 11) {

                mostrarResultadoFinal();

                return;

            }


            // -----------------------------------------
            // PRÓXIMA
            // -----------------------------------------

            questaoAtual = proxima;

            mostrarQuestao(questaoAtual);

        });

    });


    // =====================================================
    // MOSTRAR QUESTIONÁRIO
    // =====================================================

    botaoQuestoes.addEventListener("click", function () {

        areaQuestionario.style.display = "block";

        resultadoFinal.style.display = "none";

        mostrarQuestao(questaoAtual);

        areaQuestionario.scrollIntoView({
            behavior: "smooth"
        });

    });


    // =====================================================
    // RESULTADO FINAL
    // =====================================================

    function mostrarResultadoFinal() {

        todasQuestoes.forEach(function (questao) {

            questao.classList.remove("ativa");

        });


        areaQuestionario.style.display = "block";

        resultadoFinal.style.display = "block";


        const porcentagem =
            (acertos / 10) * 100;


        textoResultadoFinal.innerHTML =
            "Você acertou <strong>" +
            acertos +
            " de 10 questões</strong> na primeira tentativa.<br><br>" +
            "Aproveitamento: <strong>" +
            porcentagem +
            "%</strong>.";


        if (acertos === 10) {

            mensagemFinal.textContent =
                "🏆 Excelente! Você acertou todas as questões!";

        } else if (acertos >= 8) {

            mensagemFinal.textContent =
                "👏 Muito bem! Parabéns pelo seu empenho!";

        } else if (acertos >= 5) {

            mensagemFinal.textContent =
                "👍 Bom trabalho! Continue praticando e você vai melhorar cada vez mais!";

        } else {

            mensagemFinal.textContent =
                "💪 Parabéns pelo seu empenho! Continue praticando. Você está aprendendo!";

        }


        resultadoFinal.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }


    // =====================================================
    // REINICIAR QUESTIONÁRIO
    // =====================================================

    reiniciarQuestionario.addEventListener(
        "click",
        function () {

            acertos = 0;

            questaoAtual = 1;

            primeiraResposta.clear();


            // Limpa respostas
            document
                .querySelectorAll(
                    '#areaQuestionario input[type="radio"]'
                )
                .forEach(function (input) {

                    input.checked = false;

                    input.disabled = false;

                });


            // Limpa mensagens
            document
                .querySelectorAll(".resultadoQuestao")
                .forEach(function (resultado) {

                    resultado.textContent = "";

                });


            // Mostra novamente os botões
            document
                .querySelectorAll(".verificarQuestao")
                .forEach(function (botao) {

                    botao.style.display = "block";

                });


            // Esconde todos os botões próximos
            document
                .querySelectorAll(".proximaQuestao")
                .forEach(function (botao) {

                    botao.style.display = "none";

                });


            resultadoFinal.style.display = "none";


            mostrarQuestao(1);

        }
    );


    // =====================================================
    // INÍCIO
    // =====================================================

    todasQuestoes.forEach(function (questao) {

        questao.classList.remove("ativa");

    });

});