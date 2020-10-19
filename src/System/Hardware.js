const si = require('systeminformation');
export function Hardware() {
	si.system().then(data => console.log(data)).catch(error => console.log("Error"));
}
