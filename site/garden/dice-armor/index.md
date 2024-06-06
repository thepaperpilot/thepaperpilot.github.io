---
public: "true"
slug: "dice-armor"
tags: [My Projects]
title: "Dice Armor"
prev: false
next: false
---
# Dice Armor

> Referenced by: [Babble Buds](/garden/babble-buds/index.md)

> Tags: [My Projects](/garden/my-projects/index.md)

Download it [here](https://drive.google.com/open?id=18rwqEIdMChdGtB-9LdI4wiqeM5C5ViOL)

Dice Armor is a game that started development as a semester-long project by a team of nine: a producer, a creative director, a narrative writer, an artist, two programmers, and 3 game designers. The information here is about my contributions as the lead programmer over the semester because I can show off stuff like the editor scripts I wrote. I was doing everything from interface coding, editor scripts, integrating Babble Buds, and of course, everything related to the gameplay itself. To date I'm still the lead programmer for the game; for more up-to-date information on the current state of the game please visit the official site.

The build available here was created for showing off at the end of the semester, and as such has some buttons present to make the game easier to skip parts of the game to see all the content: You start with all the dice in the game already in the shop, there's a button to give yourself free money to buy these dice with, and in the duel, there are buttons to force a win or a loss, which can be used to skip the tutorial (not recommended for first-time players).

![Tutorial](/garden/da2_1717378483173_0.png)

Dice Armor is a dice dueling game. Players can use abilities, flip dice, and attack each other to win in a dice game that puts chance into the hands of the players. This is what the dueling scene looks like, with a tutorial cutscene happening on top to guide the player through the basics. Also, all the dice are constructed dynamically, using quaternion math to figure out the placement of each component relative to the face it is going on. The die in the middle has one of the player' and opponents' portraits on each of its sides.

![Editors](/garden/editors_1717378509527_0.png)

For many of the objects I've created, I've made scriptable objects so that game designers can add and modify them easily. Additionally, I would create custom inspectors for the objects to help make them as easy to understand and edit as possible. The opponent's artificial intelligence is made up of many strategies, in a prioritized list. When it is the opponents' turn they go through each strategy and check if they can be run, and if so then the opponent performs the strategy and starts back over at the top of the list of strategies. The + sign under the list of strategies opens an organized dropdown of all the various strategies.

![Simulator](/garden/simulator_1717378525890_0.jpg)

In addition to custom inspector code, I've created new tools for the editor for our game designers to use. This is a duel simulator that will take two opponents and simulate an arbitrary number of duels between them, and output the results and summarize them for you, much much quicker than manually going through the duels, even with an absurdly high timeScale. This will become incredibly useful in making balance changes and testing new dice against existing sets. This is a screenshot of it in edit mode, but in play mode it removes the "Dueling Managers" field and will use whatever the current duel balance settings are, allowing for the GDs to test freely in play mode without worrying about undoing all their changes afterward.

![da1.png](/garden/da1_1717378469912_0.png)

I created the Babble Buds puppet editor and ported the rendering library I wrote for it to C# so it could be used in Unity. Dice Armor has a full campaign using cutscenes made using the Babble Buds cutscene editor, taking advantage of its support for custom commands and fields to control things like talking, giving the player dice and money, starting duels, and controlling player progression through the story.

![Action Wheel](/garden/da6_1717379962786_0.png)

When a cutscene ends, its final command is to either start a duel or set the next cutscene in the story. In the latter case, there is an additional field for what to call the next cutscene, and what location it takes place. The cutscene is then added to the player's save file, and when they visit the city locations are greyed out until they have at least one action to do there. Each location has a dynamically populated action wheel with a custom range of acceptable angles.

![Shop](/garden/da7_1717379991458_0.png)

The dice shop is dynamically populated by a list of dice available to the player, which can be changed during cutscenes, and is checked against the dice owned by the player to generate sold-out indicators. On the left, the player can choose to filter the options down to a single dice effect, which also updates the "Buy All" button to buy only all the dice in the current filter.

![Inventory](/garden/da8_1717380011914_0.png)

The inventory works most the same as the shop, but for equipping dice. It also allows you to drag individual dice or entire sets to the equipped dice glyph. While dragging it will highlight all the slots the new dice will be equipped into.

![Dice Rolling](/garden/da3_1717380046653_0.png)

The dice rolling uses the physics engine and detects once the dice have stopped moving, then determines which side is face up based on which of the normals is closest to straight up. It flags the die as cocked if that smallest angle is above a threshold. The dice sink into the table when not rolling to not interfere with any dice that are rolling.

![Missile Storm](/garden/da9_1717380177060_0.png)

During certain events like winning the game or having the face of a die broken, the players' portraits will flash an emotion for a second. After winning, a random living die from the winning player is chosen to play their "finisher move", a flashy and dramatic effect to end the game. Shown is the arcane mechana's finisher, "Missile Storm".

After development stopped, the project became [Open Source](/garden/open-source/index.md) - check it out [here](https://github.com/sreynoldsdesign/dice_armor/tree/master/Assets/Scripts/babble.cs)