const si = require('systeminformation');
export function Graphics() {
	si.graphics().then(data => console.log(data)).catch(error => console.log("Error"));
}
