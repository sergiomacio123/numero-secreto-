let numeroSecret = gerarNumeroAleatorio();
let tentativas = 1
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'jogo do número secreto');
exibirTextoNaTela('p1', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecret) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com 
        ${tentativas} ${palavraTentativa}!`;        
        exibirTextoNaTela('p', mensagemTentativas);
    } else{
        if(chute > numeroSecret) {
            exibirTextoNaTela('p', `O nuúmero secreto é menor que ${chute}`);
    } else { 
        exibirTextoNaTela('p', `O número secreto é maior que ${chute}`);
    }
    
    tentativas++;
    limparCampo();
}
}
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}
function limparCampo() { 
    chute = document.querySelector('input');
    chute.value = '';
}v