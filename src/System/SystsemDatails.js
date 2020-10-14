const os = require("os");
export function SystsemDatails() {
	console.clear();

	console.log("Operating System Information:\n");
	Object.keys(os).forEach(k => {
		if (typeof os[k] === "function") console.log(`${k}: ${JSON.stringify(os[k]())}\n`);
		else console.log(`${k}: ${JSON.stringify(os[k])}\n`);
	});
}