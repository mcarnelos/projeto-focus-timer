const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus')
const buttonLess = document.querySelector('.less')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonForest = document.querySelector('.cardForest')
const buttonRain = document.querySelector('.cardRain')
const buttonCoffeShop = document.querySelector('.cardCoffeShop')
const buttonFireplace = document.querySelector('.cardFireplace')
const audioForest = new Audio("./sounds/Floresta.wav")
const audioRain = new Audio("./sounds/Chuva.wav")
const audioCoffeShop = new Audio("./sounds/Cafeteria.wav")
const audioFireplace = new Audio("./sounds/Lareira.wav")
let minutes = Number(minutesDisplay.textContent) //pega os minutos iniciais
let timerTimeOut //utilizado para parar o timer (stop)

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent= String(minutes).padStart(2, "0") //tem 2 caracteres e inclui o 0 quando tiver apenas um caracter  
  secondsDisplay.textContent= String(seconds).padStart(2, "0") 
}

function resetTimer() {
  updateTimerDisplay(minutes, 0) //ao apertar stop retorna aos minutos iniciais
  clearTimeout(timerTimeOut)
}

function countdown() {
  timerTimeOut = setTimeout(function() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    //faz a atualização do timer
    updateTimerDisplay(minutes, 0)

    //para o cronometro quando os minutes chegam a 0 retorna nada, a função countdown() não é mais executada
    if(minutes <= 0) {
      return
    }

    if(seconds <= 0) {
      seconds = 60

      --minutes //decrementa os minutos 
    }

    //diminui os segundos 
    updateTimerDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}

buttonPlay.addEventListener('click', function() {
  countdown()
}) 

buttonStop.addEventListener('click', function() {
  clearTimeout(timerTimeOut)//ativa o timerTimerOut, parando a aplicação
  resetTimer()
  audioForest.pause()
  audioRain.pause()
  audioCoffeShop.pause()
  audioFireplace.pause()
})

buttonPlus.addEventListener('click', function() {
  minutesDisplay.textContent = Number(minutesDisplay.textContent) + 5
})

buttonLess.addEventListener('click', function() {
  minutesDisplay.textContent = Number(minutesDisplay.textContent) - 5
})

function forest() {
  audioRain.pause()
  audioCoffeShop.pause()
  audioFireplace.pause()
  audioForest.loop = true
  audioForest.play()
}

function rain() {
  audioForest.pause()
  audioCoffeShop.pause()
  audioFireplace.pause()
  audioRain.loop = true
  audioRain.play()
}

function coffeShop() {
  audioForest.pause()
  audioRain.pause()
  audioFireplace.pause()
  audioCoffeShop.loop = true
  audioCoffeShop.play()
}

function fireplace() {
  audioForest.pause()
  audioCoffeShop.pause()
  audioRain.pause()
  audioCoffeShop.loop = true
  audioFireplace.play()
}

buttonForest.addEventListener('click', function() {
  forest()
})

buttonRain.addEventListener('click', function() {
  rain()
})

buttonCoffeShop.addEventListener('click', function() {
  coffeShop()
})

buttonFireplace.addEventListener('click', function() {
  fireplace()
})