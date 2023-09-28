// Complete the following functions to make our program work!

/**
 * Takes a F number and returns the number to C
 * @param {string} fahren temperature in degrees F
 * @returns {number} the number of degrees C
 */
function convertToCelsius(fahren) {
  // Parse the input string to a number and convert Fahrenheit to Celsius
  const fahrenheit = parseFloat(fahren);
  const celsius = (fahrenheit - 32) * (5/9);
  return celsius;
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
function createMessage(fahren, celc) {
  let feeling;
  if (fahren < 32 || celc < 0) {
    feeling = "very cold";
  } else if (fahren < 64 || celc < 18) {
    feeling = "cold";
  } else if (fahren < 86 || celc < 30) {
    feeling = "warm";
  } else if (fahren < 100 || celc < 37) {
    feeling = "hot";
  } else {
    feeling = "very hot";
  }

  console.log(`Fahrenheit: ${fahren}°F, Celsius: ${celc}°C - Feels ${feeling}`);
}

/**
 * Takes a number and returns a random integer from 0 to the limit
 * @param {number} limit
 * @returns {number} a number between 0 and the int passed in
 */
function rand(limit) {
  return Math.floor(Math.random() * (limit + 1));
}


const fahrenheit = 75;
const celsius = convertToCelsius(fahrenheit);
createMessage(fahrenheit, celsius);
const randomNum = rand(10);
console.log(`Random Number: ${randomNum}`);


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
