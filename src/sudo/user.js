const fs = require("fs");
const rimraf = require("rimraf");

const folder = "./db";

export function createUser(user) {
	if (!fs.existsSync(folder)) {
		fs.mkdirSync(folder);
		fs.appendFile(folder + "/user.json", JSON.stringify(user));
	}
}

export function showUser() {
	return JSON.parse(fs.readFileSync(folder + "/user.json", 'utf8'));
}

export function editeName(name) {
	const user = showUser();
	user.name = name;
	deletUser();
	createUser(user);
}

export function deletUser() {
	fs.unlink(folder + "/user.json", err => {
		if (err) console.log("Error Updated Name!");
		else console.log("User Delete")
	});
}

export function deletDB() {
	if (fs.existsSync(folder)) rimraf(folder, () => console.log("DB Deleted"));
}
