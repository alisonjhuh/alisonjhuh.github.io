/* Carousel */
$(document).ready(function() {
	// typed
	var aboutTyped = new Typed('#iam-carousel', {
		strings: ["I'm Ali Huh ٩(ˊωˋ*)و "],
		typeSpeed: 60,
		startDelay: 100,
		fadeOut: false,
		loop: false,
		showCursor: false,
	});
	var aboutTyped = new Typed('#reminder-carousel', {
		strings: ["psst.. scroll down to check out some of my work"],
		typeSpeed: 10,
		startDelay: 3000,
		fadeOut: false,
		loop: false,
		showCursor: false,
	});
});

/* AOS */
AOS.init({ duration: 1000, once: true });
