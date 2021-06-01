'use strict';

// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 199) {
//     // ES5
//     numPassengers = numPassengers || 1;
//     price = price || 1;

//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }

//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking('LH123');

// const flight = 'LH123';
// const laura = {
//     name: 'Laura Aguiar',
//     passport: 1326512132
// };

// const checkIn = function(flightNum, passenger) {
//     flightNum = 'Lh999';
//     passenger.name = 'Mrs. ' + passenger.name;
//     if (passenger.passport === 1326512132) {
//         alert('Check IN');
//     } else {
//         alert('Wrong passport');
//     }
// };

// checkIn(flight, laura);
// console.log(flight);
// console.log(laura);

// const newPassport = function(person) {
//     person.passport = Math.trunc(Math.random() * 10000000);
// }

// newPassport(laura);
// checkIn(flight, laura);

// const oneWord = function(str) {
//     return str.replace(/ /g, '').toLowerCase();
// }

// const upperFirstWord = function(str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// }

// // Higher-order function
// const transformer = function(str, fn) {
//     console.log(str);
//     console.log(fn(str));
//     console.log(fn.name);
//     console.log('------');
// }

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// const high5 = function() {
//     console.log('wave');
// }

// document.body.addEventListener('click', high5);

// const greet = function(greeting) {
//     return function(name) {
//         console.log(`${greeting} ${name}`);
//     }
// }

// const greeterHey = greet('Hey');
// greeterHey('Laura');
// greeterHey('Stephen');

// greet('Hello')('Lauraaaa');

// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     book(flightNum, name) {
//         console.log(flightNum)
//         console.log(`${name} booked a seat on ${this.airline}, flight ${this.iataCode}${flightNum}`);
//         this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//     }
// }

// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'Laura Dalmolin');

// const eurowings = {
//     airline: 'Eurowings',
//     iataCode: 'EW',
//     bookings: []
// }

// const book = lufthansa.book;

// // DOES NOT WORK
// // book(23, 'Luiza Dalmolin');
// book.call(eurowings, 235, 'Luiza Dalmolin');
// console.log(eurowings);

// book.call(lufthansa, 463, 'Rafael Arvelos');
// console.log(lufthansa);

// // APPLY
// const flightData = [4562, 'Patrícia Aguiar']
// book.apply(lufthansa, flightData);
// // EQUAL RESULT
// book.call(lufthansa, ...flightData);
// console.log(lufthansa);


// // BIND METHOD
// // book.call(eurowings, 235, 'Luiza Dalmolin');
// console.log('----- BIND --------');
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);

// bookEW(23, 'Steven Williams');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Laura A. Dalmolin');
// bookEW23('Martha Cooper');

// // With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function() {
//     console.log(this);
//     this.planes++; 

//     console.log(this.planes);
// }

// document.querySelector('.buy')
//     .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application
// const addTax = (rate, value) => value + value * rate;

// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// // addVAT = (value) => value + value * 0.23;

// console.log(addVAT(100));
// console.log(addVAT(50));

// const addTaxRate = function(rate) {
//     return function(value) {
//         return value + value * rate;
//     }
// }

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT(100));
// console.log(addVAT(50));

// CODING CHALLENGE

/*
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)

  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. 
The method takes a string as an input (called 'type'), which can be either 'string' or 'array'.
If type is 'array', simply display the results array as it is, using console.log().
This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// const poll = {
//     question: 'What is the best country in the world?',
//     options: [
//         'UK',
//         'France',
//         'Brazil',
//         'Uruguay'
//     ],
//     answers: new Array(4).fill(0),
//     registerNewAnswer() {
//         const optionIndex = Number(
//             prompt(
//                 `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//             )
//         );
//         typeof optionIndex === 'number' &&
//             optionIndex < this.answers.length &&
//             this.answers[optionIndex]++;

//         this.displayResults();
//         this.displayResults('string');
//     },
//     displayResults(type) {
//         if (type == 'string') {
//             console.log(`Poll results are ${this.answers.join(', ')}`)
//         } else {
//             console.log(this.answers);
//         }
//     }
// }

// const answerPollBtn = document.querySelector('.poll');
// answerPollBtn.addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

// const runOnce = function() {
//     console.log('This will never run again');
// }

// runOnce();


// // FUNCTION THAT ONLY RUNS ONCE
// // IMMEADIATELY INVOKED FUNCION EXPRESSION
// (function () {
//     console.log('This will never run again');
// })();

// (() => console.log('This will never run again'))();

// CLOSURES
// const secureBooking = function () {
//   let passengerCount = 0;
//   return function() {
//     passengerCount++;
//     console.log(`${passengerCount} passenger`);
//   }
// }

// const booker = secureBooking();
// booker();
// booker();
// booker();

// console.dir(booker);

// let f;

// const g = function() {
//   const a = 23;
//   f = function() {
//     console.log(a * 2);
//   };
// };

// const h = function() {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// }

// g();
// f();

// // re-assigning f
// h();
// f();

// Example 2
// const boardPassengers = function(n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function() {
//     console.log(`We are now boarding all ${n} passengers`)
//     console.log(`There are 3 groups, each with ${perGroup} passengers`)
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// }

// const perGroup = 1000;
// boardPassengers(180, 3);

// CODING CHALLENGE 2;

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function() {
    header.style.color = 'blue';
  });
})();