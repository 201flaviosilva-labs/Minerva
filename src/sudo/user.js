const fs = require("fs");

const folder = "./db";

export function createUser(user) {
	if (!fs.existsSync(folder)) {
		fs.mkdirSync(folder);
		fs.appendFile(folder + "/user.json", JSON.stringify(user), (err) => {
			if (err) console.log(err);
			else console.log("User Created!");
		});
	}
}
