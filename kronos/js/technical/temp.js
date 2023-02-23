let tmp = {};
let temp = tmp; // Proxy for tmp
let funcs = {};
// noinspection SpellCheckingInspection
let NaNalert = false;

// Tmp will not call these
const activeFunctions = [
	"startData", "onPrestige", "doReset", "update", "automate",
	"buy", "buyMax", "respec", "onComplete", "onPurchase", "onPress", "onClick", "masterButtonPress",
	"sellOne", "sellAll", "pay", "actualCostFunction", "actualEffectFunction",
	"effectDescription", "display", "fullDisplay", "effectDisplay", "rewardDisplay",
	"tabFormat", "content",
	"onComplete", "onPurchase", "onEnter", "onExit",
	"getUnlocked", "getStyle", "getCanClick", "getTitle", "getDisplay"
];

const noCall = doNotCallTheseFunctionsEveryTick;
for (let item in noCall) {
	activeFunctions.push(noCall[item])
}

// Add the names of classes to traverse
const traversableClasses = [];

function setupTemp() {
	tmp = {}
	tmp.pointGen = {}
	tmp.displayThings = []
	tmp.scrolled = 0
	funcs = {}

	setupTempData(layers, tmp, funcs)
	for (let layer in layers){
		tmp[layer].resetGain = {}
		tmp[layer].nextAt = {}
		tmp[layer].nextAtDisp = {}
		tmp[layer].canReset = {}
		tmp[layer].notify = {}
		tmp[layer].prestigeNotify = {}
		tmp[layer].computedNodeStyle = []
		setupBuyables(layer)
		tmp[layer].trueGlowColor = []
	}

	tmp.other = {
		lastPoints: player.points || decimalZero,
		oomps: decimalZero,
		screenWidth: 0,
		screenHeight: 0,
    }

	updateWidth()

	temp = tmp
}

function setupTempData(layerData, tmpData, funcsData) {
	for (let item in layerData){
		if (layerData[item] == null) {
			tmpData[item] = null
		}
		else if (layerData[item] instanceof Decimal)
			tmpData[item] = layerData[item]
		else if (Array.isArray(layerData[item])) {
			tmpData[item] = []
			funcsData[item] = []
			setupTempData(layerData[item], tmpData[item], funcsData[item])
		}
		else if ((!!layerData[item]) && (layerData[item].constructor === Object)) {
			tmpData[item] = {}
			funcsData[item] = []
			setupTempData(layerData[item], tmpData[item], funcsData[item])
		}
		else if ((!!layerData[item]) && (typeof layerData[item] === "object") && traversableClasses.includes(layerData[item].constructor.name)) {
			tmpData[item] = new layerData[item].constructor()
			funcsData[item] = new layerData[item].constructor()
		}
		else { // noinspection JSUnfilteredForInLoop
			if (isFunction(layerData[item]) && !activeFunctions.includes(item)){
				funcsData[item] = layerData[item]
				tmpData[item] = decimalOne // The safest thing to put probably?
			} else {
				tmpData[item] = layerData[item]
			}
		}
	}
}

function updateTemp() {
	if (tmp === undefined)
		setupTemp()

	updateTempData(layers, tmp, funcs)

	for (let layer in layers){
		tmp[layer].resetGain = getResetGain(layer)
		tmp[layer].nextAt = getNextAt(layer)
		tmp[layer].nextAtDisp = getNextAt(layer, true)
		tmp[layer].canReset = canReset(layer)
		tmp[layer].trueGlowColor = tmp[layer].glowColor
		tmp[layer].notify = shouldNotify(layer)
		tmp[layer].prestigeNotify = prestigeNotify(layer)
	}

	tmp.pointGen = getPointGen()
	tmp.displayThings = []
	for (let thing in displayThings){
		let text = displayThings[thing]
		if (isFunction(text)) text = text()
		tmp.displayThings.push(text)
	}
}

function updateTempData(layerData, tmpData, funcsData) {

	for (let item in funcsData){
		if (Array.isArray(layerData[item])) {
			if (item !== "tabFormat" && item !== "content") // These are only updated when needed
				updateTempData(layerData[item], tmpData[item], funcsData[item])
		}
		else if ((!!layerData[item]) && (layerData[item].constructor === Object) || (typeof layerData[item] === "object") && traversableClasses.includes(layerData[item].constructor.name)){
			updateTempData(layerData[item], tmpData[item], funcsData[item])
		}
		else if (isFunction(layerData[item]) && !isFunction(tmpData[item])){
			let value = layerData[item]()
			if (value !== value || value === decimalNaN){
				if (NaNalert === true || confirm ("Invalid value found in tmp, named '" + item + "'. Please let the creator of this mod know! Would you like to try to auto-fix the save and keep going?")){
					NaNalert = true
					value = (value !== value ? 0 : decimalZero)
				}
				else {
					clearInterval(interval);
					player.autosave = false;
					NaNalert = true;
				}
			}
			Vue.set(tmpData, item, value)
		}
	}
}

function updateChallengeTemp(layer)
{
	updateTempData(layers[layer].challenges, tmp[layer].challenges, funcs[layer].challenges)
}


function updateBuyableTemp(layer)
{
	updateTempData(layers[layer].buyables, tmp[layer].buyables, funcs[layer].buyables)
}

function updateClickableTemp(layer)
{
	updateTempData(layers[layer].clickables, tmp[layer].clickables, funcs[layer].clickables)
}

function setupBuyables(layer) {
	for (id in layers[layer].buyables) {
		if (isPlainObject(layers[layer].buyables[id])) {
			let b = layers[layer].buyables[id]
			b.actualCostFunction = b.cost
			b.cost = function(x) {
				x = (x === undefined ? player[this.layer].buyables[this.id] : x)
				return layers[this.layer].buyables[this.id].actualCostFunction(x)
			}
			b.actualEffectFunction = b.effect
			b.effect = function(x) {
				x = (x === undefined ? player[this.layer].buyables[this.id] : x)
				return layers[this.layer].buyables[this.id].actualEffectFunction(x)
			}
		}
	}
}