// Code your solutions in this file
function writeCards(people, event) {
    for (let i = 0; i < people.length; i++) {
        cards.push(`Thank you, ${people[i]}, for the wonderful ${event} gift!`);
    }
    return cards;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--
    }
}

const people = [ 'Lisa', 'Kaitlin', 'Jan' ];
let cards = [];
