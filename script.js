
// botoes
let play_button = document.querySelector('.play')
let pause_button = document.querySelector('.pause')
let stop_button = document.querySelector('.stop')
let timer_button = document.querySelector('.timer')

let textoMinutos = document.querySelector('span.minutos')
let minutosInicial = Number(textoMinutos.innerText)

let textoSegundos = document.querySelector('span.segundos')
let segundosInicial = Number(textoSegundos.innerText)
let minutos


/* Métodos*/
function toggleBotao(botao1, botao2){
    botao1.classList.toggle('hide')
    botao2.classList.toggle('hide')
}

function formatarTempo(tempo){
    return tempo<10? `0${tempo}`: tempo
}


/*Eventos*/
/*[button.botao.play, button.botao.pause.hide, button.botao.stop, button.botao.timer.hide, button.botao.musica-on, button.botao.musica-off]*/

// Botao de play
play_button.addEventListener('click', function(){
    toggleBotao(play_button, pause_button)
    stop_button.classList.remove('hide')
    timer_button.classList.add('hide')

})

pause_button.addEventListener('click', function(){
    toggleBotao(play_button, pause_button)

})

stop_button.addEventListener('click', function(){
    toggleBotao(stop_button, timer_button)
    play_button.classList.remove('hide')
    pause_button.classList.add('hide')
})

timer_button.addEventListener('click', function(){
   minutos = prompt('Quantos minutos? ')
   textoMinutos.innerText = formatarTempo(Number(minutos))
   textoSegundos.innerText = formatarTempo(0)
   minutosInicial = Number(textoMinutos.innerText)
   segundosInicial = Number(textoSegundos.innerText)
})


/*
arrayBotoes[0].addEventListener('click', playTimer)
*/




