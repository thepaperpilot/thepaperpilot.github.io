// Variables
let cutscene = true // whether or not we're currently in a cutscene. Starts at true until everything loaded
let isLoaded = false // turned to true when either 4 seconds have passed or all assets loaded
let chatClicked = false // whether or not the chatbox has been clicked

// Load the stage and characters and stuff
// Less than ideal process, but I don't know how to load JSON client side
let stage = new babble.Stage("screen", {
  "numCharacters": 5,
  "puppetScale": 1
}, {
    "94370077":{"name":"brow_excited","location":"eyebrows/94370077.png"},"-1478408941":{"name":"brow_normal","location":"eyebrows/-1478408941.png"},"-1370165314":{"name":"brow_confused","location":"eyebrows/-1370165314.png"},"-894109551":{"name":"brow_sad","location":"eyebrows/-894109551.png"},"-1624236206":{"name":"brow_angry","location":"eyebrows/-1624236206.png"},"-679379193":{"name":"eyes_normal","location":"eyes/-679379193.png"},"256135152":{"name":"mouth_teeth","location":"mouths/256135152.png"},"1802568030":{"name":"mouth_ooo","location":"mouths/1802568030.png"},"-1156489428":{"name":"mouth_normal","location":"mouths/-1156489428.png"},"-2006318913":{"name":"mouth_open","location":"mouths/-2006318913.png"},"-1834200705":{"name":"mouth_sad","location":"mouths/-1834200705.png"},"1879914476":{"name":"body","location":"shirts/1879914476.png"},"-925878550":{"name":"head","location":"skin/-925878550.png"},"-1259854622":{"name":"glasses_normal","location":"glasses/-1259854622.png"},"208380174":{"name":"kobold","location":"hats/208380174.png"},"354769791":{"name":"seachef","location":"hats/354769791.png"},"478565665":{"name":"tophat","location":"hats/478565665.png"},"-479894397":{"name":"elf","location":"hats/-479894397.png"},"-1611255066":{"name":"petalwalker","location":"hats/-1611255066.png"},"-5576877":{"name":"porc","location":"hats/-5576877.png"},"-1485571036":{"name":"wizard","location":"hats/-1485571036.png"}
}, "assets", loaded);
let gravy = {"deadbonesStyle":false,"body":[{"tab":"shirts","id":"1879914476","x":1.5,"y":-54,"rotation":0,"scaleX":1,"scaleY":1}],"head":[{"tab":"skin","id":"-925878550","x":1,"y":-210.5,"rotation":0,"scaleX":1,"scaleY":1},{"tab":"hats","id":"478565665","x":-6,"y":-305,"rotation":0,"scaleX":1,"scaleY":1}],"hat":[],"mouths":["2","3","4","5"],"eyes":["0","1","5","6"],"emotes":[{"name":"default","enabled":true,"mouth":[{"tab":"mouths","id":"-1156489428","x":-15.5,"y":-125,"rotation":0,"scaleX":1,"scaleY":1}],"eyes":[{"tab":"eyes","id":"-679379193","x":-7,"y":-187.5,"rotation":0,"scaleX":1,"scaleY":1},{"tab":"eyebrows","id":"-1478408941","x":-6.5,"y":-210,"rotation":0,"scaleX":1,"scaleY":1}]},{"name":"happy","enabled":true,"mouth":[{"tab":"mouths","id":"-1156489428","x":-16,"y":-125.5,"rotation":0,"scaleX":1,"scaleY":1}],"eyes":[{"tab":"eyes","id":"-679379193","x":-7,"y":-187.5,"rotation":0,"scaleX":1,"scaleY":1},{"tab":"eyebrows","id":"94370077","x":-10.5,"y":-225,"rotation":0,"scaleX":1,"scaleY":1}]},{"name":"confused","enabled":true,"mouth":[{"tab":"mouths","id":"256135152","x":-6,"y":-126.5,"rotation":0,"scaleX":1,"scaleY":1}],"eyes":[{"tab":"eyes","id":"-679379193","x":-7,"y":-187.5,"rotation":0,"scaleX":1,"scaleY":1},{"tab":"eyebrows","id":"-1370165314","x":-9,"y":-212.5,"rotation":0,"scaleX":1,"scaleY":1}]},{"name":"gasp","enabled":true,"mouth":[{"tab":"mouths","id":"-2006318913","x":-5.5,"y":-123.5,"rotation":0,"scaleX":1,"scaleY":1}],"eyes":[{"tab":"eyebrows","id":"94370077","x":-10.5,"y":-225,"rotation":0,"scaleX":1,"scaleY":1},{"tab":"eyes","id":"-679379193","x":-7,"y":-187.5,"rotation":0,"scaleX":1,"scaleY":1}]},{"name":"ooo","enabled":true,"mouth":[{"tab":"mouths","id":"1802568030","x":-2,"y":-122.5,"rotation":0,"scaleX":1,"scaleY":1}],"eyes":[{"tab":"eyebrows","id":"94370077","x":-9.5,"y":-220,"rotation":0,"scaleX":1,"scaleY":1},{"tab":"eyes","id":"-679379193","x":-7,"y":-187.5,"rotation":0,"scaleX":1,"scaleY":1}]},{"name":"sad","enabled":true,"mouth":[{"tab":"mouths","id":"-1834200705","x":-14.5,"y":-125.5,"rotation":0,"scaleX":1,"scaleY":1}],"eyes":[{"tab":"eyes","id":"-679379193","x":-7,"y":-187.75,"rotation":0,"scaleX":1,"scaleY":1},{"tab":"eyebrows","id":"-894109551","x":-7.5,"y":-211.5,"rotation":0,"scaleX":1,"scaleY":1}]},{"name":"angry","enabled":true,"mouth":[{"tab":"mouths","id":"256135152","x":-12,"y":-128.5,"rotation":0,"scaleX":1,"scaleY":1}],"eyes":[{"tab":"eyes","id":"-679379193","x":-7,"y":-187.5,"rotation":0,"scaleX":1,"scaleY":1},{"tab":"eyebrows","id":"-1624236206","x":-7,"y":-207,"rotation":0,"scaleX":1,"scaleY":1}]},{"name":"wink","enabled":false,"mouth":[],"eyes":[]},{"name":"kiss","enabled":false,"mouth":[],"eyes":[]}],"props":[{"tab":"glasses","id":"-1259854622","x":-3,"y":-158,"rotation":0,"scaleX":1,"scaleY":1}],"name":"Gravy","id":1,"position":0,"facingLeft":false,"emote":"0"}
let not_gravy = {"deadbonesStyle":false,"body":[{"tab":"shirts","id":"1879914476","x":1.5,"y":-54,"rotation":0,"scaleX":1,"scaleY":1}],"head":[{"tab":"skin","id":"-925878550","x":1,"y":-210.5,"rotation":0,"scaleX":1,"scaleY":1},{"tab":"eyebrows","id":"-1624236206","x":-5,"y":-139,"rotation":0,"scaleX":0.6931818181818182,"scaleY":0.6470588235294116}],"hat":[],"mouths":["2","3","4","5"],"eyes":["0","1","5","6"],"emotes":[{"name":"default","enabled":true,"mouth":[{"tab":"mouths","id":"-1156489428","x":-15.5,"y":-125,"rotation":0,"scaleX":1,"scaleY":1}],"eyes":[{"tab":"eyes","id":"-679379193","x":-7,"y":-187.5,"rotation":0,"scaleX":1,"scaleY":1},{"tab":"eyebrows","id":"-1478408941","x":-6.5,"y":-210,"rotation":0,"scaleX":1,"scaleY":1}]},{"name":"happy","enabled":true,"mouth":[{"tab":"mouths","id":"-1156489428","x":-16,"y":-125.5,"rotation":0,"scaleX":1,"scaleY":1}],"eyes":[{"tab":"eyes","id":"-679379193","x":-7,"y":-187.5,"rotation":0,"scaleX":1,"scaleY":1},{"tab":"eyebrows","id":"94370077","x":-10.5,"y":-225,"rotation":0,"scaleX":1,"scaleY":1}]},{"name":"confused","enabled":true,"mouth":[{"tab":"mouths","id":"256135152","x":-6,"y":-126.5,"rotation":0,"scaleX":1,"scaleY":1}],"eyes":[{"tab":"eyes","id":"-679379193","x":-7,"y":-187.5,"rotation":0,"scaleX":1,"scaleY":1},{"tab":"eyebrows","id":"-1370165314","x":-9,"y":-212.5,"rotation":0,"scaleX":1,"scaleY":1}]},{"name":"gasp","enabled":true,"mouth":[{"tab":"mouths","id":"-2006318913","x":-5.5,"y":-123.5,"rotation":0,"scaleX":1,"scaleY":1}],"eyes":[{"tab":"eyebrows","id":"94370077","x":-10.5,"y":-225,"rotation":0,"scaleX":1,"scaleY":1},{"tab":"eyes","id":"-679379193","x":-7,"y":-187.5,"rotation":0,"scaleX":1,"scaleY":1}]},{"name":"ooo","enabled":true,"mouth":[{"tab":"mouths","id":"1802568030","x":-2,"y":-122.5,"rotation":0,"scaleX":1,"scaleY":1}],"eyes":[{"tab":"eyebrows","id":"94370077","x":-9.5,"y":-220,"rotation":0,"scaleX":1,"scaleY":1},{"tab":"eyes","id":"-679379193","x":-7,"y":-187.5,"rotation":0,"scaleX":1,"scaleY":1}]},{"name":"sad","enabled":true,"mouth":[{"tab":"mouths","id":"-1834200705","x":-14.5,"y":-125.5,"rotation":0,"scaleX":1,"scaleY":1}],"eyes":[{"tab":"eyes","id":"-679379193","x":-7,"y":-187.75,"rotation":0,"scaleX":1,"scaleY":1},{"tab":"eyebrows","id":"-894109551","x":-7.5,"y":-211.5,"rotation":0,"scaleX":1,"scaleY":1}]},{"name":"angry","enabled":true,"mouth":[{"tab":"mouths","id":"256135152","x":-12,"y":-128.5,"rotation":0,"scaleX":1,"scaleY":1}],"eyes":[{"tab":"eyes","id":"-679379193","x":-7,"y":-187.5,"rotation":0,"scaleX":1,"scaleY":1},{"tab":"eyebrows","id":"-1624236206","x":-7,"y":-207,"rotation":0,"scaleX":1,"scaleY":1}]},{"name":"wink","enabled":false,"mouth":[],"eyes":[]},{"name":"kiss","enabled":false,"mouth":[],"eyes":[]}],"props":[{"tab":"glasses","id":"-1259854622","x":-3,"y":-158,"rotation":0,"scaleX":1,"scaleY":1}],"name":"Not Gravy","id":2,"position":6,"facingLeft":true,"emote":"0"}
let start = "delay 1000;\n" +
"add gravy 1 0;\n" +
"add not_gravy 2 6;\n" +
"move 1 1,\n" +
"move 2 5;"
let script = "move 1 0,\n" +
"move 2 6;\n" +
"remove 1;\n" +
"remove 2;\n" +
"delay 1000;\n" +
"add gravy 1 0;\n" +
"move 1 1;\n" +
"jiggle 1;\n" +
"emote 1 8;\n" +
"chat 1 0;\n" +
"add not_gravy 2 6;\n" +
"move 2 4;\n" +
"emote 2 8;\n" +
"chat 2 1;\n" + 
"chat 1 2;\n" + 
"emote 2 1;\n" +
"chat 2 3,\n" +
"jiggle 2;\n" +
"delay 400;\n" +
"jiggle 2;\n" +
"delay 400;\n" +
"jiggle 2;\n" +
"delay 400;\n" +
"babble 2;\n" +
"delay 2000;"

