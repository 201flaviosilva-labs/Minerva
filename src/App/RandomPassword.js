export function RandomPassword() {
	const char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%&/()=?!*+,;:.-_<>[]{}";
	let password = "";
	for (let i = 0; i < 12; i++) {
		password += char[Math.floor(Math.random() * char.length)];
	}
	console.log("Your Password: " + password);
}
