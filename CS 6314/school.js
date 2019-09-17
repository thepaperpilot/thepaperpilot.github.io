var target = document.getElementById('target')

/* Changing Visibility */
function hide() {
    target.style.visibility = 'hidden'
}
document.getElementById('hide-button').addEventListener('click', hide)
function show() {
    target.style.visibility = ''
}
document.getElementById('show-button').addEventListener('click', show)
function toggleVisibility() {
    if (target.style.visibility)
        target.style.visibility = ''
    else
        target.style.visibility = 'hidden'
}
document.getElementById('toggle-button').addEventListener('click', toggleVisibility)

/* Fading in and out */
var faded = false
var current = 1
function fadeTo(opacity) {
    function fade() {
        faded = opacity === 0
        var animation = target.animate([{
            opacity: current
        }, {
            opacity: opacity
        }], {
            duration: 1000,
            fill: 'both'
        })
        current = opacity
        return animation
    }

    return fade
}
function fadeToggle() {
    if (faded)
        fadeTo(1)()
    else
        fadeTo(0)()
}
document.getElementById('fadein-button').addEventListener('dblclick', fadeTo(1))
document.getElementById('fadeout-button').addEventListener('dblclick', fadeTo(0))
document.getElementById('fadeto-button').addEventListener('dblclick', fadeTo(.5))
document.getElementById('toggle-fade-button').addEventListener('dblclick', fadeToggle)

/* "Animate CSS" */
function doneAlert() {
    // Aaaaaah!
    alert('Done!')
}
function mouseEnter() {
    target.style.animation = 'rotate 1s'
    setTimeout(doneAlert, 1000)
}
target.addEventListener('mouseenter', mouseEnter)
function mouseLeave() {
    target.style.animation = ''
}
target.addEventListener('mouseleave', mouseLeave)

/* Chained Events */
function chainFading(e) {
    var char = e.which || e.keyCode
    if (char !== 65 && char !== 97)
        return

    function third() {
        fadeTo(.5)()
    }
    function second() {
        fadeTo(1)().onfinish = third
    }
    fadeTo(0)().onfinish = second
}
window.addEventListener('keypress', chainFading)
function chainAnimate(e) {
    if (e.keyCode !== 70)
        return
    
    function third() {
        target.style.animation = 'popout 1s'
    }
    function second() {
        target.style.animation = 'jump 1s'
        setTimeout(third, 1000)
    }
    target.style.animation = 'rotate 1s'
    setTimeout(second, 1000)
}
window.addEventListener('keydown', chainAnimate)
