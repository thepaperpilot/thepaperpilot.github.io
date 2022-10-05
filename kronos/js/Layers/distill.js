const instrumentData = {
	retort: {
		unlocked: () => true,
		label: "Retort",
		logo: "🝭"
	},
	alembic: {
		unlocked: () => getJobLevel("distill").gte(2),
		label: "Alembic",
		logo: "🝪"
	},
	crucible: {
		unlocked: () => getJobLevel("distill").gte(4),
		label: "Crucible",
		logo: "🝧"
	},
	bainMarie: {
		unlocked: () => hasMilestone("rituals", 2),
		label: "Bain-Marie",
		logo: "🝫"
	},
	vapours: {
		unlocked: () => false,
		label: "Bath of Vapours",
		logo: "🝬"
	}
};

Vue.component("instrument", {
	props: ["layer", "data"],
	template: `
      <div v-if="completions.gt(0) || instrumentData[data].unlocked()"
           class="upgTable instant">
      <div class="upgRow">
        <div class="upgTable instant">
          <div class="upgCol">
            <buyable :layer="layer" :data="data"></buyable>
            <button v-bind:class="{ smallUpg: true, can: canAfford, locked: !canAfford }"
                    v-bind:style="{ width: '175px', background: canAfford ? distillColor : '' }"
                    v-on:click="layers.distill.buyables[data].buyMax">Buy Max
            </button>
          </div>
        </div>
        <blank/>
        <div class="instrument" v-bind:style="{ '--instrument-progress': progress + '%' }">
          <span>{{ instrumentData[data].label }}</span>
          <span class="instrumentLogo">{{ instrumentData[data].logo }}</span>
          <span>x{{ format(completions.div(100).add(1)) }}</span>
        </div>
      </div>
      </div>
	`,
	computed: {
		completions() {
			return softcap(player.distill[`${this.data}Completions`], new Decimal(1000), 1 / 3);
		},
		canAfford() {
			return layers.distill.buyables[this.data].canAfford();
		},
		progress() {
			return player.distill.anims ? Decimal.times(player.distill[`${this.data}Progress`], buyableEffect("distill", this.data)).times(100).toFixed(2) : 0;
		}
	}
});

function getInstrumentBuyable(id, instrumentName, title, baseSpeed, baseCost, costExponent) {
	return {
		title: `${title}<br/>`,
		style: {
			width: "175px",
			height: "175px"
		},
		display() {
			return `Make ${instrumentName} finish ${format(baseSpeed, 3)} more times/sec.<br/>(Capped at ${format(baseSpeed.times(100))})${getBuyableAmount("distill", id).lt(100) ? `<br/><br/>Currently: ${format(this.effect())}<br/><br/>Cost: ${format(this.cost())} essentia` : ""}`;
		},
		cost(x) {
			const amount = x || getBuyableAmount("distill", id);
			return new Decimal(baseCost).times(new Decimal(costExponent).pow(amount));
		},
		buyMax() {
			const amount = getBuyableAmount("distill", id);
			const amountAffordable = player.distill.points.times(costExponent.sub(1)).div(new Decimal(baseCost).times(Decimal.pow(costExponent, amount))).add(1).log(costExponent).floor().clamp(0, Decimal.sub(100, amount));
			const cost = baseCost.times(costExponent.pow(amount).times(costExponent.pow(amountAffordable).sub(1))).div(costExponent.sub(1));
			player.distill.points = player.distill.points.sub(cost);
			setBuyableAmount("distill", id, amount.add(amountAffordable));
		},
		effect() {
			let speed = new Decimal(baseSpeed);
			speed = speed.times(getBuyableAmount("distill", id));
			return speed;
		},
		canAfford() {
			return player.distill.points.gte(this.cost());
		},
		purchaseLimit() {
			return new Decimal(100);
		},
		buy() {
			player.distill.points = player.distill.points.sub(this.cost());
			setBuyableAmount("distill", id, getBuyableAmount("distill", id).add(1));
		},
		unlocked: () => instrumentData[id].unlocked()
	};
}

function updateInstrument(instrument, requiredLevel, diff) {
	if (getJobLevel("distill").lt(requiredLevel) || buyableEffect("distill", instrument).eq(0)) {
		return;
	}
	player.distill[`${instrument}Progress`] = player.distill[`${instrument}Progress`].add(diff);
	const completionDuration = Decimal.div(1, buyableEffect("distill", instrument));
	const completions = player.distill[`${instrument}Progress`].div(completionDuration).floor();
	if (completions.gt(0)) {
		player.distill[`${instrument}Progress`] = player.distill[`${instrument}Progress`].sub(completionDuration.times(completions));
		player.distill[`${instrument}Completions`] = player.distill[`${instrument}Completions`].add(completions);
		addPoints("distill", completions.times(getEssentiaMult()));
	}
}

function getEssentiaMult() {
	let gain = new Decimal(1);
	gain = gain.times(new Decimal(1.1).pow(getJobLevel("distill")));
	gain = gain.times(softcap(player.distill.retortCompletions, new Decimal(1000), 1 / 3).div(100).add(1));
	gain = gain.times(softcap(player.distill.alembicCompletions, new Decimal(1000), 1 / 3).div(100).add(1));
	gain = gain.times(softcap(player.distill.crucibleCompletions, new Decimal(1000), 1 / 3).div(100).add(1));
	gain = gain.times(softcap(player.distill.bainMarieCompletions, new Decimal(1000), 1 / 3).div(100).add(1));
	gain = gain.times(softcap(player.distill.vapoursCompletions, new Decimal(1000), 1 / 3).div(100).add(1));
	gain = gain.times(layers.generators.clickables.distill.effect());
	gain = gain.times(ritualEffect("gain"));
	if (player.generators.distillActive && (player.tab === "generators" || player.generators.timeLoopActive)) {
		gain = gain.sqrt();
	}
	return gain;
}

