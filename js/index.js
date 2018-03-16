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
