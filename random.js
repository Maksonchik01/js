const input = document.querySelector(".input")
const tip = document.querySelector(".tip")
const btnCheck = document.querySelector(".check")
const btnRestart = document.querySelector(".restart")
const error = document.querySelector(".error")
const attemptText = document.querySelector(".attempt")
let attempt = 0;
let randomNumber = Math.floor(Math.random() * 10) + 1
function startGame() {
    const value = Number(input.value)
    if (attempt === 3) {
        tip.textContent = "Ви програли"
        tip.style.color = "red"
        return
    }
    attempt++
    attemptText.textContent = attempt
    if (value > 10 || value < 1) {
    error.textContent = "Некоректне число введіть число від 1 до 10"
    return 
    }
    if (value === randomNumber) {
        tip.textContent = "Вітаю ви перемогли"
        tip.style.color = "green"
        btnCheck.disabled = true
    } else if (value > randomNumber) {
        tip.textContent = "Загадане число менше"
        tip.style.color = "orange"
    } else {
        tip.textContent = "Загадане число більше"
        tip.style.color = "orange"
    }
}
btnCheck.addEventListener("click", ()=> startGame())

function restartGame() {
    input.value = ""
    tip.textContent = ""
    attempt = 0
    attemptText.textContent = attempt
    randomNumber = Math.floor(Math.random() * 10) + 1
    btnCheck.disabled = false
}
btnRestart.addEventListener("click", ()=> restartGame())