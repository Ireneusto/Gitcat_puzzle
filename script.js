const catArray = [
    {
        name: 'tile1',
        img: 'img/tile1.jpg',
    },
    {
        name: 'tile2',
        img: 'img/tile2.jpg',
    },
    {
        name: 'tile3',
        img: 'img/tile3.jpg',
    },
    {
        name: 'tile4',
        img: 'img/tile4.jpg',
    }
]

let playButton = document.getElementById("play-btn")
playButton.addEventListener("click", function() {
    window.location.reload()
})



const gridDisplay = document.querySelector('#grid')

function createBoard() {
    for (let i = 0; i < catArray.length; i++) {
        const card = document.createElement('img')
        let randomNumber = 0
        card.setAttribute('src', 'img/blank-card.jpg')
        card.setAttribute('data-id', randomNumber)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardId = Math.floor(Math.random() * 4)
    console.log('clicked!', cardId)
    this.setAttribute('src', catArray[cardId].img)
}