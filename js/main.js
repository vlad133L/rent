const form = document.querySelector('form');
const input = document.querySelector('.form__input');

input.addEventListener('focus', function(){
	form.classList.add('form--active');
})

input.addEventListener('blur', function(){
	form.classList.remove('form--active');
})

const mobileNavButton = document.querySelector('.menu');
const mobileNavIcon = document.querySelector('.menu__line');
const mobileNav = document.querySelector('.mobile-nav');

mobileNavButton.addEventListener('click',function(){
	mobileNavIcon.classList.toggle('active');
	mobileNav.classList.toggle('active');
})