addLayer("distill", {
	name: "distill",
	resource: "essentia",
	image: "images/PIXNIO-252785-4924x3283.jpg",
	color: distillColor,
	jobName: "Distill flowers",
	showJobDelay: 0.5,
	layerShown: () => hasMilestone("study", 2),
	startData() {
		return {
			unlocked: true,
			points: new Decimal(0),
			total: new Decimal(0),
			xp: new Decimal(0),
			lastLevel: new Decimal(0),
			anims: true,
			timeLoopActive: false,
			retortProgress: new Decimal(0),
			retortCompletions: new Decimal(0),
			alembicProgress: new Decimal(0),
			alembicCompletions: new Decimal(0),
			crucibleProgress: new Decimal(0),
			crucibleCompletions: new Decimal(0),
			bainMarieProgress: new Decimal(0),
			bainMarieCompletions: new Decimal(0),
			vapoursProgress: new Decimal(0),
			vapoursCompletions: new Decimal(0)
		};
	},
	shouldNotify() {
		return Object.keys(tmp[this.layer].buyables).some(buyable => canBuyBuyable(this.layer, id));
	},
	tabFormat: () => [
		"main-display",
		["display-text", `You are getting ${format(getEssentiaMult())} essentia every time an instrument finishes.`],
		"blank",
		["display-text", (() => {
			if (!hasMilestone("distill", 0)) {
				return "Discover new ways to harness the power of the flower essence at level 2";
			}
			if (!hasMilestone("distill", 1)) {
				return "Discover new ways to harness the power of the flower essence at level 4";
			}
			if (!hasMilestone("distill", 3)) {
				return "Discover new ways to harness the power of the flower essence at level 6";
			}
			if (!hasMilestone("distill", 4)) {
				return "Discover new ways to harness the power of the flower essence at level 8";
			}
			return "";
		})()],
		["sticky", ["80px", ["row", [
			["display-text", "Animations"],
			"blank",
			["toggle", ["distill", "anims"]]
		]]]],
		"blank",
		["instrument", "retort"],
		"blank",
		["instrument", "alembic"],
		"blank",
		["instrument", "crucible"],
		"blank",
		["instrument", "bainMarie"],
		"blank",
		["instrument", "vapours"],
		"blank",
		["milestones-filtered", [2, 5, 6]]
	],
	update(diff) {
		if (player.tab === this.layer || player[this.layer].timeLoopActive) {
			if (player.generators.distillActive && (player.tab === "generators" || player.generators.timeLoopActive)) {
				diff = new Decimal(diff).div(10);
			}
			updateInstrument("retort", 0, diff);
			updateInstrument("alembic", 2, diff);
			updateInstrument("crucible", 4, diff);
			updateInstrument("bainMarie", 6, diff);
			updateInstrument("vapours", 8, diff);
		}
	},
	onAddPoints(gain) {
		let xpGain = gain;
		if (hasUpgrade("generators", 13)) {
			xpGain = xpGain.times(layers.generators.clickables[this.layer].effect());
		}
		xpGain = xpGain.times(ritualEffect("globalXp"));
		player[this.layer].xp = player[this.layer].xp.add(xpGain);
		checkJobXP(this.layer);
	},
	milestones: {
		0: {
			requirementDescription: "Level 2",
			done: () => player.distill.xp.gte(10)
		},
		1: {
			requirementDescription: "Level 4",
			done: () => player.distill.xp.gte(1e3)
		},
		2: {
			title: "\"The only true wisdom consists in knowing that you know nothing.\"",
			requirementDescription: "Level 5",
			"effectDescription": "Unlock a new time slot",
			done: () => player.distill.xp.gte(1e4),
			onComplete: () => {
				player.timeSlots = player.timeSlots.add(1);
			}
		},
		3: {
			requirementDescription: "Level 6",
			done: () => player.distill.xp.gte(1e5)
		},
		4: {
			requirementDescription: "Level 8",
			done: () => player.distill.xp.gte(1e7)
		},
		5: {
			title: "That's us, dude!",
			requirementDescription: "Level 10",
			"effectDescription": "Unlock run generators job",
			done: () => player.distill.xp.gte(1e9),
			unlocked: () => hasMilestone("distill", 2)
		},
		6: {
			title: "Oh, yeah!",
			requirementDescription: "Level 25",
			"effectDescription": "Unlock ???",
			done: () => player.distill.xp.gte(1e24) && player.chapter > 2,
			unlocked: () => hasMilestone("distill", 5) && player.chapter > 2
		}
	},
	buyables: {
		retort: getInstrumentBuyable("retort", "retort", "Be excellent to each other.", new Decimal(0.06), new Decimal(1), new Decimal(1.05)),
		alembic: getInstrumentBuyable("alembic", "alembic", "EXCELLENT!", new Decimal(0.03), new Decimal(100), new Decimal(1.1)),
		crucible: getInstrumentBuyable("crucible", "crucible", "Party on dudes!", new Decimal(0.02), new Decimal(1000), new Decimal(1.15)),
		bainMarie: getInstrumentBuyable("bainMarie", "bain-marie", "Greetings, my excellent friends.", new Decimal(0.015), new Decimal(100000), new Decimal(1.25)),
		vapours: getInstrumentBuyable("vapours", "bath of vapours", "Most outstanding, Rufus! Let's jam!", new Decimal(0.012), new Decimal(10000000), new Decimal(1.5))
	},
	bars: {
		job: getJobProgressBar("distill", distillColor)
	}
});
