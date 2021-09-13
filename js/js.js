/* Carousel */
$(document).ready(function() {
	// typed
	var aboutTyped = new Typed('#iam-carousel', {
		strings: ["hi there, i'm ali :-)"],
		typeSpeed: 120,
		startDelay: 200,
		fadeOut: false,
		loop: false,
		showCursor: false,
	});
});

/* AOS */
AOS.init({ duration: 1000, once: true });
