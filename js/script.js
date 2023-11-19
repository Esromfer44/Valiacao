const element = (v) => document.getElementById(v);

let personagem, mensagem;

const estados = [
    ["Pensativo", "zzzzzzzzzz!!!"],
    ["Assustado", "O que você quer?"],
    ["Nervoso", "Não me aperte!!!"],
    ["Alegre", ""],
];

function carregar() {
    personagem = element("personagem");
    mensagem = element("mensagem");

    // Define a imagem inicial ao carregar a página
    alterarImagem(0);
}

function alterarImagem(i, msg) {
    personagem.src = `imagens/${estados[i][0]}.png`;
    mensagem.innerHTML = msg || estados[i][1];
}

function alegre() {
    const nome = prompt("Qual é o seu nome?");
    if (nome) {
        alterarImagem(3, `${nome}, vamos brincar?`);
    } else {
        alterarImagem(3, "Vamos brincar?");
    }
}
