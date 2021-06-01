'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////////////////////////
btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({
    behavior: 'smooth',
  });
});

// EVENT DELEGATION
// 1. Add event listener to common parent element
// 2. Determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    const section = document.querySelector(id);
    section.scrollIntoView({
      behavior: 'smooth',
    });
  }
});

// Tabbed Component
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(t => t.classList.remove('operations__content--active'));

  // Activate content area
  clicked.classList.add('operations__tab--active');
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

const applyOpacity = e => {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Menu fade animation
// Passing an "argument" into handler
nav.addEventListener('mouseover', applyOpacity.bind(0.5));

// Remove fade
nav.addEventListener('mouseout', applyOpacity.bind(1));

// Sticky navigation
const initialCoords = section1.getBoundingClientRect();

// not very efficient because 'scroll' keeps firing
// window.addEventListener('scroll', function(e) {
//   if (window.scrollY > initialCoords.top)
//     nav.classList.add('sticky');
//   else
//     nav.classList.remove('sticky');
// });

// using Intersection Observer API works
// const obsCallback = function(entries, observer) {
//   entries.forEach(entry => console.log(entry));
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2]
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting) nav.classList.remove('sticky');
  else nav.classList.add('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// Reveal sections
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(section => {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src attribute with data-src
  const img = entry.target;
  img.src = img.dataset.src;
  img.addEventListener('load', function (e) {
    img.classList.remove('lazy-img');
  });

  observer.unobserve(img);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

// Slider component
const slider = () => {

  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let currentSlide = 0;
  let maxSlide = slides.length - 1;

  // Functions
  const goToSlide = function (slide) {
    activateDot(slide);
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${(i - slide) * 100}%)`)
    );
  };

  const createDots = function () {
    slides.forEach((_, i) => {
      const button = document.createElement('button');
      button.classList.add('dots__dot');
      button.dataset.slide = i;
      dotContainer.insertAdjacentElement('beforeend', button);
    });
  };

  const activateDot = (slide) => {
    const dots = document.querySelectorAll('.dots__dot');
    dots.forEach(dot => dot.classList.remove('dots__dot--active'));

    const activeDot = document.querySelector(`.dots__dot[data-slide="${slide}"]`);
    activeDot.classList.add('dots__dot--active');
  };

  const nextSlide = () => {
    if (currentSlide == maxSlide) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    goToSlide(currentSlide);
  };

  const previousSlide = () => {
    if (currentSlide === 0) {
      currentSlide = maxSlide;
    } else {
      currentSlide--;
    }
    goToSlide(currentSlide);
  };

  const init = () => {
    createDots();
    goToSlide(currentSlide);
  };

  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', previousSlide);

  document.addEventListener('keydown', function (e) {
    e.key === 'ArrowLeft' && previousSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('dots__dot')) {
      const {slide} = e.target.dataset;
      currentSlide = slide;
      goToSlide(currentSlide);
    }
  });
};

slider();

document.addEventListener('DOMContentLoaded', function(e) {
  console.log('HTML parsed and DOM tree built!', e)
});

window.addEventListener('load', function(e) {
  console.log('PAGE LOADED!!!');
});

// window.addEventListener('beforeunload', function(e) {
//   debugger;
//   e.preventDefault();
//   console.log('unloading!!!');
//   e.returnValue = '';
// });


// DOM TRAVERSING
// const h1 = document.querySelector('h1');

// // going downwards -> child
// console.log(h1.querySelectorAll('.highlight'));
// // console.log(h1.childNodes)
// // only for first children
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'blue';

// // Going upwards
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// // h1.closest('.header').style.background = 'var(--gradient-secondary)';
// // h1.closest('h1').style.background = 'var(--gradient-primary)';

// // Goind sideways -> siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// // console.log(h1.previousSibling);
// // console.log(h1.nextSibling);

// // all siblings of an element
// console.log(h1.parentElement.children);
// const siblings = [...h1.parentElement.children];
// siblings.forEach(sibling => {
//   if (sibling !== h1) {
//     sibling.style.backgroundColor = 'purple';
//   }
// });

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function(e) {
//   const s1coords = section1.getBoundingClientRect();
//   // console.log(s1coords);
//   // console.log('Current scroll (x/y)', window.pageXOffset, window.pageYOffset);
//   // console.log('height/width', document.documentElement.clientHeight, document.documentElement.clientWidth);

//   // window.scrollTo();
//   // OLD SCHOOL
//   // window.scrollTo({
//   //   left: s1coords.left + window.pageXOffset,
//   //   top: s1coords.top + window.pageYOffset,
//   //   behavior: 'smooth'
//   // });

//  // MODERN WAY
//  section1.scrollIntoView({ behavior: 'smooth' });
// });

// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('hey!!');
//   h1.removeEventListener('mouseenter', alertH1);
// }

// h1.addEventListener('mouseenter', alertH1);

// // OLD SCHOOL
// // h1.onmouseenter = function (e) {
// //   alert('addEventListener: Greet!');
// // }

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// rgb(255, 255, 255)
// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// console.log(randomColor());

// document.querySelector('.nav__link').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor();

//   // stop propagation
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector('.nav').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor();
// });

// Page navigation
// not efficient at all
// if we had a thousand navs, the callback would be created
// a thousand times
// document.querySelectorAll('.nav__link').forEach(el => {
//   el.addEventListener('click', function(e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     const section = document.querySelector(id);
//     section.scrollIntoView({
//       behavior: 'smooth'
//     });
//     console.log(id);
//   })
// });

// 'use strict';

// ///////////////////////////////////////
// // Modal window

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.btn--close-modal');
// const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// const openModal = function (e) {
//   e.preventDefault();
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// btnsOpenModal.forEach(btn => {
//   btn.addEventListener('click', openModal);
// });

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });

// ////////////////////////////////////////////////////

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');

// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// const btns = document.getElementsByClassName('btn');
// console.log(btns);

// // Creating and inserting elements
// // .insertAdjacentHtml
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'We use cookies for improved functionality and analytics.';
// message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// // prepend adds element as first child of parent element
// // header.prepend(message);
// // message is moved to the end of header because it
// // cannot be at two places at once.
// header.append(message);
// // header.append(message.cloneNode(true));

// // header.before(message);
// // header.after(message);

// // Delete elements
// document.querySelector('.btn--close-cookie').addEventListener('click', function() {
//   console.log('query');
//   message.remove();
// });

// // Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(getComputedStyle(message).color);
// message.style.height = Number.parseFloat(getComputedStyle(message).style, 10) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', '#3399ff');
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.getAttribute('src'));
// console.log(logo.className);

// logo.setAttribute('designer', 'Laura');
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));

// // Data attributes
// console.log(logo.dataset.versionNumber);

// // Classes
// logo.classList.add('a', 'v');
// logo.classList.remove('c');
// logo.classList.toggle('n');
// logo.classList.contains('t');

// // overrides all classes that already exist
// // logo.className = 'jonas';
