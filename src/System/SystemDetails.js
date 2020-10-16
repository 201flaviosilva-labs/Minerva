const os = require("os");
export function SystemDetails() {
	console.clear();

	console.log("Operating System Information:\n");
	Object.keys(os).forEach(k => {
		if (typeof os[k] === "function") console.log(`${k}: ${JSON.stringify(os[k]())}\n`);
		else console.log(`${k}: ${JSON.stringify(os[k])}\n`);
	});
}