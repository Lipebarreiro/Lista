let convidados = [];
let ul = document.getElementById("lista");

function cadastra_convidado() {
    let p = document.getElementById("i_convidado").value;
    if (p) {
        convidados.push(p);
        document.getElementById("i_convidado").value = "";
        desenha_lista();
    } else {
        alert("Por favor, insira o nome do convidado.");
    }
}

function desenha_lista() {
    ul.innerHTML = "";
    for (let i = 0; i < convidados.length; i++) {
        ul.innerHTML += `<li>${convidados[i]} <button onclick="remove_convidado(${i})">Remover</button></li>`;
    }
}

function remove_convidado(index) {
    convidados.splice(index, 1);
    desenha_lista();
}
