'use strict';

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav__links');
const navLinks = document.querySelectorAll('.nav__links li');

const navSlider = function () {
	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');

		navLinks.forEach((el, i) => {
			if (el.style.animation) {
				return;
			} else {
				el.style.animation = `navLinksMovement 0.5s ease forwards ${
					i / 7 + 0
				}s`;
			}
		});

		burger.classList.toggle('menu');
	});
};

navSlider();
