const data = new Date()
let tempo_inicial = data.getTime();

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


function playTimer(){
    const data_inicial = new Date()
    let tempo_inicial = data.getTime()/1000

    while (Number(texto_tempo)<60){
        const data_final = new Date()
        let tempo_final = data.getTime()/1000

        if((tempo_final-tempo_inicial)>=1){
           texto_tempo.innerText = texto_tempo.value+1
        }
    }
}

// criar uma data com o numero de minutos do timer
// para calcular quanto tempo falta para chegar ate ela
function dateAfter(){
    let minutos_timer = Number(textoMinutos.innerText)
    let segundos_timer = Number(textoSegundos.innerText)

    let data_agora = new Date()
    let data_depois = new Date(data_agora)
    data_depois.setMinutes(data_agora.getMinutes()+minutos_timer)
    data_depois.setSeconds(data_agora.getSeconds()+segundos_timer)
    data_depois.setMilliseconds(data_agora.getMilliseconds() + 40)
    return data_depois
}

function countDown(later){
    const agora = new Date()

    const intervalo_segundos = (later - agora)/1000

    const num_minutos = Math.floor(intervalo_segundos/60)%60

    const num_segundos = Math.floor(intervalo_segundos)%60

    textoMinutos.innerText = formatarTempo(num_minutos)
    textoSegundos.innerText = formatarTempo(num_segundos)

    minutos_timer = Number(textoMinutos.innerText)
    segundos_timer = Number(textoSegundos.innerText)

    if(minutos_timer == 0 && segundos_timer == 0){
        clearInterval(myInterval)
    }
}

/*Eventos*/
/*[button.botao.play, button.botao.pause.hide, button.botao.stop, button.botao.timer.hide, button.botao.musica-on, button.botao.musica-off]*/

// Botao de play
play_button.addEventListener('click', function(){
    date_after = dateAfter()

    myInterval = setInterval(function(){
        countDown(date_after)
    }, 1000)

    let minutos_timer = Number(textoMinutos.innerText)
    let segundos_timer = Number(textoSegundos.innerText)

    toggleBotao(play_button, pause_button)
    stop_button.classList.remove('hide')
    timer_button.classList.add('hide')

})

pause_button.addEventListener('click', function(){
    toggleBotao(play_button, pause_button)
    clearInterval(myInterval);
})

stop_button.addEventListener('click', function(){
    toggleBotao(stop_button, timer_button)
    play_button.classList.remove('hide')
    pause_button.classList.add('hide')
    clearInterval(myInterval);
    textoMinutos.innerText = formatarTempo(minutosInicial)
    textoSegundos.innerText = formatarTempo(segundosInicial)
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




