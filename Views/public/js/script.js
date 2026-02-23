
document.querySelectorAll(".curso").forEach(curso => {
    const preco = parseFloat(curso.dataset.preco);
    const vagasDisponiveis = parseInt(curso.dataset.vagas);

    const quantidadeInput = curso.querySelector(".quantidade");
    const totalGeral = curso.querySelector(".total");
    const vagasGeral = curso.querySelector(".vagas");
    const botaoConfirmar = curso.querySelector(".btn-confirmar");

    vagasGeral.textContent = vagasDisponiveis;
    quantidadeInput.max = vagasDisponiveis;
    quantidadeInput.value = 1;

    function atualizarTotal(){
        let quantidade = parseInt(quantidadeInput.value);

        if(quantidade > vagasDisponiveis){
            quantidade = vagasDisponiveis;

        }

        quantidade.value = quantidade;

        const totalAtual = preco * quantidade;

        totalGeral.textContent = totalAtual.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });

        total.textContent = totalAtual;
    }

    botaoConfirmar.addEventListener("click", () => {
        const qtd = quantidadeInput.value;
        const valorFinal = totalGeral.textContent;

        if (qtd > 0) {
            alert(`Sucesso! Vagas selecionadas: ${qtd}\nValor Total: ${valorFinal}`);
        } else {
            alert("Por favor, selecione pelo menos 1 vaga.");
        }
    });

    quantidadeInput.addEventListener("input", atualizarTotal);

    atualizarTotal();
});

