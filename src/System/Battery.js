const si = require('systeminformation');
export function Battery() {
	si.battery().then(data => console.log(data)).catch(error => console.log("Error"));
}
