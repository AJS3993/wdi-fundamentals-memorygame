



const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

function checkForMatch(){
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
      } else {
        console.log("Sorry, try again.");
      }  
}

function flipCard(cardId){

    var cardOne = cards[0];
    cardsInPlay.push(cardOne);
    console.log("User flipped " + cardOne);
    
    var cardTwo = cards[2];
    cardsInPlay.push(cardTwo);
    console.log("User flipped " + cardTwo);

    console.log("User flipped" + cards[cardId])

    cardsInPlay.push('cards[cardId]');

    checkForMatch();
}

flipCard(0);
flipCard(2);