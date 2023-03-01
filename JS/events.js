import {
  buttonPlay,
  buttonStop,
  buttonMinutePlus,
  buttonMinuteMinus,
  cardForest,
  cardRain,
  cardCoffeeMachine,
  cardFireplace
} from "./elements.js"

export default function({timer,sound}) {

cardForest.addEventListener('click', function() {
  if (sound.forestAudio.paused) {
    sound.forestAudio.play()
  } else {
    sound.forestAudio.pause()
  }
  sound.rainAudio.pause()
  sound.coffeeMachineAudio.pause()
  sound.fireplaceAudio.pause()
})

cardRain.addEventListener('click', function() {
  if (sound.rainAudio.paused) {
    sound.rainAudio.play()
  } else {
    sound.rainAudio.pause()
  }
  sound.forestAudio.pause()
  sound.coffeeMachineAudio.pause()
  sound.fireplaceAudio.pause()
})

cardCoffeeMachine.addEventListener('click', function() {
  if (sound.coffeeMachineAudio.paused) {
    sound.coffeeMachineAudio.play()
  } else {
    sound.coffeeMachineAudio.pause()
  }
  sound.rainAudio.pause()
  sound.forestAudio.pause()
  sound.fireplaceAudio.pause()
})

cardFireplace.addEventListener('click', function() {
  
  if (sound.fireplaceAudio.paused) {
    sound.fireplaceAudio.play()
  } else {
    sound.fireplaceAudio.pause()
  }
  sound.coffeeMachineAudio.pause()
  sound.rainAudio.pause()
  sound.forestAudio.pause()
})

buttonPlay.addEventListener('click', function() {
  timer.countdown()
})

buttonStop.addEventListener('click', function() {
  timer.hold()
})

//evento criado para resetar o time para o último tempo estabelecido 
buttonStop.addEventListener('dblclick', function() {
  timer.updateDisplay()
})

buttonMinutePlus.addEventListener('click', function(){
  timer.minutePlus()
})

buttonMinuteMinus.addEventListener('click', function() {
  timer.minuteMinus()
})
}