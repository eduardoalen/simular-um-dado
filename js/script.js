const botao = document.getElementById('rolar-botao');

const dado = document.getElementById('dado');

const historicoRolagem = document.getElementById('historico-rolagem');

let historicoLista = [];

botao.addEventListener("click", adicionarAnimacao);

function adicionarAnimacao() {
    dado.classList.add("rolar-animacao");

    setTimeout(() => {dado.classList.remove("rolar-animacao"); 
    rolarDado();
    }, 1000); // remove o classe em um 1 segundo
}

function rolarDado() {
    const rolarResultado = Math.floor(Math.random() * 6) + 1 //gera numeros inteiros de 1 a 6
    const mostrarDado = getMostrarDado(rolarResultado);
    dado.innerHTML = mostrarDado;
    
    historicoLista.push(rolarResultado)
    atualizarHistoricoDado();
}

function atualizarHistoricoDado(){
    historicoRolagem.innerHTML = "";
    for(let i = 0; i<historicoLista.length; i++){
        const itemLista = document.createElement("li");
        itemLista.innerHTML = `Giro ${i + 1}: <span>${getMostrarDado(historicoLista[i])}</span>`;
        historicoRolagem.appendChild(itemLista); //adiciona o item dentro da ul
    }
}

function getMostrarDado(rolarResultado){
    switch(rolarResultado){
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
        default:
            return "";
    }
}