/**
 * OBJECTS
 * Objekti tähistab {} koodibloki märgend
 * Objekt on asi, millel on iseloomulikud tunnused
 * Objekt koosneb key:value
 * Objektki eest saame väärtust välja kutsuda kasutades punkti ning key'd
 */

const car = {
    brand: "Kia" ,
    model: "Proceed" ,
    year: 2024,
    isElectric: false,
    drive: function() {
        console.log("Drive please!")
    }
};
console.log(car.year);

// Näide kuidas ka tegelt string on JS maailmas objekt, kuna ta küljes on meetodid
console.log("Porche".toLocaleUpperCase())
console.log(car.drive())

/**
 * typeof operant
 *Annab teada, mis andmetüüp on muutuja sisse salvestatud. 
 * 
 */
const harrypotter = 4 ;
console.log(typeof harrypotter)