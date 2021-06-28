// Naam invoeren

let naam;

naam = prompt ('Wat is jou naam');
console.log(naam);
alert ('Hey ' + naam + '!');


// Te gokken nummer

let nummerRaden;
const min = 0;
const max = 25;

nummerRaden = Math.floor(Math.random() * (max - min)) + min;
console.log(nummerRaden);


// Invoeren

let invoerNummer;

while (invoerNummer !== nummerRaden) {

invoerNummer = parseInt(prompt ('Voer een nummer in van 0 tot 25 om te beginnen met raden'));
console.log(invoerNummer);
alert ('Je koos nummer: ' + invoerNummer);

if (invoerNummer > nummerRaden) {
    alert ('Dat is niet correct');
    
} else if (invoerNummer < nummerRaden) {
        alert ('Dat is niet correct');

} else {
    alert ('Gefeliciteerd je hebt gewonnen!');
    alert ('Hey ' + naam1 + '!' + 'Het spel is af, tot de volgende keer!');
}}




