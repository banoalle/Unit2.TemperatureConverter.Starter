// Complete the following functions to make our program work!

/**
 * Takes a F number and returns the number to C
 * @param {string} fahren temperature in degrees F
 * @returns {number} the number of degrees C
 */
function convertToCelsius(fahren) {}
  // Parse the input string to a number and convert Fahrenheit to Celsius
  function convertToCelsius(fahren) {
  let celc = (fahre- 32) * 5/9;
  return celc
}

/**
 * Takes both numbers (F, C) and display a message with
 * both numbers and how that temp makes you feel using
 * this chart
 *
 *   Temp      Feels
 * ---------|----------
 *   < 32   |  "very cold"
 *   < 64   |  "cold"
 *   < 86   |  "warm"
 *   < 100  |  "hot"
 *
 * @param {number} fahren
 * @param {number} celc
 */
function createMessage(fahren, celc) {}
function createMessage(fahren, celc) {
  let feel;
  if (celc < 32) {
    feel = "very cold";
  } else if (celc < 64) {
    feel = "cold";
  } else if (celc < 86) {
    feel = "warm";
  } else if (celc < 100) {
    feel = "hot";
  }
  let message = '${fahren} degrees Fahrenheit is ${celc.toFixed(2)}
  degrees celsius, which feels ${feel}.';
  return message;
}

/**
 * Takes a number and returns a random integer from 0 to the limit
 * @param {number} limit
 * @returns {number} a number between 0 and the int passed in
 */
function rand(limit) {}
function rand(limit) {
  return Math.floor(Math.random) * (limit+1);
}

function main() {}

let input = parseFloat(prompt("Enter a temerature in Fahrenheit"));

if (!isNaN(input)) {
let celc = convertToCelsius(input, celc);

alert(message);
} else {
  alert(Invalid input. Please enter a valid Number.");
}

main();

// -------------------- DONT NOT CHANGE THE CODE BELOW ---------------------- //

let fahren = prompt(
  "enter a number, we will convert that number from fahrenheit to celcius"
);
let celc = convertToCelsius(fahren);
let output = createMessage(fahren, celc);
console.log(output);

fahren = prompt(
  "Lets try that again. enter a number, we will convert that number from fahrenheit to celcius"
);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);
