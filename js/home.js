let current_chat = document.getElementById("current_chat")
let controls = document.getElementById("controls")

// Load the stage and characters and stuff
let stage = new babble.Stage("puppet", {
  "numCharacters": 3,
  "puppetScale": 1.5
},
{"47027bbc-eed0-47a9-84cb-578c34fc8c46:28":{"name":"talking_mouth","type":"sprite","tab":"mouths","location":"47027bbc-eed0-47a9-84cb-578c34fc8c46/28.png","thumbnail":null,"version":1,"panning":[]},"47027bbc-eed0-47a9-84cb-578c34fc8c46:29":{"name":"talking2_mouth","type":"sprite","tab":"mouths","location":"47027bbc-eed0-47a9-84cb-578c34fc8c46/29.png","thumbnail":null,"version":1,"panning":[]},"47027bbc-eed0-47a9-84cb-578c34fc8c46:23":{"name":"funny_eyes","type":"sprite","tab":"eyes","location":"47027bbc-eed0-47a9-84cb-578c34fc8c46/23.png","thumbnail":null,"version":1,"panning":[]},"47027bbc-eed0-47a9-84cb-578c34fc8c46:25":{"name":"happy_mouth","type":"sprite","tab":"mouths","location":"47027bbc-eed0-47a9-84cb-578c34fc8c46/25.png","thumbnail":null,"version":1,"panning":[]},"47027bbc-eed0-47a9-84cb-578c34fc8c46:22":{"name":"body","type":"sprite","tab":"body","location":"47027bbc-eed0-47a9-84cb-578c34fc8c46/22.png","thumbnail":null,"version":1,"panning":[]},"47027bbc-eed0-47a9-84cb-578c34fc8c46:24":{"name":"funny_mouth","type":"sprite","tab":"mouths","location":"47027bbc-eed0-47a9-84cb-578c34fc8c46/24.png","thumbnail":null,"version":1,"panning":[]},"47027bbc-eed0-47a9-84cb-578c34fc8c46:26":{"name":"meh_mouth","type":"sprite","tab":"mouths","location":"47027bbc-eed0-47a9-84cb-578c34fc8c46/26.png","thumbnail":null,"version":1,"panning":[]},"47027bbc-eed0-47a9-84cb-578c34fc8c46:27":{"name":"normal_eyes","type":"sprite","tab":"eyes","location":"47027bbc-eed0-47a9-84cb-578c34fc8c46/27.png","thumbnail":null,"version":1,"panning":[]},"47027bbc-eed0-47a9-84cb-578c34fc8c46:30":{"name":"uwu_eyes","type":"sprite","tab":"eyes","location":"47027bbc-eed0-47a9-84cb-578c34fc8c46/30.png","thumbnail":null,"version":1,"panning":[]},"47027bbc-eed0-47a9-84cb-578c34fc8c46:31":{"name":"uwu_mouth","type":"sprite","tab":"mouths","location":"47027bbc-eed0-47a9-84cb-578c34fc8c46/31.png","thumbnail":null,"version":1,"panning":[]}},
"assets/puppet", loaded);

