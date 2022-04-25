var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');

mudarJogador('X');

function selecionarBloco(id){
    if(vencedor !== null){
        return;
    }

    var bloco = document.getElementById(id);

    if(bloco.innerHTML !== '-'){
        return;
    }

    bloco.innerHTML = jogador;
    bloco.style.color = '#000';

    if(jogador === 'X'){
        jogador = 'O';
    }else{
        jogador = 'X';
    }

    mudarJogador(jogador);
    checkVencedor();
}

function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checkVencedor(){
    var bloco1 = document.getElementById(1);
    var bloco2 = document.getElementById(2);
    var bloco3 = document.getElementById(3);
    var bloco4 = document.getElementById(4);
    var bloco5 = document.getElementById(5);
    var bloco6 = document.getElementById(6);
    var bloco7 = document.getElementById(7);
    var bloco8 = document.getElementById(8);
    var bloco9 = document.getElementById(9);

    if(checkSequencia(bloco1, bloco2, bloco3)){
        changeColor(bloco1, bloco2, bloco3);
        changeVencedor(bloco1);
        return;
    }

    if(checkSequencia(bloco4, bloco5, bloco6)){
        changeColor(bloco4, bloco5, bloco6);
        changeVencedor(bloco4);
        return;
    }

    if(checkSequencia(bloco7, bloco8, bloco9)){
        changeColor(bloco7, bloco8, bloco9);
        changeVencedor(bloco7);
        return;
    }

    if(checkSequencia(bloco1, bloco4, bloco7)){
        changeColor(bloco1, bloco4, bloco7);
        changeVencedor(bloco1);
        return;
    }

    if(checkSequencia(bloco5, bloco2, bloco8)){
        changeColor(bloco5, bloco2, bloco8);
        changeVencedor(bloco5);
        return;
    }

    if(checkSequencia(bloco3, bloco6, bloco9)){
        changeColor(bloco3, bloco6, bloco9);
        changeVencedor(bloco3);
        return;
    }

    if(checkSequencia(bloco5, bloco3, bloco7)){
        changeColor(bloco5, bloco3, bloco7);
        changeVencedor(bloco5);
        return;
    }

    if(checkSequencia(bloco5, bloco1, bloco9)){
        changeColor(bloco5, bloco1, bloco9);
        changeVencedor(bloco5);
    }
}

function changeVencedor(bloco){
    vencedor = bloco.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function changeColor(bloco1, bloco2, bloco3){
    bloco1.style.background = '#0f0';
    bloco2.style.background = '#0f0';
    bloco3.style.background = '#0f0';
}

function checkSequencia(bloco1, bloco2, bloco3){
    var eIgual = false;

    if(bloco1.innerHTML !== '-' && bloco1.innerHTML === bloco2.innerHTML && bloco3.innerHTML === bloco2.innerHTML){
        eIgual = true;
    }

    return eIgual;
}

function reiniciar(){
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for(let i =1; i<=9; i++){
        let blocos = document.getElementById(i);
        blocos.style.background = '#b6b6b6';
        blocos.style.color = '#b6b6b6';
        blocos.innerHTML = '-';
    }
    
    mudarJogador('X');
}