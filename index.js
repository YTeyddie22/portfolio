'use strict';

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav__links');
const navLinks = document.querySelectorAll('.nav__links li');
const header = document.querySelector('.header');
const navSection = document.querySelector('.navigation');

//? NAV

//! Nav slide section
const navSlider = function () {
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

navSlider();

//! Nav selection EVENT

const navScrollBehavior = function (e) {
	e.preventDefault();

	const navLinks = e.target
		.closest('.navigation')
		.querySelectorAll('.nav__link');

	if (navLinks) {
		const id = e.target.getAttribute('href');
		console.log(id);
		document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
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
