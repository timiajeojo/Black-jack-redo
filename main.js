let  player = {
  name: "Timi",
  chips: 120
}
let sum = 0
let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""
 let messageEl = document.getElementById("message-el")
 let sumEl = document.getElementById("sum-el")
 let  cardsEl = document.getElementById("cards-el")
 let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips;

 
 function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;

    if (randomNumber === 1) {
        return 11;
    } else if (randomNumber > 10) {
        return 10;
    } else {
        return randomNumber;
    }
}