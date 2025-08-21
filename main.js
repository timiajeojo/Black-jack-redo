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


function startGame() {
   isAlive = truepl
   let firstCard = getRandomCard();
   let secondCard = getRandomCard();
   let card = [firstCard, secondCard]
   let sum = firstCard + secondCard;
   renderGame()
 }
 

function renderGame() {
  cardsEl.textContent = "Cards: " 
  
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum
  
if (sum <= 20) {
 message = "Do you want to draw new card?" }

else if (sum === 21) {
    message = "you've got balckjack!"
    hasBlackJack = true
     }  else {
       message = "you're out!" 
       isAlive = false
     }
     
     //CASH OUT 
      messageEl.textContent = message
      
}