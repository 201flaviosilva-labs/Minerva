const fs = require("fs");
const os = require("os");
export function functionOS(resp) {
	// Create
	if (resp === "create folder") {
		const dir = "./new folder";
		if (!fs.existsSync(dir)) fs.mkdirSync(dir);
	}
	if (resp === "create file") fs.writeFile("file.txt", "", (e) => console.log("error"));
	if (resp === "os" || resp === "system") {
		console.clear();
		console.log("Operating System Information:\n");
		Object.keys(os).forEach(k => {
			if (typeof os[k] === "function") console.log(`${k}: ${JSON.stringify(os[k]())}\n`);
			else console.log(`${k}: ${JSON.stringify(os[k])}\n`);
		});
	};
}


