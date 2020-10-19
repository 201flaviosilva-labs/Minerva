// const si = require('systeminformation');
const si = require('systeminformation').mem();
export function Memory() {
	// si.mem().then(data => console.log(data)).catch(error => console.log("Error"));
	console.log(si);
}
