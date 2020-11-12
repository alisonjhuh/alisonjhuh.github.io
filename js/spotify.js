/* Carousel */
$(document).ready(function() {
	// typed
	var aboutTyped = new Typed('#spotify-carousel', {
		strings: ["hi spotify!!",
		"it's great to see you here!",
		"i'm alison, and i'm here to audition for your music culture and editorial team :-)"],
		typeSpeed: 40,
		backSpeed: 30,
		smartBackspace: true,
		backDelay: 1000,
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