'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const openingHours = {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    }
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
  }, 
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

// MAPS
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
console.log(rest);

rest
  .set('categories', ['Italian', 'Pizzeria'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(')
  

// // SETS
// const ordersSet = new Set([
//   'Pasta',
//   'Pasta',
//   'Pizza', 
//   'Pizza', 
//   'Pizza', 
//   'Risotto'
// ]);

// console.log(ordersSet);
// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// console.log(new Set('Laura'));

// ordersSet.add('Garlic bread');
// ordersSet.add('Garlic Bread');
// console.log(ordersSet);

// ordersSet.delete('Risotto');
// console.log(ordersSet);

// // ordersSet.clear();
// // console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// // use case
// const staff = ['chef', 'waiter', 'waiter', 'manager', 'chef'];
// const uniqueStaff = [...new Set(staff)];
// const uniqueNumber = (new Set(staff)).size;
// console.log(uniqueStaff);
// console.log(uniqueNumber);



// LOOPING OBJECTS

// property names
// const properties = Object.keys(openingHours);
// console.log(properties);

// let open = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   open += `${day}, `;
// }

// console.log(open);

// // property values
// const values = Object.values(openingHours);
// console.log(values);

// const [primeiro, {open: aberto, close: fechado},  ...others] = values;
// console.log(primeiro);
// console.log(aberto);
// console.log(fechado);
// console.log(others);

// // ENTIRE OBJECT
// const entries = Object.entries(openingHours);
// console.log(entries);
// for (const [key, {open, close}] of entries) {
//   console.log(`${key}: open: ${open} | close: ${close}`);
// };

// OPTIONAL CHAINING
// const days = ['mon', 'tue', 'wed', 'fri', 'thu', 'sat', 'sun'];
// console.log(restaurant.openingHours?.mon?.open);
// for (const day of days) {
//   const opens = restaurant.openingHours[day]?.open ?? 'never';
//   console.log(`On ${day}, we open at ${opens}`);
// }

// // methods
// console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
// console.log(restaurant.orderA?.(0,1) ?? 'Method does not exist');

// // arays
// const users = [{name: 'Laura'}, {name:'PATRICIA'}];
// console.log(users[0]?.name ?? 'User array empty');

// const users2 = [];
// console.log(users2[0]?.name ?? 'User array empty'); 

// // Nullish coalescent operator ??
// // Nullish only null or undefined
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 0;
// console.log(guests);

// let guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// guestCorrect = '' ?? 10;
// console.log(guestCorrect);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);

// for (const [index, value] of menu.entries()) {
//   console.log(`${index + 1}: ${value}`);
// }


// && and || OPERATORS ///////////////////////////////////////////
// Use any data type, return any data type, short-circuiting
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 'Jonas');
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23);

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 0;
// const guests2 = restaurant.numGuests || 0;
// console.log(guests1);
// console.log(guests2);

// console.log('------ AND -------');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// console.log('Hello' && 23 && null && 'jonas');
// // if (restaurants.orderPizza) {
// //   restaurant.orderPasta('m', 's');
// // }

// restaurant.orderPizza && restaurant.orderPizza('m', 's');

//////////////////////////////////////////////////////////////////


// // REST PATTERN ////////////////////////////////////////////////////
// // SPREAD BECAUSE IT IS ON THE RIGHT SIDE OF =
// const arr = [1, 2, ...[3, 4]];

// // SPREAD BECAUSE IT IS ON THE --LEFT-- SIDE OF =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFood);

// // Objects
// const { sat, ...weekDays} = restaurant.openingHours;
// console.log(weekDays);

// // 2) Functions
// const add = (...numbers) => numbers.reduce((a, b) => a + b, 0);
// console.log(add(2, 3, 4, 5));
// console.log(add(2, 3, 4, 5, 6, 6, 7, 8));
// console.log(add(2, 3, 4, 5, 6, 6, 7, 8, 10));
// const x = [23, 5, 7];
// console.log(add(...x));

// restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

//////////////////////////////////////////////////////////////////


// // SPREAD OPERATOR
// const arr = [7, 8, 9];
// const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
// const goodNewArray = [1, 2, ...[...arr]];

// const flattenArray = (array) => {
//   return array.reduce((a, v) => a.concat(Array.isArray(v) ? flattenArray(v) : v), []);
// }

// const array = [1, [[2]], [2, 4], [[3], [4]]];
// const newArray = flattenArray(array);
// console.log(newArray);

// console.log(badNewArray);
// console.log(goodNewArray);

// console.log(...goodNewArray);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(restaurant.mainMenu);
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays or more
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);

// // const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'),
// // prompt('Ingredient 2?'), prompt('Ingredient 3?')];

// // console.log(ingredients);
// // restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = { foundingYear: 1984, ...restaurant, founder: 'Giuseppe'};
// console.log(newRestaurant);

// const restaurantShallowCopy = {...restaurant};
// restaurantShallowCopy.name = 'Ristorante Roma';
// console.log(restaurantShallowCopy);
// console.log(restaurant);

// restaurant.orderDelivery({
//   time: '23:30',
//   address: 'Sao Borja, 296',
//   mainIndex: 2,
//   starterIndex: 2
// });

// restaurant.orderDelivery({
//   address: 'Sao Borja, 296',
//   mainIndex: 2,
// });

// const arr = [2, 3, 4];
// const [a, b, c] = [2, 3, 4];
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // switching variables
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starterDish, mainDish] = restaurant.order(2, 0);
// console.log(starterDish, mainDish);

// // nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, ,j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// // destructuring objects
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let m = 111;
// let n = 999;
// const obj = { m: 23, n: 7, c: 14 };

// ({ m, n } = obj);
// console.log(m, n);

// // nested objects
// const { fri: { open, close } } = openingHours;
// console.log(open, close);



// fix capitalization

const passenger = 'lAuRa';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);