let listaDeNumerosSorteados = [];
let numeroLimite = 50;
let numeroSecret = gerarNumeroAleatorio();
let tentativas = 1

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});

}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'jogo do número secreto');
    exibirTextoNaTela('p1', 'Escolha um número entre 1 e 10');

} 

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecret) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com 
        ${tentativas} ${palavraTentativa}!`;        
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
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
    let numeroEscolhido =  parseInt(Math.random() *numeroLimite +1);
    let quantidadeDeEelementosNaLista = listaDeNumerosSorteados.length;
    
    if (quantidadeDeEelementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
        
    
}
function limparCampo() { 
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecret = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}