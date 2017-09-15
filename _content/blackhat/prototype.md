---
layout: default
title: Black Hat Prototype
---
<div style="position: relative;">
<button id="fullscreenBtn" style="position: absolute; bottom: 10px; right: 10px; width: 30px; height: 30px; background: none; border: none;">
	<img src="https://itch.io/static/images/enlarge.svg" style="width: 30px; height: 30px">
</button>
<iframe id="prototype" msallowfullscreen="true" allowfullscreen="true" src="/content/blackhat/bh_prototype.html" scrolling="no" allowtransparency="true" webkitallowfullscreen="true" mozallowfullscreen="true" frameborder="0" style="width: 100%; height: 500px"></iframe>
</div>

<script>
function fullscreen() {
  // check if fullscreen mode is available
  if (document.fullscreenEnabled || 
    document.webkitFullscreenEnabled || 
    document.mozFullScreenEnabled ||
    document.msFullscreenEnabled) {
    
    // which element will be fullscreen
    var iframe = document.getElementById('prototype');
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
  }
  else {
    console.log('Your browser is not supported');
  }
}

document.getElementById('fullscreenBtn').addEventListener('click', fullscreen)
</script>