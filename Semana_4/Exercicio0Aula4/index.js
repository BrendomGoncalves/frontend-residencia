let listaDeTarefas = []
let input = document.querySelector("input")
let botao = document.querySelector("button")
let ul = document.querySelector("ul")

if (localStorage.getItem('listaDeTarefas')) {
    listaDeTarefas = JSON.parse(localStorage.getItem('listaDeTarefas'));
    carregarTarefas();
}
botao.addEventListener("click", () => {
    if (input.value == null || input.value == "") {
        alert("Digite algo");
    } else {
        let tarefa = input.value;
        listaDeTarefas.push(tarefa);
        input.value = "";
        carregarTarefas();
        salvarTarefas();
    }
});
function carregarTarefas() {
    ul.innerHTML = "";
    for (let tarefa of listaDeTarefas) {
        let li = document.createElement("li");
        li.innerText = tarefa;
        ul.appendChild(li);
    }
}
function salvarTarefas() {
    localStorage.setItem('listaDeTarefas', JSON.stringify(listaDeTarefas));
}