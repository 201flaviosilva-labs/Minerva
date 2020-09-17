export function funtionsGeral(resp) {
	if (resp === "Clear" || resp === "clear") console.clear();
	if (resp === "Date" || resp === "date") {
		const date = new Date();
		console.log(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`);
	}
	if (resp === "Time" || resp === "time") {
		const date = new Date();
		console.log(`${date.getUTCHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`);
	}
	// if (resp != "Exit" || resp != "exit" || resp != "Sair" || resp != "sair" || resp != "x" || resp != "X") process.exit();
}