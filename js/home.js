let current_chat = document.getElementById("current_chat")
let controls = document.getElementById("controls")

// Load the stage and characters and stuff
let stage = new babble.Stage("intro", {
  "numCharacters": 3,
  "puppetScale": 1.5
}, {
    "94370077":{"name":"brow_excited","location":"eyebrows/94370077.png"},"-1478408941":{"name":"brow_normal","location":"eyebrows/-1478408941.png"},"-1370165314":{"name":"brow_confused","location":"eyebrows/-1370165314.png"},"-894109551":{"name":"brow_sad","location":"eyebrows/-894109551.png"},"-1624236206":{"name":"brow_angry","location":"eyebrows/-1624236206.png"},"-679379193":{"name":"eyes_normal","location":"eyes/-679379193.png"},"256135152":{"name":"mouth_teeth","location":"mouths/256135152.png"},"1802568030":{"name":"mouth_ooo","location":"mouths/1802568030.png"},"-1156489428":{"name":"mouth_normal","location":"mouths/-1156489428.png"},"-2006318913":{"name":"mouth_open","location":"mouths/-2006318913.png"},"-1834200705":{"name":"mouth_sad","location":"mouths/-1834200705.png"},"1879914476":{"name":"body","location":"shirts/1879914476.png"},"-925878550":{"name":"head","location":"skin/-925878550.png"},"-1259854622":{"name":"glasses_normal","location":"glasses/-1259854622.png"},"208380174":{"name":"kobold","location":"hats/208380174.png"},"354769791":{"name":"seachef","location":"hats/354769791.png"},"478565665":{"name":"tophat","location":"hats/478565665.png"},"-479894397":{"name":"elf","location":"hats/-479894397.png"},"-1611255066":{"name":"petalwalker","location":"hats/-1611255066.png"},"-5576877":{"name":"porc","location":"hats/-5576877.png"},"-1485571036":{"name":"wizard","location":"hats/-1485571036.png"}
}, "assets/blackhat-assets/assets", loaded);
let gravy = {"deadbonesStyle":false,"body":[{"tab":"shirts","id":"1879914476","x":1.5,"y":-54,"rotation":0,"scaleX":1,"scaleY":1}],"head":[{"tab":"skin","id":"-925878550","x":1,"y":-210.5,"rotation":0,"scaleX":1,"scaleY":1},{"tab":"hats","id":"478565665","x":-6,"y":-305,"rotation":0,"scaleX":1,"scaleY":1}],"hat":[],"mouths":["2","3","4","5"],"eyes":["0","1","5","6"],"emotes":[{"name":"default","enabled":true,"mouth":[{"tab":"mouths","id":"-1156489428","x":-15.5,"y":-125,"rotation":0,"scaleX":1,"scaleY":1}],"eyes":[{"tab":"eyes","id":"-679379193","x":-7,"y":-187.5,"rotation":0,"scaleX":1,"scaleY":1},{"tab":"eyebrows","id":"-1478408941","x":-6.5,"y":-210,"rotation":0,"scaleX":1,"scaleY":1}]},{"name":"happy","enabled":true,"mouth":[{"tab":"mouths","id":"-1156489428","x":-16,"y":-125.5,"rotation":0,"scaleX":1,"scaleY":1}],"eyes":[{"tab":"eyes","id":"-679379193","x":-7,"y":-187.5,"rotation":0,"scaleX":1,"scaleY":1},{"tab":"eyebrows","id":"94370077","x":-10.5,"y":-225,"rotation":0,"scaleX":1,"scaleY":1}]},{"name":"confused","enabled":true,"mouth":[{"tab":"mouths","id":"256135152","x":-6,"y":-126.5,"rotation":0,"scaleX":1,"scaleY":1}],"eyes":[{"tab":"eyes","id":"-679379193","x":-7,"y":-187.5,"rotation":0,"scaleX":1,"scaleY":1},{"tab":"eyebrows","id":"-1370165314","x":-9,"y":-212.5,"rotation":0,"scaleX":1,"scaleY":1}]},{"name":"gasp","enabled":true,"mouth":[{"tab":"mouths","id":"-2006318913","x":-5.5,"y":-123.5,"rotation":0,"scaleX":1,"scaleY":1}],"eyes":[{"tab":"eyebrows","id":"94370077","x":-10.5,"y":-225,"rotation":0,"scaleX":1,"scaleY":1},{"tab":"eyes","id":"-679379193","x":-7,"y":-187.5,"rotation":0,"scaleX":1,"scaleY":1}]},{"name":"ooo","enabled":true,"mouth":[{"tab":"mouths","id":"1802568030","x":-2,"y":-122.5,"rotation":0,"scaleX":1,"scaleY":1}],"eyes":[{"tab":"eyebrows","id":"94370077","x":-9.5,"y":-220,"rotation":0,"scaleX":1,"scaleY":1},{"tab":"eyes","id":"-679379193","x":-7,"y":-187.5,"rotation":0,"scaleX":1,"scaleY":1}]},{"name":"sad","enabled":true,"mouth":[{"tab":"mouths","id":"-1834200705","x":-14.5,"y":-125.5,"rotation":0,"scaleX":1,"scaleY":1}],"eyes":[{"tab":"eyes","id":"-679379193","x":-7,"y":-187.75,"rotation":0,"scaleX":1,"scaleY":1},{"tab":"eyebrows","id":"-894109551","x":-7.5,"y":-211.5,"rotation":0,"scaleX":1,"scaleY":1}]},{"name":"angry","enabled":true,"mouth":[{"tab":"mouths","id":"256135152","x":-12,"y":-128.5,"rotation":0,"scaleX":1,"scaleY":1}],"eyes":[{"tab":"eyes","id":"-679379193","x":-7,"y":-187.5,"rotation":0,"scaleX":1,"scaleY":1},{"tab":"eyebrows","id":"-1624236206","x":-7,"y":-207,"rotation":0,"scaleX":1,"scaleY":1}]},{"name":"wink","enabled":false,"mouth":[],"eyes":[]},{"name":"kiss","enabled":false,"mouth":[],"eyes":[]}],"props":[{"tab":"glasses","id":"-1259854622","x":-3,"y":-158,"rotation":0,"scaleX":1,"scaleY":1}],"name":"Gravy","id":1,"position":0,"facingLeft":false,"emote":"0"}
let start = "delay 100;\n" +
"add gravy 1 0;\n" +
"move 1 2;\n" +
"chat 1 0;"

