'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
}

const renderCountry = function (data, className = '') {
    const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
    </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;

}

///////////////////////////////////////

// const getCountryData = function(query) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.eu/rest/v2/name/${query}`);
//     request.send();

//     request.addEventListener('load', function () {
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);

//         const html = `
//     <article class="country">
//         <img class="country__img" src="${data.flag}" />
//         <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//         </div>
//     </article>
//   `;
//         console.log(html);
//         countriesContainer.insertAdjacentHTML('beforeend', html);
//         countriesContainer.style.opacity = 1;
//     });
// }

// getCountryData('portugal');
// getCountryData('brasil');
// getCountryData('usa');
// getCountryData('germany');

// LECTURE 2

// const getCountryAndNeighborData = function(query) {

//     // Ajax call country 1
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.eu/rest/v2/name/${query}`);
//     request.send();

//     request.addEventListener('load', function () {
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);

//         // Render country 1
//         renderCountry(data);

//         const [neighbour] = data.borders;

//         if (!neighbour) return;

//         const request = new XMLHttpRequest();
//         request.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//         request.send();

//         request.addEventListener('load', function () {
//             const data = JSON.parse(this.responseText);
//             console.log(data);

//             // Render country 2
//             renderCountry(data, 'neighbour');
//         });

//     });
// };

// getCountryAndNeighborData('BRASIL');

// const request = fetch('https://restcountries.eu/rest/v2/name/portugal');
// console.log(request);

const getJSON = function(url, errorMessage='something went wrong') {
    return fetch(url)
    .then(response => {
      if (!response.ok) throw new Error(`${errorMessage} (${ response.status })`);
      return response.json();
    })
}

// const getCountryData = function(country) {
//     fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//       .then((response) => {
//         if (!response.ok)
//           throw new Error(`Country not found (${response.status})`);
//         return response.json();
//         })
//       .then((data) => {
//         renderCountry(data[0]);
//         const neighbour = data[0].borders[0];

//         if (!neighbour) return;

//         return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`)
//       })
//       .then(response => response.json())
//       .then(data => renderCountry(data, 'neighbour'))
//       .catch(err => {
//         console.error(err);
//         renderError(`Something went wrong ${err.message}. Try again.`)
//       })
//       .finally(() => {
//         countriesContainer.style.opacity = 1;
//       });
// }

// const getCountryData = function (country) {
//     getJSON(`https://restcountries.eu/rest/v2/name/${country}`, 'Country not found')
//     .then((data) => {
//         renderCountry(data[0]);
//         const neighbour = data[0].borders[0];

//         if (!neighbour) throw new Error('No neighbour found');

//         return getJSON(`https://restcountries.eu/rest/v2/alpha/${neighbour}`, 'Country not found');
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//         console.error(err);
//         renderError(`Something went wrong ${err.message}. Try again.`)
//     })
//     .finally(() => {
//         countriesContainer.style.opacity = 1;
//     });
// }

// btn.addEventListener('click', function() {
//   getCountryData('australia');
// });

// console.log('Test start');
// // setTimeout runs after the promise because
// // the promise goes to the microtask queue that has 
// // priority over the callback queue
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// Promise.resolve('Resolved promise 2').then(res => {
//     for (let i = 0; i < 20000000; i++) {};
//     console.log(res);        
// });
// console.log('Test end');

// parameter is called executer
// const lotteryPromise = new Promise(function (resolve, reject) {
//     console.log('Lottery draw is happening...');
//     setTimeout(function () {
//         if (Math.random() >= 0.5) {
//             resolve('You won!');
//         } else {
//             reject(new Error('You lost!'));
//         }
//     }, 2000);
// });

// lotteryPromise
//     .then(res => console.log(res))
//     .catch(err => console.error(err));

// REAL WORLD EXAMPLE
// const wait = function (seconds) {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), seconds * 1000)
//     });
// };

// wait(1)
// .then(() => {
//     console.log('1s');
//     return wait(1);
// })
// .then(() => {
//     console.log('2s');
//     return wait(1);
// })
// .then(() => {
//     console.log('3s');
//     return wait(1);
// })
// .then(() => {
//     console.log('4s');
//     return wait(1);
// })
// .then(() => console.log('5d'));


const getPosition = function() {
    return new Promise((resolve, reject) => {
        navigator.geolocation
            // .getCurrentPosition(
            //     position => {
            //         console.log(position);
            //         resolve(getCurrentPosition);
            //     },
            //     err => {
            //         console.log(err);
            //         reject(err);
            //     }
            // );
            .getCurrentPosition(resolve, reject);
    });
};


// const whereAmI = function() {
//     getPosition().then(position => {
//         const { latitude: lat, longitude: lng } = position.coords;
//         return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(res => {
//         if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//         return res.json();
//     })
//     .then(data => {
//         const country = data.country;
//         console.log(`You are in ${data.city}, ${data.country}`);
//         return getJSON(`https://restcountries.eu/rest/v2/name/${country}`, 'Country not found')
//     }).then((data) => {
//         renderCountry(data[0]);
//         const neighbour = data[0].borders[0];

//         if (!neighbour) throw new Error('No neighbour found');

//         return getJSON(`https://restcountries.eu/rest/v2/alpha/${neighbour}`, 'Country not found');
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//         console.error(err);
//         renderError(`Something went wrong ${err.message}. Try again.`)
//     })
//     .finally(() => {
//         countriesContainer.style.opacity = 1;
//     });
// }

// btn.addEventListener('click', whereAmI)

// CODING CHALLENGE 2
// const imgContainer = document.querySelector('.images');

// const wait = function (seconds) {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), seconds * 1000)
//     });
// };

// const createImage = function(img) {
//     return new Promise((resolve, reject) => {
//         const image = document.createElement('img');
//         image.src = img;
//         image.addEventListener('load', function() {
//             console.log('aha')
//             imgContainer.append(image);
//             resolve(image);
//         });
//         image.addEventListener('error', function() {
//             reject(new Error('Image not found'));
//         });

//     });
// }

// let currentImage;
// createImage('img/img-1.jpg')
//     .then(img => {
//         currentImage = img;
//         return wait(2);
//     })
//     .catch(err => console.log(err))
//     .then(() => {
//         if (currentImage)
//             currentImage.style.display = 'none';
//         return createImage('img/img-2.jpg');
//     })
//     .then(img => {
//         currentImage = img;
//         return wait(2);
//     })
//     .catch(err => console.log(err))
//     .then(() => {
//         if (currentImage)
//             image.style.display = 'none';
//     });

const whereAmI = async function() {
    try {
        // Geolocation
        const position = await getPosition();
        const { latitude: lat, longitude: lng } = position.coords;
        
        // Reverse geocoding
        const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
        if (!resGeo.ok) throw new Error('Problem getting location data');
        
        const dataGeo = await resGeo.json();
        const country = dataGeo.country;
        
        // Country data
        const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
        if (!res.ok) throw new Error('Problem getting country');

        const data = await res.json();
        renderCountry(data[0]);
    } catch(err) {
        console.log(err);
        renderError(`:( ${err.message})`);
    }
}
whereAmI();
whereAmI();
whereAmI();
whereAmI();
whereAmI();
btn.addEventListener('click', whereAmI);
console.log('FIRST');