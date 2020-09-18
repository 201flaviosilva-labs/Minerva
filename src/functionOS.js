const fs = require("fs");
export function functionOS(resp) {
	// Create
	if (resp === "create folder") {
		const dir = "./new folder";
		if (!fs.existsSync(dir)) fs.mkdirSync(dir);
	}
	if (resp === "create file") fs.writeFile("file.txt", "", (e) => console.log("error"));
}