var games = 0;

var wins = 0;
var ties = 0;
var losses = 0;

var last_round = -1;

// I start with 2 instead of 0 so that there is a bias towards uniform randomness at the beginning
var markov =
[   [ 2, 2, 2 ],
    [ 2, 2, 2 ],
    [ 2, 2, 2 ],
    [ 2, 2, 2 ],
    [ 2, 2, 2 ],
    [ 2, 2, 2 ],
    [ 2, 2, 2 ],
    [ 2, 2, 2 ],
    [ 2, 2, 2 ] ];

function rock() {
    document.getElementById("player").innerText = document.createTextNode("✊").textContent;
    appear(0);
}

function paper() {
    document.getElementById("player").innerText = document.createTextNode("✋").textContent;
    appear(1);
}

function scissors() {
    document.getElementById("player").innerText = document.createTextNode("✌").textContent;
    appear(2);
}

function appear(player) {
    document.getElementById("versus").style.display = "block";
    games += 1;
    document.getElementById("win_expected").innerText = document.createTextNode(Math.round(games / 3)).textContent;
    document.getElementById("tie_expected").innerText = document.createTextNode(Math.round(games / 3)).textContent;
    document.getElementById("loss_expected").innerText = document.createTextNode(Math.round(games / 3)).textContent;
    switch (calcWinner(player, calcComputer())) {
        case -1:
            wins += 1;
            document.getElementById("win").innerText = document.createTextNode(wins).textContent;
            break;
        case 0:
            ties += 1;
            document.getElementById("tie").innerText = document.createTextNode(ties).textContent;
            break;
        case 1:
            losses += 1;
            document.getElementById("loss").innerText = document.createTextNode(losses).textContent;
            break;
    }
}

function calcComputer() {
    console.log("last round:" + last_round);

    var rock = 1;
    var paper = 1;
    var scissors = 1;

    if (last_round !== -1) {
        rock = markov[last_round][0];
        paper = markov[last_round][1];
        scissors = markov[last_round][2];
        console.log("odds:");
        console.log(rock);
        console.log(paper);
        console.log(scissors);
    }

    var total = rock + paper + scissors;

    var random = Math.random();
    console.log(random);
    if (random <= rock/total) {
        document.getElementById("com").innerText = document.createTextNode("✋").textContent;
        return 1; // return paper
    }
    if (random <= (rock + paper)/total) {
        document.getElementById("com").innerText = document.createTextNode("✌").textContent;
        return 2; // return scissors
    }
    document.getElementById("com").innerText = document.createTextNode("✊").textContent;
    return 0; // return rock
}

function calcWinner(player, computer) {
    console.log("player: " + player);
    console.log("computer: " + computer);
    if (last_round !== -1) {
        markov[last_round][player]++;
        console.log("incremented markov[" + last_round + "][" + player + "]");
    }
    last_round = 3 * player + computer;
    if (player > computer || player === 0 && computer === 2) {
        document.getElementById("result").innerText = document.createTextNode("Player Wins").textContent;
        return -1;
    } else if (player < computer || player === 2 && computer === 0) {
        document.getElementById("result").innerText = document.createTextNode("Computer Wins").textContent;
        return 1;
    } else {
        document.getElementById("result").innerText = document.createTextNode("Tie").textContent;
        return 0;
    }
}
