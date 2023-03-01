const minutesDisplay = document.querySelector('.minutes')
let minutes = Number(minutesDisplay.textContent)
const secondsDisplay = document.querySelector('.seconds')
const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonMinutePlus = document.querySelector('.minute-plus')
const buttonMinuteMinus = document.querySelector('.minute-minus')
const cardForest = document.querySelector('#forest')
const cardRain = document.querySelector('#rain')
const cardCoffeeMachine = document.querySelector('#coffee-machine')
const cardFireplace = document.querySelector('#fireplace')
let timerTimeOut = null

export {
  minutesDisplay,
  minutes,
  secondsDisplay,
  buttonPlay,
  buttonStop,
  buttonMinutePlus,
  buttonMinuteMinus,
  timerTimeOut,
  cardForest,
  cardRain,
  cardCoffeeMachine,
  cardFireplace
} 