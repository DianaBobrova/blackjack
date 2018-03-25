const readline = require('readline');
var deck = require("./deck.js");

l=console.log;
const rand = Math.random;
const ceil = Math.ceil;

/*You need to remember about Ace's value!*/

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const player = [];
const dealer = [];
const finish = false;
dealer.score = 0;

const calcScore = function(person) {
  let score = 0;
  for (let i = 0; i < person.length; i++) {
    score += person[i].value;
  }
  person.score = score;
  if (score >= 21) {
    finish = true;
  }
  return person.score;
}

function dealing (person) {
  person.push(deck.deck[ceil(rand()*52)]);
}

function setHand (person) {
  for (let i = 0; i < person.length; i++) {
    l(`${person[i].rank} of ${person[i].suit}`);
  };
}

function setDealerHand() {
  if(dealer.score < 17) {
    dealing(dealer);
  }
  l("Dealer's hand:");
  setHand(dealer);
  l(`Dealer's score: ${calcScore(dealer)}`);
}

function setPlayerHand() {
  l('Your hand:');
  if(player.length < 1) {
    dealing(player);
    dealing(player);
  } else {
    dealing(player);
  }
  setHand(player);
  l(`Your score: ${calcScore(player)}`);
}

function setWinner() {
  if (dealer.score == player.score){
    l("It's a push! Try again!");
  } else if (dealer.score < player.score) {
    l('You lost! May be next time...');
  } else if (dealer.score == 21) {
    l('Blackjack! Congratulations!');
  } else {
    l('You won! Congratulations!');
  }
  rl.close();
}

function round () {
  if (!finish) {
    setPlayerHand();
    setDealerHand();
    continueQuestion();
  } else {
    setWinner();
  }
}

function continueQuestion() {
  rl.question('Would you like to continue? [Y/N]\n', (answer) => {
    // TODO: Log the answer in a database
    if ((answer == 'Y')||(answer == 'y')) {
      round();
    } else {
      setWinner();
    }
  });
}

rl.question('Would you like to start? [Y/N]\n', (answer) => {
  // TODO: Log the answer in a database
  if ((answer == 'Y')||(answer == 'y')) {
    round();
  } else {
    l('See you!');
    rl.close();
  }
});
