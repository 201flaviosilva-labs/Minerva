const si = require('systeminformation');
export function Processor() {
	// setTimeout(() => console.log("beep"), 3000);
	si.cpu().then(data => console.log(data)).catch(error => console.log("Error"));
}

// async function getInfo() {
// 	const siCPU = await si.cpu();
// 	// .then(data => console.log(data)).catch(error => console.error(error));
// 	console.log(siCPU);
// }
