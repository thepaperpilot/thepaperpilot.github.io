---
layout: default
title: Dice Armor Screenshots
nocard: true
---
<div id="carousel" class="carousel card">
    <div class="slides">
        <div class="slide active-slide">
            <img src="/assets/dicearmor-assets/da2.png">
            <div class="slide-desc">
                Dice Armor is a dice dueling game. Players can use abilities, flip dice, and attack each other to win in a dice game that puts chance into the hands of the players. This is what the dueling scene looks like, with a tutorial cutscene happening on top to guide the player through the basics.
                Also, all the dice are constructed dynamically, using quaternion math to figure out the placement of each component relative to the face its going on. The die in the middle has one of the player and opponents' portraits on each of its sides. 
            </div>
        </div>
        <div class="slide">
            <img src="/assets/dicearmor-assets/editors.png">
            <div class="slide-desc">
                Many of the objects I've created, I've made scriptable objects so that game designers can add and modify them easily. Additionally I would create custom inspectors for the objects to help make them as easy to understand and edit as possible. The opponents' artifical intelligence is made up of many strategies, in a prioritized list. When its the opponents' turn they go through each strategy and check if they can be run, and if so then the opponent performs the strategy then starts back over at the top of the list of strategies. The + sign under the list of strategies opens an organized dropdown of all the various strategies. 
            </div>
        </div>
        <div class="slide">
            <img src="/assets/dicearmor-assets/simulator.JPG" class="vertical">
            <div class="slide-desc">
                In addition to custom inspector code, I've created new tools for the editor for our game designers to use. This is a duel simulator that will take two opponents and simulate an arbitrary number of duels between them, and output the results and summarize them for you, much much quicker than manually going through the duels, even with an absurdly high timeScale. This will become incredibly useful in making balance changes and testing new dice against existing sets. This is a screenshot of it in edit mode, but in play mode it removes the "Dueling Managers" field and will use whatever the current duel balance settings are, allowing for the GDs to test freely in play mode without worrying about undoing all their changes afterwards. 
            </div>
        </div>
        <div class="slide">
            <img src="/assets/dicearmor-assets/da1.png">
            <div class="slide-desc">
                I created the Babble Buds puppet editor and ported the rendering library I wrote for it to C# so it could be used in Unity. Dice Armor has a full campaign using cutscenes made using the Babble Buds cutscene editor, taking advantage of its support for custom commands and fields to control things like talking, giving the player dice and money, starting duels, and controlling player progression through the story. 
            </div>
        </div>
        <div class="slide">
            <img src="/assets/dicearmor-assets/da6.png">
            <div class="slide-desc">
                When a cutscene ends, its final command is to either start a duel or set the next cutscene in the story. In the latter case there is an additional field for what to call the next cutscene, and what location it takes place at. The cutscene is then added to the player's save file, and when they visit the city locations are greyed out until they have at least one action to do there. Each location has a dynamically populated action wheel with custom range of acceptable angles. 
            </div>
        </div>
        <div class="slide">
            <img src="/assets/dicearmor-assets/da7.png">
            <div class="slide-desc">
                The dice shop is dynamically populated by a list of dice available to the player, which can be changed during cutscenes, and is checked against the dice owned by the player to generate sold out indicators. On the left the player can choose to filter the options down to a single dice effect, which also updates the "Buy All" button to buy only all the dice in the current filter. 
            </div>
        </div>
        <div class="slide">
            <img src="/assets/dicearmor-assets/da8.png">
            <div class="slide-desc">
                The inventory works most the same as the shop, but for equipping dice. It also allows you to drag individual dice or entire sets to the equipped dice glyph. While dragging it will highlight all the slots the new dice will be equipped into. 
            </div>
        </div>
        <div class="slide">
            <img src="/assets/dicearmor-assets/da3.png">
            <div class="slide-desc">
                The dice rolling uses the physics engine and detects once the dice have stopped moving, then determines which side is face up based on which of the normals is closest to straight up. It flags the die as cocked if that smallest angle is above a threshold. The dice sink into the table when not rolling so as to not interfere with any dice that are rolling.
            </div>
        </div>
        <div class="slide">
            <img src="/assets/dicearmor-assets/da4.png">
            <div class="slide-desc">
                There is a generic object dragging manager using delegates to check for valid things to drag, valid things to be dragged to (based on whats being dragged), getting a list of transforms to add the target indicator to, and what to do when the drag ends, on both a valid and invalid target. In this case its being used to drag a die to another die, telling the game to attack with the die. 
            </div>
        </div>
        <div class="slide">
            <img src="/assets/dicearmor-assets/da5.png">
            <div class="slide-desc">
                In addition to attacking and flipping dice, the player can use abilities that appear on some of the faces of most of the dice. I made an interface for abilities that supports targeted, non-targeted, instant, and lingering effects. Lingering effects can affect any value on the die, and can stack with other lingering effects. 
            </div>
        </div>
        <div class="slide">
            <img src="/assets/dicearmor-assets/da9.png">
            <div class="slide-desc">
                During certain events like winning the game or having the face of a die broken, the players' portraits will flash an emotion for a second. After winning, a random living die from the winning player is chosen to play their "finisher move", a flashy and dramatic effect to end the game. Shown is the arcane mechana's finisher, "Missile Storm". 
            </div>
        </div>
    </div>
    <div class="indicators">
        <input class="indicator" name="indicator" checked type="radio" />
        <input class="indicator" name="indicator" type="radio" />
        <input class="indicator" name="indicator" type="radio" />
        <input class="indicator" name="indicator" type="radio" />
        <input class="indicator" name="indicator" type="radio" />
        <input class="indicator" name="indicator" type="radio" />
        <input class="indicator" name="indicator" type="radio" />
        <input class="indicator" name="indicator" type="radio" />
        <input class="indicator" name="indicator" type="radio" />
        <input class="indicator" name="indicator" type="radio" />
        <input class="indicator" name="indicator" type="radio" />
    </div>
</div>
