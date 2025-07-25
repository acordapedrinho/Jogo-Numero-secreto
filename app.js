// let titulo =document.querySelector('h1');
// //seleciona o elemento h1 
// titulo.innerHTML='jogo do numero';

// let paragrafo = document.querySelector('p');
// //seleciona o elemento p
// paragrafo.innerHTML='Adivinhe o numero que estou pensando entre 0 e 10';

// funcao que melhorar o codigo a cima

let listaDeNumerosSorteados=[];
let tentativas=1;
let numeroLimiteSorteio=10;
let numeroAleatorio =gerarNumeroAleatorio();

function exibirMensagemInicial(){

    exibirTextoNaTela('h1', 'Jogo do Número');
    exibirTextoNaTela('p', 'Adivinhe o número que estou pensando entre 0 e 10');
}
exibirMensagemInicial();  



function exibirTextoNaTela(tag, texto) {
let campo =document.querySelector(tag);
campo.innerHTML=texto;
// reponsive.speak(texto,'Brazilian Portuguese Female', {rate: 1.2});
}

exibirTextoNaTela('h1', 'Jogo do Número');
exibirTextoNaTela('p', 'Adivinhe o número que estou pensando entre 0 e 10');

function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == numeroAleatorio){
        exibirTextoNaTela('h1', 'Parabéns, você acertou!');
        let palavraTentativa=tentativas >1 ? 'Tentativas' : 'Tentativa';
        let mensagemTentativas=`voce descobriu o numero ' + numeroAleatorio ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute> numeroAleatorio){ 
            exibirTextoNaTela('p','o Numero secreto e menor');

         } else {
            exibirTextoNaTela('p','o Numero secreto e maior');
            }
        tentativas++;     
        limparcampo();
    }
   
        
}
function gerarNumeroAleatorio() {
   let numerosEscolhido= parseInt(Math.random() * numeroLimiteSorteio +1);
   let qauntiadeDeElementosNaLista=listaDeNumerosSorteados.length;

   if(qauntiadeDeElementosNaLista ==numeroLimiteSorteio){
    listaDeNumerosSorteados = [];
   }




    if (listaDeNumerosSorteados.includes(numerosEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numerosEscolhido);
        console.log(listaDeNumerosSorteados);
        return numerosEscolhido;
    }

   
}
function limparcampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reniciarJogo(){
    numeroAleatorio= gerarNumeroAleatorio();
    limparcampo();
    tentativas=1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);


}

