const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus')
const buttonLess = document.querySelector('.less')

const body = document.querySelector('body')
const light = document.querySelector('.light')
const dark = document.querySelector('.dark')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const card = document.querySelector('.card')
const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffeShop = document.querySelector('.coffeShop')
const buttonFireplace = document.querySelector('.fireplace')

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

function changeForestColor(){
  buttonForest.classList.add('active')
  buttonRain.classList.remove('active')
  buttonCoffeShop.classList.remove('active')
  buttonFireplace.classList.remove('active')
}

function changeRainColor(){
  buttonRain.classList.add('active')
  buttonForest.classList.remove('active')
  buttonCoffeShop.classList.remove('active')
  buttonFireplace.classList.remove('active')
}

function changeCoffeShopColor(){
  buttonRain.classList.remove('active')
  buttonForest.classList.remove('active')
  buttonCoffeShop.classList.add('active')
  buttonFireplace.classList.remove('active')
}

function changeFireplaceColor(){
  buttonRain.classList.remove('active')
  buttonForest.classList.remove('active')
  buttonCoffeShop.classList.remove('active')
  buttonFireplace.classList.add('active')
}

buttonForest.addEventListener('click', function() {
  forest()
  changeForestColor()
})

buttonRain.addEventListener('click', function() {
  rain()
  changeRainColor()
})

buttonCoffeShop.addEventListener('click', function() {
  coffeShop()
  changeCoffeShopColor()
})

buttonFireplace.addEventListener('click', function() {
  fireplace()
  changeFireplaceColor()
})

light.addEventListener('click', function(){
  changeThemeToDark()
})

dark.addEventListener('click', function(){
  changeThemeToLight()
 
})

function changeThemeToDark(){
  light.classList.add('hide')
  dark.classList.remove('hide')
  body.classList.add('dark')
}

function changeThemeToLight(){
  light.classList.remove('hide')
  dark.classList.add('hide')
  body.classList.remove('dark')
}

volForest.addEventListener('input', function () {
  audioForest.volume = volForest.value;
})

volRain.addEventListener('input', function () {
  audioRain.volume = volRain.value
})

volCoffe.addEventListener('input', function(){
  audioCoffeShop.volume = volCoffe.value
})

volFireplace.addEventListener('input', function(){
  audioFireplace.volume = volFireplace.value
})
