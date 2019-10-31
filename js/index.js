// Variables
let acc = document.getElementsByClassName("accordion");

// Set up accordion
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", accordionClick);
}

function accordionClick() {
  let active = false
  let activeElements = document.getElementsByClassName("active")
  while (activeElements[0]) {
    let activeElement = activeElements[0]
    activeElement.classList.remove("active");
    activeElement.nextElementSibling.style.maxHeight = null;
    if (activeElement == this)
      active = true
  }

  if (active) return

  this.classList.add("active")
  let panel = this.nextElementSibling;
  panel.style.maxHeight = panel.scrollHeight + "px";
}

// Set up fullscreen buttons (used on pages with embedded games)
function fullscreen() {
  // check if fullscreen mode is available
  if (document.fullscreenEnabled || 
    document.webkitFullscreenEnabled || 
    document.mozFullScreenEnabled ||
    document.msFullscreenEnabled) {

    // which element will be fullscreen
  var iframe = document.getElementById('embed');
    // Do fullscreen
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    } else if (iframe.webkitRequestFullscreen) {
      iframe.webkitRequestFullscreen();
    } else if (iframe.mozRequestFullScreen) {
      iframe.mozRequestFullScreen();
    } else if (iframe.msRequestFullscreen) {
      iframe.msRequestFullscreen();
    }
    iframe.contentWindow.focus();
  }
  else {
    console.log('Your browser is not supported');
  }
}

let btn = document.getElementById('fullscreenBtn')
if (btn) btn.addEventListener('click', fullscreen)

var carousel = document.getElementById('carousel');
let slides = carousel.querySelectorAll('.slide');
let indicators = carousel.querySelectorAll('.indicator');

function setSlide(slide) {
    return function() {
        // Reset all slides
        for (let i = 0; i < indicators.length; i++) {
            slides[i].classList.remove("active-slide");
        }

        // Set defined slide as active
        slides[slide].classList.add("active-slide");
    };
}

for (let i = 0; i < indicators.length; i++) {
    indicators[i].addEventListener("click", setSlide(i));
}
