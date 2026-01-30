let notas = [];
let input = document.querySelector(".input");
let textArea = document.querySelector("#textarea");

function adicionar_nota(){
    let valor = input.value.replace(',','.').trim(); 

    if(valor === "") { 
        alert("Por favor, insira uma nota.");
        return;
    }

    let nota = Number(valor);

    if (nota != nota|| nota < 0 || nota > 10) {
        alert("A nota digitada é inválida, por favor, insira uma nota válida.");
        return;
    }
    
    notas.push(nota);
    textArea.value += `A nota ${notas.length} foi ${nota}\n`;
    input.value = "";
}
let ad_btn = document.querySelector("#ad-btn");
ad_btn.addEventListener("click", adicionar_nota);

function calcular_media(){
    if(notas.length === 0){
        alert("Nenhuma nota foi adicionada ainda.");
        return;
    }

    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    let media = soma/ notas.length;
    document.querySelector("#result").textContent = `A média é: ${media.toFixed(2)}`;
}

let calc_btn = document.querySelector("#calc-btn");
calc_btn.addEventListener("click", calcular_media);