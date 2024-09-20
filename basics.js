// Global Scope
const teacherName = "Karl Rauniste";

// DATA TYPES
// String => "See on string väärtus", 'See on samuti string väärtus', `See on ka string väärtus`
// Number (Int, float) => 42
// Boolean => true/false, jah/ei, 1/0
// const isMate = false
// Array => []
// Object => {}

// Muutujad - nimetus ja väärtus (NB: Muutumatu vs Muudetav)
// Muutujate nimetus on camelCase and it makes some sense
const fruit = "Banaan"; // Muutuja, mida ei saa enam muuta
let model = "BMW"; // Muutuja, mida saab veel muuta

//Koodiblokk => SCOPE
// Koodiblokki tähistab {} sümbol (objekti sümbol)
// Function Scope
const calculateSum = (number1, number2) => {
    const number3 = 256;
    // console.log(teacherName);
    return number1 + number2;
};

calculateSum(5, 6);

// Type casting
// Muudame number andmetüübi string andmetüübiks
const castNumber = "123456";
console.log("Minu andmetüüp on alguses", typeof castNumber);
console.log("Peale castimist minu tüüp on ", typeof Number(castNumber));
// console.log(Boolean(castNumber));

// Array => sümbol on [], toimub indekseerimine, esimene element on kohal 0
const characters = ["T", "P", "I", "C", "S", "V", "A", "J", "R"];

// console.log(characters[7]);
// console.log(characters[6]);
// console.log(characters[5]);
// console.log(characters[6]);
// console.log(characters[4]);
// console.log(characters[3]);
// console.log(characters[8]);
// console.log(characters[2]);
// console.log(characters[1]);
// console.log(characters[0]);

// Loopimine => Korduslause. Igast array elemendist minnakse üle ning käiakse läbi script
//For loop

for (i = 0; i < characters.length; i++) {
    console.log("For loop: ", characters[i]);
}

// forEach loop
characters.forEach((char) => {
    console.log("For Each loop: ", char);
});
