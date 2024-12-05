/**
 * Type casting
 * Implicit and explicit
 */

// Automatic type casting, because we are adding two different types: number + string
// Mathematically this makes no sense, so JS will cast the number to string
console.log(5 + "tere"); // "55"

// This is manual type casting.
// We cast the string to number using Built-in Number function.
console.log(5 + Number("5"));

// typeof operator we can use to check whatever variable data-type
console.log(typeof 5);
console.log(typeof true);