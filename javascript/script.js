const listaDePersonagens = document.querySelectorAll(".personagem");

listaDePersonagens.forEach(personagem => {
    personagem.addEventListener("mouseenter", () => {
        evidenciarSelecionado(personagem);

        trocaImagemPersonagemGrande(personagem);

        trocarNomeDoPersonagem(personagem);

        trocaDescricaoDoPersonagem(personagem);

    });

});

function evidenciarSelecionado(personagem) {
    const personagemSelecionado = document.querySelector(".selecionado");
    personagemSelecionado.classList.remove("selecionado");

    personagem.classList.add("selecionado");
}

function trocaImagemPersonagemGrande(personagem) {
    const personagemGrande = document.querySelector(".personagem-grande");

    const idDoPersonagem = personagem.getAttribute("id");
    personagemGrande.src = `../imagens/card-${idDoPersonagem}.png`;
}

function trocarNomeDoPersonagem(personagem) {
    const mostrarNomePersonagem = document.getElementById("nome-personagem");

    const nomeDoPersonagem = personagem.getAttribute("data-name");
    mostrarNomePersonagem.innerHTML = nomeDoPersonagem;
}

function trocaDescricaoDoPersonagem(personagem) {
    const descricao = document.getElementById("descricao-personagem");

    const descricaoDoPersonagem = personagem.getAttribute("data-description");
    descricao.innerHTML = descricaoDoPersonagem;
}