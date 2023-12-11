
var cards = document.querySelectorAll(".card")

function capturar(n) {
    let nome = cards[n].querySelector(".h3-card").textContent
    let preco = cards[n].querySelector(".rodape-card").children[0].textContent
    let roteiro = cards[n].querySelectorAll(".item-lista-card")

    alert("Nome: " + nome + "\nPreço: " + preco + "\nRoteiro: " + roteiro[0].textContent + ", " + roteiro[1].textContent + ", " + roteiro[2].textContent)
}