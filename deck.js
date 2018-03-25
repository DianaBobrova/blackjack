const deck = [];
module.exports.deck = deck;


for (let j = 0; j < 4; j++) {
    let suit = '';
        switch (j) {
            case 0:
                suit = 'clubs';
                break;
            case 1:
                suit = 'diamonds';
                break;
            case 2:
                suit = 'hearts';
                break;
            default:
                suit = 'spades';
        }
    
    for (let i = 0; i < 13; i++) {
        let rank = '';
        let value = null;
        if (i < 9) {
            rank = i+2;
            value = rank;
        } else {
            switch (i) {
                case 9:
                    rank = 'J';
                    value = 10;
                    break;
                case 10:
                    rank = 'D';
                    value = 10;
                    break;
                case 11:
                    rank = 'K';
                    value = 10;
                    break;
                default:
                    rank = 'A';
                    value = 11;
            }
        }
        deck.push({
            rank: rank,
            suit: suit,
            value: value
        });
    };
};