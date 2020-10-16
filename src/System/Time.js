export function Time() {
	console.clear();
	const date = new Date();
	console.log(`Time: ${date.getUTCHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`);
}