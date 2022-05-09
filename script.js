let playButton = document.getElementById("play-btn")
let tileButton1 = document.getElementById("tile-1")
let tileButton2 = document.getElementById("tile-2")
let tileButton3 = document.getElementById("tile-3")
let tileButton4 = document.getElementById("tile-4")
//do it with array
let number = 0

playButton.addEventListener("click", function() {
    shuffleTiles()
})

tileButton1.addEventListener("click", function() {
    tileButton1.textContent = "testing"
})

function shuffleTiles() {
    randomNumber = Math.floor( Math.random() * 4) + 1
    console.log(randomNumber)
}