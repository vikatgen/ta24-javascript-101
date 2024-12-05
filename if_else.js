/**
 * IF..ELSE
 */

const numberOfLegs = 4;
const numberOfLegsIHave = 4;

if(numberOfLegsIHave < numberOfLegs) {
    console.log('I a human or humanoid');
} else if ( numberOfLegsIHave === numberOfLegs) {
    console.log('I am a dog.');
} else {
    console.log('Im a spider.');
}