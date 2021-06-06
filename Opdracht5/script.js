const person = {
    name: 'Kevin',
    age: 32,
    evaluations: [7, 10, 9],
};

/*

// Dot Notation
person.name = 'kevin';

// Bracker Notation
person['name'] = 'kevin';

*/

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person['name']);
console.log(person['age']);
console.log(person.evaluations);

//----------------------------------------------------------------

const Array1 = ['groen', 'blauw', 'rood'];
console.log(Array1);
console.log(Array1.length);
console.log(Array1[0]);
console.log(Array1[Array1.length - 1]);

Array1.push("geel");
console.log(Array1);

Array1.push(5);
console.log(Array1);

Array1.push({ greeting: "Ik ben een object" });
console.log(Array1);
console.log(Array1.length);
console.log(Array1[5].greeting);

//----------------------------------------------------------------

const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
    food: {
        favourite_food: "fish",
        medium_liked_food: "dried fruits",
        disliked_food: "walnuts"
    }
},
{
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: ["Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
        favourite_food: "tuna",
        medium_liked_food: "canned food",
        disliked_food: "all fruits"
    }
},
{
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: ["Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
        favourite_food: "meaty things",
        medium_liked_food: "tuna",
        disliked_food: "canned food"
    }
}
]


console.log('naam van het laatste kattenras', catBreeds[2].name);
console.log('energy levels van de eerste kat', catBreeds[0].energy_level);
console.log('eerste temperament van de temperamenten van de tweede kat', catBreeds[1].temperament[0])
console.log('laatst temperament van de temperamenten van de derde kat', catBreeds[2].temperament[4])
console.log('favoriete voedsel van de derde kat', catBreeds[2].food.favourite_food);




