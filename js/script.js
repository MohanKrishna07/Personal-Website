const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 100);
});

let navlist = document.querySelector('.navlist');

window.onscroll = () => {
	navlist.classList.remove('open');
};