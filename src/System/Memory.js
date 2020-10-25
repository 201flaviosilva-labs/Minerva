const si = require('systeminformation');
export function Memory() {
	si.mem().then(data => console.log(data)).catch(error => console.log("Error"));
}
