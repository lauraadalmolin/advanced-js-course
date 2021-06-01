// 'use strict';

// function calcAge(birthYear) {
//     const age = 2037 - birthYear;
//     console.log(firstName);

//     function printAge() {
//         let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//         console.log(output);

//         if(birthYear >= 1981 && birthYear <= 1996) {
//             var millenial = true;
//             // Creating NEW variable with 
//             // same name as outer scope's variable
//             const firstName = 'Stephen';
//             const str = `Oh, and you're a millenial, ${firstName}`;
//             console.log(str);
            
//             function add(a,b) {
//                 return a + b;
//             }
            
//             // Reassigning outer scope's variable
//             output = 'NEW OUTPUT'
//         }
//         console.log(millenial);
//         console.log(output);
    
//     }
    
//     printAge();
//     return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);
// // console.log(age);
// // printAge();


// // HOISTING: VARIABLES
// console.log(me);
// // console.log(job);
// // console.log(1991);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// // HOISTING: FUNCTIONS
// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3)); -> TDZ
// // console.log(addArrow(2, 3)); -> initialized as undefined

// function addDecl(a, b) {
//     return a + b;
// }

// const addExpr = function(a, b) {
//     return a + b;
// }

// var addArrow = (a, b) => a + b;

// // EXAMPLE
// if (!numProducts) {
//     deleteShoppingCart();
// }

// var numProducts = 10;

// function deleteShoppingCart() {
//     console.log('All products deleted!');
// }

// console.log(this);

// const calcAge2 = function(birthYear) {
//     console.log(2037 - birthYear);
//     console.log(this);
// }

// console.log(calcAge2(1991));

// const calcAgeArrow2 = (birthYear) => {
//     console.log(2037 - birthYear);
//     console.log(this);
// }

// console.log(calcAgeArrow2(1991));

// const laura = {
//     year: 1999,
//     age: function() {
//         console.log(this);
//         console.log(2021 - this.year);
//     }
// }

// laura.age();

// const patricia = {
//     year: 1975
// };

// patricia.age = laura.age;
// patricia.age();

// console.log('-------');
// const f = laura.age;
// f.apply(patricia);
// f.call(patricia);
// var firstName = 'Laurita';

// -- NEVER EVER USE AN ARROW FUNCTION AS A METHOD
// const laura = {
//     firstName: 'Laura',
//     year: 1999,
//     age:  function() {
//         // console.log(this);
//         console.log(2021 - this.year);
//         // const self = this;
//         // const isMillenial = function() {
//         //     console.log(self);
//         //     console.log(self.year >= 1981 && self.year <= 1996);
//         // }
//         // isMillenial();

//         const isMillenial = () => {
//             console.log(this);
//             console.log(this.year >= 1981 && this.year <= 1996);
//         };
//         isMillenial();
//     },

//     // arrow functions don't have their own keyword
//     greet: () => {
//         console.log(this);
//         console.log(`Hey ${this.firstName}`)
//     }
// }

// // laura.greet();
// laura.age();

// const addExpr = function(a, b) {
//     console.log(arguments);
//     return a + b;
// }

// var addArrow = () => {
//     // does not exist
//     // console.log(arguments);
//     return a + b;
// }

// addExpr(2, 3);
// addExpr(2, 5, 8, 9, 10);

// addArrow();

// let age = 30;
// let oldAge = age;
// age = 31;

// console.log(age);
// console.log(oldAge);

// const me = {
//     name: 'Laura',
//     age: 21
// };

// const friend = me;
// friend.age = 27

// console.log(me);
// console.log(friend);

// PRIMITIVE TYPES
let lastName = 'Dalmolin';
let oldLastName = lastName;
lastName = 'Aguiar';
// console.log(lastName, oldLastName);


// REFERENCE TYPES
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27
}

const marriedJessica = jessica;
marriedJessica.lastName = 'Smith';
// console.log('Before marriage: ', jessica.lastName)
// console.log('After marriage: ', jessica.lastName)


const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob']
}

const newJessica = Object.assign({}, jessica2);
newJessica.lastName = 'Davis';
// console.log('Before marriage: ', jessica2.lastName)
// console.log('After marriage: ', newJessica.lastName)

newJessica.family.push('Lua');
newJessica.family.push('Carmen');
console.log('Before marriage: ', jessica2)
console.log('After marriage: ', newJessica)