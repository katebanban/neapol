//* SWIPER
const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: true,
	autoHeight: true,

	// Pagination
	pagination: {
		el: '.first__pagination',
		clickable: true,
	},
});

//* MENU
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
const menuLinks = document.querySelectorAll('.menu a');
const header = document.querySelector('.header');
const body = document.querySelector('body');

menuBtn.addEventListener('click', () => {
	menu.classList.toggle('active');
	menuBtn.classList.toggle('active');
	header.classList.toggle('active');
	body.classList.toggle('no-scroll');
})

// после нажатия на любой пункт меню оно закроется
for (let i = 0; i < menuLinks.length; i++) {
	let menuLink = menuLinks[i]; // получаем каждую отдельную ссылку
	menuLink.addEventListener('click', () => {
		menu.classList.remove('active');
		menuBtn.classList.remove('active');
		header.classList.remove('active');
		body.classList.remove('no-scroll');
	})
}