/*
>
<
=>
=<
==
===
!=
!===

if (condition1 && Condition2) (and)
if (condition1 || Condition2) (or)
if (condition1 || Condition2) (not)
*/

const age = 50;
const isFemale = true;
const driverStatus = "bob";
const name = "frits";
const totalAmount = 51;

if (age >= 18) {
    console.log("Je mag naar binnen");

} else {
    console.log("Nope, je mag niet naar binnen");
}

if (isFemale) {
    console.log("Je ticket zegt dat je een vrouw bent!");

} else {
    console.log(
        "Helaas je hebt aangegeven op je ticket dat je een man bent, je mag niet naar binnen");
}

if (driverStatus === "bob") {
    console.log("Je bent de bob, je mag autorijden");

} else {
    console.log("Je bent geen bob, hier met die autosleutels");
}

if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!");

} else {
    console.log("Je krijgt een goede prijs bij ons!");

}

/*
if (name = "Sarah" || "Bram") {

   console.log("Je krijgt 50% korting!");
 } else {

   console.log("Je krijgt een goede prijs bij ons!");

}
*/

if (totalAmount >= 25 && < 50) {
    console.log("Gratis biterballen!");

} else if (totalAmount >= 50 && < 100) {
    console.log("gratis nachos!");

} else if (totalAmount >= 100) {
    console.log("gratis champagne!!");
}