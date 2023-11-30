// Mudança de cor {
    let cores = [
        "blue", "red", "green",
        "yellow", "purple", "orange",
        "pink", "brown", "black",
        "white", "gray", "violet"
    ];

    let div_box = document.querySelector("div");
    let h1 = document.querySelector("h1");
    let botao = document.querySelector("button");
    let cont = 0;

    botao.addEventListener("click", () => {
        let cor = cores[Math.floor(Math.random() * cores.length)];
        if (cor == "white" || cor == "yellow") {
            h1.style.color = "black";
        } else if (cor == "black") {
            h1.style.color = "white";
        }
        div_box.style.backgroundColor = cor;
    })
// }