let pajer = {"deadbonesStyle":false,"name":"Pajer","layers":{"children":[{"name":"body","children":[{"name":"body","rotation":0,"scaleX":1,"scaleY":1,"x":0,"y":-330,"id":"47027bbc-eed0-47a9-84cb-578c34fc8c46:22","leaf":true,"inherit":{},"path":[0,0]}],"inherit":{},"path":[0],"scaleX":-0.5,"scaleY":0.5},{"name":"head","children":[],"head":true,"inherit":{},"path":[1]},{"name":"emotes","head":true,"children":[{"name":"uwu","rotation":0,"scaleX":1,"scaleY":1,"x":0,"y":0,"children":[{"name":"uwu_eyes","rotation":0,"scaleX":1,"scaleY":1,"x":-44.494040351079754,"y":-432.10076571738944,"id":"47027bbc-eed0-47a9-84cb-578c34fc8c46:30","leaf":true,"inherit":{"head":true,"emote":3},"path":[2,0,0]},{"name":"uwu_mouth","rotation":0,"scaleX":1,"scaleY":1,"x":-41.694941376469345,"y":-315.00512527951986,"id":"47027bbc-eed0-47a9-84cb-578c34fc8c46:31","leaf":true,"inherit":{"head":true,"emote":3},"path":[2,0,1]}],"inherit":{"head":true},"path":[2,0],"emote":3},{"name":"funny","rotation":0,"scaleX":1,"scaleY":1,"x":0,"y":0,"children":[{"name":"funny_eyes","rotation":0,"scaleX":1,"scaleY":1,"x":-45.89358983838499,"y":-461.0247884550305,"id":"47027bbc-eed0-47a9-84cb-578c34fc8c46:23","leaf":true,"inherit":{"head":true,"emote":2},"path":[2,1,0]},{"name":"funny_mouth","rotation":0,"scaleX":1,"scaleY":1,"x":-36.096743427248484,"y":-394.31292956014863,"id":"47027bbc-eed0-47a9-84cb-578c34fc8c46:24","leaf":true,"inherit":{"head":true,"emote":2},"path":[2,1,1]}],"inherit":{"head":true},"path":[2,1],"collapsed":true,"emote":2},{"name":"excited","rotation":0,"scaleX":1,"scaleY":1,"x":0,"y":0,"children":[{"name":"normal_eyes","rotation":0,"scaleX":1,"scaleY":1,"x":-44.64999549436159,"y":-438.1792449911571,"id":"47027bbc-eed0-47a9-84cb-578c34fc8c46:27","leaf":true,"inherit":{"head":true,"emote":5},"path":[2,2,0],"emoteLayer":"eyes"},{"name":"talking2_mouth","rotation":0,"scaleX":1,"scaleY":1,"x":-44,"y":-316,"id":"47027bbc-eed0-47a9-84cb-578c34fc8c46:29","leaf":true,"inherit":{"head":true,"emote":5},"path":[2,2,1],"emoteLayer":"mouth"}],"inherit":{"head":true},"path":[2,2],"collapsed":true,"emote":5},{"name":"very happy","rotation":0,"scaleX":1,"scaleY":1,"x":0,"y":0,"children":[{"name":"normal_eyes","rotation":0,"scaleX":1,"scaleY":1,"x":-44.64999549436159,"y":-438.1792449911571,"id":"47027bbc-eed0-47a9-84cb-578c34fc8c46:27","leaf":true,"inherit":{"head":true,"emote":4},"path":[2,3,0],"emoteLayer":"eyes"},{"name":"talking_mouth","rotation":0,"scaleX":1,"scaleY":1,"x":-44.02752385531136,"y":-316.4046747668251,"id":"47027bbc-eed0-47a9-84cb-578c34fc8c46:28","leaf":true,"inherit":{"head":true,"emote":4},"path":[2,3,1],"emoteLayer":"mouth"}],"inherit":{"head":true},"path":[2,3],"collapsed":true,"emote":4},{"name":"meh","rotation":0,"scaleX":1,"scaleY":1,"x":0,"y":0,"emote":1,"children":[{"name":"normal_eyes","rotation":0,"scaleX":1,"scaleY":1,"x":-44.64999549436159,"y":-438.1792449911571,"id":"47027bbc-eed0-47a9-84cb-578c34fc8c46:27","leaf":true,"inherit":{"head":true,"emote":1},"path":[2,4,0],"emoteLayer":"eyes"},{"name":"meh_mouth","rotation":0,"scaleX":1,"scaleY":1,"x":-44.02752385531135,"y":-315.0051252795199,"id":"47027bbc-eed0-47a9-84cb-578c34fc8c46:26","leaf":true,"inherit":{"head":true,"emote":1},"path":[2,4,1],"emoteLayer":"mouth"}],"inherit":{"head":true},"path":[2,4],"collapsed":true},{"name":"happy","emote":0,"children":[{"name":"normal_eyes","rotation":0,"scaleX":1,"scaleY":1,"x":-44.64999549436159,"y":-438.1792449911571,"id":"47027bbc-eed0-47a9-84cb-578c34fc8c46:27","leaf":true,"inherit":{"head":true,"emote":0},"path":[2,5,0],"emoteLayer":"eyes"},{"name":"happy_mouth","rotation":0,"scaleX":1,"scaleY":1,"x":-48.02867537861667,"y":-316.1511667631519,"id":"47027bbc-eed0-47a9-84cb-578c34fc8c46:25","leaf":true,"inherit":{"head":true,"emote":0},"path":[2,5,1],"emoteLayer":"mouth"}],"inherit":{"head":true},"path":[2,5],"collapsed":true}],"inherit":{},"path":[2],"scaleX":-0.5,"scaleY":0.5},{"name":"hat","children":[],"head":true,"inherit":{},"path":[3]},{"name":"props","children":[],"inherit":{},"path":[4]}]},"id":1,"emote":0,"creator":"47027bbc-eed0-47a9-84cb-578c34fc8c46","creatorNick":"Trisha Vinisto","oc":"47027bbc-eed0-47a9-84cb-578c34fc8c46","ocNick":"Trisha Vinisto"}
let start = [
    {
        "command": "delay",
        "delay": 500,
        "wait": true
    },
    {
        "command": "add",
        "name": "pajer",
        "id": "pajer",
        "position": 0,
        "facingLeft": false,
        "emote": "0"
    },
    {
        "command": "move",
        "target": "pajer",
        "position": 2,
        "wait": true
    },
    {
        "command": "chat",
        "target": "pajer",
        "chatId": "0"
    }
]

