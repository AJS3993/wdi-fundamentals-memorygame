



var cards = [
    {
        rank: 'queen',
        suit: 'hearts',
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: 'queen',
        suit: 'diamonds',
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: 'king',
        suit: 'hearts',
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: 'king',
        suit: 'diamonds',
        cardImage: "images/king-of-diamonds.png"
    }
    
];
    

var cardsInPlay = [];

function createBoard(){
    for (var i = 0; i < cards.length; i++) {
        
        var cardElement = document.createElement('img');
        cardElement.setAttribute("src", "images/back.png");
        cardElement.setAttribute("data-id", i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById("game-board").appendChild(cardElement)

    }
}

function checkForMatch(){
    
    if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
        alert("You found a match!");
      } else {
        alert("Sorry, try again.");
      }  
}

function flipCard(){

    cardId = this.getAttribute("data-id")
    this.setAttribute('src', cards[cardId].cardImage)
    var cardOne = cards[cardId];
    cardsInPlay.push(cardOne);
    console.log("User flipped " + cards[cardId].rank)
    if (cardsInPlay.length === 2){
    checkForMatch();
}
}

createBoard();