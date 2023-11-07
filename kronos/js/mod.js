let modInfo = {
	name: "❚◀RONOS",
	id: "kronos",
	author: "thepaperpilot",
	pointsName: "points",
	discordName: "The Paper Pilot Community Server",
	discordLink: "https://discord.gg/WzejVAx",
	initialStartPoints: new Decimal(10), // Used for hard resets and new players

	offlineLimit: 1,  // In hours
};

// Set your version in num and name
let VERSION = {
	num: "0.24",
	name: "Chapter 2 (Rituals)",
};

let changelog = `<h1>Changelog:</h1><br>
	<br><h3>v.0.24</h3><br>
		- Added rituals job<br>
		- Re-ordered and re-balanced layers<br>
	<br><h3>v.0.23</h3><br>
		- Added rest of generators job mechanics<br>
		- Re-balanced some layers<br>
		- Added tons of QoL<br>
	<br><h3>v.0.22</h3><br>
		- Update generators' looks<br>
		- Added distill generator<br>
	<br><h3>v.0.21</h3><br>
		- Made "Keep Moving Forward" work by hovering rather than holding down<br>
		- Re-styled things to look nicer<br>
		- Performance optimizations<br>
		- Several bug fixes<br>
	<br><h3>v.0.20</h3><br>
		- Re-arranged and re-balanced jobs<br>
		- Added distill job<br>
		- Added first mechanic of generators job<br>
		- Reset saves back to start of chapter 2<br>
		- Several bug fixes<br>
	<br><h3>v.0.15</h3><br>
		- Finishing naming time experiments job upgrades<br>
		- Rebalanced time experiments job<br>
		- Added deep though mechanic to study job<br>
	<br><h3>v.0.14</h3><br>
		- Implemented time experiments job<br>
	<br><h3>v.0.13</h3><br>
		- Implemented selling and upgrading cards<br>
	<br><h3>v0.12</h3><br>
		- Fixed some issues with new players not being able to play<br>
	<br><h3>v0.11</h3><br>
		- Implemented Card Shop<br>
	<br><h3>v0.1</h3><br>
		- Beginning of Chapter 2<br>
		- Cards mechanic in Study Flowers job<br>
	<br><h3>v0.0</h3><br>
		- Chapter 1 Demo<br>`;

let winText = "Congratulations! You have reached the end and beaten this game, but for now...";

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
const doNotCallTheseFunctionsEveryTick = ["onAddPoints", "touchstart", "touchend"];

function getStartPoints() {
	return new Decimal(modInfo.initialStartPoints);
}

// Determines if it should show points/sec
function canGenPoints() {
	return false;
}

// Calculate points/sec!
function getPointGen() {
	if (!canGenPoints()) {
		return new Decimal(0);
	}

	let gain = new Decimal(1);
	return gain;
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() {
	return {
		hqTree: true,
		chapter: 1,
		timeSlots: new Decimal(0),
		usedTimeSlots: new Decimal(0),
		chapterTime: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
		advancedExp: false,
		levelModifiers: {
			flowers: new Decimal(0),
			distill: new Decimal(0),
			study: new Decimal(0),
			sands: new Decimal(0),
			generators: new Decimal(0),
			rituals: new Decimal(0)
		}
	};
}

// Display extra things at the top of the page
const displayThings = [];

// Determines when the game "ends"
function isEndgame() {
	return getJobLevel("rituals").gte(10);
}


// Less important things beyond this point!

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return (3600); // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion) {
	if (["0.0", "0.1", "0.11", "0.12", "0.13", "0.14", "0.15", "0.20", "0.21", "0.22", "0.23"].includes(oldVersion)) {
		hardReset();
	}
}
