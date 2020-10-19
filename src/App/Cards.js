export function Cards() {
	console.clear();
	console.log("-------------------------");
	console.log("------ Show Cards -------");
	console.log("-------------------------");

	const naipes = ["Clubs ", "Diamonds ", "Hearts ", "Spades "];
	const numeros = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
	const numeroCartas = naipes.length * numeros.length;
	const baralho = [];
	let count3 = 0;

	for (let count1 = 0; count1 < naipes.length; count1++) {
		for (let count2 = 0; count2 < numeros.length; count2++) {
			baralho[count3] = naipes[count1] + numeros[count2];
			console.log(count3 + " " + baralho[count3]);
			++count3;
		}
	}
	console.log("-------------------------------");
	console.log("---- I will shake the deck ----");
	console.log("-------------------------------");

	for (let count1 = 0; count1 < numeroCartas; count1++) {
		const cartaRandom = Math.floor(Math.random() * numeroCartas);
		const cartaTrocada = baralho[count1];
		baralho[count1] = baralho[cartaRandom];
		baralho[cartaRandom] = cartaTrocada;
		console.log(count1 + " " + baralho[count1]);
	}
	console.log("---------------------------");
	console.log("---------- Shaked ---------");
	console.log("---------------------------");
}