let stageElement = document.getElementById("intro")

function loaded() {
    stage.resize()
    // I want the puppet (who's height is 567) to be about 33% of the screen size
    let puppetScale = stage.screen.clientHeight / 2.5 / 567 / stage.puppetStage.scale.y
    stage.project.puppetScale = puppetScale
    stage.resize(null, stageElement.clientWidth, stageElement.clientHeight)
    window.onresize = () => {
        stage.resize()
        let puppetScale = stageElement.clientHeight / 2.5 / 567 / stage.puppetStage.scale.y
        stage.project.puppetScale = puppetScale
        stage.resize(null, stageElement.clientWidth, stageElement.clientHeight)
    }
    startCutscene()
}

function startCutscene() {
    let cut = new babble.Cutscene(stage, start, {"gravy": gravy})
    let add = cut.actions.add.bind(cut)
    cut.actions.add = function(callback, name, id, position) {
        add(callback, name, id, position)
        stage.resize(null, stageElement.clientWidth, stageElement.clientHeight)
    }

    cut.actions.chat = function(callback, target, chatId) {
        let chats = [{
            message: "I'm Anthony, or The Paper Pilot, and I make fun games and tools using Javascript and Unity!"
        }]
        current_chat.style.display = 'block'
        this.stage.getPuppet(target).setBabbling(true)
        chatter(callback, target, chats[chatId], this.stage, 0)
    }
    cut.start()
}

function chatter(callback, target, chat, stage, textPos) {
    if (textPos++ > chat.message.length) {
        stage.getPuppet(target).setBabbling(false)
    } else {
        current_chat.innerText = chat.message.substring(0, textPos) + "_"
        setTimeout(() => {chatter(callback, target, chat, stage, textPos)}, 20)
    }
}

// Make player controllable
window.onkeydown = function(e) {
    let key = e.keyCode ? e.keyCode : e.which
    current_chat.style.display = 'none'
    hideControls()

    if (key == 32) {
        stage.getPuppet(1).setBabbling(true)
        e.preventDefault()
    }
}
window.onkeyup = function(e) {
    let key = e.keyCode ? e.keyCode : e.which

    if (key > 48 && key < 58)
        stage.getPuppet(1).changeEmote(key - 49)
    else if (key == 37) stage.getPuppet(1).moveLeft()
    else if (key == 38) stage.getPuppet(1).jiggle()
    else if (key == 39) stage.getPuppet(1).moveRight()
    else if (key == 32) {
        stage.getPuppet(1).setBabbling(false)
        e.preventDefault()
    }
}

function showControls() {
    controls.style.opacity = 1
}

let timeout
function hideControls() {
    controls.style.opacity = 0
    if (timeout)
        clearTimeout(timeout)
    timeout = setTimeout(showControls, 4000)
}

hideControls()

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;

// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {

    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});
