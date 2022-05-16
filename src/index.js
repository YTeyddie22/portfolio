'use strict';

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav__links');
const navLinks = document.querySelectorAll('.nav__links li');
const header = document.querySelector('.header');
const navSection = document.querySelector('.navigation');
const allSections = document.querySelectorAll('.section');

//? NAV

//! Nav slide section
/* const navSlider = function () {
	burger.addEventListener('click', () => {
		nav.classList.toggle('navigation-active');

		navLinks.forEach((el, i) => {
			if (el.style.animation) {
				return;
			} else {
				el.style.animation = `navLinksMovement 1.5s ease forwards ${
					i / 7 + 0
				}s`;
			}
		});

		burger.classList.toggle('menu');
	});
};

navSlider(); */

//! Nav selection EVENT

const navScrollBehavior = function (e) {
	e.preventDefault();

	const navLinks = e.target
		.closest('.navigation')
		.querySelectorAll('.nav__link');

	if (navLinks) {
		const id = e.target.getAttribute('href');
		console.log(id);
		document.querySelector(id).scrollIntoView({behavior: 'smooth'});
	}
};

//! Stick Navigation

const navHeight = navSection.getBoundingClientRect().height;

const stickyNavigation = function (entries) {
	const [entry] = entries;

	console.log(entry);
	if (!entry.isIntersecting) {
		nav.classList.add('sticky');
	} else {
		nav.classList.remove('sticky');
	}
};

const navObserver = new IntersectionObserver(stickyNavigation, {
	root: null,
	threshold: 0,
	rootMargin: `-${navHeight}px`,
});
navObserver.observe(header);

//! ADDEVENTLISTENERS

nav.addEventListener('click', navScrollBehavior);

//! 4. Show Contents on scroll
//* Observer Function

const revealSections = function (entries, observer) {
	const [entry] = entries;

	if (!entry.isIntersecting) return;

	entry.target.classList.remove('section__hidden');

	observer.unobserve(entry.target);
};

//* Observer

const sectionObserver = new IntersectionObserver(revealSections, {
	root: null,
	threshold: 0.2,
});

//All sections
allSections.forEach((el) => {
	sectionObserver.observe(el);
	el.classList.add('section__hidden');
});

//* Slider functionality

const sliders = function () {
	const slides = document.querySelectorAll('.slide');
	const leftBtn = document.querySelector('.slider__btn--left');
	const rightBtn = document.querySelector('.slider__btn--right');

	let currentSlide = 0;
	const maxSlide = slides.length - 1;

	const goToSlide = (slide) => {
		slides.forEach((el, i) => {
			return (el.style.transform = `translateX(${100 * (i - slide)}%)`);
		});
	};

	const nextSlide = () => {
		currentSlide === maxSlide ? (currentSlide = 0) : currentSlide++;

		console.log(currentSlide);
		goToSlide(currentSlide);
	};

	const prevSlide = () => {
		currentSlide === 0 ? (currentSlide = maxSlide) : currentSlide--;
		goToSlide(currentSlide);
	};

	const init = () => {
		goToSlide(0);
	};

	init();

	//* For keys
	document.addEventListener('keydown', (e) => {
		e.key === '&larr' && prevSlide;
		e.key === '&rarr' && nextSlide;
	});

	rightBtn.addEventListener('click', nextSlide);
	leftBtn.addEventListener('click', prevSlide);
};
sliders();
