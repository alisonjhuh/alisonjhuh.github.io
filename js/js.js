/* Carousel */
$(document).ready(function() {
	// typed
	var aboutTyped = new Typed('#iam-carousel', {
		strings: ["hi there!", "i'm alison huh (-:",
		"i'm a junior @ uc berkeley", "i'm an english major",
		"i'm a comp sci minor, too!", "i work as a digital marketer",
		"i love making playlists", "and i prefer public transit!"],
		typeSpeed: 60,
		backSpeed: 20,
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
x.addListener(myFunction)


function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


/* TOP BUTTON */
mybutton = document.getElementById("scrollTop");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
