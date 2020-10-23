const fs = require("fs");
const rimraf = require("rimraf");

const folder = "./db";

export function createDB(user) {
	if (!fs.existsSync(folder)) {
		fs.mkdirSync(folder);
		createUser(user);
	} else {
		console.log("DataBase already Create");
	}
}

export function createUser(user) {
	if (!fs.existsSync(folder + "/user.json")) {
		fs.appendFileSync(folder + "/user.json", JSON.stringify(user),);
	} else {
		console.log("User already Create");
	}
}

export function showUser() {
	if (fs.existsSync(folder + "/user.json")) {
		return JSON.parse(fs.readFileSync(folder + "/user.json", "utf8"));
	} else {
		console.log("User not found!");
	}
}

export function editeUser(prop, value) {
	if (fs.existsSync(folder + "/user.json")) {
		let user = showUser();
		if (prop == "name") user.name = value;
		else if (prop == "lang") user.lang = value;
		deletUser();
		createUser(user);
	} else {
		console.log("User not found!");
	}

}


export function deletUser() {
	if (fs.existsSync(folder + "/user.json")) {
		fs.unlinkSync(folder + "/user.json", err => {
			if (err) console.log("Error Delete User!");
			else console.log("User Delete");
		});
	} else {
		console.log("User not found!");
	}
}

export function deletDB() {
	if (fs.existsSync(folder)) {
		rimraf(folder, err => {
			if (err) console.log("Error Delete DataBase!");
			else console.log("DataBase Delete");
		});
	} else {
		console.log("DataBase not found!");
	}
}
