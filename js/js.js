/* Carousel */
$(document).ready(function() {
	// typed
	var aboutTyped = new Typed('#iam-carousel', {
		strings: ["hi there!", "i'm alison huh :-)",
		"i'm a junior @ uc berkeley",
		"i built this site myself!!",
		"i'm a digital marketer",
		"i'm a (former) flautist",
		"i'm a playlist afficionado",
		"i love quierky earrings",
		"and i prefer public transit!"],
		typeSpeed: 60,
		backSpeed: 40,
		smartBackspace: true,
		backDelay: 1500,
		fadeOut: false,
		loop: true,
		loopCount: Infinity,
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
