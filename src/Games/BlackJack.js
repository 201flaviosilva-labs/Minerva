const prompt = require('prompt-sync')();
function randomNumber(n) { return Math.floor(Math.random() * n); }
let deck = [], resp = "n";
let playerDeck = [], cpuDeck = [], playerPoints = 0, cpuPoints = 0;

// zeroZeroSeven();
// function zeroZeroSeven() {
export function BlackJack() {
	// Reset
	deck = [];
	resp = "n";
	playerDeck = [];
	cpuDeck = [];
	playerPoints = 0;
	cpuPoints = 0;

	console.clear();
	intro();
	creatNewDeck();
	game();
}

function intro() {
	console.log("Check this link: https://en.wikipedia.org/wiki/Blackjack");
}

function creatNewDeck() {
	const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
	const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
	numbers.map((n) => {
		suits.map((s) => {
			deck.push(n + " - " + s);
		})
	});
	mixDeck();
}

function mixDeck() {
	const NumDeck = deck.length;
	for (let i = 0; i < 5; i++) {
		for (let count1 = 0; count1 < NumDeck; count1++) {
			const cartaRandom = Math.floor(Math.random() * NumDeck);
			deck[count1] = deck[cartaRandom];
			deck[cartaRandom] = deck[count1];
		}
	}
}

function game() {
	// Get Cards
	for (let i = 0; i < 4; i++) {
		if (i < 2) getNewCard(playerDeck);
		else getNewCard(cpuDeck);
	}
	showDecks();
	while (contPoints(playerDeck) <= 18) getNewCard(cpuDeck); // CPU choisee cards
	getAnswer();
}

function getNewCard(arr) {
	const getCard = randomNumber(deck.length);
	arr.push(deck[getCard]);
	deck.splice(getCard, 1);
}

function contPoints(arr) {
	let ponts = 0;
	arr.map((d) => {
		const carnNum = d[0];
		if (carnNum == "J" || carnNum == "Q" || carnNum == "K" || carnNum == "1") ponts += 10;
		else if (carnNum == "A") {
			if (arr.includes("J") || arr.includes("Q") || arr.includes("k")) ponts += 11;
			else ponts += 1;
		}
		else ponts += Number(carnNum);
	});
	return ponts;
}

function showDecks() {
	playerPoints = contPoints(playerDeck);
	console.log("Yours Cards: " + playerPoints);
	console.log(playerDeck.toString());

	cpuPoints = contPoints(playerDeck);
	if (resp == "n") {
		console.log("Enemy Card: ");
		console.log(cpuDeck[0]);
	} else {
		console.log("Enemy Cards: " + cpuPoints);
		console.log(cpuDeck.toString());
	}
}

function getAnswer() {
	console.log("-----");
	console.log("What do you want?");
	console.log("N -> New Card");
	console.log("S -> Stop");
	resp = prompt("BJ → ").toLowerCase();
	console.clear();

	if (resp == "n") getNewCard(playerDeck);
	else {
		getResults();
		return;
	}

	showDecks();

	if (playerPoints > 21 || resp != "n") getResults();
	else getAnswer();
}

function getResults() {
	console.log("----------------------------------------------------------------");
	if (playerPoints == cpuPoints) console.log("Draw");
	else if ((playerPoints <= 21 && playerPoints > cpuPoints) || cpuPoints > 21) console.log("Win!");
	else if ((cpuPoints <= 21 && playerPoints < cpuPoints) || playerPoints > 21) console.log("Lose!");
}
