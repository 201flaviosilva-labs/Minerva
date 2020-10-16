const batteryLevel = require('battery-level');
export function Battery() {
	console.clear();
	console.log("Battery: ");
	(async () => console.log(await batteryLevel()))();
}