function loaded() {
	stage.resize(null, window.innerWidth, window.innerHeight / 2)
	stage.registerPuppetListener("tap", (e) => {
		if (cutscene) return
		if (e.target.puppet.id === 2) {
			startCutscene()
		}
	})
	stage.registerPuppetListener("click", (e) => {
		if (cutscene) return
		if (e.target.puppet.id === 2) {
			startCutscene()
		}
	})
	window.onresize = () => {
		stage.resize(null, window.innerWidth, window.innerHeight / 2)
	}
	if (isLoaded) setup()
	else isLoaded = true
}

function setup() {
	var op = 1;  // initial opacity
	let element = document.getElementById('definition')
    let timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
            document.getElementById('chatbox').className = "chatbox"
            new babble.Cutscene(stage, start, {"gravy": gravy, "not_gravy": not_gravy}, () => {cutscene = false}).start()
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function startCutscene() {
	cutscene = true
	document.getElementById('instructions').style.display = 'none'
	let cut = new babble.Cutscene(stage, script, {"gravy": gravy, "not_gravy": not_gravy}, stopCutscene)
	cut.actions.chat = function(callback, target, chatId) {
		let chats = [{
			name: "Protagonist",
			message: "Alright, I'm ready to start hacking!"
		}, {
			name: "Antagonist",
			message: "Not so fast! I can tell you're up to no good."
		}, {
			name: "Protagonist",
			message: "Ah shucks, I've been found out"
		}, {
			name: "Antagonist",
			message: "Bwahahahahahahahahhahahaha!"
		}]
		document.getElementById('current_chat').style.display = 'block'
		document.getElementById('name').innerText = chats[chatId].name
		this.stage.getPuppet(target).setBabbling(true)
		chatClicked = false
		chatter(callback, target, chats[chatId], this.stage, 0)
	}
	cut.start()
}

function chatter(callback, target, chat, stage, textPos) {
	if (chatClicked && textPos < chat.message.length) {
		textPos = chat.message.length
		chatClicked = false
	}
	if (textPos++ > chat.message.length) {
		stage.getPuppet(target).setBabbling(false)
		if (chatClicked) {
			document.getElementById('current_chat').style.display = 'none'
			callback()
		}
		else setTimeout(() => {chatter(callback, target, chat, stage, textPos)}, 1)
	} else {
		document.getElementById('message').innerText = chat.message.substring(0, textPos) + "_"
		setTimeout(() => {chatter(callback, target, chat, stage, textPos)}, 20)
	}
}

function stopCutscene() {
	chatClicked = true
	cutscene = false
	document.getElementById('instructions').style.display = 'block'
}

// Make player controllable
window.onkeydown = function(e) {
	if (cutscene) return

	let key = e.keyCode ? e.keyCode : e.which

	if (key == 32) {
		stage.getPuppet(1).setBabbling(true)
	}
}
window.onkeyup = function(e) {
	if (cutscene) return

	let key = e.keyCode ? e.keyCode : e.which

	if (key > 48 && key < 58)
		stage.getPuppet(1).changeEmote(key - 49)
	else if (key == 37) stage.getPuppet(1).moveLeft()
	else if (key == 38) stage.getPuppet(1).jiggle()
	else if (key == 39) stage.getPuppet(1).moveRight()
	else if (key == 32) stage.getPuppet(1).setBabbling(false)
}

window.addEventListener('click', () => {
	chatClicked = true
})

// Ensure definition is up for at least 4 seconds
setTimeout(() => {
	if (isLoaded) setup()
	else isLoaded = true
}, 4000)
