//Card Constructor
//Create a constructor Card object with two properties: point and suit.
function Card(point, suit) {
    this.point = point;
    this.suit = suit;
};


//Add a getImageUrl method by adding it as a property to Card.prototype.
//The method should return the URL path to the png image file for the card.
Card.prototype.getImageUrl = function() {
    return 'cards/' + this.point + this.suit[0] + '.png';
};


/*Hand Constructor
A hand is simply represented as a collection of cards, 
but it would also be convenient for a hand to be able to return it's point value. 
We would like to be able to do this with a Hand constructor:

    > var myHand = new Hand()
    > myHand.addCard(new Card(5, 'diamonds'))
    > myHand.addCard(new Card(13, 'spades'))
    > myHand.getPoints()
    15
Implement a Hand constructor that will allow the code above to work. 
Hint: you will want to store as a property of a hand object - an array of card objects*/

function Hand() {
    this.cards = [];
};

Hand.prototype.addCard = function(card) {
    this.cards.push(card);
};

Hand.prototype.getPoints = function() {
    var points = 0;
    for (var i=0; i<this.cards.length; i++) {
        points += this.cards[i].point;
    }
    return points;
};

/* ^ CODE CHECK ^
var hand = new Hand();

var card1 = new Card(4, 'diamonds');
var card2 = new Card(10, 'clubs');

hand.addCard(card1);
hand.addCard(card2);

console.log(hand.getPoints()); */


//Deck Constructor
/*A deck is also represented as a collection of cards, 
but it would also be convenient for it to be able to shuffle itself and be asked to draw a card. 
We would like to be able to do this with a Deck constructor:

    > var myDeck = new Deck()
    > myDeck.draw()
    Card {point: 6, suit: "clubs"}
    > myDeck.draw()
    Card {point: 1, suit: "spades"}
    > myDeck.shuffle()
    > myDeck.numCardsLeft()
    50
Implement a Deck constructor that will allow for the above code to work.*/

function Deck(){
    this.cards = [];
    var suits = ['hearts', 'diamonds', 'spades', 'clubs'];
    
    for (var i=0; i<52; i++) {
        var currentPoint = i%13 +1;
        var currentSuit = suits[Math.floor(i/13)];
        
        this.cards.push(new Card(currentPoint, currentSuit));
    }

    this.shuffleDeck();

}

Deck.prototype.shuffleDeck = function() {
    this.cards.sort(function(a, b) {
        return Math.random() - 0.5;
    });
}

Deck.prototype.drawCard = function() {
    return this.cards.pop();
}

Deck.prototype.numCardsLeft = function() {
        return this.cards.length;
}

/* ^ CODE CHECK ^
var deck = new Deck();
console.log(deck.drawCard());
console.log(deck.numCardsLeft()); */
