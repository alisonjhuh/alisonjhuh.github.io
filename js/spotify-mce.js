/* Carousel */
$(document).ready(function() {
	// typed
	var aboutTyped = new Typed('#spotify-hi', {
		strings: ["Hi Spotify!!"],
		typeSpeed: 40,
		backSpeed: 20,
		smartBackspace: true,
		backDelay: 1500,
		fadeOut: false,
		loop: false,
		showCursor: false,
	});
});
$(document).ready(function() {
	// typed
	var aboutTyped = new Typed('#spotify-carousel', {
		strings: ["I'm Alison, and I'm here to audition for your Music Culture and Editorial team :-)"],
		typeSpeed: 40,
		backSpeed: 20,
		smartBackspace: true,
		startDelay: 1500,
		backDelay: 1500,
		fadeOut: false,
		loop: false,
		showCursor: false,
	});
});

/* AOS */
AOS.init({ duration: 1000, once: true });

/* Menu Bar */
function openNav() {
  if (x.matches) {
    document.getElementById("myNav").style.width = "100%";
  } else {
    document.getElementById("myNav").style.width = "25%";
  }
}
var x = window.matchMedia("(max-width: 1050px)")
x.addListener(closeNav);


function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
