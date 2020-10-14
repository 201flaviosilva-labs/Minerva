export function funtionsGeral(resp) {
	if (resp === "clear") console.clear();
	if (resp === "date") {
		const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		const date = new Date();
		const todayDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
		console.log("Date: " + todayDate + ` - ${week[date.getDay()]}`);
	}
	if (resp === "time") {
		const date = new Date();
		console.log(`Time: ${date.getUTCHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`);
	}
	// if (resp === "battery") {
	// 	navigator.getBattery().then(battery => {
	// 		console.log("Level: " + battery.level * 100 + "%");
	// 		console.log("Charging: " + battery.charging ? "Yes" : "Nop");
	// 	});
	// }
}