let stageElement = document.getElementById("puppet")

function loaded() {
    stage.resize()
    let puppetScale = stage.screen.clientHeight / 567 / stage.puppetStage.scale.y
    stage.environment.puppetScale = puppetScale
    stage.resize()
    window.onresize = () => {
        stage.resize()
        let puppetScale = stage.screen.clientHeight / 567 / stage.puppetStage.scale.y
        stage.environment.puppetScale = puppetScale
        stage.resize()
    }
    startCutscene()
}

function startCutscene() {
    let cut = new babble.Cutscene(stage, start, {"pajer": pajer})
    let add = cut.actions.add.bind(cut)
    cut.actions.add = function(callback, action) {
        add(callback, action)
        stage.resize()
    }

    cut.actions.chat = function(callback, action) {
        let chats = [{
            message: "I'm Anthony, or The Paper Pilot, and I make fun games and tools using code!"
        }]
        current_chat.style.display = 'block'
        this.stage.getPuppet(action.target).setBabbling(true)
        chatter(callback, action.target, chats[action.chatId], this.stage, 0)
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

    if (key == 32) {
        e.preventDefault()
        if (stage.getPuppet("pajer").babbling) return
        stage.getPuppet("pajer").setBabbling(true)
        var temp = babbleEl
        babbleEl = babbleEl.cloneNode(true)
        temp.parentNode.replaceChild(babbleEl, temp)
        babbleEl.className = ''
        interval = requestAnimationFrame(showBabble)
    }
}
window.onkeyup = function(e) {
    let key = e.keyCode ? e.keyCode : e.which

    if (key > 48 && key < 55)
        stage.getPuppet("pajer").changeEmote(key - 49)
    else if (key == 37) {
        let puppet = stage.getPuppet("pajer")
        if (puppet.facingLeft || puppet.position === stage.environment.numCharacters + 1)
            puppet.target--
        puppet.facingLeft = true
        if (puppet.movingAnim === 0)
            puppet.container.scale.x = -stage.environment.puppetScale
        stage.dirty = true
    } else if (key == 38) stage.getPuppet("pajer").jiggle()
    else if (key == 39) {
        let puppet = stage.getPuppet("pajer")
        if (!puppet.facingLeft || puppet.position === 0)
            puppet.target++
        puppet.facingLeft = false
        if (puppet.movingAnim === 0)
            puppet.container.scale.x = stage.environment.puppetScale
        stage.dirty = true
    } else if (key == 32) {
        stage.getPuppet("pajer").setBabbling(false)
        babbleEl.className = 'hidden'
        cancelAnimationFrame(interval)
        e.preventDefault()
    }
}

function showControls() {
    controls.className = 'show'
}
setTimeout(showControls, 4000)

var interval = null
var babbleEl = document.getElementById("babble")
function showBabble() {
    var puppet = stage.getPuppet("pajer")
    var x = puppet.container.x + 150
    var y = puppet.container.y - 400
    if (puppet.facingLeft)
        x -= 450
    babbleEl.style.top = y + "px"
    babbleEl.style.left = x + "px"
    interval = requestAnimationFrame(showBabble)
}
