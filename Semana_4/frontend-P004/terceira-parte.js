function criarCard(){
    const nome = document.getElementById('cidade').value
    const roteiro1 = document.getElementById('roteiro1').value
    const roteiro2 = document.getElementById('roteiro2').value
    const roteiro3 = document.getElementById('roteiro3').value
    const preco = document.getElementById('preco').value
    const imagem = document.getElementById('imagemUrl').value

    
    var cardHtml = document.createElement("div");
    var imageHtml = document.createElement("img");
    var h3Html = document.createElement("h3");
    var divRoteiros = document.createElement("div")
    var divRoteiro1 = document.createElement("div")
    var divRoteiro2 = document.createElement("div")
    var divRoteiro3 = document.createElement("div")
    var pRoteiro1 = document.createElement("p")
    var pRoteiro2 = document.createElement("p")
    var pRoteiro3 = document.createElement("p")
    var divPreco = document.createElement("div")
    var h1Preco = document.createElement("h1")
    var botaoHtml = document.createElement("button");

    cardHtml.setAttribute("class", "card");

    imageHtml.src = imagem;
    imageHtml.setAttribute("class", "image-card");
    imageHtml.alt = `imagem aérea de ${nome}`
    cardHtml.appendChild(imageHtml);

    h3Html.innerHTML = nome;
    h3Html.setAttribute("class", "h3-card");
    cardHtml.appendChild(h3Html);

    pRoteiro1.innerHTML = roteiro1
    pRoteiro1.setAttribute("class", "item-lista-card")
    divRoteiro1.appendChild(pRoteiro1)
    divRoteiros.appendChild(divRoteiro1)

    pRoteiro2.innerHTML = roteiro2
    pRoteiro2.setAttribute("class", "item-lista-card")
    divRoteiro2.appendChild(pRoteiro2)
    divRoteiros.appendChild(divRoteiro2)

    pRoteiro3.innerHTML = roteiro3
    pRoteiro3.setAttribute("class", "item-lista-card")
    divRoteiro3.appendChild(pRoteiro3)
    divRoteiros.appendChild(divRoteiro3)

    cardHtml.appendChild(divRoteiros);

    h1Preco.innerHTML = `R$${preco},00`
    divPreco.setAttribute("class", "rodape-card")
    divPreco.appendChild(h1Preco)
    cardHtml.appendChild(divPreco);

    botaoHtml.setAttribute("class", "botao-card");
    botaoHtml.innerHTML = `<a href="#">Comprar</a>`;
    cardHtml.appendChild(botaoHtml);

    var cards = document.querySelector(".cards")
    cards.appendChild(cardHtml)    
}