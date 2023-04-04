function carName(name) {
	return (name);
}
function carModel(model) {
	return (model);
}
function carYear(year) {
	return (year);
}
function carDistance(distance) {
	let litr = 1;
	let road = 7;
	return (distance) * road / litr;
}

function carDate() {
	let result =
		`Avtomobilin markasi: ${carName("Bentley")}   Avtomobilin modeli: ${carModel("Flying Spur")}   Ili: ${carYear("2022")}   Mesafe (10 litr benzin ile): ${carDistance("10")} km gedir`
	console.log(result);
}
carDate();

