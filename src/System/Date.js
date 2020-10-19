export function showDate() {
	console.clear();
	const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const date = new Date();
	const todayDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
	console.log("Date: " + todayDate + ` - ${week[date.getDay()]}`);
}