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

// Setup Carousel (used on homepage)
$(document).ready(function(){
    $('.carousel.carousel-slider').carousel({full_width: true});
});

$('iframe').each(function() {
	this.tmp = this.src;
	this.src = '';
	$(this).wrap('<div class="iframe_block">')
})
.parent('.iframe_block')
.click(function() {
	let frame = $(this).children("iframe")[0]
	frame.src = frame.tmp
})
