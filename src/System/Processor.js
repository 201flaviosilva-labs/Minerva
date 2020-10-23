const si = require('systeminformation');
export function Processor() {
	si.cpu().then(data => console.log(data)).catch(error => console.log("Error"));
}
