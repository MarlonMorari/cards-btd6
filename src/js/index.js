
    const listaSelecaoBloonstd = document.querySelectorAll(".bloonstd");

    listaSelecaoBloonstd.forEach(bloonstd =>{
        bloonstd.addEventListener("click", () => {
            const cartaoBloonstdAberto = document.querySelector(".aberto");
            cartaoBloonstdAberto.classList.remove("aberto");
            const idBloonstdSelecionado = bloonstd.attributes.id.value;
            const idDoCartaoBloonstdParaAbrir = "cartao-" + idBloonstdSelecionado;
            const cartaoBloonstdParaAbrir = document.getElementById(idDoCartaoBloonstdParaAbrir);
            cartaoBloonstdParaAbrir.classList.add("aberto");
            const bloonstdAtivoNaListagem = document.querySelector(".ativo");
            bloonstdAtivoNaListagem.classList.remove("ativo");
            const bloonstdSelecionadoNaListagem = document.getElementById(idBloonstdSelecionado);
            bloonstdSelecionadoNaListagem.classList.add("ativo");
        })
    })
